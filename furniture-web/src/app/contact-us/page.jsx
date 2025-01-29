import Navigation from "@/components/Layout/Navigation";

const ContactPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/contact-hero.jpg')] bg-cover bg-center">
                <Navigation />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                            Let's Create
                            <br />
                            Something Beautiful
                        </h1>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-6">📍</div>
                        <h3 className="text-2xl font-light mb-4">Visit Us</h3>
                        <p className="text-gray-600 mb-2">123 Design Avenue</p>
                        <p className="text-gray-600">New York, NY 10001</p>
                    </div>

                    <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-6">✉️</div>
                        <h3 className="text-2xl font-light mb-4">Email Us</h3>
                        <p className="text-gray-600 mb-2">hello@classika.com</p>
                        <p className="text-gray-600">support@classika.com</p>
                    </div>

                    <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-6">📞</div>
                        <h3 className="text-2xl font-light mb-4">Call Us</h3>
                        <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                        <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <div className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.99110768459418!3d40.74164397932912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f8e7a6e3%3A0x7e9a05c8f897b4e0!2s123%20Design%20Ave%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1629780000000!5m2!1sen!2s"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="filter grayscale hover:grayscale-0 transition-all"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
