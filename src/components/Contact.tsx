import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We're here to answer your questions and provide more information about our services.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-green-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p>Shree Siddhivinayak Ayurveda Panchakarma Center,<br /> Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar,<br /> New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005<br /> India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-green-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p>+91 9967282076</p>
                  <p>+91 9420249387</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-green-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p>contact@giganxt.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-green-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1XFNYqJcKy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/shreesiddhivinayakayurveda?igsh=dTNjdHVhNzNscnpj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://youtube.com/@dr.bhairavkulkarni?si=OAV1qLSk8BcGrxTj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=19.864266432338034,75.33609137897652&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
