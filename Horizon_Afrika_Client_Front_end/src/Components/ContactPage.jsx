import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto my-8 p-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Our Contacts</h3>
          <div className="flex items-center gap-2 mb-3">
            <Phone className="text-orange-500" size={20} />
            <span>+254 758 391642</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="text-orange-500" size={20} />
            <div>
              <p>KENYA</p>
              <p>Behind IFG, 10th st</p>
              <p>Block E Room 5 101</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Send Us A Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="email" placeholder="Email" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="tel" placeholder="Phone" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <textarea placeholder="Leave a Comment" rows={4} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-all">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder for Navbar */}
      <main>
        <div className="relative h-72 flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1920&q=80")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2">Contact The Travel Pros</h1>
            <p className="text-lg">Your journey starts here - connect with us to start planning your next adventure!</p>
          </div>
        </div>
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;
