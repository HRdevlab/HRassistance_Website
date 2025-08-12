import React from 'react';
import PageHeader from '../components/PageHeader';
import { TRAINING_TOPICS } from '../constants';
import type { TrainingTopic } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CtaBanner from '../components/CtaBanner';

const TrainingTopicSection: React.FC<{ topic: TrainingTopic, reverse?: boolean }> = ({ topic, reverse = false }) => {
    return (
        <section className="overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center`}>
                    <div className={`fade-in-up ${reverse ? 'md:order-last' : ''}`}>
                        <img src={topic.image} alt={topic.title} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" />
                    </div>
                    <div className="fade-in-up" style={{ transitionDelay: '150ms' }}>
                        <div className="relative inline-block mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-slate bg-white relative z-10 border-2 border-dark-slate px-4 py-2">{topic.title}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {topic.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


const TrainingPage: React.FC = () => {
    useScrollAnimation();

    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Training', path: '/training' }
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Training & Development"
                subtitle="Customized corporate training programs designed to enhance skills, boost productivity, and foster leadership."
                bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={breadcrumbs}
            />
            
            <div className="bg-light-blue divide-y divide-gray-200">
                {TRAINING_TOPICS.map((topic, index) => (
                    <TrainingTopicSection key={topic.title} topic={topic} reverse={index % 2 !== 0} />
                ))}
            </div>

             <CtaBanner 
                title="Ready to upskill your team?"
                subtitle="We can tailor programs to meet your organization's specific needs."
                buttonText="Request Custom Training"
                buttonLink="/contact"
            />
        </div>
    );
};

export default TrainingPage;