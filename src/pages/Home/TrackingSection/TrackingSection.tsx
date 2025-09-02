"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId) {
      toast.warn(
        "Hey bro, why so hyper? Relax and enter the right  Tracking ID 😎",
        {
          position: "top-center",
          autoClose: 4000,
          theme: "colored",
        }
      );
      return;
    }

    toast.success(
      "Hey bro, why are you rushing to get the product! I've sent all the details to your email 📧, check it out.",
      {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      }
    );
    setTrackingId("");
  };

  return (
    <section className="bg-[#D6DAC8] text-black py-16 px-6 md:px-20 rounded-l-full">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Track Your Parcel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          Enter your Tracking ID below to see the status of your shipment in
          real-time.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID"
          className="w-full md:w-2/3 px-4 py-3 rounded-lg border border-black text-black focus:outline-none focus:ring-1 "
        />
        <button
          onClick={handleTrack}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Track
          <ArrowRight size={20} />
        </button>
      </motion.div>

      <ToastContainer />
    </section>
  );
};

export default TrackingSection;
