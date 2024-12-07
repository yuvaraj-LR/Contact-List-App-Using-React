const API = "https://jsonplaceholder.typicode.com/users";

export const userListAPI = async() => {
    try {
        let response = await fetch(API);
        let contacts = await response.json();
        return contacts;
    } catch (error) {
        console.log(error, "error");        
    }
}