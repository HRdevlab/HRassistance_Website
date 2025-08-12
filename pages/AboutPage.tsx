
import React from 'react';
import PageHeader from '../components/PageHeader';
import CtaBanner from '../components/CtaBanner';
import useScrollAnimation from '../hooks/useScrollAnimation';

const MAJOR_CLIENTS = [
    'Indusind Bank Ltd.',
    'Dun And Bradstreet Information Services India Pvt Ltd',
    'Sodexo SVC India Pvt Ltd',
    'Lighthouse Learning',
    'FedEx Express Transportation and Supply Chain Services India Pvt Ltd.',
    'Linc Education',
];

const AboutPage: React.FC = () => {
    useScrollAnimation();

    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' }
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="About Us"
                breadcrumbs={breadcrumbs}
                bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            />

            {/* About Us Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="fade-in-up">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="HRassistance team in a meeting" className="rounded-lg shadow-xl"/>
                    </div>
                    <div className="fade-in-up" style={{ transitionDelay: '150ms' }}>
                        <h2 className="text-3xl font-bold text-deep-blue mb-4">Finding skilled resources and retaining them is a challenge that many companies face.</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We at HRassistance India Consultancy help you find the right candidates for your company. Our key differentiators include a strong database, a superior sourcing and validation process, and multimodal sourcing methodologies to attract top talent.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start"><span className="text-accent-teal mr-3 mt-1">✓</span> <span>Continuous feedback to the client during the process of recruitment.</span></li>
                            <li className="flex items-start"><span className="text-accent-teal mr-3 mt-1">✓</span> <span>Domain expertise across specific industries.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Our Major Clients */}
            <section className="py-16 sm:py-24 bg-light-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-extrabold text-deep-blue mb-12 fade-in-up">Our Major Clients</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MAJOR_CLIENTS.map((client, index) => (
                            <div 
                                key={client} 
                                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center text-center h-40 fade-in-up" 
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <p className="text-lg font-semibold text-dark-slate">{client}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <CtaBanner 
                title="HRassistance India Consultancy LLP."
                subtitle="The recruitment firm delivering quality recruitment solutions."
                buttonText="Get In Touch"
                buttonLink="/contact"
            />
        </div>
    );
};

export default AboutPage;