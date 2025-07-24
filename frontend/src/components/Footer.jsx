import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#da573c] text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8 border-b border-gray-600 pb-10">
        {/* Column 1: Logo + Tagline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">CareerCraft</h2>
          <p>Your Career Companion for the Smart Generation</p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Platform</h3>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 3: Support Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Report a Bug</a></li>
          </ul>
        </div>

        {/* Column 4: Legal Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Column 5: Newsletter + Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
          <p className="mb-2">Subscribe to our newsletter</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black"
            />
            <button className="bg-black hover:bg-blue-600 py-2 rounded text-white">
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <p>Email: contact@careercraft.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm mt-8 text-white">
        © 2025 CareerCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
