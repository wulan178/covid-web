import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <main className="lg:grid grid-cols-2 place-items-center gap-5 mt-16 lg:mt-9 p-5 md:px-6 px-4">
            <div className="col-span-1 lg:pl-5 text-center lg:text-left">
                <h1 className="md:w-11/12 mx-auto lg:mx-0 text-2xl md:text-3xl lg:text-4xl font-bold">Stay Informed, Stay Safe: Tracking COVID-19 Statistics in Indonesia </h1>
                <h4 className="md:mt-6 mt-5 lg:text-left lg:mx-0 mx-auto sm:w-11/12 w-full">
                    Welcome to our COVID-19 Information Center, your one-stop destination for real-time updates and comprehensive statistics on the
                    COVID-19 situation in Indonesia. In these challenging times, staying informed is crucial, and we are committed to providing you
                    with accurate and up-to-date data straight from reliable sources. Our mission is to empower you with knowledge, enabling you to
                    make informed decisions and take the necessary precautions to protect yourself and your loved ones.
                </h4>
            </div>
            <div className="col-span-1 lg:block hidden">
                <Image src="/images/banner.svg" width={548} height={536} className="scale-90 pt-5" alt="banner" />
            </div>
        </main>
    );
}
