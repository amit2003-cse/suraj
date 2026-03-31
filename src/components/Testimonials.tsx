import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <a 
          href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-50 text-brand-light font-semibold px-8 py-3 rounded-full uppercase tracking-wide hover:bg-emerald-100 transition shadow-sm mb-4 border border-emerald-100"
        >
          Our Success Story
        </a>
        
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
          Testimonials
        </h2>
        
        <div className="border border-gray-200 rounded-lg shadow max-w-2xl w-full p-8 flex flex-col items-center text-center">
          {/* Avatar simulation since original has Richa Bhatia image */}
          <div className="w-24 h-24 rounded-full overflow-hidden bg-rose-100 mb-4 border-2 border-white shadow-md flex items-center justify-center text-rose-500 font-bold text-2xl">
            RB
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Richa Bhatia
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            &quot;I am very happy with the coaching classes in Hadapsar Pune is 
            Suraj Education Academy. Both Deepak Sir and Pihu Mam are very 
            supportive. They help in explaining each and every concept in detail. 
            Thank you.&quot;
          </p>
          
          <div className="flex gap-1 mb-6 text-yellow-400">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
          </div>
          
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            G+
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-white font-semibold px-8 py-4 rounded hover:bg-brand-light transition shadow-md inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
