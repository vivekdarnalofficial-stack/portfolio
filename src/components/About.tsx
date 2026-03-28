import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516280440502-65f536af1270?auto=format&fit=crop&q=80"
            alt="Vivek Darnal in Studio"
            className="rounded-2xl shadow-2xl shadow-brand/10 object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet <span className="text-brand">Vivek Darnal</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Based in Assam, India, Vivek Darnal is a passionate Mix Engineer and Music Producer with over 8 years of experience in the industry. At Indiebroz Studios, we believe in bringing your musical vision to life with pristine quality and creative flair.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-4xl font-bold text-brand mb-2">8+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-brand mb-2">500+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
