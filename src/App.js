import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './Global.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='flex contact_list_app'>
        <Sidebar />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
