import React from 'react';
import ProfielKaart from "../../components/profielKaart/ProfielKaart.jsx"
import styles from './MarktOndernemer.module.css';

const marktOndernemer = [
    {
        name: 'Marktondernemer 1',
        description: 'Beschrijving van marktondernemer 1.',
        website: 'https://markt1.nl',
        facebook: 'https://facebook.com/markt1',
        instagram: 'https://instagram.com/markt1',
        tiktok: 'https://tiktok.com/@markt1'
    },
    {
        name: 'Marktondernemer 2',
        description: 'Beschrijving van marktondernemer 2.',
        website: 'https://markt2.nl',
        facebook: 'https://facebook.com/markt2',
        instagram: 'https://instagram.com/markt2',
        tiktok: 'https://tiktok.com/@markt2'
    },
    // Voeg hier meer marktondernemers toe
];

const MarktOndernemer = () => {
    return (
        <div className={styles.profilesPage}>
            {marktOndernemer.map((profile, index) => (
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

export default MarktOndernemer;
