"use client"

import React, { useState } from 'react';

const sections = [
  { title: 'Full Sleeve', logo: 'full sleeve.png', name: 'Full Sleeve', image: 'FS1.png' },
  { title: 'Half Sleeve', logo: 'half sleeve.png', name: 'Half Sleeve', image: 'HS1.png' },
  { title: 'Athletic Wear', logo: 'athletic wear.png', name: 'Athletic Wear', image: 'ATH1.png' },
  { title: 'Polo Tshirts', logo: 'polo.png', name: 'Polo Tshirts', image: 'POLO2.png' },
  { title: 'Hoodie', logo: 'hoodie.png', name: 'Hoodie', image: 'HOODIE1.png' },
  { title: 'Corporate T-shirts', logo: 'event tshirt.png', name: 'Corporate T-shirts', image: 'EVENT1.png' },
];

const Sections = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (index) => {
    setSelectedSection(index);
  };

  return (
    <div className="flex justify-center flex-wrap">
      {sections.map((section, index) => (
        <div claskey={index}>
          <button onClick={() => handleSectionClick(index)}>
            <img src={section.logo} alt={section.name} className="w-16 h-16 mb-2 ml-8 mr-8 mx-auto" />
            <div className="text-center">{section.name}</div>
          </button>
        </div>
      ))}
      {selectedSection !== null && (
        <div className="mt-8">
          <img src={sections[selectedSection].image} alt={Image} className=" w-50 h-80" />
        </div>
      )}
    </div>
  );
};

export default Sections;