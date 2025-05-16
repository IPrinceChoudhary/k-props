import { useState, useEffect } from 'react';
import { Home, Building2, Store, Briefcase } from 'lucide-react';

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Add a button to reload Instagram embeds if they don't load properly
  const reloadInstagramEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    } else {
      // If Instagram script isn't loaded yet, load it
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  };

  // Add a useEffect hook to process Instagram embeds after component mount
  useEffect(() => {
    // Wait a bit before trying to process embeds to ensure DOM is ready
    const timer = setTimeout(() => {
      reloadInstagramEmbeds();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const services = [
    {
      title: "Residential",
      icon: <Home size={32} />,
      description: "Find your dream home with our residential property listings."
    },
    {
      title: "Commercial",
      icon: <Building2 size={32} />,
      description: "Discover premium commercial properties for your business needs."
    },
    {
      title: "Shop",
      icon: <Store size={32} />,
      description: "Explore retail spaces in prime locations to grow your business."
    },
    {
      title: "Office",
      icon: <Briefcase size={32} />,
      description: "Premium office spaces designed for productivity and growth."
    }
  ];
  
  return (
    <div className="w-full bg-black text-white py-16 px-4 flex flex-col">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore Our Services</h2>
          <div className="w-24 h-1 bg-[#CC9D16] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#CC9D16] rounded-lg p-6 transition-all duration-300 hover:bg-[#CC9D16] hover:text-black"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`flex justify-center mb-4 ${hoveredIndex === index ? 'text-black' : 'text-[#CC9D16]'}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
              <p className="text-center text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Instagram Reels Section */}
      <div className="max-w-6xl mx-auto mt-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Properties</h2>
          <div className="w-24 h-1 bg-[#CC9D16] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Instagram Reel - Using minimal blockquote structure */}
          <div className="w-full flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DI81aXWgjS9/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF', 
                border: '0', 
                borderRadius: '12px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: '0', 
                width: '99.375%',
                height: '700px' // Fixed height for desktop
              }}
            ></blockquote>
          </div>
          
          {/* Second Instagram Reel */}
          <div className="w-full flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DI6PA85hPzN/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF', 
                border: '0', 
                borderRadius: '12px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: '0', 
                width: '99.375%',
                height: '700px' // Fixed height for desktop
              }}
            ></blockquote>
          </div>
        </div>
        
      </div>
    </div>
  );
}