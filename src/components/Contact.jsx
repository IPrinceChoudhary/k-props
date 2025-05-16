import { useState } from 'react';
import { Phone, Mail, Instagram, Send, MapPin, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    propertyIntent: 'buy', // default to 'buy'
    propertyType: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: '',
          contactNumber: '',
          propertyIntent: 'buy',
          propertyType: '',
          description: ''
        });
      }, 3000);
    }, 1500);
  };
  
  const propertyTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'shop', label: 'Shop' },
    { value: 'office', label: 'Office' }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 mt-5 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Contact </span>
            <span style={{ color: '#CC9D16' }}>Us</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#CC9D16' }}></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have questions about a property or interested in our services? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-lg shadow-md">
            {formSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been successfully sent. We will contact you very soon!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name Input */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="fullName">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{ focus: 'ring-#CC9D16' }}
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  {/* Contact Number Input */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="contactNumber">
                      Contact Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Property Intent Radio Buttons */}
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Are you looking to:
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="propertyIntent"
                        value="buy"
                        checked={formData.propertyIntent === 'buy'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 mr-2 border rounded-full flex items-center justify-center ${formData.propertyIntent === 'buy' ? 'border-4' : 'border'}`} 
                        style={{ borderColor: formData.propertyIntent === 'buy' ? '#CC9D16' : '#D1D5DB' }}>
                      </div>
                      <span className="text-gray-700">Buy Property</span>
                    </label>
                    
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="propertyIntent"
                        value="rent"
                        checked={formData.propertyIntent === 'rent'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 mr-2 border rounded-full flex items-center justify-center ${formData.propertyIntent === 'rent' ? 'border-4' : 'border'}`} 
                        style={{ borderColor: formData.propertyIntent === 'rent' ? '#CC9D16' : '#D1D5DB' }}>
                      </div>
                      <span className="text-gray-700">Rent Property</span>
                    </label>
                  </div>
                </div>
                
                {/* Property Type Select */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="propertyType">
                    Property Type
                  </label>
                  <div className="relative">
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 appearance-none bg-white"
                    >
                      <option value="" disabled>Select property type</option>
                      {propertyTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Description Input */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="description">
                    Description
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-3 pointer-events-none">
                      <MessageSquare size={18} className="text-gray-400" />
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="Please provide additional details about your requirements..."
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-md text-white font-medium flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: isSubmitting ? '#E0BC5E' : '#CC9D16', hover: { backgroundColor: '#B58A12' } }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#CC9D16' }}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(204, 157, 22, 0.1)' }}>
                    <Phone size={20} style={{ color: '#CC9D16' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9811799850</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(204, 157, 22, 0.1)' }}>
                    <Mail size={20} style={{ color: '#CC9D16' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <a href="mailto:keshavproperties279@gmail.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                      keshavproperties279@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(204, 157, 22, 0.1)' }}>
                    <Instagram size={20} style={{ color: '#CC9D16' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/keshav_properties/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      @keshav_properties
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(204, 157, 22, 0.1)' }}>
                    <MapPin size={20} style={{ color: '#CC9D16' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">G-17, A-05, Pearl Best Heights-1, N.S.P, Pitampura, Delhi-110034</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md overflow-hidden relative">
              <div 
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10"
                style={{ backgroundColor: '#CC9D16' }}
              ></div>
              
              <h3 className="text-xl font-bold mb-4" style={{ color: '#CC9D16' }}>Connect With Us</h3>
              <p className="text-gray-600 mb-6">Follow us on social media and stay updated with the latest property listings and real estate news.</p>
              
              <a 
                href="https://www.instagram.com/keshav_properties/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium transition-colors duration-300"
                style={{ backgroundColor: '#CC9D16', hover: { backgroundColor: '#B58A12' } }}
              >
                <Instagram size={18} className="mr-2" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}