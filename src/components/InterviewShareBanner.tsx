import React from 'react';

function InterviewShareBanner() {
  return (
    <section id="share-interview" className="relative py-16 bg-gradient-to-br from-[#1A1830] to-[#0B0A14] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Just Interviewed at a <span className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">Top Tech Company?</span>
          </h2>
          
          <p className="text-2xl font-semibold mb-6 text-[#8A2BE2]">
            Share it with us & Get Rewarded! 🎁
          </p>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Recently completed a FAANG interview? Your insights are gold! Jump on a quick 30-minute chat and earn <span className="font-bold text-[#00F0FF]">up to a $100 Amazon Gift Card</span>. Help the next candidate—and treat yourself at the same time.
          </p>
          
          <button className="rounded-full bg-[#00F0FF] px-8 py-4 text-black font-semibold transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#00F0FF]/20">
            Ready to share your story →
          </button>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}

export default InterviewShareBanner;