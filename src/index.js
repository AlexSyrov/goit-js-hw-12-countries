import './styles.css';
import countryTpl from './templates/country-card.hbs'
import {debounce} from 'lodash'

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchCountry: document.querySelector('.js-search-form')
}

refs.searchCountry.addEventListener('input', onSearch);

function onSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const query = form.elements.query.value;

    fethcCountries(query)
        .then(renderCountryCard)
        .catch(error => console.log(error));

 };

function fethcCountries(saerchQuery) {          

    return fetch(`https://restcountries.eu/rest/v2/name/${saerchQuery}`)
        .then(response => {
        return response.json();
    });
}

function renderCountryCard(country) {
    const markup = countryTpl(country);
    refs.cardContainer.innerHTML = markup; 
}   




// fetch(`https://restcountries.eu/rest/v2/name/${saerchQuery}`)
//     .then(response => {
//         return response.json();
//     }).then(country => {
//         const markup = countryTpl(country);
//         refs.cardContainer.innerHTML = markup;
//     }).catch(error => console.log(error));