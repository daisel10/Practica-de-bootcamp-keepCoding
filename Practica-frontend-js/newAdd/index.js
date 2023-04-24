import { NotificationController } from '../notification/noticationControler.js'
import { pubSub } from "../pubSub.js";
import { NewAddControler } from "./controlerNewAdd.js";

document.addEventListener('DOMContentLoaded', () => {

  const checkUserLogged = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No autorizado')
      setTimeout(() => {
        window.location = '/signup.html'
      }, 2000);
    }
  }

  const notificationContainerElement = document.querySelector('.notification');
  const notificationController = new NotificationController(notificationContainerElement);

  const createTweetElement = document.querySelector('.create-user-form');
  
  const createTweetController = new NewAddControler(createTweetElement)

 checkUserLogged();
})