import { pubSub } from "../pubSub.js";
import { buildAddsListSpinner, buildEmptyAddList } from '../spinner/spinner.js';
import {createApiProduct} from './providerNewAdd.js'

export class NewAddControler {
    constructor(nodeElement) {
        this.createElement = nodeElement
    
        this.subscribeToEvents()
      }
    
      subscribeToEvents() {
        const createButton = this.createElement.querySelector('#createProduct')
        const element = this.createElement.querySelector("#spinner");
    
        this.createElement.addEventListener('submit', (event) => {
          element.innerHTML = buildAddsListSpinner();
          event.preventDefault();
        })
        createButton.addEventListener('click', async() => {
          await this.createAdd()
          element.querySelector(".spinner").classList.toggle("hide");
          window.location.href = "/"; 
        })
      }
    
      async createAdd() {
        const nameS = this.createElement.querySelector("#name");
        const descripcionS = this.createElement.querySelector("#descripcion");

        const precioS = this.createElement.querySelector("#precio");
        const ventaS = this.createElement.querySelector("#venta");
             
        const name = nameS.value;
        const descripcion = descripcionS.value;
        const precio = precioS.value;
        const venta = ventaS.checked;
        let sell = venta ? true : false

        

        const add = {
          title:name,
          price:precio,
          description:descripcion,
          isSell:sell
        }



        await createApiProduct(add)
      }
}