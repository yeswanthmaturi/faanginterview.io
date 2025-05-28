import React from 'react';
import { Code, ArrowRight, CheckCircle2, X, Check, Target, Clock, Users, BookOpen, DollarSign } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import InterviewShareBanner from './components/InterviewShareBanner';
import Impact from './components/Impact';
import SuccessStories from './components/SuccessStories';
import About from './components/About';
import Footer from './components/Footer';

function App() {
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
    },
    {
      icon: CheckCircle2,
      title: "Success Guarantee",
      subtitle: "Risk-Free Journey",
      description: "Our proven methodology and expert guidance ensure your success. We stand behind our process with a satisfaction guarantee."
    }
  ];

  const roles = [
    {
      title: "Data Engineer",
      skills: ["SQL", "Python", "Data Modeling", "Big Data tools", "ETL Design", "Product Sense", "Behavioral Questions"],
      companies: ["Meta", "Amazon", "Doordash"]
    },
    {
      title: "Business Intelligence Engineer",
      skills: ["SQL", "Data Modeling", "Business Acumen", "Data Visualizations", "Product Sense", "Behavioral Questions"],
      companies: ["Amazon", "More companies (coming soon)"]
    },
    {
      title: "Software Engineer",
      skills: ["Coding", "System Design", "Architecture", "Multi level design", "Databases", "Front-end", "Back-end"],
      companies: ["Coming Soon"]
    }
  ];

  const handleScrollToRoles = () => {
    const rolesSection = document.getElementById('roles-section');
    if (rolesSection) {
      rolesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSuccessStories = () => {
    const successStoriesSection = document.getElementById('success-stories');
    if (successStoriesSection) {
      successStoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <button 
                onClick={handleScrollToRoles}
                className="flex items-center justify-center space-x-3 rounded-full bg-[#00F0FF] px-8 py-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:transform hover:scale-105"
              >
                <span>See our supported roles and companies</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              <button 
                onClick={handleScrollToSuccessStories}
                className="flex items-center justify-center space-x-3 rounded-full border border-[#8A2BE2] px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:bg-[#8A2BE2]/10 hover:transform hover:scale-105"
              >
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
            <div className="comparison-card flex flex-col items-center">
              <h3 className="title-gradient text-center text-lg tracking-tight leading-none mb-4">
                Pricing Model
              </h3>
              <div className="comparison-content pt-4">
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
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our proven 6-step process to transform you into a confident FAANG-ready candidate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-6 border border-[#8A2BE2]/20 relative transform transition-all duration-500 hover:scale-[1.02] hover:border-[#00F0FF]/40"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-[#00F0FF] to-[#8A2BE2] rounded-xl flex items-center justify-center text-xl font-bold text-white">
                  {index + 1}
                </div>
                <div className="mt-4 mb-4">
                  <step.icon className="w-10 h-10 text-[#00F0FF]" />
                </div>
                <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <h4 className="text-lg font-semibold mb-3 text-[#8A2BE2]">
                  {step.subtitle}
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles We Support Section */}
      <section id="roles-section" className="relative py-16 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              Roles & Companies We Support
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive interview preparation for various technical roles at top tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {roles.map((role, index) => (
              <div
                key={index}
                className="role-card bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 border border-[#8A2BE2]/20 transform transition-all duration-500 hover:scale-[1.02] hover:border-[#00F0FF]/40"
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                  {role.title}
                </h3>
                <div className="mb-8">
                  <h4 className="text-base font-semibold text-gray-300 mb-3">Key Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-1.5 text-sm font-medium rounded-full bg-[#8A2BE2]/10 text-[#00F0FF] border border-[#00F0FF]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-300 mb-3">Companies supported:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {role.companies.map((company, companyIndex) => (
                      <span
                        key={companyIndex}
                        className="px-4 py-1.5 text-sm font-medium rounded-full bg-[#00F0FF]/10 text-[#8A2BE2] border border-[#8A2BE2]/20"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 max-w-3xl mx-auto border border-[#8A2BE2]/20">
              <p className="text-lg text-gray-300 mb-4">
                Looking for another role? Let us know!
              </p>
              <p className="text-gray-400">
                Our roadmap evolves with your needs. We're constantly expanding our coverage to support more roles and companies.
              </p>
              <button className="mt-6 rounded-full bg-[#8A2BE2] px-8 py-3 font-medium transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:transform hover:scale-105">
                Request a Role
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Share Banner */}
      <InterviewShareBanner />
      <Impact />
      <section id="success-stories">
        <SuccessStories />
      </section>
      <About />
      <Footer />
    </div>
  );
}

export default App;