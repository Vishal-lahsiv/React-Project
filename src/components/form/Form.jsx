import React, { useState } from 'react';
import '../../assets/css/Form.css';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        navigate('/product');
    }

    return (
        <div className='form__container'>
            <form className='register__form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required minLength={4} maxLength={15} onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required minLength={8} maxLength={15} onChange={handleChangeEvent} />
                </div>
                <button className='submit__btn' type="submit">Register</button>
                <hr />
            </form>
        </div>
    )
}