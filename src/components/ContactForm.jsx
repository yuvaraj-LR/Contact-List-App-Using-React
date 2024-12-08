import React, { useEffect, useState } from 'react';
import { useContactListContextHook } from '../context/contact.context';

function ContactForm({ editContact = {} }) {
    const { handleAdd, setAddToggleFormBox, setEditToggleFormBox } = useContactListContextHook();

    const [name, setName] = useState('');
    const [cname, setCName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (Object.keys(editContact).length > 0) {
            setName(editContact.name || '');
            setCName(editContact.company?.name || '');
            setEmail(editContact.email || '');
            setNumber(editContact.phone || '');
            setStreet(editContact.address?.street || '');
            setCity(editContact.address?.city || '');
            setId(editContact.id || '');
        }
    }, [editContact]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            id: id || new Date().getTime().toString(),
            name,
            email,
            phone: number,
            company: { name: cname },
            address: { street, city },
        };

        handleAdd(payload);
    };

    const handleClose = () => {
        setAddToggleFormBox(false);
        setEditToggleFormBox(false);
    };

    return (
        <>
            <div className="blur_bg"></div>
            <div className="contact_form">
                <p className="close_icon" onClick={handleClose}>
                    <i className="fa-regular fa-2x fa-circle-xmark"></i>
                </p>

                <form className="flex flex_col" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Company Name" 
                        required 
                        value={cname} 
                        onChange={(e) => setCName(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Number" 
                        required 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Street Address" 
                        required 
                        value={street} 
                        onChange={(e) => setStreet(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="City" 
                        required 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                    />

                    <button className="btn brown_btn">Submit</button>
                </form>
            </div>
        </>
    );
}

export default ContactForm;
