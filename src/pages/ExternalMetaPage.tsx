import React from 'react';
import { ArrowLeft, Code, ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function ExternalMetaPage() {
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
            <span className="text-xl font-semibold tracking-tight">FAANGInterview.org</span>
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
              <h1 className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                Meta Data Engineer, Product Analytics Prep Guide
              </h1>
            </div>
            <div className="mb-10 max-w-2xl space-y-4 text-2xl font-bold tracking-tight">
              <div className="decisive-edge">
                We are hands down the best resource available online for the Meta Data Engineer interview.
              </div>
              <div className="text-4xl decisive-edge">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Succeed or don\'t pay us*')
                      .start();
                  }}
                  options={{
                    cursor: '|',
                    delay: 75,
                    loop: false,
                    autoStart: true,
                    deleteSpeed: Infinity,
                    wrapperClassName: 'Typewriter__wrapper',
                    cursorClassName: 'Typewriter__cursor',
                    keepCursorOnComplete: true
                  }}
                />
              </div>
            </div>
            
            {/* Content area */}
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-12 border border-[#8A2BE2]/20">
                <div className="flex items-center justify-center mb-6">
                  <ExternalLink className="h-12 w-12 text-[#00F0FF]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#00F0FF]">
                  Meta Data Engineer Preparation
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  This page represents the dedicated Meta Data Engineer interview preparation content that would be available at faanginterview.org/de/meta
                </p>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00F0FF] rounded-full mt-2"></div>
                    <p className="text-gray-400">Comprehensive SQL interview preparation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-2"></div>
                    <p className="text-gray-400">Python data engineering challenges</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00F0FF] rounded-full mt-2"></div>
                    <p className="text-gray-400">Meta-specific system design scenarios</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8A2BE2] rounded-full mt-2"></div>
                    <p className="text-gray-400">Behavioral interview coaching</p>
                  </div>
                </div>
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

export default ExternalMetaPage;