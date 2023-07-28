import React from 'react'
import Image from 'next/image'

export default function ListWeDo(
    {desc}
) {
    return (
        <div className="flex items-center gap-3 mb-3">
            <Image src="/icons/miniVirus.png" width={30} height={30} alt='virus' />
            <p className="text-lg">{desc}</p>
        </div>
    )
}
