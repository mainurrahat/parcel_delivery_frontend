"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://i.ibb.co/pjDDXkJm/5.jpg",
    title: "Fast & Reliable Deliveries",
    desc: "Send your parcels anywhere quickly and securely with our trusted delivery network.",
    btnText: "Send a Parcel",
  },
  {
    img: "https://i.ibb.co/TBHsPZpy/3.jpg",
    title: "Track Your Shipments",
    desc: "Get real-time updates on your parcels and know exactly where they are at any time.",
    btnText: "Track Now",
  },
  {
    img: "https://i.ibb.co/Kxds2WB1/12.jpg",
    title: "Doorstep Service",
    desc: "We pick up and deliver your parcels right at your doorstep for maximum convenience.",
    btnText: "Request Pickup",
  },
  {
    img: "https://i.ibb.co/RkYBTxJG/13.jpg",
    title: "Secure & Insured Parcels",
    desc: "Your packages are safe with us — insured and handled with care every step of the way.",
    btnText: "Learn More",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-[90vh] overflow-hidden rounded-2xl shadow-xl">
      {/* Image Slider */}
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide.img}
          alt={`slide-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      ))}

      {/* Overlay with dynamic content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center items-start text-white p-10">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={slides[current].desc}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl text-lg md:text-xl mb-6"
        >
          {slides[current].desc}
        </motion.p>
        <motion.div
          key={slides[current].btnText}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
            {slides[current].btnText}
          </button>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
