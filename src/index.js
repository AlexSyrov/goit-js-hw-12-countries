import './styles.css';
import countryTpl from './templates/country-card.hbs';
import { debounce } from 'lodash';
import API from './js/fethcCountries';
import getRefs from './js/refs';


const refs = getRefs()


refs.searchCountry.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {

    const saerchQuery = e.target.value;

    API.fethcCountries(saerchQuery)
        .then(renderCountryCard)
        .catch(onFeathError);

 }


function renderCountryCard(country) {
    const markup = countryTpl(country);
    refs.cardContainer.innerHTML = markup; 
}   

function onFeathError(error) {
    alert('Something went wrong');
}


