import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ContactListContext from './context/contact.context';
import './Global.css';

function App() {
  return (
    <ContactListContext>
      <div className='app'>
        <Navbar />
        <div className='flex contact_list_app'>
          <Sidebar />
          <ContactList />
        </div>
      </div>
    </ContactListContext>
  );
}

export default App;
