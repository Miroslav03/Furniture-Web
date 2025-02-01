import Link from "next/link";

export const Footer = () => {
    return (
      <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-32 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Raev Design</h3>
              <p className="text-gray-600">
              Мебели, съчетаващи традиция и модерност от 1990 година.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 ">Галерия</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-md">
                <li><Link href={{
                            pathname: "/galeria",
                            query: { type: 'kitchen' },
                        }} className="hover:text-black transition-colors">Кухни</Link></li>
                <li><Link href={{
                            pathname: "/galeria",
                            query: { type: 'heavy' },
                        }} className="hover:text-black transition-colors">Мебели от масив</Link></li>
                <li><Link href={{
                            pathname: "/galeria",
                            query: { type: 'wardrobe' },
                        }} className="hover:text-black transition-colors">Гардероби</Link></li>
                <li><Link href={{
                            pathname: "/galeria",
                            query: { type: 'other' },
                        }} className="hover:text-black transition-colors">Други</Link></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-md">
                <li><Link href="/za-nas" className="hover:text-black transition-colors">За нас</Link></li>
                <li><Link href="/kontakti" className="hover:text-black transition-colors">Контакти</Link></li>
              </ul>
            </div>
          </div>
  
          <div className="border-t pt-8 text-center text-gray-600 text-sm sm:text-md">
            <p>Copyright © 2025 Raev Design | Powered by Raev Design</p>
          </div>
        </div>
      </footer>
    );
  };