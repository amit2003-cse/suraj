import { Phone } from "lucide-react";
import Link from "next/link";

export default function FeaturesBanner() {
  return (
    <section className="relative w-full overflow-hidden my-12 bg-blue-900 mx-auto max-w-7xl rounded-3xl shadow-2xl flex flex-col items-center py-20 px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-90 mixing-blend-multiply z-0 flex items-center justify-center">
         {/* Using linear-gradient to mimic the blurred bookshelf background */}
         <div className="w-full h-full bg-gradient-to-tr from-brand to-cyan-700 opacity-80" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        {/* 11th to 12th Box */}
        <div className="bg-white text-brand px-8 py-3 font-black text-4xl md:text-6xl flex shadow-lg">
          11<sup className="text-xl md:text-3xl mt-2 ml-1">TH</sup>
          <span className="mx-4">TO</span>
          12<sup className="text-xl md:text-3xl mt-2 ml-1">TH</sup>
        </div>
        
        {/* Commerce */}
        <div className="text-white font-black text-3xl md:text-5xl tracking-widest uppercase">
          COMMERCE
        </div>
        
        {/* Boards */}
        <div className="bg-white text-brand px-6 py-2 font-bold text-2xl md:text-4xl shadow-lg mt-2">
          CBSE | HSC | ISC
        </div>
        
        {/* WhatsApp Us */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://api.whatsapp.com/send?phone=919711458977&text=Hello,%20I%20want%20to%20know%20more%20about%20the%20commerce%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl transition transform hover:scale-105"
          >
            WhatsApp us
            <Phone size={24} className="fill-white" />
          </Link>
        </div>
        
      </div>
      <div className="absolute bottom-4 w-full flex justify-between px-8 text-white/50 z-10 text-xs">
          <div><br/></div>
          <div className="bg-white/10 rounded-full px-4 py-1 flex items-center gap-2">
            <span>suraj-edu.vercel.app</span>
          </div>
          <div><br/></div>
      </div>
    </section>
  );
}
