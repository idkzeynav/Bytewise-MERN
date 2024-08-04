// src/components/UserProfile.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const UserProfile = () => {
    const { user, login, logout } = useContext(AppContext);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        login({ name: username });
    };

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.name}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
