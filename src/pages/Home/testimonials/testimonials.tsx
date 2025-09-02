"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Fast delivery! My parcel reached in no time. Highly recommended.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Amazing service, very reliable and easy to track parcels.",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    review: "Customer support is excellent! Resolved my issue quickly.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    review: "Secure and insured parcels gave me peace of mind.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds per testimonial
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#D6DAC8] py-16 px-6 md:px-20 rounded-l-full">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="overflow-hidden relative max-w-4xl mx-auto">
        <motion.div
          className="flex transition-transform duration-700"
          animate={{ x: `-${current * 100}%` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-6 py-10 bg-white rounded-xl shadow-lg text-center"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-[#1F2937] text-lg mb-3">{t.review}</p>
              <div className="flex justify-center mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <h3 className="font-semibold text-[#1F2937]">{t.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-[#9CAFAA]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
