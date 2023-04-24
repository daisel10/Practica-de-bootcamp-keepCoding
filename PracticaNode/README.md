# PracticaNode

## inicio 
1. inicializa la bas de datos con: ``` npx node initDB.js ```


## API
El api resive da una salida tipo:
```
{
nombre: "Bicicleta", 
venta: true,
precio: 230.15, 
foto: "bici.jpg", 
tags: ["lifestyle", "motor"] 
}
```
### metodos del api 
#### CREAR 
se crea un anuncio con nombre, venta precio, foto y tags enviando una solicitud tipo body post
``http://localhost:3000/api/anuncios/ ``

// no he podiendo crear los anuncios ya que cuando lo hago me da un undefined 
// tan poco los litros 