import React from "react";

const nav_list = ["Home", "Statistic", "Prevention", "Symptoms"];

export default function Navbar() {
    return (
        <nav>
            <a className="lg:text-2xl sm:text-xl text-lg font-bold text-green-900" href="#Home">
                CovInfoID
            </a>
            <ul className="flex lg:gap-5 sm:gap-3 gap-2">
                {nav_list.map((item, idx) => (
                    <li key={idx}>
                        <a href={`#${item?.toLowerCase()}`} className="text-black text-xs sm:text-base hover:text-opacity-70">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
