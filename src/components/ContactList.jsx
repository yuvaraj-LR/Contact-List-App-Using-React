import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import MobileContactList from './MobileContactList';

function ContactList() {
  const [contact, setContact] = useState([]);
  console.log(contact);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setContact(json))
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      <div className="flex flex_wrap flex_gap_10 flex_center m-3 contact_list_mob">
        {
          contact && contact.length > 0 ? <MobileContactList contacts={contact} setContact={setContact}/> : <Loader />
        }
      </div>
    </>

  )
}

export default ContactList