function fethcCountries(query) {          

    return fetch(`https://restcountries.eu/rest/v2/name/${query}`)
        .then(response => {
        return response.json();
    });
}

export default {fethcCountries};