"use client";
import Navigation from "@/components/Layout/Navigation";
import { useState } from "react";

const GalleryPage = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const photos = [
        {
            id: 1,
            src: "/images/gallery/contact-us.jpg",
            orientation: "landscape",
        },
        { id: 2, src: "/images/gallery/test1.jpg", orientation: "portrait" },
        { id: 3, src: "/images/gallery/test2.jpg", orientation: "square" },
        { id: 4, src: "/images/gallery/test3.jpg", orientation: "landscape" },
        { id: 5, src: "/images/gallery/test1.jpg", orientation: "portrait" },
        { id: 6, src: "/gallery/6.jpg", orientation: "landscape" },
        { id: 7, src: "/gallery/7.jpg", orientation: "portrait" },
        { id: 8, src: "/gallery/8.jpg", orientation: "square" },
        // Add more photos as needed
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/images/gallery/galery.jpg')] bg-cover bg-center">
                <Navigation />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                            Visual Poetry
                            <br />
                            in Design
                        </h1>
                    </div>
                </div>
            </div>

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-light mb-6">
                            Our Design Legacy
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore decades of design innovation through our
                            curated gallery. Each image tells a story of
                            meticulous craftsmanship, from initial sketches to
                            final installations in homes worldwide.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Behind the Lens
                                </h3>
                                <p className="text-gray-600">
                                    Professionally captured by architectural
                                    photographers to showcase true material
                                    textures and spatial relationships
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Design Philosophy
                                </h3>
                                <p className="text-gray-600">
                                    Discover how light, form, and function unite
                                    in our award-winning furniture collections
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                            <img
                                src="/images/gallery/factory.jpg"
                                alt="Design studio"
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mt-12">
                            <img
                                src="/images/gallery/material-closeup.jpg"
                                alt="Material closeup"
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Curated Collections",
                            icon: "📸",
                            text: "Thousands of high-resolution images documenting our design evolution",
                        },
                        {
                            title: "Detail-Oriented",
                            icon: "🔍",
                            text: "Macro photography revealing the precision of our joinery and finishes",
                        },
                        {
                            title: "Global Inspirations",
                            icon: "🌍",
                            text: "Projects spanning from New York penthouses to Tokyo boutique hotels",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-light mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="pb-2 pt-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-light mb-6">
                        Explore the Collection
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Browse through years of design excellence. Click any
                        image to view in full detail and discover the story
                        behind each piece.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className="relative group cursor-pointer break-inside-avoid"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <div className="relative rounded-xl overflow-hidden transition-all hover:shadow-xl">
                                    <img
                                        src={photo.src}
                                        alt="Gallery photo"
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
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
                </div>
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
