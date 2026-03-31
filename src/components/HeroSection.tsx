export default function HeroSection() {
  return (
    <section className="relative w-full bg-brand text-white overflow-hidden mt-16 pt-10 pb-16 md:py-24">
      {/* Background Graphic Abstract */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-blue-800 transform skew-x-12 -mr-20 z-0 hidden md:block opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex flex-col items-start gap-4 mb-8 md:mb-0">
          <div className="bg-brand-light text-white font-bold px-4 py-2 rounded-lg inline-block uppercase tracking-wider border-2 border-white shadow-lg text-lg transform -rotate-2">
            CLASS TOPPERS!
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-4 drop-shadow-md uppercase">
            Empowering Minds,<br/>Inspiring Futures
          </h1>
          
          <div className="bg-white text-brand font-black px-6 py-2 mt-4 text-2xl md:text-3xl shadow-xl border-b-4 border-gray-300 uppercase">
            Admissions Open
          </div>
          
          <p className="mt-4 text-gray-100 max-w-md font-medium text-sm md:text-base border-l-4 border-yellow-400 pl-4">
            VI-X & XI-XII Accounts, Applied Maths,<br/>
            Economics, Business studies
          </p>
          
          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="bg-white text-brand px-3 py-1 font-bold text-xs shadow-sm uppercase">CBSE</span>
            <span className="bg-white text-brand px-3 py-1 font-bold text-xs shadow-sm uppercase">STATE</span>
            <span className="bg-white text-brand px-3 py-1 font-bold text-xs shadow-sm uppercase">ICSE</span>
          </div>

          <div className="mt-8">
            <a 
              href="https://api.whatsapp.com/send?phone=919711458977&text=welcome%20to%20best%20about%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition transform hover:scale-105 inline-block"
            >
              Get Started Now
            </a>
          </div>
        </div>
        
        {/* Placeholder for Topper Images (Simulating the screenshots) */}
        <div className="md:w-1/2 flex justify-center w-full mt-6 md:mt-0">
          <div className="flex gap-2 sm:gap-4 md:scale-110">
            {[
              { id: 1, name: "Krish", score: "97%" },
              { id: 2, name: "Sanjay", score: "98%" },
              { id: 3, name: "Sakshi", score: "96%" }
            ].map(student => (
              <div key={student.id} className="flex flex-col items-center">
                <div className="w-20 h-24 md:w-24 md:h-28 bg-blue-200 rounded-t-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center relative">
                   {/* Fallback avatar shape */}
                   <div className="w-12 h-12 bg-blue-400 rounded-full mb-4"></div>
                   <div className="absolute bottom-0 w-full h-8 bg-blue-500 rounded-t-full"></div>
                </div>
                <div className="bg-white border-b-2 border-brand text-brand text-[10px] sm:text-xs font-bold w-full text-center py-1 mt-1 shadow">
                  {student.name}<br/>{student.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
