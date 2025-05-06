import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/footer';

const AchievementsPage: React.FC = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    // Sample achievements data
    const achievements = [
        {
            title: "Excellence in Ayurvedic Treatment",
            year: "2023",
            description: "Recognized for outstanding contribution to Ayurvedic healthcare practices.",
            image: ""
        },
        {
            title: "Best Panchakarma Center",
            year: "2022",
            description: "Awarded as the leading Panchakarma treatment center in the region.",
            image: ""
        },
        {
            title: "Healthcare Innovation Award",
            year: "2021",
            description: "Honored for innovative approaches in combining traditional Ayurveda with modern healthcare practices.",
            image: ""
        },
        {
            title: "Community Service Recognition",
            year: "2020",
            description: "Acknowledged for providing accessible Ayurvedic healthcare services to the community.",
            image: ""
        },
        {
            title: "Quality Excellence Certificate",
            year: "2019",
            description: "Certified for maintaining the highest standards in Ayurvedic treatments and patient care.",
            image: ""
        }
    ];

    return (
        <div className="min-h-screen font-sans text-gray-800">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-12 bg-gradient-to-r from-green-50 to-green-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                            Our Achievements
                        </h1>
                        <p className="text-lg text-green-700">
                            Recognitions and milestones in our journey of Ayurvedic excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Achievements Timeline */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="relative"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

                        {/* Achievement items */}
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row md:items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                variants={fadeInUp}
                            >
                                {/* Year bubble */}
                                <div className="hidden md:flex absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-green-600 text-white items-center justify-center z-10">
                                    {achievement.year}
                                </div>

                                {/* Content */}
                                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{achievement.title}</h3>
                                    <div className="text-orange-500 font-medium mb-3 md:hidden">{achievement.year}</div>
                                    <p className="text-gray-600">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Recognition Certificates */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center max-w-4xl mx-auto mb-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Recognitions</h2>
                        <p className="text-gray-700">Certificates and awards that recognize our commitment to excellence</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Certificate items - placeholders */}
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                            >
                                <div className="h-48 bg-green-100 flex items-center justify-center">
                                    <div className="text-green-800 text-lg font-medium">Certificate {item}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-2">Recognition Title {item}</h3>
                                    <p className="text-gray-600">Awarded by the Ayurvedic Medical Association for excellence in patient care and treatment.</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AchievementsPage;