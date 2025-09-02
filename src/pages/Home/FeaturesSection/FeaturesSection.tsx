"use client";

import { Truck, ShieldCheck, Headphones, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    desc: "Get your parcels delivered in record time with our efficient logistics.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Parcels",
    desc: "We ensure that your parcels are safe and insured during transit.",
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Support",
    desc: "Our friendly support team is always ready to help, anytime.",
  },
  {
    icon: <Globe size={32} />,
    title: "Wide Coverage",
    desc: "We deliver across cities and regions with a reliable network.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#D6DAC8] rounded-r-full py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="text-blue-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
