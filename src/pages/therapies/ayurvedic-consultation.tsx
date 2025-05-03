import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Check, Clock, Users, Heart, Shield, Star } from 'lucide-react';
import Header from '../../components/Header';

const AyurvedicConsultation: React.FC = () => {
    const therapyData = {
        title: "Ayurvedic Consultation",
        description: "Unlike one-size-fits-all health checkups, an Ayurvedic consultation is a deep, individualized assessment that looks at your physical constitution, current imbalances, diet, lifestyle, and more.",
        imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        sections: {
            intro: {
                title: "What is an Ayurvedic Consultation?",
                content: "Unlike one-size-fits-all health checkups, an Ayurvedic consultation is a deep, individualized assessment that looks at your physical constitution (Prakriti), current imbalances (Vikriti), diet, digestion, elimination, sleep patterns, stress levels, and lifestyle habits."
            },
            plan: {
                title: "Your Personalized Wellness Plan",
                content: "Your Ayurvedic expert creates a tailored plan to restore balance through herbal remedies, dietary adjustments, lifestyle routines (Dinacharya), detox therapies (Panchakarma if needed), and yoga/meditation guidance."
            },
            session: {
                title: "What to Expect in Your First Session",
                items: [
                    { 
                        name: "Detailed Health Assessment", 
                        description: "Pulse diagnosis, tongue examination, and dosha evaluation" 
                    },
                    { 
                        name: "Discussion of Symptoms & Goals", 
                        description: "Understanding your concerns, lifestyle, and emotional health" 
                    },
                    { 
                        name: "Customized Health Plan", 
                        description: "Includes diet recommendations, herbal supplements, and daily rituals" 
                    },
                    { 
                        name: "Ongoing Support", 
                        description: "Optional follow-ups to refine your plan and monitor progress" 
                    }
                ]
            },
            benefits: {
                title: "Benefits of Ayurvedic Consultation",
                items: [
                    "Identify your unique body-mind type (Dosha)",
                    "Address root causes rather than just symptoms",
                    "Improve digestion, sleep, and immunity naturally",
                    "Develop sustainable lifestyle habits",
                    "Reduce dependency on medications",
                    "Long-term solutions for chronic conditions",
                    "Enhance mental clarity and energy levels"
                ]
            },
            idealFor: {
                title: "Who Should Get a Consultation?",
                description: "Ideal for individuals experiencing:",
                items: [
                    "Chronic health issues (digestive, skin, hormonal)",
                    "Recurrent fatigue, anxiety or sleep issues",
                    "Those wanting preventive, natural healthcare",
                    "Anyone interested in Ayurvedic self-care",
                    "People seeking holistic support alongside modern medicine"
                ]
            },
            whyChooseUs: {
                title: "Why Choose Our Consultations?",
                items: [
                    "Certified Ayurvedic doctors with 10+ years experience",
                    "Comprehensive yet compassionate assessments",
                    "Authentic approach based on classical texts",
                    "Clear, practical health guidance",
                    "Holistic integration of diet, herbs and lifestyle",
                    "Affordable packages for long-term care"
                ]
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
            <Header />
            <div className="container mx-auto px-4 sm:px-8 pt-24 pb-16">
                <Link to="/" className="relative inline-flex items-center mb-8 overflow-hidden text-green-700 hover:text-white transition-all duration-300 bg-transparent hover:bg-green-600 border border-green-600 rounded-lg px-4 py-2 group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                    <span className="relative mr-2 flex items-center justify-center">
                        <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                    </span>
                    <span className="relative font-medium">Back to Home</span>
                </Link>

                {/* Hero */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-10 border border-green-100">
                    <img
                        src={therapyData.imageUrl}
                        alt={therapyData.title}
                        className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <div className="flex items-center text-sm uppercase tracking-widest text-green-300 mb-2">
                                <Leaf className="mr-2 animate-pulse" size={18} />
                                Personalized Ayurveda
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl">{therapyData.title}</h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-green-100 p-8 sm:p-10 space-y-10">
                    <Section title={therapyData.sections.intro.title} content={therapyData.sections.intro.content} />
                    
                    <Section title={therapyData.sections.plan.title} content={therapyData.sections.plan.content} />
                    
                    <CardGrid title={therapyData.sections.session.title} items={therapyData.sections.session.items} />
                    
                    <ListGrid title={therapyData.sections.benefits.title} items={therapyData.sections.benefits.items} />
                    
                    <ListGrid 
                        title={therapyData.sections.idealFor.title} 
                        items={therapyData.sections.idealFor.items} 
                        description={therapyData.sections.idealFor.description} 
                    />
                    
                    <ListGrid title={therapyData.sections.whyChooseUs.title} items={therapyData.sections.whyChooseUs.items} />
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, content }: { title: string, content: string }) => (
    <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
);

const CardGrid = ({ title, items, description }: { title: string, items: { name: string, description: string }[], description?: string }) => (
    <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">{title}</h2>
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
                <div key={index} className="bg-green-50 border border-green-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-semibold text-green-700 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const ListGrid = ({ title, items, description }: { title: string, items: string[], description?: string }) => (
    <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">{title}</h2>
        {description && <p className="mb-3 text-gray-700">{description}</p>}
        <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-start">
                    <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                    <p className="ml-3 text-gray-700">{item}</p>
                </div>
            ))}
        </div>
    </div>
);

const CTA = ({ text, buttonText }: { text: string, buttonText: string }) => (
    <div className="text-center bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border border-green-100 shadow-inner">
        <h3 className="text-2xl font-bold text-green-800 mb-3">{text}</h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">Contact us to learn more or schedule an appointment with our experts.</p>
        <button 
            onClick={() => window.open('/appointment', '_blank')}
            className="relative inline-flex items-center justify-center overflow-hidden bg-green-600 text-white font-medium py-3 px-8 rounded-lg group"
        >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative flex items-center">
                {buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </span>
        </button>
    </div>
);

export default AyurvedicConsultation;