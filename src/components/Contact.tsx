
import { useState } from 'react';
import { Send, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-accent-2 dark:bg-accent-1/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-4 animate-fade-in text-gradient">Get in Touch</h2>
          <p className="text-body-large text-accent-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's discuss your project needs and how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-accent-3 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200 outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-accent-3 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-accent-3 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200 outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-accent-3 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-heading-2 mb-6">Let's Connect</h3>
              
              <p className="text-body mb-8 text-accent-4">
                Looking to start a project or have questions about my services? 
                Feel free to reach out through the form or connect with me directly 
                on social media.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-heading-3 mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#333]/10 flex items-center justify-center text-[#333] dark:text-white hover:bg-[#333] hover:text-white transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-heading-3 mb-4">Location</h4>
                  <p className="text-body text-accent-4">
                    Mumbai, India
                  </p>
                </div>
                
                <div>
                  <h4 className="text-heading-3 mb-4">Availability</h4>
                  <p className="text-body text-accent-4">
                    Currently available for freelance projects and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
