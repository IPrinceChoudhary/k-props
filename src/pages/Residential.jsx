import { useState } from 'react';

export default function Residential() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const properties = [
    {
      title: "Delhi Amyrllis Rohtak",
      id: 1,
      image: "https://econstruct.com/sites/default/files/styles/home_image__1920_x_980_/public/header_0.jpg?itok=SxCGewKI"
    },
    {
      title: "Unity Group",
      id: 2,
      image: "https://lh3.googleusercontent.com/wPmhwPCgwi-RJH18VBmtFFWrmzVpc5P4C--lFN8oOHuZLixy1XHiY0RdcA7JsD_2F0PrsS9zaqbSDgwcFwapbVJJbz_zDJn6nw=w3840-h3840-c-rw-v3"
    },
    {
      title: "Dlf Moti Nagar",
      id: 3,
      image: "https://flatsdekho.in/assets/uploads/1734260637ff8081816df83e65016df8584fcc109b_50283_63413_large.jpg"
    },
    {
      title: "Pitampura Floors",
      id: 4,
      image: "https://static.realestateindia.com/rei/mobile-images/sub-category/builder-floor.jpg"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Residential Properties
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#CC9D16] to-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover your perfect home from our exclusive collection of premium residential properties
          </p>
        </div>
      </div>

      {/* Properties Grid Section */}
      <div className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((property, index) => (
              <div 
                key={property.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(204,157,22,0.3)]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                    hoveredIndex === index 
                      ? 'from-black/80 via-black/20 to-transparent opacity-100' 
                      : 'from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Gold accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#CC9D16] to-yellow-400 transition-all duration-500 ${
                    hoveredIndex === index ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </div>

                {/* Title Container */}
                <div className="p-6 bg-white relative">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-[#CC9D16]' : 'text-black group-hover:text-[#CC9D16]'
                  }`}>
                    {property.title}
                  </h3>
                  
                  {/* Decorative element */}
                  <div className={`mt-3 h-0.5 bg-gradient-to-r from-[#CC9D16] to-transparent transition-all duration-500 ${
                    hoveredIndex === index ? 'w-16' : 'w-8 group-hover:w-16'
                  }`}></div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-2 border-[#CC9D16] rounded-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="h-2 bg-gradient-to-r from-transparent via-[#CC9D16] to-transparent"></div>
    </div>
  );
}