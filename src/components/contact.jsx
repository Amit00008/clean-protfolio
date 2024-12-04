import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    setIsSending(true);
    setStatusMessage('');

    // EmailJS service, template, and user ID
    emailjs
      .sendForm(
        'amit098', // Replace with your service ID
        'template_a6wcsbs', // Replace with your template ID
        e.target, // The form element
        'ZE4hNW2-TRc2ojbeC' // Replace with your user ID
      )
      .then(
        (response) => {
          setIsSending(false);
          setStatusMessage('Message sent successfully!');
        },
        (error) => {
          setIsSending(false);
          setStatusMessage('Failed to send message, try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-darkBg text-textPrimary">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-primary"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <p
          className="text-lg text-textSecondary text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have any questions or want to collaborate? Feel free to reach out to me!
        </p>

        <div className="mt-12 max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-4 bg-primary text-white text-lg rounded-md shadow-md hover:bg-purple-700 transition"
                disabled={isSending}
              >
                {isSending ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="inline ml-2" />
                  </>
                )}
              </button>
            </div>

            {statusMessage && (
              <p className="text-center mt-4 text-lg text-textSecondary">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
