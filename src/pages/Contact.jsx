import React, { useState } from 'react';
import Header from '../../src/components/common/Header';
import Footer from '../../src/components/common/Footer';
import Button from '../../src/components/ui/Button';
import InputField from '../../src/components/ui/InputField';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f9f9fb] py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[97px] font-light text-[#030d28] capitalize mb-4 md:mb-8">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl leading-6 text-[#030d287f] mb-8 md:mb-12 max-w-4xl">
            Have questions about our services or want to learn more about how we can support you? We're here to help. Reach out to us through any of the following channels or fill out the contact form below.
          </p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl leading-tight md:leading-[43px] font-medium text-[#030d28] capitalize mb-6 md:mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_location.svg" alt="location" className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[#030d28] mb-2">Our Location</h3>
                    <p className="text-sm md:text-base leading-6 text-[#030d287f]">
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_phone.svg" alt="phone" className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[#030d28] mb-2">Phone Number</h3>
                    <p className="text-sm md:text-base leading-6 text-[#030d287f]">
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_mail.svg" alt="email" className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[#030d28] mb-2">Email Address</h3>
                    <p className="text-sm md:text-base leading-6 text-[#030d287f]">
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/images/img_clock.svg" alt="hours" className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-[#030d28] mb-2">Working Hours</h3>
                    <p className="text-sm md:text-base leading-6 text-[#030d287f]">
                      Monday - Friday:<br />
                      Saturday: <br />
                      Sunday:
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 md:mt-12">
                <h3 className="text-lg md:text-xl font-medium text-[#030d28] mb-4 md:mb-6">Follow Us</h3>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center hover:bg-[#f36a34] transition-colors">
                    <img src="/images/img_facebook.svg" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center hover:bg-[#f36a34] transition-colors">
                    <img src="/images/img_twitter.svg" alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center hover:bg-[#f36a34] transition-colors">
                    <img src="/images/img_linkedin.svg" alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-[#f9f9fb] rounded-full flex items-center justify-center hover:bg-[#f36a34] transition-colors">
                    <img src="/images/img_instagram.svg" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f9f9fb] rounded-[20px] md:rounded-[30px] p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl leading-tight md:leading-[43px] font-medium text-[#030d28] capitalize mb-6 md:mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-[#030d28] mb-2">
                    Your Name
                  </label>
                  <InputField
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e7e7ee] focus:outline-none focus:border-[#f36a34]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-[#030d28] mb-2">
                    Email Address
                  </label>
                  <InputField
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e7e7ee] focus:outline-none focus:border-[#f36a34]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm md:text-base font-medium text-[#030d28] mb-2">
                    Subject
                  </label>
                  <InputField
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e7e7ee] focus:outline-none focus:border-[#f36a34]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-[#030d28] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                    className="w-full h-32 px-4 py-3 rounded-lg border border-[#e7e7ee] focus:outline-none focus:border-[#f36a34] resize-none text-sm md:text-base"
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  variant="primary" 
                  className="w-full bg-[#f36a34] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium capitalize text-sm md:text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-24 px-4 md:px-20 bg-[#f9f9fb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl leading-tight md:leading-[43px] font-medium text-[#030d28] capitalize mb-6 md:mb-8 text-center">
            Find Us
          </h2>
          <div className="h-[300px] md:h-[400px] bg-[#e7e7ee] rounded-[20px] md:rounded-[30px] overflow-hidden">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-full flex items-center justify-center text-[#030d287f] text-sm md:text-base">
              Map will be displayed here
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;