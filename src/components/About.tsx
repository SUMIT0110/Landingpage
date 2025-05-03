import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
        

                    {/* Image */}
                    <div className="md:w-1/2 animate-fade-left">
            <img 
              src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Ayurvedic treatment center" 
              className="rounded-3xl shadow-2xl w-full h-full object-cover object-top"
            />
          </div>
                  
          {/* Text Content */}
          <div className="md:w-1/2 bg-white/50 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl animate-fade-up">
            <h2 className="text-5xl font-extrabold text-green-800 mb-6">About Us</h2>
            <p className="text-md text-gray-700 mb-6 leading-relaxed text-justify">
              Shree Siddhivinayak Ayurveda Panchakarma Center, Aurangabad, has been practicing pure Ayurveda consultation and treatments for over 15 years. Thousands of patients have been successfully treated through authentic Ayurvedic methods, achieving remarkable results in chronic conditions such as Diabetes, Osteoarthritis, Obesity, Infertility, and major spine and joint disorders.
            </p>
            <p className="text-md text-gray-700 mb-10 leading-relaxed text-justify">
              Our mission is to restore balance and encourage natural healing through personalized Ayurvedic practices rooted in sustainability, purity, and care.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {[
                'Certified Ayurvedic doctors with 15+ years of experience',
                'Authentic therapies using organic, sustainably sourced herbs',
                'Customized treatment plans for long-term wellness and healing',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-gray-800 text-md">{feature}</p>
                </div>
              ))}
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default About;
