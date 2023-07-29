/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getCountries, getCountry, getGlobal } from "../../pages/api/route";
import { Heading, Select } from "../atoms";
import { StatisticCard } from "../molecules";

export default function Statistics() {
    const [country, setCountry] = useState("Indonesia");
    const [countryList, setCountryList] = useState([]);

    // Global statistic
    const [globalStat, setGlobalStat] = useState({
        active: 0,
        confirmed: 0,
        recovered: 0,
        deaths: 0,
    });

    // Country statistic
    const [countryStat, setCountryStat] = useState({
        active: 0,
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        lastUpdate: null,
    });

    // Fetch global statistic
    useEffect(() => {
        const fetchGlobal = async () => {
            try {
                const resp = await getGlobal();
                const globalData = resp?.data?.[0];
                setGlobalStat({
                    active: globalData.kasus_aktif && globalData.kasus_aktif,
                    confirmed: globalData.positif && globalData.positif,
                    recovered: globalData.sembuh && globalData.sembuh,
                    deaths: globalData.meninggal && globalData.meninggal,
                });
            } catch (error) {
                return null;
            }
        };

        fetchGlobal();
    }, []);

    // Fetch list of countries
    useEffect(() => {
        const fetchCountryList = async () => {
            try {
                const resp = await getCountries();
                const array = resp?.data?.map((item) => item.name.common);
                setCountryList(array.sort());
            } catch (error) {
                return null;
            }
        };

        fetchCountryList();
    }, []);

    // Fetch selected country statistic
    const fetchCountry = async () => {
        try {
            const countryName = country?.includes(" ") ? country?.toLowerCase()?.replace(/ /g, "_") : country?.toLowerCase();
            const resp = await getCountry(countryName);
            const countryData = resp?.data?.[0];
            setCountryStat({
                active: countryData?.Active ? countryData?.Active : 0,
                confirmed: countryData?.Confirmed ? countryData?.Confirmed : 0,
                recovered: countryData?.Recovered ? countryData?.Recovered : 0,
                deaths: countryData?.Deaths ? countryData?.Deaths : 0,
                lastUpdate: countryData?.Last_Update ? countryData?.Last_Update : 0,
            });
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchCountry();
    }, [country]);

    let globalCard = [
        {
            title: "Active Cases",
            color: "text-red-500",
            value: globalStat.active,
        },
        {
            title: "Confirmed",
            color: "text-yellow-500",
            value: globalStat.confirmed,
        },
        {
            title: "Deaths",
            color: "text-slate-500",
            value: globalStat.deaths,
        },
        {
            title: "Recovered",
            color: "text-green-500",
            value: globalStat.recovered,
        },
    ];

    let countryCard = [
        {
            title: "Active Cases",
            color: "text-red-500",
            value: countryStat.active,
        },
        {
            title: "Confirmed",
            color: "text-yellow-500",
            value: countryStat.confirmed,
        },
        {
            title: "Deaths",
            color: "text-slate-500",
            value: countryStat.deaths,
        },
        {
            title: "Recovered",
            color: "text-green-500",
            value: countryStat.recovered,
        },
    ];

    const RenderStatistic = ({ title, data }) => {
        return (
            <div className="md:py-10 py-8">
                <h5 className="statistic-title" onClick={() => setActiveTab(title === "GLOBAL" ? 0 : 1)}>
                    {title}
                </h5>
                <div className="statistic-card-container">
                    {data?.map((item, idx) => (
                        <StatisticCard key={idx} title={item.title} color={item.color} value={item.value} />
                    ))}

                    {title !== "GLOBAL" && (
                        <div className="relative col-span-12 text-center mx-auto">
                            <Select value={country} onChange={setCountry} options={countryList} />
                            <p className="mx-auto my-auto w-max text-white text-sm">{`Last update: ${
                                countryStat.lastUpdate ? moment(countryStat.lastUpdate).format("LL") : "Unknown"
                            }`}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <main className="lg:px-8 lg:mt-16 sm:px-4 px-3 mx-auto w-full">
            <Heading
                title="Statistic"
                subtitle="Stay informed with the latest COVID-19 statistics from around the world and get country-specific updates to understand the current pandemic situation better."
            />
            <div className="statistic-container">
                <RenderStatistic title="GLOBAL" data={globalCard} />
                <RenderStatistic title={country?.toUpperCase()} data={countryCard} />
            </div>
        </main>
    );
}
