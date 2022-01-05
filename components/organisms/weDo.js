import React from 'react'
import Image from 'next/image'
import ListWeDo from '../molecules/ListWeDo'

export default function WeDo() {
    return (
        <div className="container weDo-box">
            <div className="row">
                <div className="col-lg-6">
                    <Image src="/images/winning.png" width={556} height={523} />
                </div>
                <div className="col-lg-6 weDo-content">
                    <h2 className="weDo-title">What we do?</h2>
                    <p className="weDo-desc">Covid 19 positive or Pneumonitis patient will be treated at home as per doctor order by GNC certified nursing staff.</p>
                    <ListWeDo desc="Facilities of blood sugar"/>
                    <ListWeDo desc="B.P.  Measurement"/>
                    <ListWeDo desc="Spo2 Measurement"/>
                    <ListWeDo desc="Ryle's tube insertion"/>
                    <ListWeDo desc="Catheterisation"/>
                    <ListWeDo desc="Dressing facilities are available 24*7"/>
                    <div className="contactUs-link">
                        <div className="circle"><br></br></div>
                        <a href="" className="contact-link">Contact Us</a>
                        <Image src="/icons/arrow.png" width={28} height={22} />
                    </div>
                </div>
            </div>            
        </div>
    )
}
