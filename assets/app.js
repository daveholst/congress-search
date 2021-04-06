// testing page rejiggery

const viewportContainer = document.querySelector('.viewport-container')
const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('#search-button');
const searchResults = document.querySelector('#search-results');

const resultsLayout = () => {
  // change width of search box and push to top
  searchContainer.classList.add('search-container-results');
  viewportContainer.classList.add('viewport-container-results');
  //chan
}

searchButton.addEventListener('click', resultsLayout)


console.log('working!');