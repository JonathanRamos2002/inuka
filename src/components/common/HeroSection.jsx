import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-20">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-[80px] leading-[84px] font-light text-[#030d28] capitalize mb-8">
            <span className="text-[#030d28a5] font-light">Empowering African </span>
            <span className="font-normal">International Students for Success</span>
          </h1>
          
          <p className="text-base leading-6 text-[#7f7f7f] mb-12 max-w-xl">
            Bridging the gap between education and opportunity, we connect African International Students with mentorship, career guidance, and a supportive community. With insights from successful African professionals, we help students navigate challenges and unlock their full potential in academic and professional life.
          </p>
          
          <div className="flex space-x-6">
            <Button variant="primary" className="bg-[#f36a34] text-white px-10 py-4 rounded-lg font-medium capitalize">
              Upcoming Events
            </Button>
            <button className="text-[#030d28] text-base font-medium capitalize flex items-center space-x-2 hover:text-[#f36a34] transition-colors">
              <span>Explore Scholarships</span>
              <img src="/images/img_icon.svg" alt="arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative w-[650px] h-[650px]">
          <div className="w-[601px] h-[601px] bg-white rounded-full overflow-hidden">
            <img 
              src="/images/img_unsplashzot6a59k2be.png" 
              alt="African International Students" 
              className="w-full h-full object-cover"
            />
          </div>
          <img 
            src="/images/img_frame_1321315698.png" 
            alt="Decorative element" 
            className="absolute bottom-0 -right-12 w-[307px] h-[307px] transform translate-y-16"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;