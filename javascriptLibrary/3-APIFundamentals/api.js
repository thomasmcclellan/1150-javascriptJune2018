const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('#submit');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('click', fetchSpace);

function fetchSpace(e) {
  e.preventDefault();
  // console.log(e);
  fetch(baseURL)
    .then(result => {
      // console.log(result);
      return result.json();
    })
    .then(json => {
      // console.log(json);
      displayRockets(json)
    })
}

function displayRockets(json) {
  // console.log('Results:', json);
  let rockets = json.forEach(r => {
    let rocket = document.createElement('li');
    rocket.innerText = r.name;
    spaceShips.appendChild(rocket);
  })
}

