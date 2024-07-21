import React, { useState } from 'react';
import styles from './Login.module.css';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kun je de inloggegevens verwerken, bijvoorbeeld een aanvraag naar een server sturen
        console.log(credentials);
    };

    return (
            <div className={styles.loginContainer}>
                <h1>Inloggen</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Inloggen</button>
                </form>
            </div>
    );
};

export default LoginPage;