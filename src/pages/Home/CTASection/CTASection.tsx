"use client";

import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#D6DAC8] text-white rounded-l-full ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-black text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Send Your Parcel?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Register now and experience fast, secure, and reliable parcel delivery
          at your fingertips.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg transition"
        >
          Send Your Parcel Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
