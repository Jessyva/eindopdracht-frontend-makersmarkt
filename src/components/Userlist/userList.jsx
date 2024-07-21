import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error('Er is een fout opgetreden bij het ophalen van gebruikers:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Gebruikerslijst</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
