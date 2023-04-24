import { AddsListController } from "./adds/controletorAdd.js";
import { NotificationController } from "./notification/noticationControler.js";
document.addEventListener("DOMContentLoaded", () => {
  const noticificationElement = document.querySelector("#notification");
  const addListElement = document.querySelector("#add-list");

  const addsListController = new AddsListController(addListElement);
  const notificationController = new NotificationController(
    noticificationElement
  );
});
