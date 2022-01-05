import React from 'react'
import Image from 'next/image'

export default function Symptoms() {
    return (
        <div className="container text-center symptoms">
            <h2 className="text-center symp-title">Symptoms</h2>
            <p className="text-center mx-auto symp-desc">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
            <Image src="/images/symp.png" width={470} height={450} />
        </div>
    )
}
