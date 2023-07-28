import React from "react";
import Image from "next/image";
import ListWeDo from "../molecules/ListWeDo";

export default function Symptoms() {
    return (
        <div className="px-8 mt-16 text-center">
            <h2>Symptoms</h2>
            <h4>
                COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without
                hospitalization.
            </h4>
            <Image src="/images/symptoms.svg" width={470} height={450} alt="illustration" className="mx-auto" />
            <p className="mx-auto w-10/12 mt-7">
                These symptoms are caused by a viral infection. Diarrhoea, loss of smell, headache, aches and pains, sore throat, and conjunctivitis
                are common symptoms associated with viral illnesses. It&apos;s essential to seek medical attention if experiencing these symptoms to
                determine the specific virus and receive appropriate treatment.
            </p>
        </div>
    );
}
