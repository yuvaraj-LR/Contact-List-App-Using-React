import { createContext, useContext, useEffect, useState } from "react";
import { userListAPI } from "../api/data.api";

const contactListContext = createContext();

// Custom Hook.
const useContactListContextHook = () => {
    const value = useContext(contactListContext);
    return value;
}

const ContactListContext = ({children}) => {

    const [contactList, setContactList] = useState([]);
    const [addToggleFormBox, setAddToggleFormBox] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                const contactListData = await userListAPI();
                setContactList(contactListData);
            } catch (error) {
                console.log(error, "error");                
            }
        }

        fetch();
    }, []);

    // Adding a contact.
    const addAContactInList = (payload) => {

    }

    // Edit a contact.
    const editAContactInList = (payload, i) => {

    }

    // Delete a contact.
    const deleteAContactFromList = (i) => {

    }

    return (
        <contactListContext.Provider value={{contactList, setContactList, addToggleFormBox, setAddToggleFormBox, addAContactInList, editAContactInList, deleteAContactFromList}}>
            {children}
        </contactListContext.Provider>
    )
}

export {contactListContext, useContactListContextHook};
export default ContactListContext;
