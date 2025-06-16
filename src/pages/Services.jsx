import React from 'react';
import Header from '../../src/components/common/Header';
import Footer from '../../src/components/common/Footer';
import Card from '../../src/components/ui/Card';
import Button from '../../src/components/ui/Button';

const ServicesPage = () => {
  const services = [
    {
      title: "Pilot Scholarship Program",
      description: "Our scholarship program provides financial support to International Students, helping them overcome financial barriers and focus on their education. We offer various scholarships with different eligibility criteria and award amounts.",
      image: "/images/img_250114scholarships_1.png",
      details: [
        "Merit-based scholarships",
        "Need-based financial aid",
        "Emergency funding support",
        "Application assistance"
      ]
    },
    {
      title: "Career Development Workshops",
      description: "We organize comprehensive workshops to help students develop essential professional skills and prepare for their careers. These workshops cover resume building, interview preparation, networking strategies, and more.",
      backgroundImage: "/images/img__2.png",
      details: [
        "Resume and cover letter writing",
        "Interview preparation",
        "Professional networking",
        "Career path planning"
      ]
    },
    {
      title: "Mentorship Programs",
      description: "Our mentorship program connects students with successful professionals who provide guidance, support, and valuable insights into navigating academic and professional challenges.",
      backgroundImage: "/images/img__3.png",
      details: [
        "One-on-one mentoring",
        "Group mentoring sessions",
        "Industry-specific guidance",
        "Long-term career support"
      ]
    },
    {
      title: "Networking Events",
      description: "We host regular networking events that bring together students, professionals, and industry leaders, creating opportunities for meaningful connections and career advancement.",
      backgroundImage: "/images/img__4.png",
      details: [
        "Industry mixers",
        "Career fairs",
        "Professional meetups",
        "Alumni networking"
      ]
    },
    {
      title: "Support Services",
      description: "Our comprehensive support services address various aspects of student life, including academic support, mental health resources, and cultural integration assistance.",
      backgroundImage: "/images/img__5.png",
      details: [
        "Academic tutoring",
        "Mental health counseling",
        "Cultural integration support",
        "Emergency assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f9f9fb] py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[97px] font-light text-[#030d28] capitalize mb-4 md:mb-8">
            Our Services
          </h1>
          <p className="text-lg md:text-xl leading-6 text-[#030d287f] mb-8 md:mb-12 max-w-4xl">
            Empowering International Students by providing a suite of services designed to bridge the gap between academic challenges and professional success. Our services focus on mentorship, career development, support, networking, and financial assistance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <Card key={index} variant="default" className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="relative w-full md:w-1/3 h-[200px] md:h-[300px] rounded-[20px] md:rounded-[30px] overflow-hidden">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${service.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl leading-tight md:leading-[43px] font-medium text-[#030d28] capitalize mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-base md:text-lg leading-6 md:leading-7 text-[#030d287f] mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6 md:mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#f36a34] rounded-full"></div>
                        <span className="text-sm md:text-base leading-6 text-[#030d28]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="primary" 
                    className="bg-[#f36a34] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium capitalize text-sm md:text-base"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;