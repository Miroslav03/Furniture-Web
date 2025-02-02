"use client";
import Navigation from "@/components/Layout/Navigation";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const GalleryPage = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const collectionRef = useRef();

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedType, setSelectedType] = useState("all");

    useEffect(() => {
        if (type) {
            setSelectedType(type);
        } else {
            setSelectedType("all");
        }
    }, [type]);

    useEffect(() => {
        if (type && collectionRef.current) {
            collectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [type]);

    const photos = [
        {
            src: "/images/gallery/heavy-1.jpg",
            orientation: "square",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-2.jpg",
            orientation: "portrait",
            type: "heavy",
        },

        {
            src: "/images/gallery/heavy-3.jpg",
            orientation: "square",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-4.jpg",
            orientation: "portrait",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-5.jpg",
            orientation: "square",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-6.jpg",
            orientation: "landscape",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-7.jpg",
            orientation: "portrait",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-8.jpg",
            orientation: "portrait",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-9.jpg",
            orientation: "landscape",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-10.jpeg",
            orientation: "landscape",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-11.jpeg",
            orientation: "landscape",
            type: "heavy",
        },
        {
            src: "/images/gallery/heavy-12.jpg",
            orientation: "landscape",
            type: "heavy",
        },
         {
            src: "/images/gallery/heavy-13.jpg",
            orientation: "landscape",
            type: "heavy",
        },
        //Kitchen
        {
            src: "/images/gallery/kitchen-1.jpg",
            orientation: "landscape",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-2.jpg",
            orientation: "square",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-3.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-4.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-5.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-6.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-7.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-8.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-9.jpg",
            orientation: "square",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-10.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/kitchen-11.jpg",
            orientation: "landscape",
            type: "kitchen",
        },
        //Wardrobes
        {
            src: "/images/gallery/wardrobe.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-1.jpg",
            orientation: "landscape",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-2.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-3.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-4.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-5.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-6.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-7.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        {
            src: "/images/gallery/wardrobe-8.jpg",
            orientation: "portrait",
            type: "wardrobe",
        },
        //Other
        {
            src: "/images/gallery/other-1.jpg",
            orientation: "landscape",
            type: "other",
        },
        {
            src: "/images/gallery/other-2.jpg",
            orientation: "landscape",
            type: "other",
        },
        {
            src: "/images/gallery/other-3.jpg",
            orientation: "landscape",
            type: "other",
        },
        {
            src: "/images/gallery/other-4.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-5.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-6.jpg",
            orientation: "landscape",
            type: "other",
        },
        {
            src: "/images/gallery/other-7.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-8.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-9.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-10.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-11.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-12.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-13.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-14.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-15.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-16.jpg",
            orientation: "portrait",
            type: "other",
        },
        //Material
        {
            src: "/images/gallery/material-1.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-2.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-3.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-4.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-5.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-6.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-7.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-8.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-9.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-10.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-11.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-12.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-13.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-14.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/material-15.jpg",
            orientation: "portrait",
            type: "material",
        },
        {
            src: "/images/gallery/home-kitchen.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/contact-us.jpg",
            orientation: "landscape",
            type: "kitchen",
        },
        {
            src: "/images/gallery/about-image-3.jpg",
            orientation: "landscape",
            type: "kitchen",
        },
        {
            src: "/images/gallery/bg-cover.jpg",
            orientation: "landscape",
            type: "kitchen",
        },
        {
            src: "/images/gallery/about-image-1.jpg",
            orientation: "portrait",
            type: "kitchen",
        },
        {
            src: "/images/gallery/about-3.jpg",
            orientation: "landscape",
            type: "kitchen",
        },
        {
            src: "/images/gallery/other-17.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-18.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-19.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-20.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-21.jpg",
            orientation: "square",
            type: "other",
        },
        {
            src: "/images/gallery/other-22.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-23.jpg",
            orientation: "portrait",
            type: "other",
        },
        {
            src: "/images/gallery/other-24.jpg",
            orientation: "landscape",
            type: "other",
        },
        {
            src: "/images/gallery/other-25.jpg",
            orientation: "portrait",
            type: "other",
        },
    ];

    const filteredPhotos =
        selectedType === "all"
            ? photos
            : photos.filter((photo) => photo.type === selectedType);
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/images/gallery/gallery-2.jpg')] bg-cover bg-center">
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
                            className="text-4xl md:text-7xl font-light mb-[12rem] sm:mb-8 leading-tight"
                        >
                            Естетика и занаят
                            <br />в хармония
                        </motion.h1>
                    </motion.div>
                </div>
            </div>

            <section className="pb-12 pt-24 px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1.2,
                                    ease: "easeInOut",
                                    staggerChildren: 0.3,
                                },
                            },
                        }}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="text-4xl font-light mb-6"
                        >
                            Нашето дизайнерско наследство
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut",
                                delay: 0.2,
                            }}
                            className="text-md sm:text-lg text-gray-600"
                        >
                            Разгледайте десетилетия на дизайнерски иновации в
                            нашата специално подбрана галерия. Всяко изображение
                            разказва историята на прецизната изработка – от
                            първите скици до финалните инсталации в различни
                            домове.
                        </motion.p>

                        {/* Staggered Text Cards */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                        staggerChildren: 0.4,
                                    },
                                },
                            }}
                            className="grid grid-cols-2 gap-8 mt-12"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Материали и работилница
                                </h3>
                                <p className="text-gray-600 text-md">
                                    Подбираме качествена дървесина и изработваме
                                    всяко изделие с прецизност в нашата
                                    занаятчийска работилница.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Философия на дизайна
                                </h3>
                                <p className="text-gray-600 text-md">
                                    Всеки детайл е проектиран с мисъл за
                                    хармония, функционалност и естетика.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                            }}
                            className="aspect-square bg-gray-100 rounded-xl overflow-hidden"
                        >
                            <img
                                src="/images/gallery/gallery-1.jpg"
                                alt="Design studio"
                                className="w-full h-full object-cover transition-transform"
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                            }}
                            className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mt-[-80px] sm:mt-12"
                        >
                            <img
                                src="/images/gallery/material-closeup.jpg"
                                alt="Material closeup"
                                className="w-full h-full object-cover transition-transform"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                ref={collectionRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="pb-2 pt-16 sm:pt-24 px-6 md:px-12 lg:px-24"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl font-light mb-6">
                        Разгледайте колекцията
                    </h2>

                    {/* Category Selector with Smooth Transition */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        className="mb-8 flex justify-center"
                    >
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-4 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:border-gray-500 transition-all duration-500"
                        >
                            <option value="all">Всички категории</option>
                            <option value="kitchen">Кухни</option>
                            <option value="heavy">Мебели от масив</option>
                            <option value="wardrobe">Гардероби</option>
                            <option value="material">Материали</option>
                            <option value="other">Други</option>
                        </select>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Разгледайте години на дизайнерско майсторство. Кликнете
                        върху всяко изображение, за да го видите в детайли.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Gallery Grid */}
            <section className="pb-24 pt-2 px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredPhotos.map((photo, id) => (
                            <div
                                key={id}
                                className="relative group cursor-pointer break-inside-avoid"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <div className="relative rounded-xl overflow-hidden transition-all hover:shadow-xl">
                                    <Image
                                        src={photo.src}
                                        alt="Gallery photo"
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                        width={500} // specify appropriate width
                                        height={500} // specify appropriate height (or adjust based on orientation)
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                        <svg
                                            className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 backdrop-blur-2xl"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative max-w-6xl w-full max-h-[90vh]">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <img
                            src={selectedPhoto.src}
                            alt="Enlarged view"
                            className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
