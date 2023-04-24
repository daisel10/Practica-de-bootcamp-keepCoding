import { buildNotificationView } from "./notificationView.js";
import { pubSub } from "../pubSub.js";


export class NotificationController {
    constructor(nodeElement){
        this.notificationElement = nodeElement;

        // fuction
        this.subscribeToEvents()
    }
    
    subscribeToEvents() {
        pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
          this.showNotification(message)
        })
      }
    
      showNotification(message) {
        this.notificationElement.innerHTML = buildNotificationView(message);
    
        // ir al dom a por el boton
        //const closeButtonElement = this.notificationElement.querySelector('.notification-button-close')
    
        // asignarle un escucheador al evento click
     //   closeButtonElement.addEventListener('click', (hola) => {
     //     this.notificationElement.innerHTML = ''
       // })
      }
}