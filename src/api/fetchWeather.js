import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APIKEY = '789d5150ae14c5433f79b58aa50bcf6c';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: APIKEY,
        }
    });

    return data;
}