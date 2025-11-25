import React from 'react';
import logo from '../assets/logo.svg';
import { footer_data } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-24 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        
        {/* Left section - Logo and description */}
        <div>
          <img src={logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            QuickBlog is a blogging platform that allows users to share their thoughts, ideas, and stories with a global audience.
          </p>
        </div>

        {/* Right section - Footer links */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-5">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline transition">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <p className="py-4 text-sm text-center md:text-base text-gray-500/80">
        Copyright © 2025 QuickBlog — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
