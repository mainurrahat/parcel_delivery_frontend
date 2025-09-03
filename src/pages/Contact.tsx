"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS on client-side
  useEffect(() => {
    console.log("USER_ID:", import.meta.env.VITE_EMAILJS_USER_ID);
    console.log("SERVICE_ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  }, []);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all the fields before sending 😅");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      )
      .then(
        () => {
          toast.success(
            `Thanks ${formData.name}! Your message has been sent. We'll reach out to ${formData.email} soon 📧`
          );
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text || error);
          toast.error("Something went wrong. Please try again 😅");
          setLoading(false);
        }
      );
  };

  return (
    <div className="space-y-16 px-4 md:px-12 lg:px-24">
      <ToastContainer position="top-right" autoClose={4000} />

      {/* Hero Section */}
      <section className="bg-[#9CAFAA] text-gray-800 py-24 text-center rounded-xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We would love to hear from you! Send us a message and we will respond
          promptly.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-[#D6DAC8] p-8 md:p-12 rounded-xl shadow-xl max-w-6xl mx-auto">
        <div className="md:flex md:gap-12">
          {/* Contact Form */}
          <div className="md:flex-1 mb-10 md:mb-0">
            <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Form
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAFAA] shadow-sm transition"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAFAA] shadow-sm transition"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9CAFAA] h-40 shadow-sm transition"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#9CAFAA] hover:bg-[#8aa08e] text-white font-semibold px-6 py-3 rounded-lg w-full transition shadow-md hover:shadow-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:flex-1 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Info
            </h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-center gap-3">
                <MapPin size={24} className="text-[#9CAFAA]" />
                <span>123 Boalkhali, Chittagong, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={24} className="text-[#9CAFAA]" />
                <span>+880 1890-159627</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={24} className="text-[#9CAFAA]" />
                <span>support@trackify.com</span>
              </li>
            </ul>

            <div className="mt-8 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#9CAFAA] rounded-full hover:bg-[#8aa08e] transition"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#9CAFAA] rounded-full hover:bg-[#8aa08e] transition"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#9CAFAA] rounded-full hover:bg-[#8aa08e] transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
