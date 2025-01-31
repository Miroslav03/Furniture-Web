"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const ProductCollection = () => {
    const products = [
        {
            name: "Кухни",
            description: "Модерни и класически кухни, проектирани за удобство и стил.",
            src: "home-kitchen.jpg",
            type: "kitchen",
        },
        {
            name: "Мебели от масив",
            description: "Качествени мебели от масивно дърво, съчетаващи издръжливост и елегантност.",
            src: "furniture-solid.jpg",
            type: "heavy",
        },
        {
            name: "Гардероби",
            description: "Функционални и стилни гардероби за оптимално съхранение на вашите дрехи.",
            src: "wardrobe.jpg",
            type: "wardrobe",
        },
        {
            name: "Материали",
            description: "Висококачествени дървени материали за изработка на мебелите.",
            src: "material-home.jpg",
            type: "material",
        },
        {
            name: "Други",
            description: "Разнообразие от мебели и аксесоари за вашия дом и офис.",
            src: "others.jpg",
            type: "other",
        },
    ];

    return (
        <motion.div 
            className="bg-white pt-24 pb-0 sm:pb-14 px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is in view
            variants={fadeInUp}
        >
            <motion.div className="max-w-4xl mb-16" variants={fadeInUp}>
                <motion.h3 className="text-sm font-semibold text-gray-500 mb-4">
                    КОЛЕКЦИЯ
                </motion.h3>
                <motion.h2 className="text-5xl font-light mb-6">
                    Нашата Колекция Продукти
                </motion.h2>
                <motion.p className="text-gray-600 mb-8">
                    Разгледайте нашата внимателно подбрана колекция от
                    първокласни мебели, съчетаваща вечен дизайн, изключително
                    качество и модерен комфорт.
                </motion.p>
                <Link href={"/gallery"}>
                    <motion.button 
                        className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Открий
                    </motion.button>
                </Link>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Ensures animation only triggers when in view
            >
                {products.map((product, index) => (
                    <Link
                        key={index}
                        href={{
                            pathname: "/gallery",
                            query: { type: product.type },
                        }}
                    >
                        <motion.div
                            className="group relative cursor-pointer"
                            variants={fadeInUp}
                        >
                            <div
                                className="relative group aspect-square bg-gray-100 rounded-lg mb-4 bg-cover bg-center"
                                style={{ backgroundImage: `url(/images/gallery/${product.src})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                {product.description && (
                                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                )}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProductCollection;
