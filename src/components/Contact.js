import React, { useState } from 'react';
import '../scss/Contact.scss';

const Contact = ({ lightMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alert, setAlert] = useState({
    name: null,
    email: null,
    message: null
  });

  const onChange = e => {
    setAlert({
      ...alert,
      [e.target.name]: false
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newAlert = {};
    if (name.trim().length === 0) newAlert.name = true;
    if (email.trim().length === 0) newAlert.email = true;
    if (message.trim().length === 0) newAlert.message = true;
    const v = Object.values(newAlert);
    if (v.includes(true)) {
      setAlert({ ...alert, ...newAlert });
    } else console.log('handleSubmit', formData);
  };

  return (
    <div className={`Contact ${lightMode ? 'lightMode' : ''}`}>
      <section className="Contact__body">
        <form onSubmit={e => e.preventDefault()}>
          <div className={alert.name ? 'required alert' : 'required'}>
            <label htmlFor="name">Name</label>
            <input
              required
              autoFocus={true}
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={onChange}
            />
          </div>

          <div className={alert.email ? 'required alert' : 'required'}>
            <label htmlFor="email">E-mail</label>
            <input
              required
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={onChange}
            />
          </div>

          <div className={alert.message ? 'required alert' : 'required'}>
            <label htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              name="message"
              type="text"
              value={formData.message}
              onChange={onChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
