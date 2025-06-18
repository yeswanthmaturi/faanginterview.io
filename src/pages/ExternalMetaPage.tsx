import React from 'react';
import { ArrowLeft, Code, MessageCircle, FileText, ClipboardList, Building2, Database, Users2, Brain } from 'lucide-react';
import Typewriter from 'typewriter-effect';

interface ExternalMetaPageProps {
  onNavigateHome: () => void;
}

function ExternalMetaPage({ onNavigateHome }: ExternalMetaPageProps) {
  const handleBackToHome = () => {
    onNavigateHome();
  };

  const handleLogoClick = () => {
    onNavigateHome();
  };

  const handleGetInTouch = () => {
    // Handle get in touch action
    console.log('Get in touch clicked');
  };

  const handleJobDescription = () => {
    // Handle job description action
    console.log('Job description clicked');
  };

  const handleInterviewFormat = () => {
    // Handle interview format action
    console.log('Interview format clicked');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div 
            className="flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:scale-105"
            onClick={handleLogoClick}
          >
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-[#00F0FF]" />
              <span className="text-2xl font-semibold tracking-tight">FAANGInterview.org</span>
            </div>
            <span className="text-xs text-gray-400/50 mt-1">A TechPathX initiative</span>
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
            <div className="mb-10 max-w-1xl space-y-4 text-1xl font-bold tracking-tight">
              <div className="decisive-edge">
                We are hands down the best resource available online for the Meta Data Engineer interview.
              </div>
              <div className="text-4xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Succeed or Don\'t pay us*')
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

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-16">
              <button 
                onClick={handleGetInTouch}
                className="flex items-center justify-center space-x-3 rounded-full bg-[#00F0FF] px-8 py-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:transform hover:scale-105 min-w-[200px]"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Get in Touch</span>
              </button>
              
              <button 
                onClick={handleJobDescription}
                className="flex items-center justify-center space-x-3 rounded-full border border-[#8A2BE2] px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:bg-[#8A2BE2]/10 hover:transform hover:scale-105 min-w-[200px]"
              >
                <FileText className="h-6 w-6" />
                <span>Job Description</span>
              </button>
              
              <button 
                onClick={handleInterviewFormat}
                className="flex items-center justify-center space-x-3 rounded-full border border-[#00F0FF] px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:bg-[#00F0FF]/10 hover:transform hover:scale-105 min-w-[200px]"
              >
                <ClipboardList className="h-6 w-6" />
                <span>Interview Format</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/20 to-transparent"></div>
      </div>

      {/* Job Description Section */}
      <section className="relative py-16 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                Meta Data Engineer, Product Analytics
              </h2>
              <p className="text-gray-400 text-lg">
                What you'll be doing at Meta
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Core Responsibilities */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 border border-[#8A2BE2]/20 hover:border-[#00F0FF]/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-[#00F0FF] mr-3" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                    Data Architecture & Scale
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As a Data Engineer on Meta's Product Analytics team, you will architect and own petabyte- to exabyte-scale warehouses, building Hive/Presto tables and Spark pipelines that ingest, transform and surface granular logging data, while launching self-serve dashboards consumed by billions of Facebook, Instagram, WhatsApp and Reality Labs users.
                </p>
              </div>

              {/* Analytics & Testing */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 border border-[#8A2BE2]/20 hover:border-[#00F0FF]/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-[#8A2BE2] mr-3" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] bg-clip-text text-transparent">
                    Analytics & A/B Testing
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  You'll refine logging frameworks, define experiment metrics, and fuel Meta's rigorous A/B-testing culture by creating high-quality datasets, ETL jobs and real-time dashboards that let stakeholders assess product changes at lightning speed.
                </p>
              </div>

              {/* Stakeholder Management */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 border border-[#8A2BE2]/20 hover:border-[#00F0FF]/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Users2 className="w-8 h-8 text-[#00F0FF] mr-3" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                    Stakeholder Collaboration
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Deep stakeholder management is core: engineers collaborate daily with PMs, data scientists and leadership, translating data stories into roadmap decisions, negotiating priorities and acting as true owners of their data domains.
                </p>
              </div>

              {/* ML & AI Integration */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 border border-[#8A2BE2]/20 hover:border-[#00F0FF]/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-[#8A2BE2] mr-3" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] bg-clip-text text-transparent">
                    ML & Generative AI
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The pipelines you build also feed machine-learning models for ranking, integrity and personalization, and increasingly serve new generative-AI capabilities that Meta trains on 24-k-GPU clusters and ships through AI assistants and coding copilots.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
}

export default ExternalMetaPage;