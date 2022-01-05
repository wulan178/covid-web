import React from 'react'
import Image from 'next/image'

export default function ListContact(
    {name, number}
) {
    return (
        <div className="contact-list">
            <div className="contact-icon">
                <Image src="/icons/contact.png" width={29} height={30} />
            </div>
            <div className="contact-desc">
                <p className="contact-name">{name}</p>
                <p className="contact-number">{number}</p>
            </div>
        </div>
    )
}
