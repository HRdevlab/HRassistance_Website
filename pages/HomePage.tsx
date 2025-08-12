
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CORE_VALUES, HERO_SLIDES, INDUSTRY_SEGMENTS } from '../constants';
import CtaBanner from '../components/CtaBanner';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [textKey, setTextKey] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        setTextKey(key => key + 1);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const selectSlide = (index: number) => {
        setActiveIndex(index);
        setTextKey(key => key + 1);
    }

    return (
        <div className="relative w-full h-[600px] text-white overflow-hidden">
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt={slide.headline} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
                <div key={textKey} className="hero-text-enter hero-text-enter-active">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                        {HERO_SLIDES[activeIndex].headline}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                        {HERO_SLIDES[activeIndex].subheadline}
                    </p>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/services" className="w-full sm:w-auto inline-block bg-accent-teal text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-accent-teal/90 transition-all duration-300 transform hover:scale-105">
                        Explore Services
                    </Link>
                    <Link to="/careers" className="w-full sm:w-auto inline-block bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/50">
                        Submit Resume
                    </Link>
                </div>
            </div>
             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => selectSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-accent-teal' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

const AboutPreview: React.FC = () => (
    <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing recruitment strategy" className="rounded-lg shadow-xl"/>
            </div>
            <div className="fade-in-up" style={{ transitionDelay: '200ms' }}>
                <h2 className="text-base font-semibold text-accent-teal uppercase tracking-wider">Welcome to HRassistance India</h2>
                <h3 className="text-3xl font-bold text-deep-blue mt-2 mb-4">A Prominent Search & Selection Company</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                   HRassistance India provides a wide range of recruitment solutions for various requirements. We help organizations find the right people they need at all levels with a specialized team of seasoned recruiters with experience across industries.
                </p>
                <Link to="/about" className="font-semibold text-accent-teal hover:text-accent-teal/80 transition-colors group">
                    Read More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
            </div>
        </div>
    </div>
);


const CoreValues: React.FC = () => (
  <div className="bg-light-blue py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-base font-semibold text-accent-teal uppercase tracking-wider">Our Philosophy</h2>
        <h3 className="text-3xl font-bold text-deep-blue mt-2">Core Values We Embrace</h3>
        <p className="mt-4 text-lg text-gray-600">Respect | Growth | Passion</p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-y-12 md:gap-x-4 lg:gap-x-8">
        {/* Dashed lines for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5">
           <svg width="100%" height="100%" className="overflow-visible">
            <line x1="15%" y1="0" x2="85%" y2="0" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="8, 8"/>
          </svg>
        </div>
        
        {CORE_VALUES.map((value, index) => (
          <div key={value.title} className="relative flex flex-col items-center text-center w-52 fade-in-up" style={{ transitionDelay: `${index * 150}ms`}}>
            <div className="bg-white rounded-full p-5 border-4 border-accent-teal/20 shadow-lg mb-4 z-10">
              <div className="text-accent-teal">{value.icon}</div>
            </div>
            <h4 className="text-lg font-semibold text-deep-blue">{value.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ServicesHighlight: React.FC = () => (
    <div className="py-16 sm:py-24 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-in-up">
                <h2 className="text-base font-semibold text-accent-teal uppercase tracking-wider">Solutions We Offer</h2>
                <h3 className="text-3xl font-extrabold text-deep-blue mt-2">Permanent Staffing Solutions</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.slice(0, 4).map((service, index) => (
                    <div key={service.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100 fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="text-accent-teal mb-4">{React.cloneElement(service.icon, { className: 'w-12 h-12' })}</div>
                        <h3 className="text-xl font-bold text-deep-blue mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12 fade-in-up">
                <Link to="/services" className="font-semibold text-accent-teal hover:text-accent-teal/80 transition-colors group">
                    View All Services <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
            </div>
        </div>
    </div>
);

const IndustriesServed: React.FC = () => (
    <div className="bg-light-blue py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-in-up">
                <h2 className="text-base font-semibold text-accent-teal uppercase tracking-wider">Our Expertise</h2>
                <h3 className="text-3xl font-extrabold text-deep-blue mt-2">Industry Segments We Are Working In</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {INDUSTRY_SEGMENTS.map((industry, index) => (
                    <div
                        key={industry.name}
                        className="relative rounded-lg overflow-hidden shadow-lg group fade-in-up h-64"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${industry.image})` }}
                            role="img"
                            aria-label={industry.name}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 z-10">
                            <h4 className="text-white text-lg font-bold drop-shadow-md">{industry.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="bg-deep-blue text-white py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold mb-12 fade-in-up">Success Stories</h2>
                <div className="relative h-60">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                           {index === activeIndex && (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                                    <div className="font-bold text-lg">{testimonial.name}</div>
                                    <div className="text-sm text-gray-300">{testimonial.role}</div>
                                </div>
                           )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center space-x-2 mt-8">
                   {TESTIMONIALS.map((_, index) => (
                       <button key={index} onClick={() => setActiveIndex(index)} className={`w-12 h-1.5 rounded-full transition-colors ${index === activeIndex ? 'bg-accent-teal' : 'bg-white/30'}`}></button>
                   ))}
                </div>
            </div>
        </div>
    );
};


const HomePage: React.FC = () => {
    useScrollAnimation();
    return (
        <>
            <Hero />
            <AboutPreview />
            <CoreValues />
            <ServicesHighlight />
            <IndustriesServed />
            <Testimonials />
            <CtaBanner 
                title="HRassistance India Consultancy LLP."
                subtitle="The recruitment firm delivering quality recruitment solutions."
                buttonText="Get In Touch"
                buttonLink="/contact"
            />
        </>
    );
};

export default HomePage;
