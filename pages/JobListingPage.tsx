import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import { JOBS } from '../constants';
import type { Job } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 fade-in-up border border-gray-200">
            <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-deep-blue group-hover:text-accent-teal transition-colors">
                            {job.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            {job.location} &bull; {job.type}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="bg-accent-teal text-white font-semibold py-2 px-6 rounded-lg hover:bg-accent-teal/90 transition-colors text-sm z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Apply
                        </button>
                        <svg
                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">{job.description}</p>
            </div>
            <div className={`job-details ${isExpanded ? 'expanded' : ''}`}>
                <div className="px-6 pb-6 pt-2">
                    <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-deep-blue mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-semibold text-deep-blue mb-2">Qualifications:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JobListingPage: React.FC = () => {
    useScrollAnimation();
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');

    const industries = useMemo(() => [...new Set(JOBS.map(job => job.industry))], []);

    const filteredJobs = useMemo(() => {
        return JOBS.filter(job =>
            (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (location === '' || job.location.toLowerCase().includes(location.toLowerCase())) &&
            (industry === '' || job.industry === industry)
        );
    }, [searchTerm, location, industry]);

    return (
        <div className="bg-light-blue">
            <PageHeader
                title="Find Your Next Opportunity – Job Listings"
                subtitle="Browse our latest job openings and take the next step in your career journey."
                bgImage="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Job Listings', path: '/job-listings' }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md h-fit sticky top-28">
                        <h3 className="text-xl font-bold text-deep-blue mb-6">Filters</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="search" className="block text-sm font-medium text-gray-700">What</label>
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Job title or skill"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Where</label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="City or state"
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
                                <select
                                    id="industry"
                                    value={industry}
                                    onChange={e => setIndustry(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue sm:text-sm"
                                >
                                    <option value="">All Industries</option>
                                    {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                                </select>
                            </div>
                        </form>
                    </aside>

                    {/* Job Listings */}
                    <main className="lg:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-deep-blue">Current Openings ({filteredJobs.length})</h2>
                        </div>
                        <div className="space-y-6">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map(job => (
                                    <JobCard key={job.id} job={job} />
                                ))
                            ) : (
                                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                                    <p className="text-gray-600 text-lg font-semibold">No Matching Jobs Found</p>
                                    <p className="text-gray-500 mt-2">Try adjusting your filters or check back later!</p>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default JobListingPage;
