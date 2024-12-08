import React from 'react'
import Loader from './Loader';
import MobileContactList from './MobileContactList';
import { useContactListContextHook } from '../context/contact.context';

function ContactList() {
  const { contactList } = useContactListContextHook();

  return (
    <>
      <div className="flex flex_wrap flex_gap_10 flex_center m-3 contact_list_mob">
        {
          contactList && contactList.length > 0 ? <MobileContactList /> : <Loader />
        }
      </div>
    </>

  )
}

export default ContactList