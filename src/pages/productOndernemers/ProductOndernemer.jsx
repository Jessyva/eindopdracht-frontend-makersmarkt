import React from 'react';
import ProfielKaart from "../../components/profielKaart/ProfielKaart.jsx" // Zorg ervoor dat dit pad klopt
import styles from "./ProductOndernemer.module.css"

const productOndernemer = [
    {
        name: 'Productondernemer 1',
        description: 'Beschrijving van productondernemer 1.',
        website: 'https://product1.nl',
        facebook: 'https://facebook.com/product1',
        instagram: 'https://instagram.com/product1',
        tiktok: 'https://tiktok.com/@product1'
    },
    {
        name: 'Productondernemer 2',
        description: 'Beschrijving van productondernemer 2.',
        website: 'https://product2.nl',
        facebook: 'https://facebook.com/product2',
        instagram: 'https://instagram.com/product2',
        tiktok: 'https://tiktok.com/@product2'
    },
    {
        name: 'Productondernemer 3',
        description: 'Beschrijving van productondernemer 3.',
        website: 'https://product2.nl',
        facebook: 'https://facebook.com/product2',
        instagram: 'https://instagram.com/product2',
        tiktok: 'https://tiktok.com/@product2'
    },
    // Voeg hier meer productondernemers toe
];

const ProductOndernemer = () => {
    return (
        <div className={styles.profilesPage}>
            {productOndernemer.map((profile, index) => (
                <ProfielKaart
                    key={index}
                    name={profile.name}
                    description={profile.description}
                    website={profile.website}
                    facebook={profile.facebook}
                    instagram={profile.instagram}
                    tiktok={profile.tiktok}
                />
            ))}
        </div>
    );
};

export default ProductOndernemer;
