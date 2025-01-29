import Navigation from "@/components/Layout/Navigation";

const ProductsPage = () => {
    const products = [
        {
            id: 1,
            name: "Elysian Lounge Chair",
            price: "$2,499",
            category: "Seating",
            image: "/products/chair-1.jpg",
            description:
                "Organic modern design with walnut frame and wool upholstery",
        },
        {
            id: 2,
            name: "Aurora Dining Table",
            price: "$4,999",
            category: "Tables",
            image: "/products/table-1.jpg",
            description: "Solid marble top with brushed brass base",
        },
        {
            id: 3,
            name: "Celestial Sofa",
            price: "$6,999",
            category: "Seating",
            image: "/products/sofa-1.jpg",
            description: "Modular sectional with premium Italian leather",
        },
        // Add more products as needed
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] bg-[url('/products-hero.jpg')] bg-cover bg-center">
                <Navigation />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                            Curated Collections
                            <br />
                            of Modern Heirlooms
                        </h1>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Filters */}
                    <div className="mb-16 flex justify-between items-center">
                        <h2 className="text-4xl font-light">All Products</h2>
                        <div className="flex gap-4">
                            <select className="bg-transparent border-0 text-gray-600 text-lg focus:ring-0">
                                <option>All Categories</option>
                                <option>Seating</option>
                                <option>Tables</option>
                                <option>Storage</option>
                                <option>Lighting</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-light mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {product.description}
                                    </p>
                                    <div className="flex justify-center items-center gap-4">
                                        <span className="text-lg font-medium">
                                            {product.price}
                                        </span>
                                        <button className="text-black hover:text-gray-600 transition-colors">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-6">
                            Signature Collection
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our most iconic pieces representing decades of
                            design evolution
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="aspect-[5/4] bg-gray-100 rounded-xl overflow-hidden">
                            <img
                                src="/products/featured-1.jpg"
                                alt="Signature collection"
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-light">
                                The Art of Living
                            </h3>
                            <p className="text-gray-600 text-lg">
                                A carefully curated selection of pieces that
                                embody our design philosophy. Each item in this
                                collection tells a story of craftsmanship and
                                attention to detail.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[1, 2].map((item) => (
                                    <div
                                        key={item}
                                        className="aspect-square bg-gray-100 rounded-xl overflow-hidden"
                                    >
                                        <img
                                            src={`/products/featured-${
                                                item + 1
                                            }.jpg`}
                                            alt="Collection item"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-8">
                        Need Custom Design Solutions?
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
                        Our bespoke service creates furniture tailored to your
                        exact specifications and space requirements.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-lg font-medium">
                        Start Custom Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
