import Image from "next/image";
import Hero from "../components/organisms/hero";
import Navbar from "../components/organisms/navbar";
import NeedHelp from "../components/organisms/needHelp";
import Prevention from "../components/organisms/prevention";
import Statistic from "../components/organisms/statistic";
import Symptoms from "../components/organisms/symptoms";
import WeDo from "../components/organisms/weDo";
import Head from "next/head";
import { getGlobalData } from "./api/route";

export default function Home() {
    return (
        <>
            <Head>
                <title>CovInfoID</title>
            </Head>
            <Navbar />
            <Hero />
            <Statistic />
            {/* <WeDo /> */}
            <Prevention />
            <Symptoms />
            <NeedHelp />
        </>
    );
}
