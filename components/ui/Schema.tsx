import React from 'react';

export function Schema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "World Trip",
        "alternateName": "WorldTripMaa",
        "url": "https://worldtripmaa.com",
        "areaServed": "India",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressCountry": "IN"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
