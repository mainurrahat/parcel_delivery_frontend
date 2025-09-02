"use client";

// import React from "react";
import { Truck, Clock, Shield, Package } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Truck size={32} className="text-[#9CAFAA]" />,
    title: "Doorstep Pickup",
    desc: "Schedule a pickup from your location, and our courier will collect your parcel safely.",
  },
  {
    icon: <Clock size={32} className="text-[#9CAFAA]" />,
    title: "Real-time Tracking",
    desc: "Track your parcel in real-time from pickup to delivery for complete transparency.",
  },
  {
    icon: <Package size={32} className="text-[#9CAFAA]" />,
    title: "Express Delivery",
    desc: "Get your parcels delivered faster with our priority express shipping options.",
  },
  {
    icon: <Shield size={32} className="text-[#9CAFAA]" />,
    title: "Secure & Insured",
    desc: "All shipments are secured and insured for a safe and worry-free delivery experience.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#D6DAC8] py-20 px-6 md:px-20 rounded-r-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1F2937]">Our Services</h2>
        <p className="text-black mt-4 max-w-2xl mx-auto">
          We provide reliable and fast parcel delivery services tailored to your
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start gap-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#1F2937]">
              {service.title}
            </h3>
            <p className="text-[#1F2937]/80 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
