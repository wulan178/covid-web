import React from 'react'
import Image from 'next/image'
import ListWeDo from '../molecules/ListWeDo'

export default function WeDo() {
    return (
        <div className="px-8 mt-16">
            <div className="grid grid-cols-2 place-items-center">
                <div className="col-span-1">
                    <Image src="/images/winning.png" width={556} height={523} className='scale-90' alt='illustration' />
                </div>
                <div className="col-span-1 weDo-content">
                    <h2 className="font-bold text-4xl">What we do?</h2>
                    <p className="text-lg my-5">Covid 19 positive or Pneumonitis patient will be treated at home as per doctor order by GNC certified nursing staff.</p>
                    <ListWeDo desc="Facilities of blood sugar"/>
                    <ListWeDo desc="B.P.  Measurement"/>
                    <ListWeDo desc="Spo2 Measurement"/>
                    <ListWeDo desc="Ryle's tube insertion"/>
                    <ListWeDo desc="Catheterisation"/>
                    <ListWeDo desc="Dressing facilities are available 24*7"/>
                    <div className="inline-flex mt-5 relative items-center before:absolute before:w-12 before:h-12 before:content-[''] before:rounded-full before:border-2 before:border-green-600 before:-z-10">
                        <a href="" className="contact-link">Contact Us</a>
                        <Image src="/icons/arrow.png" width={28} height={22} alt='arrow' />
                    </div>
                </div>
            </div>            
        </div>
    )
}
