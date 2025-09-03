// pages/About.tsx
import React from "react";

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-[#9CAFAA] text-gray-800 py-20 text-center rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">About Trackify</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Trackify is a modern parcel delivery system designed to make shipping,
          tracking, and receiving parcels effortless for Senders, Receivers, and
          Admins alike.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-[#D6DAC8] p-10 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Our mission is to provide a{" "}
          <strong>secure, fast, and transparent parcel delivery service</strong>
          . We aim to simplify the shipping process, keep customers informed at
          every step, and empower businesses and individuals to manage parcels
          efficiently.
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-[#D6DAC8] p-10 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Vision</h2>
        <p className="text-gray-800 text-lg leading-relaxed text-center">
          To become the most trusted parcel delivery platform by leveraging
          technology, ensuring transparency, and providing unmatched customer
          satisfaction across the globe.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#9CAFAA] p-10 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Reliability</h3>
            <p className="text-gray-600 text-sm">
              Ensuring your parcels arrive safely and on time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Speed</h3>
            <p className="text-gray-600 text-sm">
              Fast delivery without compromising quality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Transparency</h3>
            <p className="text-gray-600 text-sm">
              Track your parcels in real-time with complete visibility.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Customer First</h3>
            <p className="text-gray-600 text-sm">
              Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#D6DAC8] p-10 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">1. Book Your Parcel</h3>
            <p className="text-gray-600 text-sm">
              Schedule pickup and enter shipment details.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">2. Pickup</h3>
            <p className="text-gray-600 text-sm">
              Our courier collects your parcel from your doorstep.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">3. Track</h3>
            <p className="text-gray-600 text-sm">
              Monitor the shipment in real-time with tracking ID.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">4. Delivery</h3>
            <p className="text-gray-600 text-sm">
              Parcel delivered safely to the receiver.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section */}
      {/* Team Section */}
      <section className="bg-[#9CAFAA] p-10 rounded-lg shadow-md max-w-6xl mx-auto space-y-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Meet Our Team
        </h2>

        {/* Founders & Story */}
        <h3 className="text-2xl font-bold mb-6 text-center">
          Founders & Story
        </h3>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
          <div>
            <p className="text-gray-800 text-lg mb-4">
              Trackify was started by <strong>John Carter</strong> and{" "}
              <strong>Maria Lopez</strong>
              back in their university dorm room. With a passion for technology
              and logistics, they began helping friends send parcels faster and
              more efficiently. Today, Trackify has grown into a{" "}
              <strong>unicorn startup</strong> serving thousands of customers
              worldwide.
            </p>
            <p className="text-gray-700 text-sm">
              Their journey from two students with a simple idea to industry
              leaders inspires the whole team to innovate and keep customer
              satisfaction at the core.
            </p>
          </div>
        </div>

        {/* Management Team */}
        <h3 className="text-2xl font-bold mb-6 text-center">Management Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="John Carter"
              className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-bold text-xl mb-2">John Carter</h3>
            <p className="text-gray-700 mb-2">CEO & Co-Founder</p>
            <p className="text-gray-600 text-sm">
              Visionary leader who started the company and drives strategic
              growth globally.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="Maria Lopez"
              className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-bold text-xl mb-2">Maria Lopez</h3>
            <p className="text-gray-700 mb-2">COO & Co-Founder</p>
            <p className="text-gray-600 text-sm">
              Ensures smooth operations and efficient logistics for seamless
              deliveries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/men/25.jpg"
              alt="David Chen"
              className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-bold text-xl mb-2">David Chen</h3>
            <p className="text-gray-700 mb-2">CFO</p>
            <p className="text-gray-600 text-sm">
              Manages finances, investment, and growth strategies to keep the
              company scalable.
            </p>
          </div>
        </div>

        {/* Engineering Team */}
        <h3 className="text-2xl font-bold mb-6 text-center">
          Engineering Team
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Alice Johnson"
              className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-bold text-xl mb-2">Alice Johnson</h3>
            <p className="text-gray-700 mb-2">Frontend Developer</p>
            <p className="text-gray-600 text-sm">
              Focused on creating responsive and user-friendly interfaces using
              React and Tailwind.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Bob Smith"
              className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-bold text-xl mb-2">Bob Smith</h3>
            <p className="text-gray-700 mb-2">Backend Developer</p>
            <p className="text-gray-600 text-sm">
              Handles API development, database modeling, and secure
              authentication.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Clara Lee"
              className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
            />
            <h3 className="font-bold text-xl mb-2">Clara Lee</h3>
            <p className="text-gray-700 mb-2">UI/UX Designer</p>
            <p className="text-gray-600 text-sm">
              Designs beautiful, accessible, and consistent UI for the entire
              system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
