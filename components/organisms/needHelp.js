import React from 'react'
import Image from 'next/image'
import ListContact from '../molecules/ListContact/listContact'

export default function NeedHelp() {
    return (
        <div className="container shadow help-card">
            <h2 className="text-center help-title">Need Help!</h2>
            <p className="text-center mx-auto help-desc">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority.</p>
            <div className="text-center help-img" >
                <Image src="/images/needhelp.png" width={547} height={340} />
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <ListContact name="Danish GOHEL" number="(+91) 9157999875" />
                    <ListContact name="Nilesh Sondarva" number="(+91) 8980530888" />
                </div>
            </div>
        </div>
    )
}
