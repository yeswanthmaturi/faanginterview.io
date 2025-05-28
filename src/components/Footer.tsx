import React from 'react';

function Footer() {
  return (
    <footer className="relative py-12 bg-[#0A0A0A] border-t border-[#8A2BE2]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
          <a 
            href="/schedule"
            className="text-gray-300 hover:text-[#00F0FF] transition-colors duration-300"
          >
            Schedule a Free consultation call
          </a>
          <span className="hidden md:inline text-[#8A2BE2]/40">|</span>
          <a 
            href="/companies"
            className="text-gray-300 hover:text-[#00F0FF] transition-colors duration-300"
          >
            Supported Companies and Roles
          </a>
          <span className="hidden md:inline text-[#8A2BE2]/40">|</span>
          <a 
            href="/share"
            className="text-gray-300 hover:text-[#00F0FF] transition-colors duration-300"
          >
            Share your Interview experience and Earn
          </a>
          <span className="hidden md:inline text-[#8A2BE2]/40">|</span>
          <a 
            href="/privacy"
            className="text-gray-300 hover:text-[#00F0FF] transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;