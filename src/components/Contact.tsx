import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Simply insert the contact form data without creating a user
      const { error: insertError } = await supabase
        .from('contact_forms')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'pending'
          },
        ]);

      if (insertError) throw insertError;

      setFormSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <h2 className="section-heading mx-auto text-center">Get in Touch</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12 initially-hidden">
          Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 initially-hidden">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-dark-600 rounded-lg">
                  <Mail size={20} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:yashsain684@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    yashsain684@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-dark-600 rounded-lg">
                  <Phone size={20} className="text-secondary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a
                    href="tel:+91 7742143317"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 7742143317
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-dark-600 rounded-lg">
                  <MapPin size={20} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-300">Kolkata, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Yashvijaysain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-600 rounded-lg hover:bg-dark-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-vijay-sain-3a9a6526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-600 rounded-lg hover:bg-dark-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-dark-600 p-6 rounded-xl">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="btn btn-primary mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg">
                    {error}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;