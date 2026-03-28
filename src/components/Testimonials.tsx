import { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const initialReviews = [
  { id: 1, name: "Rahul S.", rating: 5, text: "Vivek completely transformed my track. The mix is wide, punchy, and exactly what I envisioned." },
  { id: 2, name: "Priya M.", rating: 5, text: "Amazing production skills! He understood the vibe I was going for and delivered beyond expectations." },
  { id: 3, name: "The Local Band", rating: 4, text: "Great experience recording and mixing our EP at Indiebroz Studios. Highly recommended in Assam." }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([{ id: Date.now(), ...newReview }, ...reviews]);
      setNewReview({ name: '', rating: 5, text: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-brand">Feedback</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Hear what artists have to say about working with Indiebroz Studios.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reviews List */}
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-dark-bg p-6 rounded-2xl border border-dark-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex text-brand">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-brand" : "text-gray-600"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* Add Review Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-bg p-8 rounded-2xl border border-dark-border h-fit"
          >
            <h3 className="text-2xl font-bold mb-6">Rate Your Experience</h3>
            {submitted ? (
              <div className="bg-green-500/10 text-green-400 p-4 rounded-lg text-center">
                Thank you for your feedback!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star
                          size={24}
                          fill={star <= newReview.rating ? "currentColor" : "none"}
                          className={star <= newReview.rating ? "text-brand" : "text-gray-600 hover:text-brand/50 transition-colors"}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Your Feedback</label>
                  <textarea
                    required
                    value={newReview.text}
                    onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                    rows={4}
                    className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                    placeholder="Tell us about your project and experience..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-hover text-dark-bg font-bold py-3 rounded-lg transition-colors"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
