"use client";
import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-transform transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Red Notification Dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white shadow-sm"></span>
        </span>
        
        {/* Main Icon */}
        <MessageCircle size={32} className="text-white fill-white group-hover:drop-shadow-md" />
      </Link>
    </div>
  );
}
