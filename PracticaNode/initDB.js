const { rejects } = require('assert');
const { resolve } = require('path');
const readline = require('readline')


const connection = require('./lib/connectMongoose')

const Anuncios = require('./models/Anuncios')

async function main() {
    const continuar = await pregunta('esas seguro de borrar los datos y remplazarlos ');
    if (!continuar) {
        process.exit();
    }
    await initAnuncios();

}

main().catch(err => console.log('hubo un errror:', err));



async function initAnuncios() {
    const deleted = await Anuncios.deleteMany()

    const inserted = await Anuncios.insertMany(
        [
            {
                name: "Bicicleta", venta: true, precio: 230.15, foto: "bici.jpg", tags: ["lifestyle", "motor"]
            },
            {
                name: "iPhone 3GS", venta: false, precio: 50.00, foto: "iphone.png", tags: ["lifestyle", "mobile"]
            },
        ]
    )
    console.log(`creados ${inserted.length} anuncios`)
}
  
function pregunta(texto) {
    return new Promise ((resolve, rejects)=>{
    const ifc = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
        ifc.question(texto, respuesta => {
            ifc.close();
            if (respuesta.toLocaleLowerCase()=== 'si') {
                resolve(true);
                return;
            }
            resolve(false);
            
        } )
    })
}
