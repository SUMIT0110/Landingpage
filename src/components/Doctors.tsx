import React from 'react';
import { FaAward, FaUserMd, FaBookMedical, FaLinkedin } from 'react-icons/fa';
import doc1Image from '../asstes/doc1.png';
import doc2Image from '../asstes/doc2.png';

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Bhairav Kulkarni',
      specialization: 'Ayurvedic Physician & Panchakarma Specialist',
      image: doc1Image,
      description: 'Director of Shree Siddhivinayak Ayurveda with 15+ years experience. Specializes in chronic diseases like Diabetes, Osteoarthritis, and Spine disorders. International speaker with 200+ conferences.',
      qualifications: 'BAMS, MD (Kayachikitsa), Ph.D (Scholar)',
      achievements: '33+ research papers, 14 National & 24 International Awards',
      patents: '2 patents in herbal formulations'
    },
    {
      name: 'Dr. Yashashree Kulkarni',
      specialization: 'Ayurvedic Consultant & Research Specialist',
      image: doc2Image,
      description: 'Expert in Rognidan with extensive research experience. Published multiple papers on Ayurvedic treatments for osteoporosis and diabetes management.',
      qualifications: 'BAMS, MD (Rognidan)',
      achievements: 'Recipient of Health Excellence Awards',
      research: '5+ published research papers in international journals'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-green-800 mb-4">Meet Our Experts</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leaders in Ayurvedic medicine, committed to your holistic wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-green-300 transition-all duration-500 border border-green-100 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/3 h-80 md:h-auto overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="md:w-2/3 bg-gradient-to-r from-green-800 to-green-700 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{doctor.name}</h3>
                  <p className="text-green-200 text-lg mb-4">{doctor.specialization}</p>
                  <div className="flex space-x-3 mt-2">
                    <a href="https://www.linkedin.com/in/dr-bhairav-kulkarni-tawshikar-a7635420?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <p className="text-gray-700 text-md leading-relaxed">{doctor.description}</p>

                <div className="flex items-center gap-3 text-green-700 font-semibold">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaUserMd size={18} />
                  </div>
                  <span>Qualifications</span>
                </div>
                <p className="text-gray-800 ml-10 border-l-2 border-green-200 pl-4">{doctor.qualifications}</p>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-sm space-y-4">
                  <div className="flex items-center gap-3 text-green-700 font-semibold">
                    <div className="bg-green-100 p-2 rounded-full">
                      <FaAward size={18} />
                    </div>
                    <span>Achievements</span>
                  </div>
                  <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">{doctor.achievements}</p>

                  {doctor.patents && (
                    <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">• {doctor.patents}</p>
                  )}
                  {doctor.research && (
                    <div className="flex items-center gap-3 text-green-700 font-semibold mt-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <FaBookMedical size={18} />
                      </div>
                      <span>Research</span>
                    </div>
                  )}
                  {doctor.research && (
                    <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">{doctor.research}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
