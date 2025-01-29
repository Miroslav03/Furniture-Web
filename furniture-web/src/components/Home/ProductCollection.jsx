const ProductCollection = () => {
    const products = [
        {
            name: "RAILTON BEDSIDE TABLE",
            registerPrice: "E346",
            memberPrice: "E246",
        },
        {
            name: "PAIR OF MOLINA ARMLESS",
            registerPrice: "E895",
            memberPrice: "E846",
            description:
                "Make travel easier with our patented 2-in-1 work plus suitcase backpack",
        },
        {
            name: "EDVIN DINING CHAIR",
            registerPrice: "E898",
            memberPrice: "E934",
        },
        {
            name: "ARIA DINING CHAIR",
            registerPrice: "E848",
            memberPrice: "E811",
        },
        {
            name: "SYDNEY ARMCHAIR",
            registerPrice: "E1795",
            memberPrice: "E921",
        },
        {
            name: "O'LEY COFFEE TABLE",
            registerPrice: "E822",
            memberPrice: "E793",
        },
    ];

    return (
        <div className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mb-16">
                <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    COLLECTION
                </h3>
                <h2 className="text-5xl font-light mb-6">
                    Our Product Collection
                </h2>
                <p className="text-gray-600 mb-8">
                    Explore our curated collection of premium furniture,
                    blending timeless design, exceptional quality, and modern
                    comfort.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors ">
                    Explore
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product, index) => (
                    <div key={index} className="group relative">
                        <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">
                                {product.name}
                            </h3>
                            {product.description && (
                                <p className="text-sm text-gray-600 mb-2">
                                    {product.description}
                                </p>
                            )}
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xs text-gray-500">
                                        Register{" "}
                                    </span>
                                    <span className="font-medium">
                                        {product.registerPrice}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500">
                                        Member{" "}
                                    </span>
                                    <span className="font-medium">
                                        {product.memberPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center"></div>
        </div>
    );
};

export default ProductCollection;
