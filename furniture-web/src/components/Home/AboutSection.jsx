export const AboutSection = () => {
    return (
      <div className="bg-white pb-24 pt-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image Gallery */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
              {/* Main Image */}
              <div className="absolute inset-0 bg-[url('/about-main.jpg')] bg-cover bg-center"></div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-50 rounded-xl border-8 border-white"></div>
            </div>
            
            {/* Secondary Image */}
            <div className="absolute -left-8 top-24 w-48 h-48 bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-lg">
              <div className="bg-[url('/about-detail.jpg')] bg-cover bg-center w-full h-full"></div>
            </div>
          </div>
  
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
              ABOUT US
            </h3>
            
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Crafting Quality Furniture To Enhance<br />
              Your Space With Timeless Design And<br />
              Lasting Comfort.
            </h2>
  
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0">
              We create high-quality furniture with timeless designs, offering lasting
              comfort and style to enhance any space.
            </p>
  
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg font-medium">
              About Us
            </button>
          </div>
        </div>
      </div>
    );
  };