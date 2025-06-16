import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-[#f9f9fb] py-12 md:py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[97px] font-light text-[#030d28] capitalize mb-4 md:mb-8">
            Empowering International Students
          </h1>
          <p className="text-lg md:text-xl leading-6 text-[#030d287f] mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0">
            Supporting, empowering, and connecting International Students through mentorship, career development, and educational resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary" className="bg-[#f36a34] text-white px-8 py-4 rounded-lg font-medium capitalize">
              Get Started
            </Button>
            <Button variant="secondary" className="bg-white text-[#030d28] px-8 py-4 rounded-lg font-medium capitalize">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-[400px] md:max-w-[650px] aspect-square">
          <div className="w-full h-full bg-white rounded-full overflow-hidden">
            <img 
              src="/images/img_unsplashzot6a59k2be.png" 
              alt="International Students" 
              className="w-full h-full object-cover"
            />
          </div>
          <img 
            src="/images/img_frame_1321315698.png" 
            alt="Decorative element" 
            className="absolute bottom-0 -right-6 md:-right-12 w-[200px] md:w-[307px] h-[200px] md:h-[307px] transform translate-y-8 md:translate-y-16"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;