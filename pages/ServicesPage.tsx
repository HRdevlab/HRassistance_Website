import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CtaBanner from '../components/CtaBanner';
import { SERVICES, HIRING_PROCESS, INDUSTRIES } from '../constants';
import type { Service } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 fade-in-up">
            <div className="p-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-accent-teal">{React.cloneElement(service.icon, { className: 'w-10 h-10'})}</div>
                    <div>
                        <h3 className="text-xl font-bold text-deep-blue">{service.title}</h3>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                </div>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700">{service.details}</p>
                </div>
            </div>
        </div>
    );
};

const TimelineStep: React.FC<{ step: number; title: string; description: string; isLast: boolean }> = ({ step, title, description, isLast }) => (
    <div className="relative pl-10 fade-in-up">
        {!isLast && <div className="absolute left-4 top-5 w-0.5 h-full bg-accent-teal/30"></div>}
        <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-teal text-white font-bold">{step}</div>
        <h4 className="text-xl font-semibold text-deep-blue mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ServicesPage: React.FC = () => {
    useScrollAnimation();

    return (
        <div className="bg-white">
            <PageHeader
                title="Our Services"
                breadcrumbs={[{name: 'Home', path: '/'}, {name: 'Services', path: '/services'}]}
                bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-16 sm:py-24 bg-light-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 fade-in-up">
                        <h2 className="text-3xl font-extrabold text-deep-blue">Full-Spectrum HR Solutions</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From recruitment and staffing to advisory and training, we provide end-to-end HR services designed to empower your business.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {SERVICES.map((service, index) => (
                             <div key={service.title} style={{ transitionDelay: `${index * 100}ms` }}>
                                <ServiceCard service={service} />
                             </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 fade-in-up">
                        <h2 className="text-3xl font-extrabold text-deep-blue">Our Proven Hiring Process</h2>
                        <p className="mt-4 text-lg text-gray-600">A systematic approach to ensure the perfect fit, every time.</p>
                    </div>
                    <div className="max-w-3xl mx-auto grid grid-cols-1 gap-10">
                         {HIRING_PROCESS.map((item, index) => (
                             <div key={item.id} style={{ transitionDelay: `${index * 150}ms` }}>
                                <TimelineStep 
                                    step={item.id} 
                                    title={item.title} 
                                    description={item.description} 
                                    isLast={index === HIRING_PROCESS.length - 1} 
                                />
                             </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24 bg-light-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12 fade-in-up">
                        <h2 className="text-3xl font-extrabold text-deep-blue">Industries We Serve</h2>
                        <p className="mt-4 text-lg text-gray-600">Specialized expertise across diverse sectors.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                        {INDUSTRIES.map((industry, index) => (
                            <div key={industry.name} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="text-accent-teal text-4xl mb-3 mx-auto w-fit">{industry.icon}</div>
                                <p className="font-semibold text-deep-blue">{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <CtaBanner 
                title="Need help hiring? Talk to our consultants today."
                buttonText="Request a Consultation"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ServicesPage;