import React from "react";
import Image from "next/image";

export default function ListPrevention({ title, desc, img }) {
    return (
        <div className="md:col-span-1 col-span-3 lg:p-3 p-0">
            <div className="grid grid-cols-2 gap-4 shadow-lg p-4 md:min-h-[26rem] lg:min-h-[24rem] rounded-xl border hover:scale-105 transition-all ease-in-out duration-150 group bg-white delay-150">
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
