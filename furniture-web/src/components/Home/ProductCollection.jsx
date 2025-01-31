import Link from "next/link";

const ProductCollection = () => {
    const products = [
        {
            name: "Кухни",
            description:
                "Модерни и класически кухни, проектирани за удобство и стил.",
            src: "home-kitchen.jpg",
        },
        {
            name: "Мебели от масив",
            description:
                "Качествени мебели от масивно дърво, съчетаващи издръжливост и елегантност.",
            src: "furniture-solid.jpg",
        },
        {
            name: "Гардероби",
            description:
                "Функционални и стилни гардероби за оптимално съхранение на вашите дрехи.",
            src: "wardrobe.jpg",
        },
        {
            name: "Материали",
            description:
                "Висококачествени дървени материали за изработка на мебелите",
            src: "material-home.jpg",
        },
        {
            name: "Други",
            description:
                "Разнообразие от мебели и аксесоари за вашия дом и офис.",
            src: "others.jpg",
        },
    ];

    return (
        <div className="bg-white pt-24 pb-0 sm:pb-14 px-6 md:px-12 lg:px-24">
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
                <Link href={'/gallery'}>
                    <button className="bg-black text-white px-8 py-3 rounded-full  hover:bg-gray-800 transition-colors ">
                        Открий
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product, index) => (
                    <div key={index} className="group relative cursor-pointer">
                        <div
                            className="relative group aspect-square bg-gray-100 rounded-lg mb-4 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(/images/gallery/${product.src})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                                {product.name}
                            </h3>
                            {product.description && (
                                <p className="text-sm text-gray-600 mb-2">
                                    {product.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center"></div>
        </div>
    );
};

export default ProductCollection;
