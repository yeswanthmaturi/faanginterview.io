import React, { useRef, useEffect } from 'react';
import { Code, ArrowRight, CheckCircle2, X, Check, Target, Clock, Users, BookOpen, DollarSign } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function App() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.3 }
    );

    rail.querySelectorAll('.step').forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const scrollRail = (direction: 'left' | 'right') => {
    const rail = railRef.current;
    if (!rail) return;

    const scrollAmount = direction === 'left' ? -rail.clientWidth : rail.clientWidth;
    rail.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const steps = [
    // Your existing steps array...
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Previous sections... */}

      {/* How It Works Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto">
            Our proven 5-step process to transform you into a confident FAANG-ready candidate
          </p>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4">
          <button 
            onClick={() => scrollRail('left')}
            className="nav-button left"
            aria-label="Scroll left"
          >
            ‹
          </button>
          
          <div 
            ref={railRef}
            className="steps-rail"
            role="list"
          >
            {steps.map((step, index) => (
              <article
                key={index}
                className="step"
                role="listitem"
                tabIndex={0}
                aria-label={`Step ${index + 1} – ${step.title}`}
              >
                <div className="step-number">{index + 1}</div>
                <step.icon className="step-icon" aria-hidden="true" />
                <h3>{step.title}</h3>
                <h4>{step.subtitle}</h4>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <button 
            onClick={() => scrollRail('right')}
            className="nav-button right"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </section>

      {/* Rest of your sections... */}
    </div>
  );
}

export default App;