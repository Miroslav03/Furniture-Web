"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/Layout/Navigation";

const ContactPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/images/gallery/contact-us.jpg')] bg-cover bg-center">
                {/* Transparent Navigation Bar */}
                <Navigation />

                {/* Background Overlay with Smooth Fade-in */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-black"
                ></motion.div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-center text-white max-w-4xl px-4"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                            className="text-4xl sm:text-5xl md:text-7xl font-light mb-[12rem] sm:mb-8 leading-tight"
                        >
                            Нека изработим
                            <br /> Нещо красиво за теб
                        </motion.h1>
                    </motion.div>
                </div>
            </div>

            {/* Contact Info Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    {/** Animated Contact Cards */}
                    {contactItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: index * 0.2,
                            }}
                            className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                        >
                            {item.icon}
                            <h3 className="text-2xl font-light mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{item.line1}</p>
                            <p className="text-gray-600">{item.line2}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Google Maps Section with Smooth Entry */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="px-6 md:px-12 lg:px-24 pb-24"
            >
                <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11841.61491559525!2d24.891717147553795!3d42.09882348948894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd62aeb86b48d%3A0xa00a014cd0e5f70!2zNDExNyDQmtCw0YDQsNC00LbQvtCy0L4!5e0!3m2!1sbg!2sbg!4v1738157332430!5m2!1sbg!2sbg"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="filter grayscale hover:grayscale-0 transition-all"
                    ></iframe>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;

/* Contact Info Data for Reusability */
const contactItems = [
    {
        title: "Посети ни",
        line1: "ул.13 № 5",
        line2: "село Караджово",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mx-auto mb-6 text-black"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.05-7.5 11.25-7.5 11.25S4.5 17.55 4.5 10.5a7.5 7.5 0 1115 0z"
                />
            </svg>
        ),
    },
    {
        title: "Напиши имейл",
        line1: "raev.mebeli@gmail.com",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mx-auto mb-6 text-black"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 8.25l-9.57 6.795a.75.75 0 01-.86.003L2.25 8.25"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75z"
                />
            </svg>
        ),
    },
    {
        title: "Обади се",
        line1: "0988933109",
        line2: "Пон - Пет : 8:30ч. - 17:00ч.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mx-auto mb-6 text-black"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 4.5c0 9.665 7.835 17.5 17.5 17.5l.5-.022c.356-.02.7-.128.99-.314.39-.255.614-.665.614-1.135 
0-.117-.01-.234-.03-.349l-1.3-5.5 
a1.5 1.5 0 00-.98-1.082l-3.12-.83 
a1.5 1.5 0 00-1.53.44l-1.385 1.386 
a12.024 12.024 0 01-5.478-5.478 
l1.386-1.386 
a1.5 1.5 0 00.44-1.53l-.83-3.12 
A1.5 1.5 0 006.015 2.08l-5.5-1.3 
a1.125 1.125 0 00-.349-.03c-.47 0-.88.224-1.135.614 
-.186.29-.294.634-.314.99l-.022.5z"
                />
            </svg>
        ),
    },
];
