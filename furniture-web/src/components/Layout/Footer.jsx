export const Footer = () => {
    return (
      <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-32 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Raev Design</h3>
              <p className="text-gray-600">
                Crafting timeless furniture for modern living spaces since 2005.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукти</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Кухни</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Мебели от масив</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Гардероби</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Спални</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Други</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">За нас</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Контакти</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Галерия</a></li>
              </ul>
            </div>
          </div>
  
          <div className="border-t pt-8 text-center text-gray-600">
            <p>Copyright © 2025 Raev Design | Powered by Raev Design</p>
          </div>
        </div>
      </footer>
    );
  };