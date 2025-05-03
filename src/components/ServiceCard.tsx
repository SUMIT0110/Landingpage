import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  const navigate = useNavigate();
  
  const handleLearnMore = () => {
    // Scroll to top instantly before navigation
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    // Map the title to the correct route
    let route = '/';
    if (title === "Panchakarma Therapy") route = '/therapies/panchakarma';
    else if (title === "Ayurvedic Massage") route = '/therapies/ayurvedic-massage';
    else if (title === "Shirodhara") route = '/therapies/shirodhara';
    else if (title === "Herbal Remedies") route = '/therapies/herbal-remedies';
    else if (title === "Ayurvedic Consultation") route = '/therapies/ayurvedic-consultation';
    else if (title === "Yoga & Meditation") route = '/therapies/yoga-meditation';
    
    navigate(route);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-green-100/50">
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={imageUrl}
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-green-50/30">
        <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors duration-300">{title}</h3>
        <p className="mb-5 text-gray-600 line-clamp-3">
          {description}
        </p>
        <button
          onClick={handleLearnMore}
          className="relative inline-flex items-center text-green-700 font-medium overflow-hidden group-hover:text-green-600 transition-colors duration-300"
        >
          <span className="relative z-10 flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;