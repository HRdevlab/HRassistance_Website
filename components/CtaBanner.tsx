
import React from 'react';
import { Link } from 'react-router-dom';

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="bg-deep-blue">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-2 text-lg text-blue-200">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-deep-blue bg-white hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
