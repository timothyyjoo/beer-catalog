import { handleResponse, errorLog } from './responseHandlers'

class BeerService {
  constructor() {
    this.baseURL = "https://api.punkapi.com/v2/"
    this.beers = []
  }
  getBeers () {
    fetch(this.baseURL + "beers")
      .then(handleResponse)
      .then((beers) => (this.addBeers(beers)))
      .catch(errorLog)
  }

  addBeers (data) {
    this.beers = Object.assign(this.beers, data)
  }
}

export default BeerService;
