import Navigation from "@/components/Layout/Navigation";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/images/gallery/about-hero.jpg')] bg-cover bg-center">
                <Navigation />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                            Създаване на мебели
                            <br />с Изключителен Дизайн
                        </h1>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                            <Image
                                src="/images/gallery/about-owner.jpg"
                                alt="Our workshop"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-all rounded-xl"
                                fill
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet animi iusto quo non rem. Pariatur neque
                            consequuntur nobis reiciendis tempora sed vitae
                            molestias quisquam eaque commodi amet qui, possimus
                            est?Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nihil itaque ducimus odio
                            inventore labore, ut illum, quo nisi dolorum vero
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Our Philosophy
                                </h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquam, assumenda
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-4">
                                    Global Recognition
                                </h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquam, assumenda
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
                                    "Handcrafted using premium materials and time-honored techniques",
                            },
                            {
                                title: "Timeless Design",
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
                                    "Creating pieces that transcend temporary trends",
                            },
                            {
                                title: "Client-Centric",
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
                                    "Personalized service from concept to delivery",
                            },
                            {
                                title: "Sustainable Practices",
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
                                    "Ethically sourced materials and eco-friendly production",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6">{value.icon}</div>
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
            {/* Achievements Section */}
            <div className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">20+</div>
                        <div className="text-gray-400">Години Опит</div>
                    </div>
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">5000+</div>
                        <div className="text-gray-400">Изработени Мебели</div>
                    </div>
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">1000+</div>
                        <div className="text-gray-400">Доволни клиенти</div>
                    </div>
                    <div className="p-6">
                        <div className="text-5xl font-light mb-4">100+</div>
                        <div className="text-gray-400">Уникални Модели</div>
                    </div>
                </div>
            </div>
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

            {/* CTA Section */}
            <div className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-8">
                        Готови ли сте да преобразите вашия интериор?
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
                        Нека създадем нещо уникално заедно. Запишете се за
                        безплатна консултация с нашите майстори мебелисти.
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium">
                        Запишете се сега
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
