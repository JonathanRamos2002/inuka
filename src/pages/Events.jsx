import React from 'react';
import Header from '../../src/components/common/Header';
import Footer from '../../src/components/common/Footer';
import Button from '../../src/components/ui/Button';

const EventsPage = () => {
  const upcomingEvents = [
    {
      image: "/images/img_unsplashqodzsqoxd3i.png",
      title: "Career Development Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual Event",
      description: "Join us for an intensive workshop focused on career development for International Students. Learn essential skills for resume building, interview preparation, and professional networking. This event will feature industry experts and successful professionals sharing their insights and experiences.",
      topics: [
        "Resume and Cover Letter Writing",
        "Interview Techniques",
        "Professional Networking",
        "Career Path Planning"
      ]
    },
    {
      image: "/images/img_unsplash36v6zhpgzli.png",
      title: "Networking Mixer",
      date: "March 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Downtown Conference Center",
      description: "Connect with fellow International Students, alumni, and professionals at our networking mixer. This event provides an excellent opportunity to build meaningful connections, share experiences, and explore potential career opportunities in a relaxed and supportive environment.",
      topics: [
        "Professional Networking",
        "Industry Insights",
        "Career Opportunities",
        "Community Building"
      ]
    },
    {
      image: "/images/img_frame_31.png",
      title: "Scholarship Information Session",
      date: "April 5, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      description: "Learn about our scholarship opportunities and application process. This information session will cover various scholarship programs, eligibility criteria, application requirements, and tips for submitting a successful application. Don't miss this chance to secure financial support for your education.",
      topics: [
        "Scholarship Programs Overview",
        "Application Process",
        "Eligibility Requirements",
        "Tips for Success"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f36a34] py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[97px] font-light text-white capitalize mb-4 md:mb-8">
            Upcoming Events
          </h1>
          <p className="text-lg md:text-xl leading-6 text-[#ffffffb2] mb-8 md:mb-12 max-w-4xl mx-auto">
            Stay connected with INUKA Foundation and join us at our upcoming events designed to support, empower, and connect International Students. Our events provide valuable opportunities for learning, networking, and professional development.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-[200px] md:h-auto">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-full md:w-2/3 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl leading-tight md:leading-[43px] font-medium text-[#030d28] capitalize mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
                    <div className="flex items-center space-x-2">
                      <img src="/images/img_calendar01.svg" alt="calendar" className="w-5 h-5 md:w-6 md:h-6" />
                      <span className="text-sm md:text-base text-[#030d28]">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/images/img_clock.svg" alt="time" className="w-5 h-5 md:w-6 md:h-6" />
                      <span className="text-sm md:text-base text-[#030d28]">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/images/img_location.svg" alt="location" className="w-5 h-5 md:w-6 md:h-6" />
                      <span className="text-sm md:text-base text-[#030d28]">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-base md:text-lg leading-6 md:leading-7 text-[#030d287f] mb-6">
                    {event.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-medium text-[#030d28] mb-3">Topics Covered:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#f36a34] rounded-full"></div>
                          <span className="text-sm md:text-base text-[#030d28]">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="bg-[#f36a34] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium capitalize text-sm md:text-base"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;