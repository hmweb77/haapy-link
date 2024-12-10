"use client"
import React from 'react';

const Home = () => {
  const FIGMA_URL = "https://embed.figma.com/proto/LkDP0uP0YczDxBxVqVrqGA/HAPPI?node-id=174-1476&starting-point-node-id=174%3A1476&embed-host=share";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
  
        {/* Max width wrapper */}
        <div className="max-w-[90vw] sm:max-w-[80vw] lg:max-w-4xl mx-auto">
          {/* Responsive aspect ratio container */}
          <h1>Click on full screen for a better experience</h1>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white">
            {/* Mobile-first aspect ratio */}
   
            <div className="pb-[150%] sm:pb-[100%] lg:pb-[56.25%]">
   
              <iframe 
                className="absolute top-0 left-0 w-full h-full border-0"
                src={FIGMA_URL}
                allowFullScreen
                loading="lazy"
                title="HAPPI Figma Prototype"
              />
            </div>
          </div>
          
          {/* Responsive fallback message */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <p className="text-xs sm:text-sm text-yellow-700 flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span>If the prototype isn't loading, you can</span>
              <a 
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 group"
              >
                view it directly in Figma
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;