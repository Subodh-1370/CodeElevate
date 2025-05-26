import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or an API
    console.log("Email submitted:", email);
    setSuccessMessage("Thank you for subscribing!");
    setEmail(''); // Clear the input field
  };

  return (
    <section className="py-12 bg-gray-200 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Stay updated with the latest blog posts and coding resources.</p>
        </div>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 rounded-l-lg border border-gray-300 dark:border-gray-700" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Button type="submit" className="bg-primary text-white rounded-r-lg">Subscribe</Button>
        </form>
        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      </div>
    </section>
  );
}
