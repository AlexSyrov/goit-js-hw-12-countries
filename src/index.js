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
    const saerchQuery = form.elements.query.value;

    fethcCountries(saerchQuery)
        .then(renderCountryCard)
        .catch(error => console.log(error));

 };

function fethcCountries(countryName) {
    
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
        return response.json();
    });
}

function renderCountryCard(country) {
    const markup = countryTpl(country);
    refs.cardContainer.innerHTML = markup;
}   




