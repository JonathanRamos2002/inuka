import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';
import Card from '../../components/ui/Card';
import Accordion from '../../components/ui/Accordion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  const faqItems = [
    {
      question: "What services does INUKA provide?",
      answer: "INUKA Foundation is a non-profit organization dedicated to supporting International Students (AIS) by providing mentorship, career development, scholarships, and mental health resources."
    },
    {
      question: "How can Inuka help me grow?",
      answer: "We provide comprehensive support through mentorship programs, career workshops, networking events, and scholarship opportunities to help you achieve your academic and professional goals."
    },
    {
      question: "What services does INUKA provide?",
      answer: "INUKA Foundation offers mentorship programs, career development workshops, scholarship opportunities, networking events, and support services tailored for International Students."
    },
    {
      question: "How can Inuka help me grow?",
      answer: "Through our comprehensive programs, we help you develop professional skills, build networks, access funding opportunities, and connect with successful professionals in Corporate America."
    },
    {
      question: "What services does INUKA provide?",
      answer: "Our services include academic support, career guidance, cultural integration assistance, mental health resources, and financial aid through our scholarship programs."
    }
  ];

  const scholarships = [
    {
      title: "Desire To Inspire Scholarship",
      description: "This scholarship aims to support students from underrepresented communities so they can overco ...",
      deadline: "jul 13, 2025",
      amount: "$7,500",
      variant: "gray",
      image: "/images/img_beautifulafricanamericannursearms600nw1936087690_1.png"
    },
    {
      title: "Mississippi First Scholarship",
      description: "This scholarship aims to support students who need financial assistance in order to pursue their dreams of higher education ...",
      deadline: "jul 13, 2025",
      amount: "$7,500",
      variant: "orange"
    },
    {
      title: "Desire To Inspire Scholarship",
      description: "This scholarship aims to support students from underrepresented communities so they can overco ...",
      deadline: "jul 13, 2025",
      amount: "$7,500",
      variant: "gray"
    }
  ];

  const services = [
    {
      title: "Pilot Scholarship Program",
      image: "/images/img_250114scholarships_1.png"
    },
    {
      title: "Career Development Workshops",
      backgroundImage: "/images/img__2.png"
    },
    {
      title: "Mentorship Programs",
      backgroundImage: "/images/img__3.png"
    },
    {
      title: "Networking Events",
      backgroundImage: "/images/img__4.png"
    },
    {
      title: "Support Services",
      backgroundImage: "/images/img__5.png"
    }
  ];

  const sdgGoals = [
    {
      image: "/images/img_sustainabledevelopmentgoal8_1.png",
      description: "By equipping students with job search strategies, networking opportunities, and career development skills, we help foster economic growth and create pathways to sustainable employment."
    },
    {
      image: "/images/img_sustainabledevelopmentgoal4_1.png",
      description: "We provide mentorship programs, career workshops, and scholarships to ensure inclusive and equitable quality education, helping AIS access the resources they need to thrive academically."
    },
    {
      image: "/images/img_eweb10_1.png",
      description: "Our initiatives bridge the gap between professionals in Corporate America and AIS, offering equal access to opportunities, mentorship, and resources to reduce educational and career disparities."
    },
    {
      image: "/images/img_ewebgoal03_1.png",
      description: "At INUKA Foundation, we believe that investing in International Students today leads to a more equitable and empowered future for all."
    },
    {
      image: "/images/img_sustainabledevelopmentgoal17_1.png",
      description: "We collaborate with universities, businesses, and community leaders to create strong networks that drive student success and support sustainable development."
    }
  ];

  const upcomingEvents = [
    {
      image: "/images/img_unsplashqodzsqoxd3i.png",
      title: "Invest in Your Future",
      description: "Do not let financial barriers hold you back. Our scholarship program provides the support you need to focus on your education and build a brighter future. Apply now and start your journey to success."
    },
    {
      image: "/images/img_unsplash36v6zhpgzli.png",
      title: "Invest in Your Future",
      description: "Do not let financial barriers hold you back. Our scholarship program provides the support you need to focus on your education and build a brighter future. Apply now and start your journey to success."
    },
    {
      image: "/images/img_frame_31.png",
      title: "Invest in Your Future",
      description: "Do not let financial barriers hold you back. Our scholarship program provides the support you need to focus on your education and build a brighter future. Apply now and start your journey to success."
    }
  ];

  const galleryImages = [
    "/images/img_unsplashlcyd9rzqzyi.png",
    "/images/img_frame_34.png",
    "/images/img_frame_31_192x145.png",
    "/images/img_frame_32.png",
    "/images/img_frame_30.png",
    "/images/img_unsplash4rx2zu6hja.png",
    "/images/img_unsplashclegmkycwa4.png",
    "/images/img_frame_27.png",
    "/images/img_unsplashtifowwig6y.png",
    "/images/img_unsplashwws2tg8it24.png",
    "/images/img_unsplashjeeyzsaxbh4.png",
    "/images/img_unsplashi93jyw8hwni.png",
    "/images/img_unsplashqodzsqoxd3i_192x145.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Mission Section */}
      <section className="bg-[#f9f9fb] py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl">
          <h2 className="text-3xl md:text-[52px] leading-tight md:leading-[60px] font-normal text-[#030d28] capitalize mb-6 md:mb-12">
            we are dedicated to supporting international students in their educational and professional journeys
          </h2>
          <p className="text-base md:text-xl leading-6 text-[#030d287f] mb-8 md:mb-12 max-w-5xl">
            Our mission is to support, empower, and connect International Students (AIS) by providing access to educational resources, mentorship, and opportunities for academic and professional growth. We strive to bridge the gap in representation, ensuring that students studying abroad have the guidance, financial assistance, and community support they need to thrive.
          </p>
          <div className="relative">
            <img 
              src="/images/img_collegestudentsdifferentethnicitiescramming_1.png" 
              alt="College students studying" 
              className="w-full h-[300px] md:h-[467px] object-cover rounded-[28px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#fde1d6] to-transparent rounded-[28px]"></div>
            <img 
              src="/images/img_rectangle_17.png" 
              alt="Overlay design" 
              className="absolute top-0 left-4 md:left-16 w-full h-full object-cover rounded-[28px]"
            />
            <img 
              src="/images/img_mask_group_deep_orange_a200.png" 
              alt="INUKA logo overlay" 
              className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-[120px] md:w-[234px] h-[136px] md:h-[266px]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 md:py-24 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Services Header Card */}
          <Card variant="default" className="bg-[#f9f9fb] p-6 md:p-8">
            <h2 className="text-3xl md:text-[52px] leading-tight md:leading-[63px] font-normal text-[#030d28] capitalize mb-4 md:mb-8">
              Our Services
            </h2>
            <p className="text-sm md:text-base leading-5 text-[#7f7f7fcc] font-medium">
              Empowering International Students by providing a suite of services designed to bridge the gap between academic challenges and professional success. Our services focus on mentorship, career development, support, networking, and financial assistance
            </p>
          </Card>

          {/* Service Cards */}
          {services.map((service, index) => (
            <Card key={index} variant="service" className="relative h-[250px] md:h-[387px]">
              {service.image ? (
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-[30px]"
                />
              ) : (
                <div 
                  className="w-full h-full rounded-[30px]"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000a5] to-transparent rounded-b-[30px] p-4 md:p-8">
                <h3 className="text-xl md:text-2xl leading-7 md:leading-9 font-normal text-white capitalize text-center">
                  {service.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="bg-white py-12 md:py-24 px-4 md:px-20">
        <h2 className="text-3xl md:text-[52px] leading-tight md:leading-[60px] font-normal text-[#030d28] capitalize mb-6 md:mb-12 max-w-4xl">
          Our scholarships help International Students cover tuition, books, and living expenses—so you can focus on achieving your dreams
        </h2>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-8">
          {scholarships.map((scholarship, index) => (
            <Card key={index} variant={scholarship.variant} className="flex-1 p-6 md:p-8">
              <h3 className="text-2xl md:text-4xl leading-8 md:leading-[43px] font-medium text-black capitalize mb-4 md:mb-6">
                {scholarship.title}
              </h3>
              <p className="text-base md:text-xl leading-6 font-medium text-[#00000099] capitalize mb-6 md:mb-8">
                {scholarship.description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-between mb-6 md:mb-8 space-y-4 sm:space-y-0">
                <div>
                  <p className="text-sm md:text-base leading-5 font-medium text-[#030d284c] capitalize mb-2">
                    deadline
                  </p>
                  <div className="flex items-center space-x-2">
                    <img src="/images/img_calendar01.svg" alt="calendar" className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-lg md:text-2xl leading-7 font-medium text-[#030d28] capitalize">
                      {scholarship.deadline}
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm md:text-base leading-5 font-medium text-[#030d284c] capitalize mb-2">
                    amount
                  </p>
                  <div className="flex items-center space-x-2">
                    <img src="/images/img_banknote05.svg" alt="money" className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-lg md:text-2xl leading-7 font-medium text-[#030d28] capitalize">
                      {scholarship.amount}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button variant="white" className="w-full md:w-auto bg-white text-[#030d28] px-8 md:px-12 py-3 md:py-4 rounded-[28px] font-medium capitalize">
                apply Now
              </Button>
              
              {scholarship.image && (
                <div className="mt-6 md:mt-8">
                  <img 
                    src={scholarship.image} 
                    alt="Scholarship recipient" 
                    className="w-full h-[200px] md:h-[236px] object-cover rounded-lg"
                  />
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="flex justify-end space-x-2">
          <button className="w-10 h-10 md:w-12 md:h-12 bg-[#eeefef75] rounded-full flex items-center justify-center">
            <img src="/images/img_icon_gray_800.svg" alt="previous" className="w-2 h-1" />
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 bg-[#eeefef] rounded-full flex items-center justify-center">
            <img src="/images/img_icon_gray_800_9x4.svg" alt="next" className="w-2 h-1" />
          </button>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="bg-white py-12 md:py-24 px-4 md:px-20">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-[64px] leading-tight md:leading-[97px] font-light text-[#030d28] capitalize mb-4 md:mb-8">
            SDGs
          </h2>
          <p className="text-base md:text-lg leading-6 md:leading-7 text-[#7f7f7f7f] max-w-4xl mx-auto">
            The proposed NGO aligns with several Sustainable Development Goals (SDGs) set by the United Nations. Here are the key SDGs that this initiative helps support
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {sdgGoals.map((goal, index) => (
            <div key={index} className="text-center">
              <img 
                src={goal.image} 
                alt={`SDG Goal ${index + 1}`} 
                className="w-[200px] md:w-[254px] h-[200px] md:h-[254px] rounded-2xl mb-4 md:mb-6 mx-auto"
              />
              <p className="text-xs leading-[18px] font-medium text-[#8c8c8c] capitalize">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 md:py-24 px-4 md:px-20">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-[64px] leading-tight md:leading-[97px] font-light text-[#030d28] capitalize mb-4 md:mb-8">
            Global Talent, Global Future
          </h2>
          <p className="text-base md:text-lg leading-6 md:leading-7 text-[#7f7f7f7f] max-w-4xl mx-auto">
            These flags represent the nations we support, helping students secure internships and careers in Corporate America.
          </p>
        </div>
        
        <div className="bg-[#f36a34] rounded-[20px] relative overflow-hidden">
          <img 
            src="/images/img_map_maker_cairo_cairo_egypt_silver.png" 
            alt="Africa Map" 
            className="w-full h-[400px] md:h-[676px] object-cover"
          />
          <img 
            src="/images/img_bg.png" 
            alt="Map overlay" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          
          {/* Country Flags - Adjusted positions for mobile */}
          <div className="absolute top-[155px] left-[50%] md:left-[696px] bg-white rounded-2xl p-1">
            <img src="/images/img_vu.svg" alt="Vanuatu flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[186px] left-[60%] md:left-[797px] bg-white rounded-2xl p-1">
            <img src="/images/img_eg.svg" alt="Egypt flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[215px] left-[40%] md:left-[606px] bg-white rounded-2xl p-1">
            <img src="/images/img_ga.svg" alt="Gabon flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[255px] left-[45%] md:left-[656px] bg-white rounded-2xl p-1">
            <img src="/images/img_ng.svg" alt="Nigeria flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[285px] left-[70%] md:left-[876px] bg-white rounded-2xl p-1">
            <img src="/images/img_zw.svg" alt="Zimbabwe flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[315px] left-[55%] md:left-[756px] bg-white rounded-2xl p-1">
            <img src="/images/img_mz.svg" alt="Mozambique flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[353px] left-[65%] md:left-[866px] bg-white rounded-2xl p-1">
            <img src="/images/img_ke.svg" alt="Kenya flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[384px] left-[60%] md:left-[846px] bg-white rounded-2xl p-1">
            <img src="/images/img_ie.svg" alt="Ireland flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[396px] left-[50%] md:left-[712px] bg-white rounded-2xl p-1">
            <img src="/images/img_zw.svg" alt="Zimbabwe flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="absolute top-[564px] left-[55%] md:left-[796px] bg-white rounded-2xl p-1">
            <img src="/images/img_za.svg" alt="South Africa flag" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-[#f36a34] py-12 md:py-24 px-4 md:px-20">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-[64px] leading-tight md:leading-[97px] font-light text-white capitalize mb-4 md:mb-8">
            upcoming events
          </h2>
          <p className="text-base md:text-lg leading-6 md:leading-7 text-[#ffffffb2] max-w-4xl mx-auto">
            Stay connected with INUKA Foundation and join us at our upcoming events designed to support, empower, and connect International Students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-[300px] md:h-[439px] object-cover rounded-[30px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#19191999] to-transparent rounded-b-[30px] p-4 md:p-8">
                <h3 className="text-2xl md:text-[32px] leading-7 md:leading-[39px] font-medium text-white capitalize mb-2 md:mb-4">
                  {event.title}
                </h3>
                <p className="text-xs md:text-sm leading-5 text-[#ffffff99] capitalize">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12 md:py-24 px-4 md:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mb-8 md:mb-16">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-24 md:h-36 object-cover rounded-[42px]"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl md:text-[56px] leading-tight md:leading-[68px] font-normal text-[#030d28] capitalize mb-4 md:mb-8 max-w-3xl mx-auto">
            Empower International Students to Succeed
          </h2>
          <p className="text-sm md:text-base leading-6 font-medium text-[#7f7f7f] capitalize mb-6 md:mb-12 max-w-2xl mx-auto">
            Your donation empowers International Students with mentorship, career support, scholarships, and mental health resources, shaping the next generation of leaders and innovators.
          </p>
          <Link to="/donate">
            <Button variant="primary" className="bg-[#f36a34] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium capitalize flex items-center space-x-2 mx-auto">
              <span>Donate Now</span>
              <img src="/images/img_icon_white_a700.svg" alt="arrow" className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f9f9fb] py-12 md:py-24 px-4 md:px-20">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-[64px] leading-tight md:leading-[97px] font-light text-[#030d28] capitalize mb-4 md:mb-8">
            frequently asked questions
          </h2>
          <p className="text-base md:text-lg leading-6 md:leading-7 text-[#7f7f7f7f] max-w-4xl mx-auto">
            Discover answers to frequently asked questions about our NGO and out approach of finding your dream home. If you have any further inquiries, feel free to reach out to our team for assistance.
          </p>
        </div>
        
        <Accordion items={faqItems} />
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <Card variant="default" className="bg-[#f9f9fb] p-6 md:p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 max-w-2xl mb-8 md:mb-0">
                <h2 className="text-2xl md:text-[40px] leading-tight md:leading-[60px] font-normal text-[#030d28] capitalize mb-4 md:mb-8">
                  subscribe to our newsletter
                </h2>
                <p className="text-sm md:text-base leading-6 font-light text-[#7f7f7f] mb-6 md:mb-12">
                  At Inuka Foundation, we are committed to supporting your educational and professional journey. To stay connected and receive the latest news and opportunities, we invite you to
                </p>
                
                <form onSubmit={handleEmailSubmit} className="relative">
                  <InputField
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pr-32 md:pr-48"
                  />
                  <Button 
                    type="submit"
                    variant="primary" 
                    className="absolute right-1 top-1 bg-[#f36a34] text-white px-4 md:px-8 py-2 md:py-4 rounded-lg font-medium capitalize text-sm md:text-base"
                  >
                    send
                  </Button>
                </form>
              </div>
              
              <div className="bg-[#fde1d6] rounded-tl-[166px] w-full md:w-[592px] h-[200px] md:h-[333px] relative md:ml-8">
                <img 
                  src="/images/img_group.png" 
                  alt="Newsletter illustration" 
                  className="absolute top-8 md:top-16 left-0 w-full h-[120px] md:h-[202px]"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;