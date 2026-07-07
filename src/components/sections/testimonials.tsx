"use client";

import { motion } from "framer-motion";
import { Star, Quote, Send, CheckCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

type Review = {
  id: string;
  ownerName: string;
  companyName: string;
  rating: number;
  review: string;
  website?: string;
  logoUrl?: string;
};

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form State
  const [formData, setFormData] = useState({
    ownerName: '',
    companyName: '',
    rating: 5,
    review: '',
    website: '',
    logoUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setReviews(data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load reviews", err);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setRating = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      setSubmitSuccess(true);
      setFormData({
        ownerName: '',
        companyName: '',
        rating: 5,
        review: '',
        website: '',
        logoUrl: ''
      });
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our partners say about scaling with Sorsvexa.
          </p>
        </div>

        {/* Reviews Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 text-white/50">
            No reviews yet. Be the first to leave one!
          </div>
        ) : (
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-5 px-5 md:mx-0 md:px-0 mb-20">
            {reviews.map((testimonial, index) => (
              <motion.div
                key={testimonial.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 relative min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center flex-shrink-0 flex flex-col justify-between"
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-white/5" />
                
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-white/10 text-white/10'}`} />
                  ))}
                </div>
                
                <p className="text-lg text-white/90 mb-8 leading-relaxed relative z-10">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  {testimonial.logoUrl ? (
                    <img 
                      src={testimonial.logoUrl} 
                      alt={testimonial.companyName} 
                      className="w-12 h-12 rounded-full border-2 border-white/10 object-cover bg-white/5"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  {/* Fallback avatar if no image or image fails */}
                  <div className={`w-12 h-12 flex-shrink-0 rounded-full border-2 border-white/10 bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold ${testimonial.logoUrl ? 'hidden' : ''}`}>
                    {testimonial.ownerName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.ownerName}</h4>
                    <p className="text-sm text-blue-400">{testimonial.companyName}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Leave a Review Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mt-20"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Leave a Review</h3>
              <p className="text-muted-foreground text-sm">Share your experience working with us</p>
            </div>

            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Thank you for your review!</h4>
                <p className="text-green-200/70">Your review has been submitted successfully and is pending approval.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors text-sm"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Owner Name *</label>
                    <input 
                      type="text" 
                      name="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Rating *</label>
                  <div className="flex gap-2 items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-fit">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`h-7 w-7 transition-colors ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/20 hover:text-white/40'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Review *</label>
                  <textarea 
                    name="review"
                    required
                    rows={4}
                    value={formData.review}
                    onChange={handleInputChange}
                    placeholder="Tell us about your experience..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Website (Optional)</label>
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Company Logo URL (Optional)</label>
                    <input 
                      type="url" 
                      name="logoUrl"
                      value={formData.logoUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/logo.png"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {submitError}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Review
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
