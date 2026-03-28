import { motion } from 'motion/react';

const works = [
  { img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80", title: "Acoustic Sessions" },
  { img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80", title: "Pop Production" },
  { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80", title: "Live Band Mix" },
  { img: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80", title: "Vocal Tracking" },
  { img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80", title: "Electronic EP" },
  { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80", title: "Indie Rock Master" }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Previous <span className="text-brand">Works</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into the diverse range of projects we've brought to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
