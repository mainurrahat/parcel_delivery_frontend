import React from "react";

const Marquee = () => {
  const messages = [
    "Fast Delivery Across the City!",
    "Track Your Parcel in Real-Time!",
    "Doorstep Pickup Available!",
    "Secure & Insured Shipments!",
    "Customer Support 24/7!",
  ];

  return (
    <div className="overflow-hidden bg-[#D6DAC8] text-black py-2 w-1/2 rounded-2xl p-4 mx-auto my-4">
      <div className="whitespace-nowrap animate-marquee flex space-x-10 py-2">
        {messages.map((msg, index) => (
          <span
            key={index}
            className="font-semibold border-2 px-4 py-1 rounded bg-white shadow-lg"
          >
            {msg}
          </span>
        ))}
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
