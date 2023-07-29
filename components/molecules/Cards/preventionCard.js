import Image from "next/image";
import React from "react";

export default function PreventionCard({ title, desc, img }) {
    return (
        <div className="md:col-span-1 col-span-3 lg:p-3 p-0">
            <div className="prevention-card group">
                <Image
                    src={img}
                    width={210}
                    height={204}
                    alt="illustration"
                    className="col-span-2 relative mb-auto pt-3 min-h-[15rem] group-hover:animate-pulse mx-auto"
                />
                <div className="col-span-2 md:min-h-[9rem] lg:min-h-min">
                    <h5 className="text-center font-semibold text-base sm:text-lg mb-2">{title}</h5>
                    <p className="text-center mx-auto sm:w-11/12 w-10/12 text-sm mb-3 md:mb-0">{desc}</p>
                </div>
            </div>
        </div>
    );
}
