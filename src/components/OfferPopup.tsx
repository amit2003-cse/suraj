"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function OfferPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-sm bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 transition text-white"
        >
          <X size={20} />
        </button>

        {/* WhatsApp Link Wrapper */}
        <a 
          href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer group"
          onClick={() => setShowPopup(false)} // Close on click
        >
          {/* User needs to place the 'Mata Rani Offer' image in the public directory as popup-offer.jpg */}
          <div className="w-full flex flex-col items-center">
            {/* Displaying text block fallback simulating the original image in case it's missing */}
            <div className="w-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-white relative">
               {!imageError && (
                 /* eslint-disable-next-line @next/next/no-img-element */
                 <img 
                   src="/popup-offer.jpg" 
                   alt="Mata Rani Offer"
                   className="w-full h-auto max-h-[80vh] object-contain group-hover:scale-105 transition duration-500"
                   onError={() => setImageError(true)}
                 />
               )}
               {imageError && (
                 <div className="relative w-full h-[500px] flex flex-col items-center justify-center p-8 text-center bg-black/90 space-y-4">
                    <h2 className="text-amber-500 font-serif text-3xl font-bold">MATA RANI</h2>
                    <h3 className="text-2xl font-black tracking-widest text-white">OFFERS</h3>
                    <div className="border border-amber-500 p-4 w-full">
                       <p className="text-3xl font-bold text-amber-500">15%</p>
                       <p className="font-bold">WELCOME BONUS</p>
                    </div>
                    <div className="border border-amber-500 p-4 w-full">
                       <p className="text-3xl font-bold text-amber-500">10%</p>
                       <p className="font-bold">REFILL BONUS</p>
                    </div>
                    <div className="bg-green-500 text-white w-full py-4 rounded-full font-bold text-xl mt-4">
                      CONTACT US
                    </div>
                    <p className="text-xs text-zinc-500 mt-4">
                      (Please place your image as &quot;popup-offer.jpg&quot; in the public directory to replace this placeholder)
                    </p>
                 </div>
               )}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
