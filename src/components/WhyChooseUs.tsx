import React from 'react';
import FeatureCard from './FeatureCard';
import { UserRound, Leaf, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Experience holistic healing with our authentic Ayurvedic treatments, tailored by experts who truly care about your wellbeing.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500">
            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition">
              <UserRound className="text-green-700 group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Experienced Doctors</h3>
            <p className="text-center text-gray-600">
              Our senior Ayurvedic practitioners bring decades of deep clinical experience and compassion to every consultation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500">
            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition">
              <Leaf className="text-green-700 group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Authentic Treatments</h3>
            <p className="text-center text-gray-600">
              Every therapy follows true classical Ayurveda using organic herbs, ensuring purity and lasting wellness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500">
            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition">
              <Heart className="text-green-700 group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Personalized Care</h3>
            <p className="text-center text-gray-600">
              Each healing plan is customized to suit your individual body type, lifestyle, and wellness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
