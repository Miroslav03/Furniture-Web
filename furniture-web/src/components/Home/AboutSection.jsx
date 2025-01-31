import Link from "next/link";

export const AboutSection = () => {
    return (
        <div className="bg-white pb-24 sm:pb-32 pt-0 sm:pt-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Image Gallery */}
                <div className="lg:w-1/2 relative">
                    {/* Main image (always visible) */}
                    <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/gallery/about-image-1.jpg')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
                        </div>
                    </div>

                    {/* Decorative Element (only on lg and above) */}
                    <div className="hidden lg:block">
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[url('/images/gallery/about-image-3.jpg')] rounded-xl border-8 border-white bg-cover bg-center"></div>
                    </div>

                    {/* Secondary Image (only on lg and above) */}
                    <div className="hidden lg:block">
                        <div className="absolute -left-8 top-24 w-48 h-48 bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                            <div className="bg-[url('/images/gallery/about-3.jpg')] bg-cover bg-center w-full h-full"></div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                        ЗА НАС
                    </h3>

                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                        Изработваме качествени мебели
                        <br />
                        Обогатявайки интериора с вечен дизайн и <br />
                        Треан комфорт.
                    </h2>

                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0">
                        Изработваме мебели, които съчетават стил, комфорт и
                        дълготрайно качество, за да придадат изтънченост на
                        всяко пространство.
                    </p>

                    <Link href={'/about'}>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium">
                            За нас
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
