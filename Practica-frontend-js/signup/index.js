import { SignupController } from "./SignupController.js"
import { NotificationController } from '../notification/noticationControler.js'

document.addEventListener('DOMContentLoaded', () => {
  const createUserFormElement = document.querySelector('.create-user-form')
  
  const notificationElement = document.querySelector('.notification')
  
  const signupController = new SignupController(createUserFormElement)
  const notificationController = new NotificationController(notificationElement)
})
