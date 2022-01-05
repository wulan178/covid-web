import React from 'react'
import Image from 'next/image'

export default function ListWeDo(
    {desc}
) {
    return (
        <div className="weDo-listbox">
            <Image src="/icons/miniVirus.png" width={31} height={32} />
            <p className="my-auto weDo-list">{desc}</p>
        </div>
    )
}
