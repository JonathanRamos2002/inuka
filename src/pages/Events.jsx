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
      description: "Join us for an intensive workshop focused on career development for African International Students. Learn essential skills for resume building, interview preparation, and professional networking. This event will feature industry experts and successful professionals sharing their insights and experiences.",
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
      description: "Connect with fellow African International Students, alumni, and professionals at our networking mixer. This event provides an excellent opportunity to build meaningful connections, share experiences, and explore potential career opportunities in a relaxed and supportive environment.",
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
      <section className="bg-[#f36a34] py-24 px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[64px] leading-[97px] font-light text-white capitalize mb-8">
            Upcoming Events
          </h1>
          <p className="text-xl leading-6 text-[#ffffffb2] mb-12 max-w-4xl mx-auto">
            Stay connected with INUKA Foundation and join us at our upcoming events designed to support, empower, and connect African International Students. Our events provide valuable opportunities for learning, networking, and professional development.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 px-20">
        <div className="grid grid-cols-1 gap-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-[30px] overflow-hidden shadow-lg">
              <div className="flex">
                <div className="w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-2/3 p-8">
                  <h3 className="text-3xl leading-[43px] font-medium text-[#030d28] capitalize mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="flex space-x-8 mb-6">
                    <div className="flex items-center space-x-2">
                      <img src="/images/img_calendar01.svg" alt="calendar" className="w-6 h-6" />
                      <span className="text-base text-[#030d28]">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/images/img_clock.svg" alt="time" className="w-6 h-6" />
                      <span className="text-base text-[#030d28]">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/images/img_location.svg" alt="location" className="w-6 h-6" />
                      <span className="text-base text-[#030d28]">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-7 text-[#030d287f] mb-6">
                    {event.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-medium text-[#030d28] mb-4">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-3">
                      {event.topics.map((topic, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-[#f9f9fb] text-[#030d28] rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="bg-[#f36a34] text-white px-8 py-4 rounded-lg font-medium capitalize"
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