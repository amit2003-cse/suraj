import { Building2, FileText, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Quicklinks */}
        <div>
          <h4 className="text-brand font-bold text-xl uppercase mb-6 tracking-wide">QUICKLINKS</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-800 hover:text-brand font-semibold flex items-center gap-2">Home</Link></li>
            <li><Link href="#courses" className="text-gray-800 hover:text-brand font-semibold flex items-center gap-2">Courses</Link></li>
            <li><Link href="#about" className="text-gray-800 hover:text-brand font-semibold flex items-center gap-2">About Us</Link></li>
            <li><Link href="#contact" className="text-gray-800 hover:text-brand font-semibold flex items-center gap-2">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Useful Links */}
        <div>
          <h4 className="text-brand font-bold text-xl uppercase mb-6 tracking-wide">USEFUL LINKS</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-brand font-semibold"><FileText size={16} /> Privacy Policy</Link></li>
            <li><Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-brand font-semibold"><FileText size={16} /> Terms & Condition</Link></li>
            <li><Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-brand font-semibold"><FileText size={16} /> Disclaimer</Link></li>
          </ul>
        </div>
        
        {/* Address */}
        <div>
          <h4 className="text-brand font-bold text-xl uppercase mb-6 tracking-wide">ADDRESS</h4>
          <p className="text-gray-800 font-medium leading-relaxed flex items-start gap-2">
            <Building2 size={18} className="mt-1 flex-shrink-0" />
            302, 3rd floor, Gandharv Galaxia Mall, Indore Mp, 452010
          </p>
          <p className="mt-4 flex items-center gap-2 font-bold text-gray-800">
             <Phone size={18} /> +91 97114 58977
          </p>
        </div>
        
        {/* Teaching Hours */}
        <div>
           <h4 className="text-brand font-bold text-xl uppercase mb-6 tracking-wide">TEACHING HOURS</h4>
           <ul className="space-y-3 font-semibold text-gray-800">
             <li className="flex gap-2"><span>&gt;</span> Mon - 9AM to 9PM</li>
             <li className="flex gap-2"><span>&gt;</span> Tue - 9AM to 9PM</li>
             <li className="flex gap-2"><span>&gt;</span> Wed - 9AM to 9PM</li>
             <li className="flex gap-2"><span>&gt;</span> Thu - 9AM to 9PM</li>
             <li className="flex gap-2"><span>&gt;</span> Fri - 9AM to 9PM</li>
             <li className="flex gap-2"><span>&gt;</span> Sat - 9AM to 9PM</li>
             <li className="flex gap-2"><span>&gt;</span> Sun - 9AM to 9PM</li>
           </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-300 w-full pt-6 flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm font-medium text-gray-600">
        <p>&copy; 2026 surajeducationacademy | Design & Crafted By pd</p>
        <div className="mt-4 bg-white px-6 py-2 rounded-full border border-gray-100 shadow-sm inline-block">
          suraj-edu.vercel.app
        </div>
      </div>
    </footer>
  );
}
