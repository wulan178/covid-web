import Image from "next/image";
import React from "react";

export default function NeedHelp() {
    return (
        <div className="lg:px-8 lg:mt-16 sm:px-4 px-3 mt-14 mb-10">
            <h2>Need Help!</h2>
            <h4>
                Protect yourself and others around you by knowing the facts and taking appropriate precautions. Flow advice provided by your local
                health authority.
            </h4>
            <Image src="/images/stay-safe.svg" width={547} height={340} alt="illustration" className="mx-auto w-11/12 sm:w-9/12 lg:w-auto" />
        </div>
    );
}
