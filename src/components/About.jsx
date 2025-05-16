import { useState } from 'react';
import { Phone, MapPin, Building, Home, Briefcase, Award, Calendar } from 'lucide-react';
import owner from "../assets/owner.jpg"

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full bg-gray-50 py-16 mt-5 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">About </span>
            <span style={{ color: '#CC9D16' }}>Us</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#CC9D16' }}></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div 
              className="relative rounded-md overflow-hidden shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                width: '320px', 
                height: '380px',
                border: `4px solid ${isHovered ? '#CC9D16' : 'transparent'}`,
                transition: 'border-color 0.3s ease'
              }}
            >
              {/* Placeholder for owner's image */}
              <div className="bg-gray-200 flex items-center justify-center w-full h-full">
                <div className="text-center p-4">
                  <img src={owner} alt="" />
                </div>
              </div>
              
              
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
            <div 
              className="p-6 rounded-lg shadow-md border-l-4" 
              style={{ borderLeftColor: '#CC9D16' }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span style={{ color: '#CC9D16' }}>Anuj</span>
                <span className="ml-2 text-gray-700"> - Property Expert</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={20} className="mr-3" style={{ color: '#CC9D16' }} />
                  <span className="text-gray-700">+91 9811799850</span>
                </div>
                
                <div className="flex items-start">
                  <Briefcase size={20} className="mr-3 mt-1" style={{ color: '#CC9D16' }} />
                  <div>
                    <p className="text-gray-700">Commercial, rented and residential properties available for rent. Exclusive office spaces in prime locations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1" style={{ color: '#CC9D16' }} />
                  <div>
                    <p className="text-gray-700">Properties in Delhi, Gurgaon, Goa and Dhulera cities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar size={20} className="mr-3 mt-1" style={{ color: '#CC9D16' }} />
                  <div>
                    <p className="text-gray-700">Dealing since 2012 in Netaji Subhash Place with over a decade of industry expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award size={20} className="mr-3 mt-1" style={{ color: '#CC9D16' }} />
                  <div>
                    <p className="text-gray-700">Successfully partnered with numerous corporate clients and individual investors for their property needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-t-2" style={{ borderTopColor: '#CC9D16' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#CC9D16' }}>Our Commitment</h4>
              <p className="text-gray-700">At our agency, we pride ourselves on understanding our clients' unique requirements and delivering tailored property solutions. Whether you're looking for your dream home or a strategic commercial investment, our personalized approach ensures your complete satisfaction.</p>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Building size={36} />, count: '10+', label: 'Years Experience' },
            { icon: <Home size={36} />, count: '500+', label: 'Properties Managed' },
            { icon: <Briefcase size={36} />, count: '200+', label: 'Corporate Clients' },
            { icon: <MapPin size={36} />, count: '4', label: 'Cities Covered' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105"
              style={{ borderBottom: `3px solid #CC9D16` }}
            >
              <div className="flex justify-center mb-4" style={{ color: '#CC9D16' }}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}