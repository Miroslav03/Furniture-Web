"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export const AboutSection = () => {
    return (
        <motion.div
            className="bg-white pb-24 sm:pb-32 pt-0 sm:pt-12 px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers only when 20% of the component is visible
        >
            <motion.div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
                variants={staggerContainer}
            >
                {/* Image Gallery */}
                <div className="lg:w-1/2 relative">
                    {/* Main image (always visible) */}
                    <motion.div
                        className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden"
                        variants={fadeInUp}
                    >
                        <div className="absolute inset-0 bg-[url('/images/gallery/about-image-1.jpg')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
                        </div>
                    </motion.div>

                    {/* Decorative Element (only on lg and above) */}
                    <motion.div className="hidden lg:block" variants={fadeInUp}>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[url('/images/gallery/about-image-3.jpg')] rounded-xl border-8 border-white bg-cover bg-center"></div>
                    </motion.div>

                    {/* Secondary Image (only on lg and above) */}
                    <motion.div
                        className="hidden lg:block absolute -left-8 top-24 w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }} // Ensures smooth entry
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="bg-gray-200 w-full h-full">
                            <div className="bg-[url('/images/gallery/about-3.jpg')] bg-cover bg-center w-full h-full"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Text Content */}
                <motion.div
                    className="lg:w-1/2 text-center lg:text-left"
                    variants={staggerContainer}
                >
                    <motion.h3
                        className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6"
                        variants={fadeInUp}
                    >
                        ЗА НАС
                    </motion.h3>

                    <motion.h2
                        className="text-4xl sm:text-5xl font-light leading-tight mb-8"
                        variants={fadeInUp}
                    >
                        Изработваме качествени мебели
                        <br />
                        Обогатявайки интериора с вечен дизайн и <br />
                        Траен комфорт.
                    </motion.h2>

                    <motion.p
                        className="text-md sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0"
                        variants={fadeInUp}
                    >
                        Изработваме мебели, които съчетават стил, комфорт и
                        дълготрайно качество, за да придадат изтънченост на
                        всеки интериор.
                    </motion.p>

                    <Link href={"/za-nas"}>
                        <motion.button
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-md sm:text-lg font-medium"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            За нас
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
