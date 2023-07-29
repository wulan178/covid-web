import Head from "next/head";
import { HealthAdvice, Hero, Navbar, Prevention, Statistics, Symptoms } from "../components/organisms";

export default function Home() {
    return (
        <>
            <Head>
                <title>CovInfoID</title>
            </Head>

            <Navbar />
            <Hero />
            <Statistics />
            <Prevention />
            <Symptoms />
            <HealthAdvice />
        </>
    );
}
