import DogService from './dog-service.js'

let _dService = new DogService()

function draw() {
  let template = ''
  _dService.dogs.forEach(dog => {
    template += `<div onclick="app.controllers.dogController.delete('${dog._id}')">${dog.name} ${dog.age}</div>`
  })
  document.getElementById('dog').innerHTML = template
}

export default class DogController {
  constructor() {
    _dService.getDogs(draw)
  }

  delete(id) {
    _dService.delete(id, draw)
  }

}