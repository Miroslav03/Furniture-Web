"use client";
import Navigation from "@/components/Layout/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/images/gallery/about-hero.jpg')] bg-cover bg-center">
                <Navigation />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-black"
                ></motion.div>
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
                            className="text-5xl md:text-7xl font-light mb-8 leading-tight"
                        >
                            Създаване на мебели
                            <br />с Изключителен Дизайн
                        </motion.h1>
                    </motion.div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Image with Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Image with Smooth Zoom */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                            className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden"
                        >
                            <Image
                                src="/images/gallery/about-owner.jpg"
                                alt="Our workshop"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-all rounded-xl"
                                fill
                            />
                        </motion.div>

                        {/* Floating Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg w-3/4"
                        >
                            <h3 className="text-2xl font-light mb-4">
                                Признати от 1990
                            </h3>
                            <p className="text-gray-600">
                                Изработка на качествени мебели за качествени
                                клиенти
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Text Section with Smooth Fade-in */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-light mb-8">
                            Нашата история
                        </h2>
                        <p className="text-lg text-gray-600">
                            Три поколения – баща и двама синове, посветени на
                            създаването на уникални мебели от масивна дървесина.
                            Всяко изделие, което излиза от нашата работилница,
                            носи не само красотата на естественото дърво, но и
                            отпечатъка на семейното ни призвание, майсторството
                            и вниманието към детайла.
                        </p>

                        {/* Philosophy & Quality Grid with Staggered Animation */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delayChildren: 0.3,
                                        staggerChildren: 0.3,
                                    },
                                },
                            }}
                            className="grid grid-cols-2 gap-8 mt-12"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Нашата философия
                                </h3>
                                <p className="text-gray-600">
                                    Вярваме, че всяко изделие носи духа на
                                    дървото и вниманието към детайла.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                            >
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Доверие и качество
                                </h3>
                                <p className="text-gray-600">
                                    Нашите изделия съчетават занаятчийска
                                    прецизност, естествена красота и внимание
                                    към детайла.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* Values Section */}
            <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Title with Fade-in */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-light mb-6">
                            Нашите основни ценности
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Основата на всичко което изработваме
                        </p>
                    </motion.div>

                    {/* Values Cards with Staggered Animation */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delayChildren: 0.2,
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        className="grid md:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                title: "Качествена изработка",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-12 h-12 mx-auto text-black"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 2.25l4.5 4.5M9.75 9.75l-4.5 4.5M20.25 9.75l-4.5 4.5M14.25 14.25l4.5 4.5M4.5 19.5l4.5-4.5"
                                        />
                                    </svg>
                                ),
                                description:
                                    "Ръчно изработени с първокласни материали и утвърдени през времето техники.",
                            },
                            {
                                title: "Вечен дизайн",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-12 h-12 mx-auto text-black"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 2.25v19.5M2.25 12h19.5"
                                        />
                                    </svg>
                                ),
                                description:
                                    "Създаваме мебели, които надхвърлят временните тенденции.",
                            },
                            {
                                title: "Фокус върху клиента",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-12 h-12 mx-auto text-black"
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
                                description:
                                    "Персонализирано обслужване – от концепцията до доставката.",
                            },
                            {
                                title: "Устойчиви практики",
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-12 h-12 mx-auto text-black"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 2.25c-3.87 0-7 3.13-7 7 0 3.52 2.46 6.47 5.75 6.93M12 2.25c3.87 0 7 3.13 7 7 0 3.52-2.46 6.47-5.75 6.93M12 22.25v-3.5"
                                        />
                                    </svg>
                                ),
                                description:
                                    "Етично добити материали и екологично съобразено производство.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6">{value.icon}</div>
                                <h3 className="text-xl font-light mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* Achievements Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 },
                    },
                }}
                className="bg-black text-white py-24 px-6 md:px-12 lg:px-24"
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "20+", label: "Години Опит" },
                        { number: "5000+", label: "Изработени Мебели" },
                        { number: "1000+", label: "Доволни клиенти" },
                        { number: "100+", label: "Уникални Модели" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="p-6"
                        >
                            <div className="text-5xl font-light mb-4">
                                {item.number}
                            </div>
                            <div className="text-gray-400">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Team Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Title with Fade-in */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-light mb-6">
                            Хората зад нашите мебели
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Нашият екип от опитни майстори.
                        </p>
                    </motion.div>

                    {/* Team Members with Staggered Appearance */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delayChildren: 0.2,
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="group relative"
                            >
                                {/* Team Member Image with Hover Zoom */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-6"
                                >
                                    <img
                                        src={`/team-${item}.jpg`}
                                        alt="Team member"
                                        className="w-full h-full object-cover transform transition-all"
                                    />
                                </motion.div>

                                {/* Team Member Details */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-light mb-2">
                                        Alexandra Wood
                                    </h3>
                                    <p className="text-gray-600">
                                        Lead Designer
                                    </p>
                                    <p className="mt-4 text-gray-600 max-w-xs mx-auto">
                                        15+ years experience in luxury furniture
                                        design
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-8">
                        Готови ли сте да преобразите вашия интериор?
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
                        Нека създадем нещо уникално заедно. Запишете се за
                        безплатна консултация с нашите майстори мебелисти.
                    </p>

                    {/* Animated Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                    >
                        Запишете се сега
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
