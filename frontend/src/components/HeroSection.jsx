import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="min-w-screen min-h-screen bg-[#f9f1e5] mt-10 m-auto px-6 md:px-20 flex items-center justify-center shadow-md">
            <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">

                {/* Left Content with translucent box */}
                <div className="flex-1 w-full h-100 bg-[#da573c]/5 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col justify-center h-full">
                    {/* First Line - Typing Animation */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        <TypeAnimation
                            sequence={[
                                'Build Your Career...',
                                1500,
                                'Explore New Skills...',
                                1500,
                                'Shape Your Future...',
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    {/* Second Line - Colored Typing Animation */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#da573c]">
                        <TypeAnimation
                            sequence={[
                                'Make Learning Fun!',
                                2000,
                                'Start Your Journey!',
                                2000,
                            ]}
                            wrapper="span"
                            speed={60}
                            repeat={Infinity}
                        />
                    </h2>

                    <p className="text-lg text-gray-700 mt-4 mb-4">
                        Discover resources and paths tailored for your success.
                    </p>

                    <button className="mt-4 bg-[#da573c] text-white px-6 py-2 rounded-full shadow hover:bg-gray-900 transition-all">
                        Explore
                    </button>
                </div>

                {/* Right Side Image */}
                <motion.div
                    className="w-full md:w-3/5 flex justify-end mr-15"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="hero_sec2.jpg"
                        alt="Hero"
                        className="w-full max-w-[500px] transform scale-110"
                    />
                </motion.div>


            </div>
        </section>
    );
};

export default HeroSection;
