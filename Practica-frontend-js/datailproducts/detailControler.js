import { decodeToken } from "../utils/decodeToken.js";
import { getDetail, removeDetail } from "./detail-provider.js";
import { pubSub } from "../pubSub.js";
import { buildDetail } from "./buildDatail.js";
import { buildAddsListSpinner, buildEmptyAddList } from "../spinner/spinner.js"
export class DetailControles {
  constructor(nodeElement) {
    this.detailElement = nodeElement;
  }
  async datailadds(id) {

    try {
      this.detailElement.innerHTML=buildAddsListSpinner()
      const add = await getDetail(id)
      console.log("🚀 ~ file: detailControler.js:15 ~ DetailControles ~ datailadds ~ add", add.message)
      if (add.message=== "No existen resultados") {
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No Exite el anuncio')
        alert('no existe el anuncio');
        window.location = '/'
    }
      
      this.add = add;
      
      
      this.detailElement.innerHTML = buildDetail(add)
      this.RemoveButton()
      
    } catch (er) {
    console.log("🚀 ~ file: detailControler.js:24 ~ DetailControles ~ datailadds ~ er", er)
   
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `${er}`)
      
    }
   // this.detailElement.querySelector('.spinner').classList.toggle('hide')

  }

  RemoveButton(){
    const token = localStorage.getItem('token');
    console.log("🚀 ~ file: detailControler.js:35 ~ DetailControles ~ RemoveButton ~ token", token)
    
    if (!!token) {
      // el usuario logado es el creador del tweet q estamos viendo
      const tokenData = decodeToken(token);
      

      if (tokenData.userId === this.add.userId) {
       
        const removeButton = this.detailElement.querySelector('button');
        removeButton.style.display = 'block';
        removeButton.addEventListener('click', () => this.removeAdd())
      }
    }
  }

  async removeAdd(){
    const response = window.confirm('¿Seguro que quieres borrar el producto?');
    if (response) {

      try {
        await removeDetail(this.add.id)
        alert('add borrado exitosamente');
        window.location = '/'
      } catch (error) {
        //pubsub para mostrar notificación de error
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `no se pudo borrar`)
      }
    }

  }
}
