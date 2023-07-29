import React from "react";

export default function Heading({ title, subtitle }) {
    return (
        <>
            <h2 id={title?.toLowerCase()}>{title}</h2>
            <h4>{subtitle}</h4>
        </>
    );
}
