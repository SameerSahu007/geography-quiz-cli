import { countries } from 'country-data-list';
import axios from 'axios';

export async function getallCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const country_lst = data.map((e) => e.name.common)
        return country_lst

    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

export async function getallCapitals() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        let capitalMap = new Map()

        data.forEach(e => {
            capitalMap.set(e.name.common, e.capital)
        });
        return capitalMap
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

export async function getallLandLocked() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        let landlockMap = new Map()
        data.forEach(e => {
            landlockMap.set(e.name.common, e.landlocked)
        });
        return landlockMap;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

export async function getByFirstLetter() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        let countryCharacters = new Map()
        data.forEach(e => {
            const firstChar = e.name.common[0];

            if (countryCharacters.has(firstChar)) {       
                countryCharacters.get(firstChar).push(e.name.common);
            } else {
                countryCharacters.set(firstChar, [e.name.common]);
            }
        });
        return countryCharacters;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}
