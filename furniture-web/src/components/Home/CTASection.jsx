"use client";
import { motion } from "framer-motion";

export const CTASection = () => {
    return (
        <motion.div
            className="bg-black text-white py-24 px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Ensures animation starts when 20% of the section is visible
        >
            <motion.div 
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
                }}
            >
                <motion.h2 
                    className="text-4xl md:text-5xl font-light mb-8"
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } } }}
                >
                    Преобразете Своето Пространство С<br />
                    Вечна Елегантност
                </motion.h2>

                <motion.p 
                    className="text-md sm:text-lg mb-12 max-w-xl mx-auto"
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } } }}
                >
                    Открийте изключително майсторство и съвременен дизайн, които
                    подчертават вашият интериор.
                </motion.p>

                <motion.a 
                    href="tel:+359988933109"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } } }}
                >
                    <motion.button 
                        className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-md sm:text-lg font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Започни Проекта Си Сега
                    </motion.button>
                </motion.a>
            </motion.div>
        </motion.div>
    );
};
