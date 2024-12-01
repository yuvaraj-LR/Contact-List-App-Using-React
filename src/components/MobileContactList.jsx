import React from 'react'

function MobileContactList({contacts}) {
    return (
        <div className='flex flex_col contact_list'>
            <div className="flex flex_space_between m-3 contact_title_div">
                <h1 className="contact_title">Contacts: </h1>
                <button className="btn bold brown_btn mx-lg-5">Add Contact</button> 
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
                                    <button className="btn brown_btn w-100 edit_btn">
                                        <span></span>
                                        <span>Edit</span>
                                    </button>

                                    <button className="btn brown_btn w-100 delete_btn">
                                        <span></span>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default MobileContactList