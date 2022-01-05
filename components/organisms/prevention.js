import React from 'react'
import Image from 'next/image'
import ListPrevention from '../molecules/ListPrevention'

export default function Prevention() {
    return (
        <div className="container px-auto prev-box">
            <h2 className="text-center prev-title">Prevention</h2>
            <p className="text-center mx-auto prev-desc">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority.</p>
            <div className="row">
                <ListPrevention img="/images/prev1.png" width={210} height={204} title="Wear a mask" desc="Masks can help prevent the spread of the virus from the person wearing the mask to others." />
                <ListPrevention img="/images/prev2.png" width={210} height={204} title="Wash your hands often" desc="Clean your hands with soop and water, or alcohol-based hand sanitizer." />
                <ListPrevention img="/images/prev3.png" width={210} height={204} title="Physical distancing" desc="Maintain a safe distance especially from anyone who is coughinf or sneezing." />
            </div>
        </div>
    )
}
