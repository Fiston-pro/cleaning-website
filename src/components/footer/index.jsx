import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-center">
        <p className="text-center">&copy; {new Date().getFullYear()} Bydgoszcz Cleaning Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
