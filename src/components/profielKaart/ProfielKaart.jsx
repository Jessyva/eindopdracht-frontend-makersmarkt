import React from 'react';
import styles from './ProfielKaart.module.css'; // Zorg ervoor dat het pad klopt

const ProfielKaart = ({ name, description, website, facebook, instagram, tiktok }) => {
    return (
        <div className={styles.profielKaart}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={styles.links}>
                <a href={website} target="_blank" rel="noopener noreferrer">Website</a>
                <a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href={tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
        </div>
    );
};

export default ProfielKaart;
