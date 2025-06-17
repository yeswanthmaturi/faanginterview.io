import React from 'react';
import { ArrowLeft, Code } from 'lucide-react';

function MetaPage() {
  const handleBackToHome = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-[#00F0FF]" />
            <span className="text-xl font-semibold tracking-tight">FAANGInterview.io</span>
          </div>
          <button 
            onClick={handleBackToHome}
            className="flex items-center space-x-2 rounded-full border border-[#8A2BE2] px-6 py-2 font-medium transition-all duration-300 ease-in-out hover:bg-[#8A2BE2]/10 hover:transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center text-center">
            <div className="mb-8 max-w-4xl">
              <h1 className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                Meta Interview Preparation
              </h1>
            </div>
            <div className="mb-10 max-w-2xl space-y-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              <div>Master your Meta interview with expert guidance</div>
            </div>
            
            {/* Placeholder content area */}
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-12 border border-[#8A2BE2]/20">
                <p className="text-gray-400 text-lg text-center">
                  Content coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/20 to-transparent"></div>
      </div>
    </div>
  );
}

export default MetaPage;