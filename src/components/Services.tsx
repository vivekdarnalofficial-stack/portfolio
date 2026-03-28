import { motion } from 'motion/react';
import { Mic2, Sliders, Headphones, Radio } from 'lucide-react';

const services = [
  {
    icon: <Sliders size={32} />,
    title: "Mix Engineering",
    description: "Achieve clarity, punch, and width. We balance your tracks to industry standards."
  },
  {
    icon: <Headphones size={32} />,
    title: "Music Production",
    description: "From a simple voice memo to a fully arranged track, we build the music around your vision."
  },
  {
    icon: <Radio size={32} />,
    title: "Mastering",
    description: "The final polish. Making sure your song translates perfectly across all streaming platforms."
  },
  {
    icon: <Mic2 size={32} />,
    title: "Vocal Tuning & Editing",
    description: "Natural or stylized pitch correction and precise timing adjustments for flawless vocals."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-brand">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional audio services tailored to elevate your sound to the next level.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-bg p-8 rounded-2xl border border-dark-border hover:border-brand/50 transition-colors duration-300"
            >
              <div className="text-brand mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
