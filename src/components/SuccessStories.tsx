import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The team went above and beyond, to make me crack the toughest job interview of my life, so thankful.",
    author: "Matt",
    role: "Data Engineer at Meta",
    gradient: "from-[#00F0FF] to-[#8A2BE2]"
  },
  {
    quote: "The mocks were even tougher than my actual Meta onsite—perfect prep.",
    author: "Hari P",
    role: "Data Engineer at Meta",
    gradient: "from-[#8A2BE2] to-[#00F0FF]"
  },
  {
    quote: "Their negotiation advice alone covered my training cost many times over!",
    author: "Kumar G",
    role: "Data Engineer at Amazon",
    gradient: "from-[#00F0FF] to-[#8A2BE2]"
  }
];

function SuccessStories() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50,
          rotateY: -15
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join hundreds of successful candidates who transformed their careers with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="success-story-card relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-8 border border-[#8A2BE2]/20 transform transition-all duration-500 hover:scale-105 hover:border-[#00F0FF]/40"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Quote className={`absolute -top-6 -left-6 w-12 h-12 p-2.5 rounded-xl bg-gradient-to-br ${testimonial.gradient} text-white transform rotate-180`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <blockquote className="flex-grow mb-6">
                  <p className="text-xl text-gray-200 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                
                <footer>
                  <div className={`bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent text-lg font-bold`}>
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {testimonial.role}
                  </div>
                </footer>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 to-[#8A2BE2]/5 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8A2BE2]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}

export default SuccessStories;