import React, { useRef, useEffect } from 'react';
import { Code, ArrowRight, CheckCircle2, X, Check, Target, Clock, Users, BookOpen, DollarSign } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function App() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = stepsContainerRef.current;
    if (!container) return;

    let scrollInterval: number | null = null;
    const scrollSpeed = 15;
    const edgeThreshold = 300;

    const startAutoScroll = (direction: 'left' | 'right', speed: number) => {
      if (scrollInterval) {
        window.clearInterval(scrollInterval);
      }
      scrollInterval = window.setInterval(() => {
        container.scrollLeft += direction === 'left' ? -speed : speed;
      }, 16);
    };

    const stopAutoScroll = () => {
      if (scrollInterval) {
        window.clearInterval(scrollInterval);
        scrollInterval = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX;
      
      const distanceFromLeft = mouseX - rect.left;
      const distanceFromRight = rect.right - mouseX;
      
      if (distanceFromLeft < edgeThreshold) {
        const speed = Math.max(5, (edgeThreshold - distanceFromLeft) / 10);
        startAutoScroll('left', speed);
      } else if (distanceFromRight < edgeThreshold) {
        const speed = Math.max(5, (edgeThreshold - distanceFromRight) / 10);
        startAutoScroll('right', speed);
      } else {
        stopAutoScroll();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!e.shiftKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', stopAutoScroll);
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', stopAutoScroll);
      container.removeEventListener('wheel', handleWheel);
      stopAutoScroll();
    };
  }, []);

  const steps = [
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
    },
    {
      icon: Code,
      title: "Realistic Mock",
      subtitle: "Interviews",
      description: "Engage in 1:1 mock interviews with experienced FAANG interviewers and receive immediate, in-depth feedback to improve your performance and build confidence."
    },
    {
      icon: DollarSign,
      title: "Masterful Offer",
      subtitle: "Negotiation",
      description: "Unlock your earning potential with our comprehensive negotiation coaching, proven to increase FAANG offers by an average of $30-50K+. Secure the compensation you deserve."
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
            <div className="mb-10 max-w-2xl space-y-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
              <div>Stop stressing, start succeeding.</div>
              <div>Land your dream job at a top tech company.</div>
            </div>
            <div className="mb-16 max-w-3xl space-y-10" style={{ animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <div className="highlight-text rounded-lg p-8 transition-all duration-500 ease-in-out hover:transform hover:scale-[1.02]">
                <p className="hero-question text-2xl font-light leading-relaxed tracking-wide text-gray-200 mb-6">
                  Got a FAANG interview on the horizon? Feeling Overwhelmed?
                </p>
                <p className="text-xl font-bold text-[#00F0FF]">
                  Don't let this incredible opportunity slip away!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="feature-card">
                  <div className="flex items-center justify-center h-full">
                    <div className="feature-text-wrapper flex items-center space-x-4">
                      <CheckCircle2 className="feature-icon h-8 w-8 flex-shrink-0" />
                      <span className="text-center flex-1 text-xl font-medium">Company and job role specific interview training</span>
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="flex items-center justify-center h-full">
                    <div className="feature-text-wrapper flex items-center space-x-4">
                      <CheckCircle2 className="feature-icon h-8 w-8 flex-shrink-0" />
                      <span className="text-center flex-1 text-xl font-medium">Handmade in-depth video courses tailored for interviews</span>
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="flex items-center justify-center h-full">
                    <div className="feature-text-wrapper flex items-center space-x-4">
                      <CheckCircle2 className="feature-icon h-8 w-8 flex-shrink-0" />
                      <span className="text-center flex-1 text-xl font-medium">Hands-on coding exercises</span>
                    </div>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="flex items-center justify-center h-full">
                    <div className="feature-text-wrapper flex items-center space-x-4">
                      <CheckCircle2 className="feature-icon h-8 w-8 flex-shrink-0" />
                      <span className="text-center flex-1 text-xl font-medium">Personalized 1:1 mock interviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <button className="flex items-center justify-center space-x-3 rounded-full bg-[#00F0FF] px-8 py-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:transform hover:scale-105">
                <span>See our supported roles and companies</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              <button className="flex items-center justify-center space-x-3 rounded-full border border-[#8A2BE2] px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:bg-[#8A2BE2]/10 hover:transform hover:scale-105">
                <span>See our success stories</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/20 to-transparent"></div>
      </div>

      {/* How are we different section */}
      <div className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent animate-gradient">
              How are we different
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
              Navigating the competitive landscape of FAANG interviews requires more than just practice; it
              demands a tailored strategy, expert guidance, and a risk-free approach.
            </p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Here's how FAANGInterview.io provides that <span className="decisive-edge">decisive edge</span>:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pricing Model Comparison */}
            <div className="comparison-card">
              <h3 className="title-gradient mb-6 text-center text-lg whitespace-nowrap overflow-hidden">
                Pricing Model
              </h3>
              <div className="comparison-content">
                <div className="competitor-side">
                  <div className="flex flex-col mb-2">
                    <div className="flex items-center">
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="text-gray-500 font-bold">The Competition</h4>
                    </div>
                    <span className="text-sm text-gray-500 ml-7">(Prepfully, MeetaPro, Interview.io etc.)</span>
                  </div>
                  <p className="text-red-500 line-through decoration-red-500/50 decoration-[6px]">
                    Hourly fees or per-call charges (uncapped)
                  </p>
                </div>
                <div className="our-side">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-[#00F0FF] mr-2" />
                    <h4 className="text-[#8A2BE2] font-bold">FAANGInterview.io</h4>
                  </div>
                  <div>
                    <p className="gradient-text font-bold text-lg mt-2">Pay only upon securing your FAANG offer.*</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interviewer Quality Comparison */}
            <div className="comparison-card">
              <h3 className="title-gradient mb-6 text-center text-lg whitespace-nowrap overflow-hidden tracking-tight">
                Interviewer Quality
              </h3>
              <div className="comparison-content">
                <div className="competitor-side">
                  <div className="flex flex-col mb-2">
                    <div className="flex items-center">
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="text-gray-500 font-bold">The Competition</h4>
                    </div>
                    <span className="text-sm text-gray-500 ml-7">(Prepfully, MeetaPro, Interview.io etc.)</span>
                  </div>
                  <p className="text-red-500 line-through decoration-red-500/50 decoration-[6px]">
                    Variable, often led by unverified or generalist FAANG individuals
                  </p>
                </div>
                <div className="our-side">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-[#00F0FF] mr-2" />
                    <h4 className="text-[#8A2BE2] font-bold">FAANGInterview.io</h4>
                  </div>
                  <p className="gradient-text font-bold">
                    Elite FAANG Interviewer Network: Dedicated, rigorously trained, and hand-picked engineers laser-focused on your success.
                  </p>
                </div>
              </div>
            </div>

            {/* Prep Strategy Comparison */}
            <div className="comparison-card">
              <h3 className="title-gradient mb-6 text-center text-lg whitespace-nowrap overflow-hidden">
                Prep Strategy
              </h3>
              <div className="comparison-content">
                <div className="competitor-side">
                  <div className="flex flex-col mb-2">
                    <div className="flex items-center">
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="text-gray-500 font-bold">The Competition</h4>
                    </div>
                    <span className="text-sm text-gray-500 ml-7">(Prepfully, MeetaPro, Interview.io etc.)</span>
                  </div>
                  <p className="text-red-500 line-through decoration-red-500/50 decoration-[6px]">
                    Generic & monotonous training that is not tailored for you
                  </p>
                </div>
                <div className="our-side">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-[#00F0FF] mr-2" />
                    <h4 className="text-[#8A2BE2] font-bold">FAANGInterview.io</h4>
                  </div>
                  <p className="gradient-text font-bold">
                    Hyper-Personalized Curriculum: Custom-designed training action plan adapting to your unique skills, strengths, and specific areas for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#00F0FF] mb-4 animate-pulse">
              The FAANGInterview.io Difference: Engineered for Results
            </h3>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent animate-gradient">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto">
            Our proven 5-step process to transform you into a confident FAANG-ready candidate
          </p>
        </div>

        <div 
          ref={stepsContainerRef}
          className="steps-container relative flex overflow-x-auto pb-12 snap-x snap-mandatory custom-scrollbar"
          style={{ paddingTop: '4rem' }}
        >
          <div className="flex space-x-6 px-[calc(50vw-22rem)] pb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card relative flex-none w-[22rem] snap-center"
              >
                <div className="relative h-full bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-6 border border-[#8A2BE2]/20 transform transition-all duration-500 hover:scale-105 hover:border-[#00F0FF]/40">
                  <div className="absolute -top-8 -left-4 w-12 h-12 bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2] rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="mt-6 mb-4">
                    <step.icon className="w-12 h-12 text-[#00F0FF]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <h4 className="text-xl font-semibold mb-4 text-[#8A2BE2]">
                    {step.subtitle}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default App;