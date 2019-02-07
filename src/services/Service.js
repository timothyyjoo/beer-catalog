import { handleResponse, errorLog } from './responseHandlers'

class Service {
  constructor() {
    this.baseURL = "https://api.punkapi.com/v2/"
    this.beers = []
    this.page = 1
  }
  fetchBeers () {
    fetch(this.baseURL + "beers" + `?page=${this.page}&per_page=80`)
      .then(handleResponse)
      .then((beers) => (this.mapBeersToModifiedBeers(beers)))
      .catch(errorLog)
  }
  addBeers (data) {
    this.beers = Object.assign(this.beers, data)
  }
  modifyBeerData (data) {
    let newBeer = {
      id: data.id,
      name: data.name,
      tagline: data.tagline,
      date: data.first_brewed,
      desc: data.description,
      image: data.image_url,
      abv: data.abv,
      ibu: data.ibu,
      yeast: data.ingredients.yeast,
      food: [].concat(data.food_pairing),
      tip: data.brewers_tips,
    }
    return newBeer
  }
  mapBeersToModifiedBeers(beers) {
    const modified = beers.map((beer) => {
     return this.modifyBeerData(beer)
    })
  this.addBeers(modified)
  }
  fetchSearchedBeers (term) {
    fetch(this.baseURL + "beers" + `?beer_name=${term}`)
    .then(handleResponse)
    .then((response) => (this.handleSearchBeers(response)))
    .catch(errorLog)
  }
  handleSearchBeers(response) {
    if (response.length === 1) {
      this.beers = []
      const modified = this.modifyBeerData(response[0])
      return this.beers = Object.assign(this.beers, modified)
    } else {
      this.beers = []
      return this.mapBeersToModifiedBeers(response)
    }
  }
}

export default Service;
