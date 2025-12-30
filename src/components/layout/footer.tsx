import React from 'react';

export const Footer: React.FC = () => (
  <footer className="border-t border-zinc-900 py-16 bg-black">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-white rounded-sm" />
            <span className="font-bold">CyberNexus</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Bridging the gap between technology, security, and digital growth.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="hover:text-white cursor-pointer transition-colors">Cybersecurity Advisory</li>
            <li className="hover:text-white cursor-pointer transition-colors">Managed IT</li>
            <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
            <li className="hover:text-white cursor-pointer transition-colors">Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors">Whitepapers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Webinars</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
        <p>&copy; 2026 CyberNexus. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-zinc-400 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-zinc-400 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);
