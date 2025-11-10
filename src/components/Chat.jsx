import React, { useState } from "react";
import "./Chat.css";
import { MessageCircle, MoveRight, X } from "lucide-react";

const Chat = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSubmitMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');
    // Replace with actual API call
    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="chat-icon">
        <button type="button" className="chat-toggler" onClick={togglePopup}>
          <MessageCircle size={24} />
        </button>
      </div>
      <div id="chat-popup" className={`chat-popup ${isPopupVisible ? 'popup-visible' : ''}`}>
        <div className="popup-inner">
          <div className="close-chat" onClick={closePopup}>
            <X size={24} />
          </div>
          <div className="chat-form">
            <p>
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>
            <form
              onSubmit={handleSubmit}
              className="contact-form-validated"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Text"
                  value={formData.message}
                  onChange={handleInputChange}
                  required=""
                ></textarea>
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="thm-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Now'}
                  <MoveRight size={16} />
                </button>
              </div>
              <div className="result">
                {submitMessage && <p>{submitMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
