import { buildAddsView} from "./viewAdd.js"
import { getAdds } from "./add-list-provide.js"
import { pubSub } from "../pubSub.js"
import { buildAddsListSpinner, buildEmptyAddList } from '../spinner/spinner.js'

export class AddsListController{
    constructor(element){
        this.addsConteinerElement= element


        // function 
        this.loadadds()
    }

    async loadadds(){
        this.addsConteinerElement.innerHTML=buildAddsListSpinner()
        let adds = []
        
        try {
           adds= await getAdds()
           if (adds.message=== "Failed to fetch") {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No hay anuncios')
        }


           if (adds=== 0) {
               pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No hay anuncios')
           }


        } catch (error) {
            
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando de anuncion, intente mas tarde ')
        }
        
    if (adds.length === 0) {
        this.showAddNotFound()
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No hay anuncios')
      }
  

        this.addsConteinerElement.querySelector('.spinner').classList.toggle('hide')

        this.drawAdds(adds)

    }

    showAddNotFound() {
        const divElement = document.createElement('div');
        divElement.innerHTML = buildEmptyAddList()
        this.addsConteinerElement.appendChild(divElement)
      }

    drawAdds(adds) {
        for (const add of adds) {
          const articleElement = document.createElement('article');
        
          articleElement.innerHTML = buildAddsView(add)
    
          this.addsConteinerElement.appendChild(articleElement);
        }
    }
}