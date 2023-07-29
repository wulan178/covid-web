import axios from "axios";

const covidApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COVID_API,
});

const countriesApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COUNTRIES_API,
});

export const getGlobal = async () => {
    return await covidApi.get(`/api/`);
};

export const getCountry = async (country) => {
    return await covidApi.get(`/api/negara/${country}`);
};

export const getListCountries = async () => {
    return await countriesApi.get(`/v3.1/all?fields=name,flags`);
};
