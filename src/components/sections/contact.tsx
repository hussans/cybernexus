import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { CustomButton } from '@/components/ui/custom-button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'cybersecurity',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          reply_to: formData.email,
          organization: formData.organization,
          service: formData.service,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || ''
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', organization: '', service: 'cybersecurity', message: '' });
      
      // Auto-close modal after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          title="Let's Build Your Secure Digital Future"
          subtitle="Ready to modernize your infrastructure, fortify security, or grow your digital presence? Connect with our team to get a tailored strategy designed for your business needs."
        />

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-zinc-300 mb-2">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-10 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="cybersecurity">Cybersecurity Advisory</option>
                  <option value="managed-it">Managed IT Services</option>
                  <option value="development">Web & Software Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>

            <div className="flex justify-center">
              <CustomButton variant="primary" type="submit" className="px-8 h-12 text-base">
                Schedule a Consultation
              </CustomButton>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Success Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Message Sent Successfully!
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
