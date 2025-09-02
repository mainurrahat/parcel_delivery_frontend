"use client";

import React, { useState, useEffect } from "react";
import { Users, Package, MapPin, Smile } from "lucide-react";
import { motion } from "framer-motion";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const statsData: StatItem[] = [
  { icon: <Package size={32} />, label: "Parcels Delivered", value: 12500 },
  { icon: <Users size={32} />, label: "Active Couriers", value: 150 },
  { icon: <MapPin size={32} />, label: "Cities Covered", value: 75 },
  { icon: <Smile size={32} />, label: "Happy Customers", value: 9800 },
];

const OverviewSection = () => {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const intervals: number[] = [];

    statsData.forEach((stat, idx) => {
      const increment = Math.ceil(stat.value / 100); // smooth increment
      intervals[idx] = window.setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] = Math.min(newCounts[idx] + increment, stat.value);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="bg-[#D6DAC8] py-16 px-6 md:px-20 rounded-r-full">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1F2937]"
        >
          Our Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#9CAFAA] mt-4"
        >
          Trusted by thousands of customers for fast and secure deliveries
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6"
          >
            <div className="text-blue-600 mb-4">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              {counts[idx]}
            </div>
            <div className="text-[#9CAFAA] mt-2 text-center">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
