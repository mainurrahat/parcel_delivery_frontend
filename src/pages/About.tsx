// pages/About.tsx
const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-[#9CAFAA] text-gray-800 py-20 text-center rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">About ParcelManager</h1>
        <p className="text-lg max-w-2xl mx-auto">
          ParcelManager is a modern parcel delivery system designed to make
          shipping, tracking, and receiving parcels effortless for Senders,
          Receivers, and Admins alike.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-[#D6DAC8] p-10 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Our mission is to provide a **secure, fast, and transparent parcel
          delivery service**. We aim to simplify the shipping process, keep
          customers informed at every step, and empower businesses and
          individuals to manage parcels efficiently.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-[#9CAFAA] p-10 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="font-bold text-xl mb-2">Alice Johnson</h3>
            <p className="text-gray-700 mb-2">Frontend Developer</p>
            <p className="text-gray-600 text-sm">
              Focused on creating responsive and user-friendly interfaces using
              React and Tailwind.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="font-bold text-xl mb-2">Bob Smith</h3>
            <p className="text-gray-700 mb-2">Backend Developer</p>
            <p className="text-gray-600 text-sm">
              Handles API development, database modeling, and secure
              authentication.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
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
