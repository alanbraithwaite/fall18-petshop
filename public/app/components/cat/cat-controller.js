import CatService from './cat-service.js'

let _cService = new CatService()

function draw() {
  let template = ''
  _cService.cats.forEach(cat => {
    template += `<div onclick="app.controllers.catController.delete('${cat._id}')">${cat.name} ${cat.age}</div>`
  })
  document.getElementById('cat').innerHTML = template
}

export default class CatController {
  constructor() {
    _cService.getCats(draw)
  }

  delete(id) {
    _cService.delete(id, draw)
  }

}