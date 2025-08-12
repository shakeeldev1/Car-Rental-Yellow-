import React from 'react'

const Map = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl my-12 mx-4 md:mx-8 lg:mx-5">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFEE02]/20 to-black/10 z-10 pointer-events-none rounded-xl"></div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222513.0289768875!2d71.52484720846616!3d29.377137759378073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1741933697589!5m2!1sen!2s" 
        height="450" 
        className="w-full border-0 rounded-xl"
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Bahawalpur Location Map"
      ></iframe>
      
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md z-10">
        <h3 className="font-bold text-gray-800">Our Location</h3>
        <p className="text-sm text-gray-600">Bahawalpur, Pakistan</p>
      </div>
    </div>
  )
}

export default Map