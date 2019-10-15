import React, { useState } from 'react';
import axios from 'axios';
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

  const [message, setMessage] = useState(null);

  const onChange = e => {
    setAlert({
      ...alert,
      [e.target.name]: false
    });
    setMessage(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newAlert = {};
    if (name.trim().length === 0) newAlert.name = true;
    if (email.trim().length === 0) newAlert.email = true;
    if (message.trim().length === 0) newAlert.message = true;
    const v = Object.values(newAlert);
    if (v.includes(true)) {
      setAlert({ ...alert, ...newAlert });
    } else {
      try {
        const { data } = await axios.post('/api/contact', formData);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setMessage(data.message);
      } catch (err) {
        console.error(err);
        setMessage(
          'Submit Failed, please verify that your e-mail address is correct!'
        );
      }
    }
  };

  return (
    <div className={`Contact ${lightMode ? 'lightMode' : ''}`}>
      <section className="Contact__body">
        <form onSubmit={e => e.preventDefault()}>
          {message ? (
            <header>{message}</header>
          ) : (
            <header>
              Please don't hesitate to send me your questions and comments!
            </header>
          )}
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
