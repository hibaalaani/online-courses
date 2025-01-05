// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_API_URL_USER_BASE_URL}/contact/`, {
//         name,
//         email,
//         message,
//       });
//       setSuccess(true);
//     } catch (err) {
//       alert('Failed to submit your message. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
//         <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6 sm:p-8">
//       <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         className="w-full p-3 mb-4 border rounded"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full p-3 mb-4 border rounded"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <textarea
//         placeholder="Message"
//         className="w-full p-3 mb-4 border rounded"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button
//         onClick={handleSubmit}
//         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//       >
//         Submit
//       </button>
//       {success && <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>}
//     </div></div>
//   );
// };

// export default Contact;





import axios from 'axios';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',

    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL_USER_BASE_URL}/contact/`, formData);

      if (response.status==201) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 px-6 lg:px-20 py-10 flex items-center justify-center">
      <div className="m-20 lg:w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Have a question or need assistance? We're here to help! Fill out the form below, and we’ll get back to you soon.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>

        

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
