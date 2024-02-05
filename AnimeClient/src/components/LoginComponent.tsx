import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthService } from '../services/AuthService';
import { LoginRequest } from '../interfaces/LoginRequest';

export const LoginComponent = () => {
    const authService = useAuthService();

    const [form, setForm] = useState({
        userName: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const loginRequest: LoginRequest = {
        userName: form.userName,
        password: form.password,
        };

        authService.login(loginRequest)
        .then(result => {
            console.log(result.message);
            // Redirect or perform other actions upon successful login
            navigate('/');
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <label>
                Name:
                <input
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleInputChange}
                required
                placeholder="Enter user name" />
            </label>

            <label>
                Password:
                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                required
                placeholder="Enter password" />
            </label>
            <div>
            <button type="submit">Login</button>
            </div>
        </form>
    )
};