import React from "react";
import { Heading } from "../atoms";
import { PreventionCard } from "../molecules";

const prevention_list = [
    {
        img: "/images/wear-mask.svg",
        title: "Wear a mask",
        desc: "Masks can help prevent the spread of the virus from the person wearing the mask to others.",
    },
    {
        img: "/images/handwashing.svg",
        title: "Wash your hands often",
        desc: "Clean your hands with soop and water, or alcohol-based hand sanitizer.",
    },
    {
        img: "/images/social-distancing.svg",
        title: "Physical distancing",
        desc: "Maintain a safe distance especially from anyone who is coughinf or sneezing.",
    },
];

export default function Prevention() {
    return (
        <main className="section-container">
            <Heading
                title="Prevention"
                subtitle="In the face of the COVID-19 pandemic, staying informed and taking preventive measures is crucial to safeguarding yourself and those around you. By understanding the facts and adopting responsible practices, we can unite in the fight against this global health crisis."
            />
            <div className="grid grid-cols-3 lg:gap-5 gap-3 lg:w-11/12 w-full mx-auto">
                {prevention_list.map((item, idx) => (
                    <PreventionCard key={idx} img={item.img} title={item.title} desc={item.desc} />
                ))}
            </div>
        </main>
    );
}
