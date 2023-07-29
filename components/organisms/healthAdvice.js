import Image from "next/image";
import React from "react";
import { Heading } from "../atoms";

export default function HealthAdvice() {
    return (
        <main className="section-container mb-10">
            <Heading
                title="Need Help!"
                subtitle="Protect yourself and others around you by knowing the facts and taking appropriate precautions. Flow advice provided by your local
                health authority."
            />
            <Image src="/images/stay-safe.svg" width={547} height={340} alt="illustration" className="mx-auto w-11/12 sm:w-9/12 lg:w-auto" />
        </main>
    );
}
