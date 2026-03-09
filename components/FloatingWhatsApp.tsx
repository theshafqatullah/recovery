"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  
  useEffect(() => {
    // Show initial pulse animation, then stop after 10 seconds
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* Expanded Contact Options */}
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2 animate-fadeIn">
            {/* Call Button */}
            <a
              href="tel:+971504645696"
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium whitespace-nowrap">Call Now</span>
            </a>
            
            {/* WhatsApp Chat */}
            <a
              href="https://wa.me/971504645696?text=Hi%2C%20I%20need%20vehicle%20recovery%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium whitespace-nowrap">WhatsApp Chat</span>
            </a>
          </div>
        )}
        
        {/* Main Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 ${
            isOpen 
              ? "bg-zinc-700 hover:bg-zinc-600" 
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white" />
              {/* Pulse Animation */}
              {showPulse && (
                <>
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </span>
                </>
              )}
            </>
          )}
        </button>
        
        {/* Tooltip - only show when button is closed */}
        {!isOpen && (
          <div className="absolute bottom-16 right-0 bg-zinc-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            Need Help? Chat with us!
          </div>
        )}
      </div>
      
      {/* Floating Call Button - Left Side */}
      <a
        href="tel:+971504645696"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 md:hidden"
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Call</span>
      </a>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
