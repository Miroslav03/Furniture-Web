import Navigation from "@/components/Layout/Navigation";

const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/about-hero.jpg')] bg-cover bg-center">
                <Navigation />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                            Crafting Timeless Spaces
                            <br />
                            Through Design Excellence
                        </h1>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                            <img
                                src="/about-story.jpg"
                                alt="Our workshop"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-all"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg w-3/4">
                            <h3 className="text-2xl font-light mb-4">
                                Since 2005
                            </h3>
                            <p className="text-gray-600">
                                Crafting quality furniture for discerning
                                clients worldwide
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-light mb-8">
                            Our Journey
                        </h2>
                        <p className="text-lg text-gray-600">
                            Established in 2005, Classika has evolved from a
                            small workshop to an internationally recognized
                            furniture design house. With over 500,000 satisfied
                            customers worldwide, we've redefined modern living
                            through our commitment to exceptional craftsmanship.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Our Philosophy
                                </h3>
                                <p className="text-gray-600">
                                    Blending traditional techniques with
                                    contemporary design, we create pieces that
                                    stand the test of time.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Global Recognition
                                </h3>
                                <p className="text-gray-600">
                                    Recipient of 2 World Design Awards and
                                    trusted partner in 30+ countries
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-light mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The foundation of everything we create
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Quality Craftsmanship",
                                icon: "🛠️",
                                description:
                                    "Handcrafted using premium materials and time-honored techniques",
                            },
                            {
                                title: "Timeless Design",
                                icon: "🎨",
                                description:
                                    "Creating pieces that transcend temporary trends",
                            },
                            {
                                title: "Client-Centric",
                                icon: "❤️",
                                description:
                                    "Personalized service from concept to delivery",
                            },
                            {
                                title: "Sustainable Practices",
                                icon: "🌱",
                                description:
                                    "Ethically sourced materials and eco-friendly production",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-light mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-light mb-6">
                            The Minds Behind
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our team of passionate designers and craftsmen
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative">
                                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-6">
                                    <img
                                        src={`/team-${item}.jpg`}
                                        alt="Team member"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all"
                                    />
                                </div>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <div className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">18+</div>
                        <div className="text-gray-400">Years Experience</div>
                    </div>
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">500K+</div>
                        <div className="text-gray-400">Happy Clients</div>
                    </div>
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">30+</div>
                        <div className="text-gray-400">Countries Served</div>
                    </div>
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">2</div>
                        <div className="text-gray-400">World Awards</div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-8">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
                        Let's create something beautiful together. Schedule a
                        free design consultation with our experts.
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium">
                        Book Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
