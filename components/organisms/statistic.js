/* eslint-disable react-hooks/exhaustive-deps */
import { Listbox, Tab, Transition } from "@headlessui/react";
import moment from "moment";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { getCountry, getCountryData, getGlobal, getListCountries } from "../../pages/api/route";
import { abbreviateNumber } from "../../utils/formatter";

export default function Statistic() {
    const [globalStat, setGlobalStat] = useState({ active: 0, confirmed: 0, recovered: 0, deaths: 0 });
    const [countryStat, setCountryStat] = useState({ active: 0, confirmed: 0, recovered: 0, deaths: 0, lastUpdate: null });
    const [listCountries, setListCountries] = useState([]);
    const [country, setCountry] = useState("Indonesia");

    // Fetch global data
    useEffect(() => {
        const fetchGlobal = async () => {
            try {
                const resp = await getGlobal();
                const globalData = resp.data[0];
                setGlobalStat({
                    active: globalData.kasus_aktif && globalData.kasus_aktif,
                    confirmed: globalData.positif && globalData.positif,
                    recovered: globalData.sembuh && globalData.sembuh,
                    deaths: globalData.meninggal && globalData.meninggal,
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchGlobal();
    }, []);

    // Fetch list countries
    useEffect(() => {
        const fetchListCountries = async () => {
            try {
                const resp = await getListCountries();
                const array = resp.data.map((item) => item.name.common);
                setListCountries(array.sort());
            } catch (error) {
                console.error(error);
            }
        };

        fetchListCountries();
    }, []);

    // Fetch country data
    const fetchCountry = async () => {
        try {
            const countryName = country?.includes(" ") ? country?.toLowerCase()?.replace(/ /g, "_") : country?.toLowerCase();
            const resp = await getCountry(countryName);
            const countryData = resp.data[0];
            if (country && countryData?.length === 0) {
                setCountryStat({ active: 0, confirmed: 0, recovered: 0, deaths: 0, lastUpdate: null });
            } else {
                setCountryStat({
                    active: countryData?.Active ? countryData?.Active : 0,
                    confirmed: countryData?.Confirmed ? countryData?.Confirmed : 0,
                    recovered: countryData?.Recovered ? countryData?.Recovered : 0,
                    deaths: countryData?.Deaths ? countryData?.Deaths : 0,
                    lastUpdate: countryData?.Last_Update ? countryData?.Last_Update : 0,
                });
            }
            console.log(countryName, countryData)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCountry();
    }, [country]);

    const RenderStatistic = ({ title, value, color }) => {
        return (
            <div className="text-center px-3 py-4 w-full bg-white rounded-md">
                <h5 className="mb-3 text-lg">{title}</h5>
                <h3 className={`py-5 text-3xl font-semibold ${color}`}>{abbreviateNumber(parseInt(value))}</h3>
            </div>
        );
    };

    return (
        <main className="px-8 mt-16 mx-auto w-full">
            <div className="px-7 flex flex-col divide-y divide-white shadow-md rounded-lg bg-gradient-to-br from-green-900 via-green-700 to-green-500 w-full h-max md:min-h-[22rem]">
                <div className="md:py-10 py-8">
                    <h5 className="statistic" onClick={() => setActiveTab(0)}>
                        GLOBAL
                    </h5>
                    <div className="grid grid-cols-4 place-items-center gap-4 mx-auto w-full">
                        <RenderStatistic color="text-red-500" title="Active Cases" value={globalStat.active} />
                        <RenderStatistic color="text-yellow-500" title="Confirmed" value={globalStat.confirmed} />
                        <RenderStatistic color="text-slate-500" title="Deaths" value={globalStat.deaths} />
                        <RenderStatistic color="text-green-500" title="Recovered" value={globalStat.recovered} />
                    </div>
                </div>
                <div className="md:py-10 py-8">
                    <h5 className="statistic" onClick={() => setActiveTab(1)}>
                        {country?.toUpperCase()}
                    </h5>
                    <div className="grid grid-cols-4 place-items-center gap-4 mx-auto w-full">
                        <RenderStatistic color="text-red-500" title="Active Cases" value={countryStat.active} />
                        <RenderStatistic color="text-yellow-500" title="Confirmed" value={countryStat.confirmed} />
                        <RenderStatistic color="text-slate-500" title="Deaths" value={countryStat.deaths} />
                        <RenderStatistic color="text-green-500" title="Recovered" value={countryStat.recovered} />
                    </div>
                    <Listbox
                        value={country}
                        onChange={setCountry}
                        as="div"
                        className="mx-auto text-center relative my-7"
                    >
                        <Listbox.Button className="inline-flex items-center gap-2 bg-white rounded-sm px-2 py-1.5">
                            <span className="text-left text-sm">{country}</span>
                            <Image src="/icons/unfold.png" width={20} height={20} alt="chevron" />
                        </Listbox.Button>
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Listbox.Options className="absolute z-40 top-10 mt-1 max-h-60 w-full md:w-80 overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-0 focus:outline-none sm:text-sm left-1/2 -translate-x-1/2">
                                {listCountries.map((item) => (
                                    <Listbox.Option
                                        key={item}
                                        value={item}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 px-5 ${
                                                active ? "bg-green-100 text-green-900" : "text-gray-900"
                                            }`
                                        }
                                    >
                                        {({ selected }) => (
                                            <span
                                                className={`flex justify-between text-left text-sm gap-3 items-center break-words ${
                                                    selected ? "font-medium" : "font-normal"
                                                }`}
                                            >
                                                {item}
                                                {selected && <Image src="/icons/checked.png" width={20} height={20} alt="check" />}
                                            </span>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </Listbox>
                    <p className="mx-auto my-auto w-max text-white text-sm">{`Last update: ${
                        countryStat.lastUpdate ? moment(countryStat.lastUpdate).format("LL") : "Unknown"
                    }`}</p>
                </div>
            </div>
        </main>
    );
}
