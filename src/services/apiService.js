
const handleResponse = (response) => {
  return response.json()
  .then((json) => {
    if (!response.ok) {
      const error = {
        status: response.status,
        statusText: response.statusText,
        json
      }
      return Promise.reject(error)
    }
    return json
  })
}

const errorLog = (error) => {
  console.error({error})
}

class ApiService {
  constructor() {
    this.baseURL = "https://api.punkapi.com/v2/"
    this.beers = {

    }
  }
  getBeers () {
    fetch(this.baseURL + "/beers")
      .then(handleResponse)
      .then((beers) => this.addBeers(beers))
      .catch(errorLog)
  }

  

  }
}
