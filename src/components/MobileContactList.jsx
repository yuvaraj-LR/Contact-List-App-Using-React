import React, { useState } from 'react';
import { useContactListContextHook } from '../context/contact.context';
import ContactForm from './ContactForm';
import { toast } from 'react-toastify';

function MobileContactList() {
    const { 
        contactList, 
        handleAdd, 
        addToggleFormBox, 
        setAddToggleFormBox, 
        editToggleFormBox, 
        setEditToggleFormBox 
    } = useContactListContextHook();

    const [editContact, setEditContact] = useState({});

    const handleAnEditButton = (contact) => {
        setEditToggleFormBox(true);
        setEditContact(contact);
    };

    const handleADeleteButton = (index) => {
        const updatedList = contactList.filter((_, i) => i !== index);
        handleAdd(updatedList); // Updating the list after deletion
    };

    return (
        <div className='flex flex_col contact_list'>
            <div className="flex flex_space_between m-3 contact_title_div">
                <h1 className="contact_title">Contacts: </h1>
                <button 
                    className="btn bold brown_btn flex flex_center flex_gap_10 mx-lg-5" 
                    onClick={() => setAddToggleFormBox(true)}
                >
                    <span><i className="fa-solid fa-plus"></i></span>
                    <span>Add Contact</span>
                </button> 
            </div>

            <div className="flex flex_wrap flex_gap_10 flex_center">
                {contactList.map((contact, i) => (
                    <div className="card" key={`card-${i}`}>
                        <div className="card-body">
                            <h5 className="card-title"><span className='bold'>Name: </span>{contact.name}</h5>
                            <h5 className="card-title"><span className="bold">Company Name: </span> {contact.company.name}</h5>
                            <h5 className="card-title"><span className="bold">Address: </span> {contact.address.street}, {contact.address.city}</h5>
                            <h5 className="card-title"><span className="bold">Email: </span> {contact.email}</h5>
                            <h5 className="card-title"><span className="bold">Phone No: </span> {contact.phone}</h5>
                        </div>

                        <div className="flex flex_gap_10 m-3 card_action_btns">
                            <button 
                                className="btn brown_btn w-100 flex flex_center flex_gap_10 edit_btn" 
                                onClick={() => handleAnEditButton(contact)}
                            >
                                <span><i className="fa-solid fa-pencil"></i></span>
                                <span>Edit</span>
                            </button>

                            <button 
                                className="btn brown_btn w-100 flex flex_center flex_gap_10 delete_btn" 
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this contact?')) {
                                        handleADeleteButton(i);
                                    }
                                }}
                            >
                                <span><i className="fa-solid fa-trash"></i></span>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {addToggleFormBox && <ContactForm />}
            {editToggleFormBox && <ContactForm editContact={editContact} />}
        </div>
    );
}

export default MobileContactList;
