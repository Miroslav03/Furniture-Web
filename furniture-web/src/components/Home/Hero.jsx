import Navigation from "../Layout/Navigation";

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-[url('/images/gallery/bg-cover.jpg')] bg-cover bg-center relative">
            {/* Darker overlay for better contrast */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Transparent Navigation Bar */}
            <Navigation />

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-16 h-[calc(100vh-120px)] flex items-center justify-center">
                <div className="text-center text-white max-w-4xl">
                    <div className="mb-8">
                        <p className="text-lg font-semibold tracking-widest mb-4">
                            OFFER FOR BEST INTERIOR
                        </p>
                        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
                            An aesthetic room is
                            <br />
                            given harmony
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Change your view to realize a neat and aesthetic corner
                        of the house and amaze everyone, especially your nuclear
                        family. Make every moment of your home equipment a
                        valuable item
                    </p>

                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
