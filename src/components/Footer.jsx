import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p className="text-sm">© {new Date().getFullYear()} VISION Hackathon. All rights reserved.</p>
      <p className="text-xs">Powered by BTI | Organized by RO&AI Department</p>
      <div className="flex justify-center mt-2 space-x-4">
        <a href="https://github.com/your-hackathon" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://twitter.com/your-hackathon" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Twitter
        </a>
        <a href="https://linkedin.com/in/your-hackathon" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
