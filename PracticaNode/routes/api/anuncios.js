const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator')

const Anuncios = require('../../models/Anuncios')



router.get('/',[query('tags').isString().isIn(["work", "lifestyle", "motor", "mobile"]).withMessage('must be work, lifestyle, motor and mobile')],  async (req, res, next) => {
  try {

    // filtros
    const name = req.query.name;
    const tags = req.query.tags;
    const precio = req.query.precio;

    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // selección de campos
    const fields = req.query.fields;
    const sort = req.query.sort;


       // creo el filtro vacio
    const filtro = {}

    if (name) {
      filtro.name = name;
    }

    if (tags) {
      filtro.tags = tags;
    }

    const anuncios = await Anuncios.lista(filtro, skip, limit, fields, sort);
    


    res.json({ results: anuncios });

  } catch (err) {
    next(err);
  }
});
router.get('/:name', async (req, res, next) => {
  try {

    const name = req.params.name;

    const anuncios = await anuncios.lista({name: name});

    res.json({ result: anuncios });

  } catch (error) {
    next(error);
  }
});
  router.post('/', async (req, res, next) => {
  try {
    const anuncioData = req.body;

    // instanciamos objeto en memoria
    const anuncios = new Anuncios(anuncioData);

    console.log(`nombre del anuncio es ${anuncios.name}, si se busca o se vende es ${anuncios.venta},el precio es ${anuncios.precio}, nombre de la foto ${anuncios.foto}, las tiquetas son ${anuncios.tags}`);

    // lo guardamos en la base de datos
    const anuncioGuardado = await anuncios.save();

    res.json({ result: anuncioGuardado });

  } catch (error) {
    next(error);
  }
});
module.exports = router;
