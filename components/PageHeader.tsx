
import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; path: string }[];
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs, bgImage }) => {
  return (
    <div className="relative bg-soft-gray" style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
      {bgImage && <div className="absolute inset-0 bg-deep-blue/70"></div>}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {breadcrumbs && (
            <div className="text-sm text-white/80 mb-2">
                {breadcrumbs.map((crumb, index) => (
                    <span key={crumb.name}>
                        {index > 0 && <span className="mx-2">/</span>}
                        {index === breadcrumbs.length - 1 ? (
                            <span className="text-white font-semibold">{crumb.name}</span>
                        ) : (
                            <Link to={crumb.path} className="hover:text-accent-teal">{crumb.name}</Link>
                        )}
                    </span>
                ))}
            </div>
        )}
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${bgImage ? 'text-white' : 'text-deep-blue'}`}>{title}</h1>
        {subtitle && (
          <p className={`mt-4 max-w-3xl mx-auto text-lg ${bgImage ? 'text-white/90' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
