import React from 'react';
import ServiceCard, { serviceData } from './ServiceCard';
import { Leaf } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="therapies" className="py-24 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-green-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center bg-green-100/50 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            <span>Holistic Healing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
            Our <span className="text-green-600">Therapies</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of authentic Ayurvedic treatments and therapies to promote healing, balance, and overall wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;