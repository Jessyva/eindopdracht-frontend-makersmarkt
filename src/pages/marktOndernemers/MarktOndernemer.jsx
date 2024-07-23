import React, { useEffect, useState } from 'react';
import styles from './MarktOndernemer.module.css';
import axios from 'axios';
import ProfielKaart from "../../components/profielKaart/ProfielKaart.jsx";

const MarktOndernemerPage = () => {
    const [ondernemer, setOndernemer] = useState([]);

    useEffect(() => {
        const fetchOndernemer = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/ondernemer');
                setOndernemer(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOndernemer();
    }, []);

    return (
        <div className={styles.profilesPage}>
            <h3>Welkom op de overzichtspagina de markten</h3>
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

export default MarktOndernemerPage;
