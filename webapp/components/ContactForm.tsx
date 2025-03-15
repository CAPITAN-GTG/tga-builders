"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    storeConsent: false,
    privacyConsent: false
  });

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format the number as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const inputClasses = "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 py-3 px-4 text-base text-gray-900 placeholder-gray-400";

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-cyan-600 font-semibold tracking-wide uppercase">GET CONNECTED</h4>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">CONTACT US</h2>
          <p className="mt-4 text-lg text-gray-600">
            Please fill out the form below and we will get back to you as soon as we can with
            a reply. Thank you.
          </p>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                maxLength={14}
                className={inputClasses}
                placeholder="(555) 555-5555"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message/Question
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y min-h-[120px]`}
                placeholder="Please type your message here..."
              />
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    name="storeConsent"
                    id="storeConsent"
                    required
                    checked={formData.storeConsent}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                </div>
                <label htmlFor="storeConsent" className="ml-3 text-sm text-gray-600">
                  I hereby consent to have this website store my submitted information so that they can respond to my inquiry.
                </label>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    id="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                </div>
                <label htmlFor="privacyConsent" className="ml-3 text-sm text-gray-600">
                  I hereby confirm that I have read and understood this website's Privacy Policy.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#17416E] hover:bg-white hover:text-[#17416E] hover:border hover:border-[#17416E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300 group"
              >
                Submit Form
                <Send className="ml-2 h-5 w-5 transition-transform duration-1000 group-hover:rotate-360" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 