import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import BackToTop from '../components/BackToTop';

const TermsOfService: React.FC = () => {
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
            <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Terms of Service</h1>
            <p className="text-gray-600 mb-6 text-center">Effective Date: {formattedDate}</p>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                Welcome to Shree Siddhivinayak Ayurveda Panchakarma Center. These Terms of Service govern your use of our website 
                and services. By accessing or using our website, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, please do not use our website or services.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">2. Services Description</h2>
              <p className="mb-6">
                Shree Siddhivinayak Ayurveda Panchakarma Center provides Ayurvedic consultations, treatments, and therapies. 
                Our website offers information about these services and allows users to book appointments. 
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">When using our website and services, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and complete information when filling out forms or making appointments.</li>
                <li>Use the website and services only for lawful purposes.</li>
                <li>Not engage in any activity that could harm, disable, or impair the website's functionality.</li>
                <li>Respect the intellectual property rights associated with our content.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">4. Medical Disclaimer</h2>
              <p className="mb-6">
                The information provided on our website is for general informational purposes only and is not intended as medical advice. 
                Ayurvedic treatments should be administered by qualified practitioners. Always consult with a healthcare professional 
                before starting any treatment program, especially if you have existing health conditions.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">5. Appointment Booking and Cancellation</h2>
              <p className="mb-6">
                When booking appointments through our website, please provide accurate information. We request at least 24 hours' notice 
                for cancellations. Repeated no-shows or late cancellations may result in restrictions on future bookings.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">6. Intellectual Property</h2>
              <p className="mb-6">
                All content on this website, including text, graphics, logos, images, and software, is the property of 
                Shree Siddhivinayak Ayurveda Panchakarma Center and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express permission.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="mb-6">
                Shree Siddhivinayak Ayurveda Panchakarma Center and its affiliates shall not be liable for any direct, indirect, incidental, 
                special, or consequential damages resulting from the use or inability to use our services or website. 
                We do not guarantee that our website will be error-free or uninterrupted.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">8. Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites. These links are provided for convenience only. 
                We have no control over the content of these sites and assume no responsibility for any content, privacy policies, 
                or practices of third-party websites.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">9. Governing Law</h2>
              <p className="mb-6">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. 
                Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">10. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. 
                Your continued use of the website after any changes indicates your acceptance of the modified Terms.
              </p>
              
              <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">11. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
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

export default TermsOfService;