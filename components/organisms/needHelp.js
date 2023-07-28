import Image from 'next/image';
import React from 'react';

export default function NeedHelp() {
    return (
        <div className="px-8 mt-16 mb-10">
            <h2>Need Help!</h2>
            <h4>
                Protect yourself and others around you by knowing the facts and taking appropriate precautions. Flow advice provided by your local
                health authority.
            </h4>
            <Image src="/images/stay-safe.svg" width={547} height={340} alt="illustration" className="mx-auto" />
        </div>
    );
}
