import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="relative z-10 flex items-center justify-between px-6 py-8 md:px-16">
            <h1 className="text-3xl font-bold text-white tracking-widest">
                Raev Design
            </h1>

            <div className="flex items-center space-x-8">
                <Link
                    href="/"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    НАЧАЛО
                </Link>
                <Link
                    href="/products"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    ПРОДУКТИ
                </Link>
                <Link
                    href="/gallery"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    ГАЛЕРИЯ
                </Link>
                <Link
                    href="/about"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    ЗА НАС
                </Link>
                <Link
                    href="/contact-us"
                    className="text-white/90 hover:text-white transition-colors text-lg"
                >
                    КОНТАКТИ
                </Link>
            </div>
        </nav>
    );
}
