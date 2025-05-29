import { useState } from 'react';

export default function Commercial() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const properties = [
    {
      title: "County Courtyard",
      id: 1,
      image: "https://www.countygroup.in/countycourtyard/images/cd22.jpg"
    },
    {
      title: "Galaxy Dmall",
      id: 2,
      image: "https://housing-images.n7net.in/4f2250e8/9a38c87bf590ca893cddcaee497fd02a/v0/medium/galaxy_heights_tower_iii_wing_l_to_p-malvani-mumbai-maharashtra_police_co-operative_housing_federation_ltd.jpeg"
    },
    {
      title: "NDM 1 and 2",
      id: 3,
      image: "https://make-arch.imgix.net/https%3A%2F%2Fwww.makearchitects.com%2Fwp-content%2Fuploads%2F2017%2F12%2FNDMResearchBuilding_Make-hero-left.jpg?auto=format&crop=center&fit=crop&h=2560&ixlib=php-1.2.1&w=1920&s=9f72f10111444b11619a5e358ea70bef"
    },
    {
      title: "Unity Group",
      id: 4,
      image: "https://lh3.googleusercontent.com/GpvfU-GPclVLWTz7KO6-_aicGgU7G7u_U8sjFRR3_R9Hrr_0Z5sBj6Su55_xlmWhChJV5mh3MFCFD3GRqVTkkWcdPn8ZZO1A=w3840-h3840-c-rw-v3"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Commercial Properties
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#CC9D16] to-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover your perfect home from our exclusive collection of premium commercial properties
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