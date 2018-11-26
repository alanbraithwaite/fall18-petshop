import CatController from "./components/cat/cat-controller.js";
import DogController from "./components/dog/dog-controller.js";

console.log("Neat this is my app")

class App {
  constructor() {
    this.controllers = {
      catController: new CatController(),
      dogController: new DogController(),
    }
  }
}

window.app = new App()