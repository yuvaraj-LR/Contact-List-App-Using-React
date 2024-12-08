import { createContext, useContext, useEffect, useState } from "react";
import { userListAPI } from "../api/data.api";

const contactListContext = createContext();

const useContactListContextHook = () => {
    const value = useContext(contactListContext);
    return value;
};

const ContactListContext = ({ children }) => {
    const [contactList, setContactList] = useState([]);
    const [addToggleFormBox, setAddToggleFormBox] = useState(false);
    const [editToggleFormBox, setEditToggleFormBox] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactListData = await userListAPI();
                setContactList(contactListData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchContacts();
    }, []);

    const handleAdd = (payload) => {
        if (Array.isArray(payload)) {
            setContactList(payload); // Handles deletion
        } else {
            const contactIndex = contactList.findIndex((contact) => contact.id === payload.id);

            let updatedContactList;
            if (contactIndex === -1) {
                updatedContactList = [payload, ...contactList];
            } else {
                updatedContactList = [...contactList];
                updatedContactList[contactIndex] = payload;
            }

            setContactList(updatedContactList);
        }

        setAddToggleFormBox(false);
        setEditToggleFormBox(false);
    };

    return (
        <contactListContext.Provider 
            value={{ contactList, addToggleFormBox, setAddToggleFormBox, editToggleFormBox, setEditToggleFormBox, handleAdd }}
        >
            {children}
        </contactListContext.Provider>
    );
};

export { contactListContext, useContactListContextHook };
export default ContactListContext;
