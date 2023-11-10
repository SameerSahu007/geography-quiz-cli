import { countries } from 'country-data-list';
import axios from 'axios';

export async function getallCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/independent?status=true&feilds=name');
        response = response.json()
        console.log(response)
        // temp.forEach((t) => {
        //     console.log()
        // })
    } catch (error) {
        console.error('Error fetching countries:', error.message);
        return [];
    }
}

console.log(await getallCountries())
