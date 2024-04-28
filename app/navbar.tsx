"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  
  return (
    <nav className="bg-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex ml-0 justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/laps logo no bg.png" alt="Logo" className="h-16 w-18" />
            </div>
            <div className="relative ml-4">
              <img src="/laps no bg.png" alt="Laps" className="w-24" />
              {/* <h6 className="absolute top-12 mt-3 text-black italic w-40">ELEVATE YOUR STYLE</h6> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}