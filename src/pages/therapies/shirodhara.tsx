import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Check } from 'lucide-react';
import Header from '../../components/Header';

const Shirodhara: React.FC = () => {
    const title = "Shirodhara";
    const description = "Shirodhara is one of the most soothing and powerful Ayurvedic therapies, involving the continuous flow of warm herbal oil over the forehead—specifically on the Ajna chakra or 'third eye'.";
    const imageUrl = "https://images.pexels.com/photos/3998006/pexels-photo-3998006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    
    const shirodharaContent = {
        intro: "Shirodhara is one of the most soothing and powerful Ayurvedic therapies, involving the continuous flow of warm herbal oil over the forehead—specifically on the Ajna chakra or 'third eye.' This unique treatment calms the nervous system, relieves mental tension, and nurtures emotional well-being, making it ideal for those seeking deep mental and spiritual relaxation.",
        whatIs: "Derived from two Sanskrit words—Shiro (head) and Dhara (flow)—Shirodhara is a traditional Ayurvedic therapy where a steady stream of medicated oil or other liquids is gently poured onto the center of the forehead. This rhythmic, focused flow induces a meditative state and promotes healing of the nervous and endocrine systems.",
        types: [
            { name: "Taila Dhara", description: "Medicated oil (most common)" },
            { name: "Ksheera Dhara", description: "Herbal milk" },
            { name: "Takra Dhara", description: "Medicated buttermilk" },
            { name: "Jala Dhara", description: "Herbal decoctions or water" }
        ],
        benefits: [
            "Deep relaxation and stress relief",
            "Improves sleep and treats insomnia",
            "Alleviates anxiety, depression, and emotional imbalance",
            "Enhances mental clarity and concentration",
            "Balances hormones and stabilizes mood",
            "Nourishes hair and scalp health",
            "Beneficial for headaches, migraines, and eye strain"
        ],
        idealFor: [
            "Professionals with high stress or burnout",
            "Students facing mental fatigue or focus issues",
            "Individuals with insomnia, anxiety, or mood disorders",
            "People suffering from frequent headaches or migraines",
            "Anyone seeking deep relaxation and mind-body harmony"
        ],
        session: [
            { name: "Consultation", description: "An Ayurvedic assessment to determine the right liquid and duration." },
            { name: "Preparation", description: "You lie comfortably on a special therapy table with eyes closed." },
            { name: "Therapy", description: "A warm stream of medicated oil is poured gently on the forehead for 30–60 minutes." },
            { name: "Post-Therapy Rest", description: "Aftercare includes a gentle head massage and relaxation to allow integration of benefits." }
        ],
        whyChooseUs: [
            "Expert Ayurvedic practitioners with years of experience",
            "Use of high-quality, freshly prepared herbal oils",
            "Peaceful environment designed to calm the senses",
            "Strict hygiene standards and personalized approach",
            "Affordable therapy packages and follow-up care"
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
                    <Section title="Calm the Mind, Awaken the Spirit" content={shirodharaContent.intro} />
                    
                    <Section title="What is Shirodhara?" content={shirodharaContent.whatIs} />
                    
                    <CardGrid title="Types of Shirodhara" items={shirodharaContent.types} description="Depending on your dosha and health concerns, different liquids may be used in Shirodhara:" />
                    
                    <ListGrid title="Benefits of Shirodhara" items={shirodharaContent.benefits} />
                    
                    <ListGrid 
                        title="Who Should Consider Shirodhara?" 
                        items={shirodharaContent.idealFor} 
                        description="Shirodhara is highly recommended for:" 
                    />
                    
                    <CardGrid 
                        title="What to Expect During Your Shirodhara Session" 
                        items={shirodharaContent.session} 
                    />
                    
                    <ListGrid title="Why Choose Us for Shirodhara?" items={shirodharaContent.whyChooseUs} />
                    
                    <CTA text="Begin Your Shirodhara Journey Today" buttonText="Book Your Session" />
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
            onClick={() => window.open('/AppointmentForm')}
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

export default Shirodhara;