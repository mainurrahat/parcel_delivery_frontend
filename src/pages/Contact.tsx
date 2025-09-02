// pages/Contact.tsx
const Contact = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-[#9CAFAA] text-gray-800 py-20 text-center rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">
          We would love to hear from you. Send us a message and we will respond
          promptly.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#D6DAC8] p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Contact Form
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAFAA]"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAFAA]"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAFAA] h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-[#9CAFAA] hover:bg-[#8aa08e] text-white font-semibold px-6 py-3 rounded-md w-full transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
