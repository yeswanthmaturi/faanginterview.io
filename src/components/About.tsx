import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { 
        opacity: 0,
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    iconsRef.current.forEach((icon, index) => {
      if (!icon) return;
      
      gsap.fromTo(
        icon,
        { 
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0D0C13] to-[#14121E] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              About FAANGinterview.org
            </h2>
          </div>

          <div 
            ref={contentRef}
            className="relative z-10 bg-gradient-to-br from-[#1A1A1A]/80 to-[#0F0F0F]/80 rounded-2xl p-8 md:p-12 backdrop-blur-xl border border-[#8A2BE2]/20 hover:border-[#00F0FF]/30 transition-all duration-500"
          >
            <div className="flex flex-wrap gap-8 mb-12 justify-center">
              <div 
                ref={el => iconsRef.current[0] = el}
                className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F0FF]/20 to-[#8A2BE2]/20 border border-[#00F0FF]/30"
              >
                <Users className="w-8 h-8 text-[#00F0FF]" />
              </div>
              <div 
                ref={el => iconsRef.current[1] = el}
                className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8A2BE2]/20 to-[#00F0FF]/20 border border-[#8A2BE2]/30"
              >
                <Target className="w-8 h-8 text-[#8A2BE2]" />
              </div>
              <div 
                ref={el => iconsRef.current[2] = el}
                className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F0FF]/20 to-[#8A2BE2]/20 border border-[#00F0FF]/30"
              >
                <Award className="w-8 h-8 text-[#00F0FF]" />
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Landing a job at a top tech company can feel like a huge challenge. That's where we come in. Think of us as your experienced guides who've been through the FAANG interview process ourselves and cracked them multiple times.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-6 rounded-xl border border-[#8A2BE2]/20">
              We understand the interview strategies and expectations at top tech companies and we're passionate about making that knowledge accessible to you. <span className="font-semibold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">We're not just about practice questions; we're your partners from the moment you apply until you get that exciting offer.</span>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              We provide the real-world strategies, personalized support, and confidence you need to stand out and achieve your career goals. Let's start your journey to success together.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}

export default About;