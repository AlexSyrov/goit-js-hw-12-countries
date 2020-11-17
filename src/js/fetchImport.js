import fetchCountriesFunction from './fetchCountries';
import getRefs from './refs'
import {renderCard, onFetchError} from './renderCard'
const refs = getRefs()

export default function fetchCountrie() {    
 return fetchCountriesFunction(refs.searchForm.value).then(renderCard)
  .catch(onFetchError);
}