"use client";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 bg-zinc-50 flex flex-col items-center">
      <a 
        href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-50 text-brand-light font-semibold px-8 py-3 rounded-full uppercase tracking-wide hover:bg-emerald-100 transition shadow-sm mb-8 border border-emerald-100"
      >
        All Courses
      </a>
      
      <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
        Courses Categories
      </h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Course Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col p-6 items-center text-center border-t-4 border-brand">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-brand font-bold text-xl">
            VI-X
          </div>
          <h3 className="text-xl font-bold mb-2">Foundation Batches</h3>
          <p className="text-gray-600 mb-4 text-sm">Perfect starting point for CBSE, ICSE and State curricula.</p>
        </div>
        
        {/* Course Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col p-6 items-center text-center border-t-4 border-brand">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-brand font-bold text-xl">
            XI-XII
          </div>
          <h3 className="text-xl font-bold mb-2">Commerce Stream</h3>
          <p className="text-gray-600 mb-4 text-sm">Accounts, Economics, Business Studies & Applied Maths.</p>
        </div>
        
        {/* Course Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col p-6 items-center text-center border-t-4 border-brand">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-brand font-bold text-xl">
           ALL
          </div>
          <h3 className="text-xl font-bold mb-2">Target Oriented Prep</h3>
          <p className="text-gray-600 mb-4 text-sm">Dedicated guidance and structured support for all boards.</p>
        </div>
      </div>
    </section>
  );
}
