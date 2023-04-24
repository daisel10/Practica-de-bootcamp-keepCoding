import { NotificationController } from "../notification/noticationControler.js";
import { DetailControles } from "./detailControler.js";

document.addEventListener("DOMContentLoaded", () => {
  const addsDetailContainerElement = document.querySelector("#add-detail-list");
  const notificationContainerElement = document.querySelector("#notification");

  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const datailConrtole = new DetailControles(addsDetailContainerElement);
  datailConrtole.datailadds(id);
  const notificationController = new NotificationController(
    notificationContainerElement
  );
});
