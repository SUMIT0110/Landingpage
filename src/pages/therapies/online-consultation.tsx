import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video, Check } from 'lucide-react';
import Header from '../../components/Header';

const OnlineConsultation: React.FC = () => {
    const title = "Online Consultation";
    const description = "Experience authentic Ayurvedic consultations from the comfort of your home with our highly-rated online consultation services.";
    const imageUrl = "/src/asstes/Online_consultation.png";
    
    const consultationContent = {
        intro: "Our online consultation services bring the wisdom of Ayurveda directly to you, no matter where you are in the world. With excellent patient feedback and a commitment to personalized care, our virtual consultations provide the same authentic Ayurvedic guidance and treatment plans that have helped thousands of patients achieve remarkable results in chronic conditions.",
        whatIs: "Online consultations are secure, private video sessions with our experienced Ayurvedic doctors. These sessions allow for comprehensive assessment, personalized treatment recommendations, and ongoing support—all from the comfort and convenience of your home. Our digital platform maintains the personal connection that is essential to Ayurvedic care while eliminating geographical barriers.",
        benefits: "Our online consultations provide convenient access to expert Ayurvedic care, eliminate travel time and costs, offer flexible scheduling options, ensure privacy and comfort during consultations, and include comprehensive follow-up support with digital treatment plans and resources.",
        consultationTypes: [
            { name: "Initial Consultation", description: "A comprehensive 60-minute session for new patients to discuss health concerns and receive personalized Ayurvedic assessment." },
            { name: "Follow-up Consultation", description: "30-minute sessions to monitor progress, adjust treatment plans, and address any new concerns." },
            { name: "Specialized Condition Consultation", description: "In-depth sessions focused on specific chronic conditions like diabetes, arthritis, or digestive disorders." },
            { name: "Ayurvedic Diet & Lifestyle Consultation", description: "Guidance on daily routines, seasonal practices, and dietary adjustments based on your constitution." },
            { name: "Panchakarma Preparation", description: "Pre-treatment consultation to prepare for in-person Panchakarma therapy." },
            { name: "Herbal Remedy Consultation", description: "Specialized guidance on herbal formulations and supplements for your specific health needs." },
            { name: "Emergency Consultation", description: "Priority scheduling for urgent health concerns requiring immediate Ayurvedic guidance." }
        ],
        consultationProcess: [
            { name: "Booking", description: "Simple online scheduling through our secure patient portal with flexible time slots." },
            { name: "Pre-Consultation Form", description: "Comprehensive health questionnaire to help our doctors prepare for your session." },
            { name: "Video Consultation", description: "Face-to-face virtual meeting with our experienced Ayurvedic doctors via secure video platform." },
            { name: "Diagnosis & Assessment", description: "Traditional Ayurvedic assessment techniques adapted for the digital environment." },
            { name: "Treatment Plan", description: "Personalized recommendations sent digitally after your consultation." },
            { name: "Follow-up Care", description: "Ongoing support through messaging and scheduled follow-up consultations." }
        ],
        detailedBenefits: [
            "Convenience & Accessibility: Access expert Ayurvedic care from anywhere in the world, eliminating geographical barriers.",
            "Time & Cost Efficiency: Save on travel time and expenses while receiving the same quality care as in-person visits.",
            "Personalized Treatment: Receive customized Ayurvedic treatment plans tailored to your specific health needs and constitution.",
            "Privacy & Comfort: Discuss health concerns from the comfort and privacy of your own home environment.",
            "Continuity of Care: Maintain consistent treatment with the same doctor regardless of your location or travel schedule.",
            "Digital Resources: Access to electronic treatment plans, instructional videos, and educational materials.",
            "Flexible Scheduling: Book appointments at times that work for your schedule, including evening and weekend options."
        ],
        idealFor: [
            "Patients located far from our physical clinic or in different countries",
            "Individuals with mobility issues or transportation challenges",
            "Busy professionals with limited time for in-person appointments",
            "Those seeking second opinions on existing health conditions",
            "Patients with chronic conditions requiring regular monitoring",
            "International patients interested in authentic Ayurvedic consultation",
            "Anyone seeking preventive health guidance and constitutional assessment"
        ],
        whyChooseUs: [
            "Experienced Ayurvedic Doctors: Our physicians have 15+ years of experience in treating complex conditions.",
            "Highly Rated Service: Excellent feedback from patients worldwide who have experienced our online consultations.",
            "Comprehensive Care: Complete treatment plans including diet, lifestyle, herbs, and therapies.",
            "Secure Platform: HIPAA-compliant video consultation platform ensuring your privacy and data security.",
            "Multilingual Support: Consultations available in multiple languages to serve our diverse patient base."
        ]
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
                        src={imageUrl}
                        alt={title}
                        className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <div className="flex items-center text-sm uppercase tracking-widest text-green-300 mb-2">
                                <Video className="mr-2 animate-pulse" size={18} />
                                Ayurvedic Service
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl">{title}</h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-green-100 p-8 sm:p-10 space-y-10">
                    <Section title="Ayurvedic Care Without Boundaries" content={consultationContent.intro} />
                    
                    <Section title="What are Online Consultations?" content={consultationContent.whatIs} />
                    
                    <Section title="How Online Consultations Help" content={consultationContent.benefits} />
                    
                    <CardGrid title="Types of Online Consultations We Offer" items={consultationContent.consultationTypes} />
                    
                    <CardGrid title="Our Consultation Process" items={consultationContent.consultationProcess} />
                    
                    <ListGrid title="Benefits of Online Consultations" items={consultationContent.detailedBenefits} />
                    
                    <ListGrid 
                        title="Who Should Use Our Online Consultation Services?" 
                        items={consultationContent.idealFor} 
                        description="Online Consultations are ideal for:" 
                    />
                    
                    <ListGrid title="Why Choose Our Online Consultation Services?" items={consultationContent.whyChooseUs} />
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

export default OnlineConsultation;