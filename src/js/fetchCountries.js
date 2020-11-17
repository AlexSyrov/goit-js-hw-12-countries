

export default function fetchCountriesFunction(searchQuer){
 return fetch(`https://restcountries.eu/rest/v2/name/${searchQuer}`)
  .then(r => r.json())
}


