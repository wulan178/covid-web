import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/id';

export default function Statistic() {
    const [recovered, setRecovered] = React.useState(0);
    const [active, setActive] = React.useState(0);
    const [death, setDeath] = React.useState(0);
    const [update, setUpdate] = React.useState(0);

    const total = recovered + death + active;
    const totalActive = (active * 100) / (total);
    const totalRecovered = (recovered * 100) / (total);
    const totalDeath = (death * 100) / (total);

    // Function GetData
    const getData = async () => {
        try {
            const response = await axios.get(
                "https://apicovid19indonesia-v2.vercel.app/api/indonesia"
            );
            setRecovered(response.data.sembuh);
            setDeath(response.data.meninggal);
            setActive(response.data.positif);
            setUpdate(response.data.lastUpdate);
        } catch(error) {
            console.error(error);
        }

    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container covid-box">
            <div className="row">
                <div className="col-lg-3 text-center">
                    <h6 className="covid-title">Total Cases</h6>
                    <h5 className="covid-total">{total}</h5>
                </div>
                <div className="col-lg-3 text-center">
                    <h6 className="covid-title">Active Cases</h6>
                    <h5 className="covid-active">{active}</h5>
                    <p className="covid-desc">{Math.round(totalActive)}% from total cases</p>
                </div>
                <div className="col-lg-3 text-center">
                    <h6 className="covid-title text-center">Recovered</h6>
                    <h5 className="covid-recovered">{recovered}</h5>
                    <p className="covid-desc">{Math.round(totalRecovered)}% from total cases</p>
                </div>
                <div className="col-lg-3 text-center">
                    <h6 className="covid-title text-center">Deaths</h6>
                    <h5 className="covid-deaths">{death}</h5>
                    <p className="covid-desc">{Math.round(totalDeath)}% from total cases</p>
                </div>
                <div className="location">
                    <Image src="/icons/flag.png" width={34} height={22} />
                    <p className="my-auto loc-text">India | Last update: {moment(update).format("MMMM Do, YYYY")}</p>
                </div>
            </div>

        </div>
    )
}
