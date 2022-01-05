import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="container hero-box">
            <div className="row">
                <div className="col-lg-6 hero-content">
                    <p className="px-0 alert">
                        <Image src="/icons/warning.svg" width={27} height={37} />
                        <p className="my-auto">COVID-19 ALERT</p>
                    </p>
                    <h1 className="hero-title">Together we fight COVID-19</h1>
                    <p className="hero-desc">Seque empowers you to get more done with intense focus and zero interruptions. Seque empowers you to get more done with intense focus and zero interruptions.</p>
                    <a class="btn px-5 py-auto rounded-pill btn-help" href="#" role="button">Let us help</a>
                </div>
                <div className="col-lg-6">
                    <Image src="/images/heroImg1.png" width={548} height={536} />
                </div>
            </div>
        </div>
    )
}
