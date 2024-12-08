
import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ContactListContext from './context/contact.context';
import './Global.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ContactListContext>
      <div className='app'>
        <Navbar />
        <ToastContainer />
        
        <div className='flex contact_list_app'>
          <Sidebar />
          <ContactList />
        </div>
      </div>
    </ContactListContext>
  );
}

export default App;
