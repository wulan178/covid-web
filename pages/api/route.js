import axios from "axios";

const covidApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getGlobal = async () => {
    return await covidApi.get(`/api/`);
};

export const getCountry = async (country) => {
    return await covidApi.get(`/api/negara/${country}`);
};

export const getListCountries = async () => {
    return await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`);
};
