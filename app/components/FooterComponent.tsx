"use client";

import React from 'react'


const FooterComponent = () => {
  const myName = "David";
  const currentYear = new Date().getFullYear();

  // Define the function to run when button is clicked
  const setName = (name: string) => {
    alert(`Hello, ${name}`); // or do whatever you want  
  };

  return (
    <div className="w-full h-16 bg-gray-800 flex items-center justify-center gap-4">
      <p className="text-white">&copy; {currentYear} Pokemon App. All rights reserved</p>
    
    </div>
  );
};

export default FooterComponent;