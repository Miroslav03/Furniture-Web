"use client";
import { motion } from "framer-motion";
import Navigation from "../Layout/Navigation";

const HeroSection = () => {
    const scrollToProducts = () => {
        const section = document.getElementById("product-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-[url('/images/gallery/bg-cover.jpg')] bg-cover bg-center relative">
            {/* Transparent Navigation Bar */}
            <Navigation />
            
            {/* Background Overlay with fade-in effect */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 0.4 }} 
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-black z-0"
            ></motion.div>

            {/* Hero Content */}
            <div className="relative z-[1] container mx-auto px-6 md:px-16 h-[calc(100vh-120px)] flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center text-white max-w-4xl"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        className="mb-8"
                    >
                        <p className="text-md font-semibold tracking-widest mb-4">
                            ОФЕРТА ЗА НАЙ-ДОБЪР ИНТЕРИОР
                        </p>
                        <h1 className="text-4xl md:text-7xl font-light mb-6 leading-tight">
                            Естетично пространство и
                            <br />
                            хармония
                        </h1>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
                        className="text-md md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Променете своя поглед и открийте подреден и естетичен
                        кът у дома, който ще впечатли всички, особено вашето
                        семейство. Превърнете всеки детайл от домашното
                        обзавеждане в ценен и стилен елемент още сега.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        onClick={scrollToProducts}
                        className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-md sm:text-lg font-[400] sm:font-medium"
                    >
                        Разгледай
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;