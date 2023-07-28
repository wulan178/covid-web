import React from 'react'
import Image from 'next/image'

export default function ListPrevention(
    {title, desc, img, width, height}
) {
    return (
        <div className="col-span-1 p-3">
            <div className="flex flex-col items-center">
                <div className="text-center h-56 grid place-items-center">
                    <Image src={img} width={210} height={204} alt="illustration" />
                </div>
                <h5 className="text-center font-semibold md:text-lg">{title}</h5>
                <p className="text-center w-11/12">{desc}</p>
            </div>
        </div>
    );
}
