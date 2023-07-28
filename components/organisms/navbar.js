import React from "react";
import Image from "next/image";

export default function Navbar() {
    const nav = ["Home", "What we do?", "Symptoms", "Contact us"];
    return (
        <nav className="fixed z-50 top-0 left-0 w-full px-5 md:py-4 py-3 md:px-6 bg-neutral-300/50 backdrop-blur-lg flex item-center justify-between">
            <a className="text-2xl font-bold text-green-900" href="#">
                CovInfoID
            </a>
            <ul className="flex gap-5">
                {nav.map((item, idx) => (
                    <li key={idx}>
                        <a href={`#${item}`} className="text-black text-sm md:text-base hover:text-opacity-70">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
