import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Check, Shield, Star, Heart, Clock } from 'lucide-react';
import Header from '../../components/Header';

const Panchakarma: React.FC = () => {
    const title = "Panchakarma";
    const description = "Panchakarma is a cornerstone of Ayurvedic healing—a comprehensive detoxification and rejuvenation therapy aimed at restoring harmony in the body, mind, and spirit.";
    const imageUrl = "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const panchakarmaContent = {
        intro: "Panchakarma is a cornerstone of Ayurvedic healing—a comprehensive detoxification and rejuvenation therapy aimed at restoring harmony in the body, mind, and spirit. Rooted in ancient Indian wisdom, it offers a natural way to cleanse the body of accumulated toxins (Ama), balance the doshas (Vata, Pitta, Kapha), and promote long-term well-being.",
        therapies: [
            { name: "Vamana (Therapeutic Emesis)", description: "Controlled vomiting to expel toxins from the stomach." },
            { name: "Virechana (Purgation)", description: "Cleansing of the intestines to remove excess Pitta toxins." },
            { name: "Basti (Medicated Enema)", description: "Herbal enemas to cleanse the colon and balance Vata." },
            { name: "Nasya (Nasal Cleansing)", description: "Administration of herbal oils through the nose to purify the head region." },
            { name: "Raktamokshana (Bloodletting)", description: "Detoxification of the blood (used selectively and traditionally under expert supervision)." }
        ],
        benefits: [
            "Deep detoxification at physical and mental levels",
            "Strengthens the immune system",
            "Improves digestion and metabolism",
            "Enhances skin glow and vitality",
            "Reduces stress and promotes mental clarity",
            "Reverses early signs of aging and lifestyle disorders"
        ],
        idealFor: [
            "Digestive problems (bloating, constipation, indigestion)",
            "Stress, anxiety, or sleep disorders",
            "Skin conditions like acne, psoriasis, or eczema",
            "Hormonal imbalances",
            "Lifestyle diseases (diabetes, obesity, etc.)",
            "Seasonal transitions or post-illness recovery"
        ],
        process: [
            { name: "Poorva Karma (Preparation)", description: "Includes oleation (internal and external oil therapy) and sweating to loosen toxins." },
            { name: "Pradhana Karma (Main Procedures)", description: "The five detox therapies customized to your dosha imbalance." },
            { name: "Paschat Karma (Post-Care)", description: "A rejuvenating diet, lifestyle guidance, and herbal support to restore balance." }
        ],
        whyChooseUs: [
            "Experienced Ayurvedic doctors and certified therapists",
            "Hygienic, peaceful, and healing environment",
            "Use of authentic herbal oils and medicines",
            "Personalized treatment plans based on your body constitution",
            "Holistic follow-up care for lasting results"
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
                    <Section title="What is Panchakarma?" content={panchakarmaContent.intro} />
                    
                    <CardGrid title="The Five Therapies" items={panchakarmaContent.therapies} />
                    
                    <ListGrid title="Benefits of Panchakarma" items={panchakarmaContent.benefits} />
                    
                    <ListGrid 
                        title="Who Should Consider Panchakarma?" 
                        items={panchakarmaContent.idealFor} 
                        description="Panchakarma is ideal for individuals experiencing:" 
                    />
                    
                    <CardGrid 
                        title="The Panchakarma Process" 
                        items={panchakarmaContent.process} 
                        description="Our Panchakarma program follows a personalized, step-by-step approach:" 
                    />
                    
                    <ListGrid title="Why Choose Us for Panchakarma?" items={panchakarmaContent.whyChooseUs} />
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

export default Panchakarma;