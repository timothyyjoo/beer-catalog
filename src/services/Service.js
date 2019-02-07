import { handleResponse, errorLog } from './responseHandlers'

class Service {
  constructor() {
    this.baseURL = "https://api.punkapi.com/v2/"
    this.beers = []
  }
  fetchBeers () {
    fetch(this.baseURL + "beers")
      .then(handleResponse)
      .then((beers) => (this.mapBeersToModifiedBeers(beers)))
      .catch(errorLog)
  }

  addBeers (data) {
    this.beers = Object.assign(this.beers, data)
  }

  modifyBeerData (data) {
    const newBeer = {
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
}

export default Service;
