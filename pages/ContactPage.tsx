
import React from 'react';
import PageHeader from '../components/PageHeader';
import { SOCIAL_ICONS } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContactPage: React.FC = () => {
    useScrollAnimation();
    return (
        <div className="bg-white">
            <PageHeader
                title="Contact"
                breadcrumbs={[{name: 'Home', path: '/'}, {name: 'Contact', path: '/contact'}]}
                bgImage="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop"
            />

            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="bg-light-blue p-8 rounded-xl shadow-lg fade-in-up">
                            <h2 className="text-3xl font-bold text-deep-blue mb-6">Get In Touch</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" id="subject" className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-deep-blue text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-deep-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="fade-in-up" style={{ transitionDelay: '150ms' }}>
                            <h2 className="text-3xl font-bold text-deep-blue mb-6">Contact Information</h2>
                            <address className="space-y-6 text-lg text-gray-700 not-italic">
                                <div className="flex items-start">
                                    <span className="text-accent-teal mt-1 mr-4">📍</span> 
                                    <div>
                                        <h4 className="font-semibold text-deep-blue">Address:</h4>
                                        <p>205 A, Town Square Shopping Center, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-accent-teal mt-1 mr-4">✉️</span>
                                    <div>
                                        <h4 className="font-semibold text-deep-blue">E-mail:</h4>
                                        <a href="mailto:info@hrassistance.co.in" className="hover:text-accent-teal">info@hrassistance.co.in</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-accent-teal mt-1 mr-4">🕒</span>
                                     <div>
                                        <h4 className="font-semibold text-deep-blue">Timing:</h4>
                                        <p>Mon-Fri: 9.30 AM - 6PM</p>
                                    </div>
                                </div>
                            </address>
                            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-80">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.433932829033!2d73.914222!3d18.554475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c140272a19f9%3A0x44245c367876a169!2sTown%20Square%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1683893358055!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map of HRassistance location in Pune"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
