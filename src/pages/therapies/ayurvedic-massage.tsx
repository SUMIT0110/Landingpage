import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Check } from 'lucide-react';
import Header from '../../components/Header';

const AyurvedicMassage: React.FC = () => {
    const title = "Ayurvedic Massage";
    const description = "Ayurvedic massage, also known as Abhyanga, is a deeply relaxing and rejuvenating therapy that combines warm herbal oils, therapeutic touch, and ancient techniques to restore balance in body, mind, and soul.";
    const imageUrl = "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    
    const massageContent = {
        intro: "Ayurvedic massage, also known as Abhyanga, is a deeply relaxing and rejuvenating therapy that combines warm herbal oils, therapeutic touch, and ancient techniques to restore balance in body, mind, and soul. Rooted in the 5,000-year-old science of Ayurveda, it promotes overall wellness, detoxification, and inner harmony.",
        whatIs: "Ayurvedic massage is a full-body therapy using warm, dosha-specific herbal oils. The massage follows energy channels (nadis) and vital points (marma points), helping to release physical and emotional blockages. The oils penetrate deep into the tissues, nourishing cells and flushing out toxins.",
        types: [
            { name: "Abhyanga", description: "Traditional full-body massage with warm medicated oils." },
            { name: "Shiro Abhyanga", description: "Head, neck, and shoulder massage for stress and tension relief." },
            { name: "Padabhyanga", description: "Foot massage that stimulates nerve endings and promotes better sleep." },
            { name: "Marma Massage", description: "Gentle stimulation of marma points to balance energy flow." },
            { name: "Udvartana", description: "Dry herbal powder massage for fat reduction and skin exfoliation." },
            { name: "Pinda Sweda", description: "Massage using warm herbal poultices for pain and inflammation." }
        ],
        benefits: [
            "Relieves stress, anxiety, and fatigue",
            "Improves blood and lymphatic circulation",
            "Enhances skin tone and texture",
            "Promotes better sleep and relaxation",
            "Detoxifies the body naturally",
            "Relieves muscle stiffness and joint pain",
            "Balances the body's doshas (Vata, Pitta, Kapha)"
        ],
        idealFor: [
            "High stress or burnout",
            "Chronic fatigue or sleep issues",
            "Muscle pain or stiffness",
            "Poor digestion or sluggish metabolism",
            "Dull, dry, or aging skin",
            "General desire to detox and rejuvenate"
        ],
        session: [
            { name: "Consultation", description: "Our therapist evaluates your body type (Prakriti) and current imbalance (Vikriti)." },
            { name: "Customized Oils", description: "Specially chosen herbal oils suited to your dosha." },
            { name: "Therapeutic Massage", description: "Full-body or targeted therapy based on your needs." },
            { name: "Post-Therapy Rest", description: "Time to allow the oils to penetrate and the body to absorb the benefits." }
        ],
        whyChooseUs: [
            "Highly trained Ayurvedic therapists",
            "Authentic, freshly prepared herbal oils",
            "Personalized therapies based on ancient Ayurvedic texts",
            "Calm, spa-like ambiance with traditional healing energy",
            "Clean, hygienic treatment rooms for your comfort"
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
                                <Leaf className="mr-2 animate-pulse" size={18} />
                                Ayurvedic Therapy
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl">{title}</h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-green-100 p-8 sm:p-10 space-y-10">
                    <Section title="Reconnect With Inner Balance" content={massageContent.intro} />
                    
                    <Section title="What is Ayurvedic Massage?" content={massageContent.whatIs} />
                    
                    <CardGrid title="Types of Ayurvedic Massage We Offer" items={massageContent.types} />
                    
                    <ListGrid title="Benefits of Ayurvedic Massage" items={massageContent.benefits} />
                    
                    <ListGrid 
                        title="Who Can Benefit From It?" 
                        items={massageContent.idealFor} 
                        description="Ayurvedic massage is ideal for those experiencing:" 
                    />
                    
                    <CardGrid 
                        title="What to Expect in a Session" 
                        items={massageContent.session} 
                    />
                    
                    <ListGrid title="Why Choose Our Ayurvedic Massage Services?" items={massageContent.whyChooseUs} />
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

export default AyurvedicMassage;