import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Book a <span className="text-brand">Session</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Ready to take your music to the next level? Get in touch with us today.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">Reach out directly or fill out the form to discuss your project requirements, rates, and availability.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:vivekdarnalofficial@gmail.com" className="font-medium hover:text-brand transition-colors">vivekdarnalofficial@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+918822386765" className="font-medium hover:text-brand transition-colors">+91-8822386765</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Assam, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 bg-dark-card p-8 rounded-2xl border border-dark-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                <select className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none">
                  <option>Mix Engineering</option>
                  <option>Music Production</option>
                  <option>Mastering</option>
                  <option>Vocal Tuning</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors resize-none" placeholder="Tell us about your song, genre, and what you're looking for..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand hover:bg-brand-hover text-dark-bg font-bold py-4 rounded-lg transition-colors text-lg">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
