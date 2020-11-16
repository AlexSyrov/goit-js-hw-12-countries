import './styles.css';
import countryTpl from './templates/country-card.hbs';
import {debounce} from 'lodash.debounce'




const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchCountry: document.querySelector('.js-search-form')
}


refs.searchCountry.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {

    const form = e.currentTarget;
    const query = form.elements.query.value;

    fethcCountries(query)
        .then(renderCountryCard)
        .catch(onFeathError)

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

function onFeathError(error) {
    alert('Something went wrong');
}


