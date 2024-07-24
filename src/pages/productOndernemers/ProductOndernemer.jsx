import React, { useEffect, useState } from 'react';
import ProfielKaart from '../../components/profielKaart/ProfielKaart';
import styles from './ProductOndernemer.module.css';
import axios from 'axios';

const ProductOndernemer = () => {
    const [ondernemer, setOndernemer] = useState([]);

    useEffect(() => {
        const fetchOndernemer = async () => {
            try {
                const response = await axios.get('http://localhost: 5432/api/entrepreneurs');
                setOndernemer(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOndernemer();
    }, []);

    return (
        <div className={styles.profilesPage}>
            <h3>Welkom op de overzichtspagina van de Handige Helden</h3>
            {ondernemer.map((profile, index) => (
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
