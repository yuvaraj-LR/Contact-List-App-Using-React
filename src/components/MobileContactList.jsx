import React, { useState } from 'react'
import ContactFormAdd from './ContactFormAdd';

function MobileContactList({contacts}) {

    const [addToggleFormBox, setAddToggleFormBox] = useState(false);
    const [editToggleFormBox, setEditToggleFormBox] = useState(false);
    

    // Adding a contact
    const addAContactInList = () => {

    }

    // Editing a contact
    const editAContactInList = (index, updatedData) => {

    }

    // Delete a contact
    const deleteAContactFromList = (index) => {

    }

    return (
        <div className='flex flex_col contact_list'>
            <div className="flex flex_space_between m-3 contact_title_div">
                <h1 className="contact_title">Contacts: </h1>
                <button className="btn bold brown_btn flex flex_center flex_gap_10 mx-lg-5" onClick={() => setAddToggleFormBox(true)}>
                    <span><i class="fa-solid fa-plus"></i></span>
                    <span>Add Contact</span>
                </button> 
            </div>

            <div className="flex flex_wrap flex_gap_10 flex_center">
                {
                    contacts.map((contact, i) => (
                        <>
                            <div class="card" key={`card-${i}`}>
                                <div class="card-body">
                                    <h5 class="card-title"><span className='bold'>Name: </span>{contact.name}</h5>
                                    <h5 class="card-title"><span className="bold">Company Name: </span> {contact.company.name}</h5>

                                    <h5 class="card-title"><span className="bold">Address: </span> {contact.address.street}, {contact.address.city}</h5>

                                    <h5 class="card-title"><span className="bold">Email: </span> {contact.email}</h5>

                                    <h5 class="card-title"><span className="bold">Phone No: </span> {contact.phone}</h5>
                                </div>

                                <div className="flex flex_gap_10 m-3 card_action_btns">
                                    <button className="btn brown_btn w-100 flex flex_center flex_gap_10 edit_btn" onClick={() => editAContactInList(i, contact)}>
                                        <span><i class="fa-solid fa-pencil"></i></span>
                                        <span>Edit</span>
                                    </button>

                                    <button className="btn brown_btn w-100 flex flex_center flex_gap_10 delete_btn" onClick={() => deleteAContactFromList(i)}>
                                        <span><i class="fa-solid fa-trash"></i></span>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>

            {addToggleFormBox ? <ContactFormAdd setAddToggleFormBox={setAddToggleFormBox} /> : <></>}

        </div>
    )
}

export default MobileContactList