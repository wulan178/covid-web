import React from 'react'
import Image from 'next/image'

export default function ListPrevention(
    {title, desc, img, width, height}
) {
    return (
        <div className="col-lg-4">
            <div className="shadow px-auto prevcard">
                <div className="text-center prevcard-img">
                    <Image src={img} width={width} height={height} />
                </div>
                <h5 className="text-center prevcard-title">{title}</h5>
                <p className="prevcard-desc">{desc}</p>
            </div>
        </div>
    )
}
