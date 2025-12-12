import React from 'react'
import Image from 'next/image'

const WhatsApp = () => {
  return (
    <div className='min-h-screen bg-[#00A884] flex flex-col items-center justify-center p-4'>
      {/* Main Content Container */}
      <div className="bg-white w-full max-w-[600px] rounded-2xl shadow-xl p-8 relative">
        {/* Logo Circle */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="aspect-square bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={64} 
              height={64}
              className="rounded-none object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">TGA Builders Inc</h1>
          <p className="text-gray-600 mb-8">WhatsApp Contact</p>
          
          {/* QR Code */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/qr.jpeg" 
              alt="WhatsApp QR Code" 
              width={300} 
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-white text-center mt-8 max-w-md text-sm md:text-base">
        Scan or upload this QR code using the WhatsApp camera to add TGA Builders on WhatsApp
      </p>
    </div>
  )
}

export default WhatsApp