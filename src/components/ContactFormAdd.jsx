import React, { useState } from 'react'

function ContactFormAdd({setAddToggleFormBox, contacts, setContact}) {
  const [name, setName] = useState('');
  const [cname, setCName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      contact: {
        name: name,
        email: email,
        phone: number,
        company: {
          name: cname
        }, 
        address: {
          street: street,
          city: city
        }
      }
    }

    try {
      // fetch("https://jsonplaceholder.typicode.com/users", {
      //   method: "POST",
      //   body: {payload}
      // });
      console.log(contacts, "previous contacts");

      setContact(contacts.push(payload));

      console.log(contacts, "after contacts");

      console.log("Added successfully.");
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <div className="blur_bg"></div>
      <div className='contact_form'>
          <p className="close_icon" onClick={() => setAddToggleFormBox(false)}> 
            <i class="fa-regular fa-2x fa-circle-xmark"></i>
          </p>

          <form action="" method="post" className='flex flex_col' onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder='Name' id='name' name='name' autoComplete='off' required value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder='Company Name' id='cname' name='cname' autoComplete='off' required value={cname} onChange={(e) => setCName(e.target.value)} />
              <input type="email" placeholder='Email' id='email' name='email' autoComplete='off' required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="number" placeholder='Number' id='number' name='number' autoComplete='off' required value={number} onChange={(e) => setNumber(e.target.value)} />
              <input type="text" placeholder='Address Street' id='street' name='street' autoComplete='off' required value={street} onChange={(e) => setStreet(e.target.value)} />
              <input type="text" placeholder='Address city' id='city' name='city' autoComplete='off' required value={city} onChange={(e) => setCity(e.target.value)} />

              <button className="btn brown_btn">Submit</button>
          </form>
      </div>
    </>
  )
}

export default ContactFormAdd;