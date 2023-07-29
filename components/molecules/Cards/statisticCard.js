import React from "react";

export default function StatisticCard({ title, value, color }) {
    const abbreviateNumber = (number) => {
        const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

        // what tier? (determines SI symbol)
        const tier = (Math.log10(Math.abs(number)) / 3) | 0;

        // if zero, we don't need a suffix
        if (tier == 0) return number;

        // get suffix and determine scale
        const suffix = SI_SYMBOL[tier];
        const scale = Math.pow(10, tier * 3);

        // scale the number
        const scaled = number / scale;

        // format number and add suffix
        return scaled.toFixed(1) + suffix;
    };

    return (
        <div className="statistic-card">
            <h5 className="text-green-950 md:text-lg font-semibold px-3 py-2 bg-neutral-200">{title}</h5>
            <h3 className={`px-3 sm:py-5 py-6 text-3xl font-semibold ${color}`}>{abbreviateNumber(parseInt(value))}</h3>
        </div>
    );
}
