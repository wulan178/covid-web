import React from "react";

export default function Heading({ title, subtitle }) {
    return (
        <>
            <h2
                id={title?.toLowerCase()}
                className="text-center font-bold lg:text-4xl md:text-3xl text-2xl w-max relative mx-auto after:absolute after:content-normal after:w-1/2 after:rounded-full after:h-1 after:bg-green-800 after:-bottom-2 md:after:-bottom-3 after:left-1/2 after:-translate-x-1/2"
            >
                {title}
            </h2>
            <h4 className="text-center mx-auto md:text-lg md:w-10/12 sm:w-11/12 w-full sm:my-10 my-8">{subtitle}</h4>
        </>
    );
}
