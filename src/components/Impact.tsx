import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Impact() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const counters = counterRefs.current;
    
    counters.forEach((counter, index) => {
      if (!counter) return;

      const targetValue = parseInt(counter.getAttribute('data-value') || '0');
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';

      gsap.fromTo(
        counter,
        { innerText: '0' },
        {
          innerText: targetValue,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
          },
          onUpdate: () => {
            counter.innerHTML = `${prefix}${Math.floor(gsap.getProperty(counter, 'innerText') as number)}${suffix}`;
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#14121E] to-[#0D0C13] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 decisive-edge">
            Our Proven Impact
          </h2>
          <p className="text-gray-400 text-lg opacity-60">
            (as of May 2025)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          <div className="bg-[#1C1A26] rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00F0FF]/10">
            <span
              ref={el => counterRefs.current[0] = el}
              data-value="50"
              data-suffix="+"
              className="block text-5xl font-bold text-[#8DFFCF] mb-4"
            >
              0+
            </span>
            <span className="text-lg font-semibold text-gray-300">
              Successful Candidates Coached
            </span>
          </div>

          <div className="bg-[#1C1A26] rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00F0FF]/10">
            <span
              ref={el => counterRefs.current[1] = el}
              data-value="92"
              data-suffix="%"
              className="block text-5xl font-bold text-[#8DFFCF] mb-4"
            >
              0%
            </span>
            <span className="text-lg font-semibold text-gray-300">
              Offer Rate
            </span>
          </div>

          <div className="bg-[#1C1A26] rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00F0FF]/10">
            <span
              ref={el => counterRefs.current[2] = el}
              data-value="40"
              data-prefix="$"
              data-suffix="K"
              className="block text-5xl font-bold text-[#8DFFCF] mb-4"
            >
              $0K
            </span>
            <span className="text-lg font-semibold text-gray-300">
              Avg. Compensation Increase
            </span>
          </div>

          <div className="bg-[#1C1A26] rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00F0FF]/10">
            <span
              ref={el => counterRefs.current[3] = el}
              data-value="300"
              data-prefix="$"
              data-suffix="K"
              className="block text-5xl font-bold text-[#8DFFCF] mb-4"
            >
              $0K
            </span>
            <span className="text-lg font-semibold text-gray-300">
              Average Compensation per Candidate Achieved
            </span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-lg mb-6">
            Ready to become our next success story?
          </p>
          <a 
            href="/start"
            className="inline-flex items-center space-x-2 text-[#7DB3FF] font-semibold hover:underline"
          >
            Start your journey →
          </a>
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(141,255,207,0.1),transparent_70%)]" />
    </section>
  );
}

export default Impact;