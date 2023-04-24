const mongoose = require('mongoose')

const anunciosSchema = mongoose.Schema({
    name: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
})

anunciosSchema.statics.lista = function(filtro, skip, limit, fields, sort) {
  const query = Anuncios.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.select(fields);
  query.sort(sort);
  return query.exec()
}

const Anuncios = mongoose.model('Anuncios', anunciosSchema);

module.exports = Anuncios