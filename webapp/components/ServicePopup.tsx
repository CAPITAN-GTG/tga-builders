import React from 'react';
import { X } from 'lucide-react';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  services: string[];
  icon: React.ElementType;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ isOpen, onClose, title, services, icon: Icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center">
        {/* Backdrop with fade animation */}
        <div 
          className="fixed inset-0 transition-opacity duration-300 ease-in-out" 
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        {/* Modal with slide and scale animation */}
        <div 
          className="relative w-full max-w-lg mx-auto transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all duration-300 ease-in-out"
          style={{
            animation: 'modalIn 0.3s ease-out forwards'
          }}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none transition-colors duration-200"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <Icon className="h-6 w-6 text-cyan-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {title}
              </h3>
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="text-gray-600">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes modalOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default ServicePopup; 