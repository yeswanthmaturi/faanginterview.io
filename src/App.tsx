import React from 'react';
import { Code, ArrowRight, CheckCircle2, X, Check, Target, Users, BookOpen } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function App() {
  const features = [
    {
      icon: Users,
      title: "Initial Consultation",
      subtitle: "Free Mock Interview",
      description: "We analyze your profile and target interview, providing a free, company- and role-specific mock interview conducted by a FAANG engineer."
    },
    {
      icon: Target,
      title: "Personalized Learning",
      subtitle: "Pathway",
      description: "Leveraging insights from your target company and role, we develop a meticulously crafted preparation strategy designed to optimize the chances of cracking the offer."
    },
    {
      icon: BookOpen,
      title: "Targeted Training",
      subtitle: "Custom Curriculum",
      description: "Get custom training for your specific role and company. Access tailored video courses, insightful problem breakdowns, and practical exercises designed to maximize your interview success."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-[#00F0FF]" />
              <span className="text-xl font-semibold tracking-tight">FAANGInterview.io</span>
            </div>
            <button className="rounded-full bg-[#8A2BE2] px-6 py-2 font-medium transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:transform hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center text-center">
            <div className="mb-8 max-w-4xl">
              <h1 className="bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                Succeed at your FAANG Interview
              </h1>
              <div className="mt-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Smarter, Faster, Guaranteed!!!')
                      .start();
                  }}
                  options={{
                    cursor: '|',
                    delay: 50,
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
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/20 to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-section">
            <div className="feature-content">
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" />
              </div>
              <h2 className="feature-title">{feature.title}</h2>
              <h3 className="feature-subtitle">{feature.subtitle}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;