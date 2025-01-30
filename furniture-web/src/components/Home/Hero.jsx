import Navigation from "../Layout/Navigation";

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-[url('/images/gallery/bg-cover.jpg')] bg-cover bg-center relative">
            {/* Darker overlay for better contrast */}

            {/* Transparent Navigation Bar */}
            <Navigation />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Content */}
            <div className="relative z-[1] container mx-auto px-6 md:px-16 h-[calc(100vh-120px)] flex items-center justify-center">
                <div className="text-center text-white max-w-4xl">
                    <div className="mb-8">
                        <p className="text-lg font-semibold tracking-widest mb-4">
                            ОФЕРТА ЗА НАЙ-ДОБЪР ИНТЕРИОР
                        </p>
                        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
                            Естетично пространство и
                            <br />
                            хармония
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Променете своя поглед и открийте подреден и естетичен
                        кът у дома, който ще впечатли всички, особено вашето
                        семейство. Превърнете всеки детайл от домашното
                        обзавеждане в ценен и стилен елемент още сега.
                    </p>

                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium">
                        Разгледай сега
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
