import React, {useState} from 'react';
import styles from './AanmeldenPagina.module.css';
import axios from 'axios';

const AanmeldenPagina = () => {
        const [formData, setFormData] = useState({
            name: '',
            website: '',
            facebook: '',
            instagram: '',
            tiktok: '',
            userType: '',
            photo: null,
        });

        const handleChange = (e) => {
            const { name, value, type, files} = e.target;
            setFormData({
                ...formData,
                [name]: type === 'file' ? files[0] : value
            });
        };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('website', formData.website);
        data.append('facebook', formData.facebook);
        data.append('instagram', formData.instagram);
        data.append('tiktok', formData.tiktok);
        data.append('userType', formData.userType);
        if (formData.photo) {
            data.append('photo', formData.photo);
        }

        try {
            const response = await axios.post('http://localhost:3000/api/ondernemers', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form data submitted:', response.data);
            // Je kunt hier de status bijwerken indien nodig
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
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
                    <label htmlFor="photo">Foto</label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
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
