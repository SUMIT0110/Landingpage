import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Check } from 'lucide-react';
import Header from '../../components/Header';

const HerbalRemedies: React.FC = () => {
    const title = "Herbal Remedies";
    const description = "Herbal Remedies are an essential part of Ayurveda—rooted in the belief that nature provides everything the body needs to heal, balance, and thrive.";
    const imageUrl = "https://images.pexels.com/photos/6663467/pexels-photo-6663467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    
    const herbalContent = {
        intro: "Herbal Remedies are an essential part of Ayurveda—rooted in the belief that nature provides everything the body needs to heal, balance, and thrive. Carefully formulated from medicinal plants, roots, leaves, and minerals, these remedies work synergistically with your body to treat the root cause of illness rather than just its symptoms.",
        whatIs: "Ayurvedic herbal remedies are plant-based formulations designed to restore balance to your body's doshas—Vata, Pitta, and Kapha. Each remedy is personalized according to your constitution (Prakriti) and current imbalance (Vikriti), offering natural support for immunity, digestion, mental health, skin, and more.",
        types: [
            { name: "Herbal Powders (Churna)", description: "Finely ground herbs taken with water, honey, or ghee" },
            { name: "Tablets and Capsules", description: "Convenient form for consistent dosing" },
            { name: "Decoctions (Kashayam)", description: "Concentrated liquid extracts of herbs" },
            { name: "Herbal Teas", description: "Gentle infusions for daily consumption" },
            { name: "Medicated Ghee or Oils", description: "For both internal and external application" }
        ],
        commonHerbs: [
            { name: "Ashwagandha", description: "Adaptogen that reduces stress and boosts energy" },
            { name: "Triphala", description: "Detoxifies the digestive system and promotes regularity" },
            { name: "Brahmi", description: "Enhances brain function, memory, and mental clarity" },
            { name: "Neem", description: "Purifies blood and supports skin health" },
            { name: "Turmeric (Haridra)", description: "Anti-inflammatory and antioxidant properties" },
            { name: "Amla (Indian Gooseberry)", description: "Boosts immunity and rejuvenates tissues" },
            { name: "Shatavari", description: "Supports hormonal balance and female health" },
            { name: "Guduchi (Giloy)", description: "Immunity booster and detoxifier" }
        ],
        benefits: [
            "Naturally boosts immunity and vitality",
            "Helps manage chronic conditions like diabetes, hypertension, PCOS",
            "Improves digestion and metabolism",
            "Supports skin clarity and anti-aging",
            "Balances hormones and nervous system",
            "Detoxifies the liver, blood, and lymphatic system",
            "Enhances mental clarity and emotional balance"
        ],
        idealFor: [
            "Low immunity or frequent infections",
            "Digestive issues (constipation, acidity, bloating)",
            "Skin disorders (eczema, acne, psoriasis)",
            "Stress, anxiety, or poor focus",
            "Hormonal imbalances or reproductive issues",
            "Chronic fatigue or low energy levels"
        ],
        consultation: [
            { name: "Dosha Evaluation", description: "We assess your constitution and health condition." },
            { name: "Customized Prescription", description: "You receive a tailored set of herbs and dosage instructions." },
            { name: "Follow-Up", description: "Regular guidance and monitoring to ensure effectiveness and safety." }
        ],
        whyChooseUs: [
            "Certified Ayurvedic doctors and herbalists",
            "Use of authentic, sustainably sourced herbs",
            "Remedies prepared fresh on-site or by trusted Ayurvedic pharmacies",
            "No harmful chemicals, preservatives, or additives",
            "Personal guidance and education on lifestyle, diet, and detox"
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
                    <Section title="Healing Through Nature's Wisdom" content={herbalContent.intro} />
                    
                    <Section title="What are Ayurvedic Herbal Remedies?" content={herbalContent.whatIs} />
                    
                    <CardGrid title="These remedies are typically consumed as:" items={herbalContent.types} />
                    
                    <CardGrid title="Common Herbal Remedies We Use" items={herbalContent.commonHerbs} />
                    
                    <ListGrid title="Benefits of Herbal Remedies" items={herbalContent.benefits} />
                    
                    <ListGrid 
                        title="Who Should Consider Herbal Remedies?" 
                        items={herbalContent.idealFor} 
                        description="Ideal for individuals suffering from:" 
                    />
                    
                    <CardGrid 
                        title="What to Expect During Your Consultation" 
                        items={herbalContent.consultation} 
                    />
                    
                    <ListGrid title="Why Choose Our Herbal Remedies?" items={herbalContent.whyChooseUs} />
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

export default HerbalRemedies;