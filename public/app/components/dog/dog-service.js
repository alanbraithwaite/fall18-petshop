// @ts-ignore
let api = axios.create({
  baseURL: "/api/dogs"
})

let _dogs = []

export default class DogService {
  delete(id, draw) {
    api.delete(id).then(res => this.getDogs(draw))
  }
  getDogs(cb) {
    api.get('').then(res => {
      console.log(res.data)
      _dogs = res.data
      cb()
    })
  }
  get dogs() {
    return _dogs
  }
}

