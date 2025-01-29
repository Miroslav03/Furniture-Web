const ProductCollection = () => {
    const products = [
        {
            name: "Кухни",
            registerPrice: "E346",
            memberPrice: "E246",
            src: "home-kitchen.jpg",
        },
        {
            name: "Мебели от масив",
            registerPrice: "E895",
            memberPrice: "E846",
            description:
                "Make travel easier with our patented 2-in-1 work plus suitcase backpack",
            src: "furniture-solid.jpg",
        },
        {
            name: "Гардероби",
            registerPrice: "E898",
            memberPrice: "E934",
            src: "wardrobe.jpg",
        },
        {
            name: "Спални",
            registerPrice: "E848",
            memberPrice: "E811",
            src: "bedroom.jpg",
        },
        {
            name: "Други",
            registerPrice: "E1795",
            memberPrice: "E921",
            src: "others.jpg",
        },
    ];

    return (
        <div className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mb-16">
                <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    КОЛЕКЦИЯ
                </h3>
                <h2 className="text-5xl font-light mb-6">
                    Нашата Колекция Продукти
                </h2>
                <p className="text-gray-600 mb-8">
                    Разгледайте нашата внимателно подбрана колекция от
                    първокласни мебели, съчетаваща вечен дизайн, изключително
                    качество и модерен комфорт.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-full  hover:bg-gray-800 transition-colors ">
                    Открий
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product, index) => (
                    <div key={index} className="group relative">
                        <div
                            className="aspect-square bg-gray-100 rounded-lg mb-4 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(/images/gallery/${product.src})`,
                            }}
                        ></div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
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
