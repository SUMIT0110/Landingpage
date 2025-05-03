import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import BackToTop from '../components/BackToTop';

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <>
      <Header />
      <main className="pt-20 bg-green-50">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="relative inline-flex items-center mb-8 overflow-hidden text-green-700 hover:text-white transition-all duration-300 bg-transparent hover:bg-green-600 border border-green-600 rounded-lg px-4 py-2 group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative mr-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            <span className="relative font-medium">Back to Home</span>
          </Link>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
            <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Privacy Policy</h1>
            <p className="text-gray-600 mb-6 text-center">Effective Date: {formattedDate}</p>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                At Shree Siddhivinayak Ayurveda Panchakarma Center, we are committed to protecting your privacy. 
                This Privacy Policy outlines how we collect, use, and safeguard your personal information when you 
                visit our website or interact with us.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><span className="font-medium">Personal Information:</span> Name, phone number, email address, and any other details you voluntarily provide through contact forms or appointment bookings.</li>
                <li><span className="font-medium">Health Information:</span> If provided via forms for consultations, we may collect information regarding your health condition for the purpose of offering ayurvedic treatments.</li>
                <li><span className="font-medium">Usage Data:</span> IP address, browser type, device information, pages visited, and time spent on our site (collected via cookies and analytics tools).</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Respond to inquiries and provide requested services.</li>
                <li>Schedule and manage appointments.</li>
                <li>Improve our website and service offerings.</li>
                <li>Send updates or promotional materials (only if you've opted in).</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="mb-6">
                We may use cookies and similar tracking tools to enhance your browsing experience and analyze site traffic. 
                You can disable cookies through your browser settings.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, rent, or share your personal information with third parties, except:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>With your explicit consent.</li>
                <li>To comply with legal obligations.</li>
                <li>With trusted service providers who assist us in operating the website, under confidentiality agreements.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">5. Data Security</h2>
              <p className="mb-6">
                We take reasonable technical and organizational precautions to protect your information from unauthorized access, 
                misuse, or disclosure. However, no online transmission is 100% secure.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us at <span className="text-green-700">info@shreesiddhivinayak.com</span>.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">7. Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to other websites. We are not responsible for the privacy practices or content of such external sites.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">8. Children's Privacy</h2>
              <p className="mb-6">
                Our services are not intended for children under 13. We do not knowingly collect data from children without parental consent.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">10. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="pl-6 mb-6 space-y-2">
                <p><span className="inline-block w-6"><i className="fas fa-envelope text-green-700"></i></span> info@shreesiddhivinayak.com</p>
                <p><span className="inline-block w-6"><i className="fas fa-phone text-green-700"></i></span> +91 9967282076</p>
                <p><span className="inline-block w-6"><i className="fas fa-hospital text-green-700"></i></span> Shree Siddhivinayak Ayurveda Panchakarma Center, Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar, New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005 India</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;