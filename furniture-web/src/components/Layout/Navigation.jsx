
export default function Navigation() {
    return (
        <nav className="relative z-10 flex items-center justify-between px-6 py-8 md:px-16">
            <h1 className="text-3xl font-bold text-white tracking-widest">
                Raev Design
            </h1>

            <div className="flex items-center space-x-8">
                <a
                    href="#"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    HOME
                </a>
                <a
                    href="#"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    PRODUCT
                </a>
                <a
                    href="#"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    CONTACT US
                </a>
            </div>
        </nav>
    );
}
