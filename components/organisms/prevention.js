import React from "react";
import Image from "next/image";
import ListPrevention from "../molecules/ListPrevention";

export default function Prevention() {
    return (
        <div className="px-8 mt-16">
            <h2>Prevention</h2>
            <h4>
                Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local
                health authority.
            </h4>
            <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto">
                <ListPrevention
                    img="/images/wear-mask.svg"
                    title="Wear a mask"
                    desc="Masks can help prevent the spread of the virus from the person wearing the mask to others."
                />
                <ListPrevention
                    img="/images/handwashing.svg"
                    title="Wash your hands often"
                    desc="Clean your hands with soop and water, or alcohol-based hand sanitizer."
                />
                <ListPrevention
                    img="/images/social-distancing.svg"
                    title="Physical distancing"
                    desc="Maintain a safe distance especially from anyone who is coughinf or sneezing."
                />
            </div>
        </div>
    );
}
