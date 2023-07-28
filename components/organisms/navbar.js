import React from "react";

export default function Navbar() {
    const nav = ["Home", "Statistic", "Prevention", "Symptoms"];
    return (
        <nav className="fixed z-50 top-0 left-0 w-full lg:px-5 lg:py-4 py-3 sm:px-4 px-3 bg-neutral-300/50 backdrop-blur-lg flex item-center justify-between gap-2">
            <a className="lg:text-2xl sm:text-xl text-lg font-bold text-green-900" href="#">
                CovInfoID
            </a>
            <ul className="flex lg:gap-5 sm:gap-3 gap-2">
                {nav.map((item, idx) => (
                    <li key={idx}>
                        <a href={`#${item}`} className="text-black text-xs sm:text-base hover:text-opacity-70">
                            {item}
                        </a> 
                    </li>
                ))}
            </ul>
        </nav>
    );
}
