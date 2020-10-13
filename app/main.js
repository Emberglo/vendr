import PurchaseController from "./Controllers/PurchaseController.js"
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  purchaseController = new PurchaseController();
}

window["app"] = new App();
