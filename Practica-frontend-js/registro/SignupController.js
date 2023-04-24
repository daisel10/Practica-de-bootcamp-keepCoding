import { pubSub } from "../pubSub.js";
import { createApiUser, loginApiUser } from "./SignupProvider.js";
import { buildAddsListSpinner, buildEmptyAddList } from '../spinner/spinner.js'

export class SignupController {
  constructor(nodeElement) {
    this.signupElement = nodeElement;

    this.subscribeToEvents();
  }

  async subscribeToEvents() {
    await this.signupElement.addEventListener("submit", async (event) => {

      event.preventDefault();
      const element = this.signupElement.querySelector("#spinner");
      element.innerHTML = buildAddsListSpinner();
      await this.validatePassword();

      element.querySelector(".spinner").classList.toggle("hide");
    });

    const createUserInputElements = Array.from(
      this.signupElement.querySelectorAll("input")
    );
    const createUserButtonElement =
      this.signupElement.querySelector("#createUserButton");

    createUserInputElements.forEach((createUserInputElement) => {
      createUserInputElement.addEventListener("input", () => {
        const areInputsFilled = createUserInputElements.every(
          (inputElement) => inputElement.value
        );
        if (areInputsFilled) {
          createUserButtonElement.removeAttribute("disabled");
        } else {
          createUserButtonElement.setAttribute("disabled", "");
        }
      });
    });
  }

  async validatePassword() {
    const passwordElement = this.signupElement.querySelector("#password");

    const minLength = 6;

    if (passwordElement.value.length <= minLength) {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `La contraseña debe tener más de ${minLength} caracteres`
      );
    }

    const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

    if (regExp.test(passwordElement.value)) {
      // hacemos cosas
      await this.createUser();
    } else {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `La contraseña debe contener únicamente minúsculas, mayúsculas o números`
      );
    }
  }

  async createUser() {
    const passwordElement = this.signupElement.querySelector("#password");
    const usernameElement = this.signupElement.querySelector("#username");
    const username = usernameElement.value;
    const password = passwordElement.value;

    try {
    
      const jwt = await loginApiUser(username, password);
      

      localStorage.setItem("token", jwt);
      window.location.href = "/";
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `No se pudo intente mas tarde`
      );
    }
  }
}
