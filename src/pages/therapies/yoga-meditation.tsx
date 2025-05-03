import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Check } from 'lucide-react';
import Header from '../../components/Header';

const YogaMeditation: React.FC = () => {
    const title = "Yoga & Meditation";
    const description = "Yoga and Meditation are ancient practices that promote physical health, mental clarity, and emotional well-being.";
    const imageUrl = "https://images.pexels.com/photos/8436589/pexels-photo-8436589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    
    const yogaContent = {
        intro: "Yoga and Meditation are ancient practices that promote physical health, mental clarity, and emotional well-being. Rooted in the wisdom of Ayurveda, these practices work in harmony to help you achieve deep relaxation, increased energy, improved flexibility, and greater mindfulness. Whether you are new to these practices or have been practicing for years, our guided Yoga and Meditation sessions are designed to help you reconnect with your true self.",
        whatIs: "Yoga is a holistic discipline that involves physical postures (asanas), breathing techniques (pranayama), and meditation to improve overall health and wellness. Meditation is a mental discipline that helps to calm the mind, reduce stress, and promote a state of peace and clarity. It is a powerful tool for cultivating mindfulness and emotional resilience.",
        benefits: "Together, Yoga & Meditation help to improve physical strength, flexibility, and posture, enhance mental clarity and concentration, reduce stress, anxiety, and emotional tension, cultivate a deeper connection between mind, body, and spirit, and promote self-awareness and mindfulness in everyday life.",
        yogaTypes: [
            { name: "Hatha Yoga", description: "A gentle, slow-paced yoga style that focuses on basic postures and breathing techniques." },
            { name: "Vinyasa Yoga", description: "A dynamic, flow-based practice that synchronizes movement with breath." },
            { name: "Ashtanga Yoga", description: "A rigorous, structured series of postures and breathing exercises." },
            { name: "Restorative Yoga", description: "A gentle, restorative practice using props to support the body and encourage relaxation." },
            { name: "Kundalini Yoga", description: "A practice that combines movements, mantras, and meditation to awaken spiritual energy." },
            { name: "Yin Yoga", description: "A slower practice that targets deep connective tissues through long-held postures." },
            { name: "Prenatal Yoga", description: "A practice specifically designed for expectant mothers to enhance relaxation and well-being during pregnancy." }
        ],
        meditationTypes: [
            { name: "Mindfulness Meditation", description: "Cultivating awareness of the present moment to reduce stress and enhance clarity." },
            { name: "Guided Meditation", description: "Led by an instructor, where you are guided through visualizations or affirmations." },
            { name: "Mantra Meditation", description: "Focusing on a specific sound or word to enhance concentration and calm the mind." },
            { name: "Loving-Kindness Meditation", description: "Focusing on cultivating feelings of compassion and kindness toward yourself and others." },
            { name: "Breath Awareness Meditation", description: "Focusing solely on the breath to clear the mind and bring a sense of calm." },
            { name: "Body Scan Meditation", description: "A technique to promote relaxation by focusing attention on different parts of the body." }
        ],
        detailedBenefits: [
            "Reduces Stress & Anxiety: Both practices help activate the body's relaxation response, reducing stress and promoting a calm, centered mind.",
            "Enhances Flexibility & Strength: Regular yoga practice improves flexibility, builds strength, and increases energy levels.",
            "Improves Sleep Quality: By calming the mind and relieving physical tension, yoga and meditation promote restful sleep.",
            "Boosts Mental Clarity: Meditation sharpens focus, improves decision-making, and fosters emotional balance.",
            "Supports Heart Health: Yoga helps reduce high blood pressure, improve circulation, and support heart health.",
            "Promotes Emotional Balance: Meditation aids in managing emotional stress, helping you maintain a more balanced and peaceful emotional state.",
            "Boosts Immunity: Regular yoga practice can help strengthen the immune system and improve overall health."
        ],
        idealFor: [
            "Beginners and experienced practitioners alike",
            "Those looking to reduce stress and improve mental clarity",
            "Individuals seeking a holistic approach to physical and mental wellness",
            "Pregnant women seeking relaxation and stress relief",
            "People with chronic conditions such as insomnia, anxiety, or muscular tension",
            "Anyone looking to achieve greater mindfulness and spiritual growth"
        ],
        whyChooseUs: [
            "Experienced and Certified Instructors: Our instructors are skilled, certified professionals dedicated to your well-being.",
            "Personalized Sessions: We cater to individual needs and offer classes that suit all levels.",
            "Holistic Approach: Combining the wisdom of Ayurveda with yoga and meditation for complete healing.",
            "Calm, Peaceful Environment: Our serene space is designed to promote relaxation and mental clarity.",
            "Flexible Class Timings: We offer classes at convenient times to fit your schedule."
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
                    <Section title="Achieve Balance and Inner Peace" content={yogaContent.intro} />
                    
                    <Section title="What is Yoga & Meditation?" content={yogaContent.whatIs} />
                    
                    <Section title="How Yoga & Meditation Help" content={yogaContent.benefits} />
                    
                    <CardGrid title="Types of Yoga We Offer" items={yogaContent.yogaTypes} />
                    
                    <CardGrid title="Meditation Techniques We Offer" items={yogaContent.meditationTypes} />
                    
                    <ListGrid title="Benefits of Yoga & Meditation" items={yogaContent.detailedBenefits} />
                    
                    <ListGrid 
                        title="Who Should Join Our Yoga & Meditation Sessions?" 
                        items={yogaContent.idealFor} 
                        description="Yoga & Meditation are suitable for:" 
                    />
                    
                    <ListGrid title="Why Choose Our Yoga & Meditation Services?" items={yogaContent.whyChooseUs} />
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

export default YogaMeditation;