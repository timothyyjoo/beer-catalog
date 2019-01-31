### The FitRankings team wants to test your skills as a web developer.

### Demonstrate your ability to:
1) Work with React
2) Extract and parse data from REStful APIs
3) Have a good understanding of UI/UX
4) HTML, CSS, and JS dominance

## Getting Started
1) Fork [this repo](https://github.com/FitRankings/beer-catalog) to your own GitHub account
2) Clone your new repo to your local machine
3) Run `npm install && npm start`
4) Go to http://localhost:3000

## Instructions
The objective of this project is to build a craft beer catalog that can be sorted by name and abv
(alcohol by volume). ***Commit between each of the steps below.***

#### Tasks:

1) Make an API call to https://api.punkapi.com/v2/beers this will return a list of craft beers. Use [fetch()](https://mzl.la/1YBLmMu) to make the API call. Here is the documentation for this API, https://punkapi.com/documentation/v2.

2) Use your creative design skills to make a catalog. Use your discretion on what information
to display from the API response. *Bonus: Use [Bootstrap](https://bit.ly/2RAtlUo), it's already been installed.*

3) Use the stateless component in `Beer.jsx` to display each individual beer in your catalog.

4) Features:
    * Allow the catalog to sort the craft beers by name and abv (alcohol by volume).
    * Add pagination with the API's `?page` parameter to navigate the catalog's beer 

5) Create a file `service.js` in the `/src` directory and a ES6 class named `Service`. Import this new class in `Catalog.jsx` and refactor your work, using class methods to perform your API requests and to manipulate the responses. *Bonus: use static methods.*

* **Bonus:** Add search functionality using the API's `?beer_name` parameter.

#### Suggestions:
* Consult [Stack Overflow](https://www.stackoverflow.com) or any other documentation freely.

* If using additional libraries, add the CDN import to `/public/index.html` or install using `npm`.

* If you are unfamiliar with [Webpack](https://webpack.js.org/concepts/), avoid making any changes to `webpack.config.js`. You also shouldn't need to make any changes to `/src/index.jsx`.

* Hot reloading is configured so any changes you make within the `/src` directory will be reflected in your client automatically. Any other changes (i.e. installing a dependency) will require you restart the server.

* Don't spend more than 3-5 hours on this. If you hit a road block, reach out to me at jason@fitrankings.com.
