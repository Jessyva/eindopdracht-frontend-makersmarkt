import React, {useState} from 'react';
import styles from './AanmeldenPagina.module.css';

const AanmeldenPagina = () => {
        const [formData, setFormData] = useState({
            name: '',
            website: '',
            facebook: '',
            instagram: '',
            tiktok: '',
            userType: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Hier kun je het formulier verwerken, bijv. het verzenden van de gegevens naar een server
            console.log(formData);
        };

        return (
            <div className="signup-container">
                <h1>Meld je aan</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="name">Naam</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="website">Website</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                    />

                    <label htmlFor="facebook">Facebook Link</label>
                    <input
                        type="url"
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                    />

                    <label htmlFor="instagram">Instagram Link</label>
                    <input
                        type="url"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                    />

                    <label htmlFor="tiktok">TikTok Link</label>
                    <input
                        type="url"
                        id="tiktok"
                        name="tiktok"
                        value={formData.tiktok}
                        onChange={handleChange}
                    />

                    <label>Ben je een:</label>
                    <div>
                        <input
                            type="radio"
                            id="productOndernemer"
                            name="userType"
                            value="productOndernemer"
                            checked={formData.userType === 'productOndernemer'}
                            onChange={handleChange}
                        />
                        <label htmlFor="productOndernemer">Productondernemer</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="marktOndernemer"
                            name="userType"
                            value="marktOndernemer"
                            checked={formData.userType === 'marktOndernemer'}
                            onChange={handleChange}
                        />
                        <label htmlFor="marktOndernemer">Marktondernemer</label>
                    </div>

                    <button type="submit">Aanmelden</button>
                </form>
            </div>
        );
    };

export default AanmeldenPagina;
