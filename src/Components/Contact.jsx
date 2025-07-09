import React from "react";

import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Added this
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Helmet } from "react-helmet";
import {
  PiPhoneCallDuotone,
  PiEnvelopeSimpleDuotone,
  PiMapPinDuotone,
  PiClockDuotone,
} from "react-icons/pi";

export default function Contact() {
  const [emailError, setEmailError] = React.useState("");
  const [success, setSuccess] = React.useState(false); // ✅ Success message

  const validateEmail = (e) => {
    const value = e.target.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(value) ? "" : "Please enter a valid email address.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        "service_wpyjduc",
        "template_gmt8suc",
        templateParams,
        "_MaMl2caEo5gsW8HH"
      )
      .then(
        (result) => {
          console.log("✅ Email successfully sent!", result.text);
          e.target.reset();
          setSuccess(true); // ✅ show success message
          setTimeout(() => setSuccess(false), 4000); // hide after 4s
        },
        (error) => {
          console.error("❌ Error sending email:", error);
          alert("There was an error. Please try again.");
        }
      );
  };
  

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      

    <motion.div
      initial={{ opacity: 0, y: 50 }} // from bottom
      animate={{ opacity: 1, y: 0 }} // to original
      exit={{ opacity: 0, y: -50 }} // exit up
      transition={{ duration: 0.5 }}
      className="font-sans bg-gradient-to-bl from-black to-[#1a1d4a] text-white min-h-screen flex flex-col"


    >
    
    {/* 🔽 Paste Helmet here */}
  <Helmet>
    <title>Contact | HeadOn</title>
    <meta name="description" content="Reach out to HeadOn Technical Services — Dubai’s top exhibition and interior experts. Let's build something amazing together." />
    <meta property="og:title" content="Contact | HeadOn" />
    <meta property="og:description" content="Let’s build something amazing together. Get in touch with HeadOn for exhibitions, interiors, and fit-out services." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.headon.ae/contact" />
    <meta property="og:image" content="/your-social-preview.jpg" />
  </Helmet>

      
    



      <div className="flex-grow font-sans">

        <div className="text-center mt-32">
          
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
  Let’s <span className="bg-gradient-to-r from-[#9b51e0] to-[#007bff] bg-clip-text text-transparent">Build Something Amazing</span> Together
</h1>
<p className="text-sm md:text-base text-[#cccccc] mt-4 max-w-2xl mx-auto">
  Whether you're launching a brand, transforming a space, or planning your next big idea — our expert team is here to turn your vision into reality. Get in touch today for a free consultation that could change everything.
</p>

        </div>

       <div className="flex flex-col items-center gap-16 px-12 py-20 max-w-6xl mx-auto">
  {/* Contact Us form */}
  <div className="w-full max-w-5xl">
    <h3 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
      Contact Us
    </h3>
    <form
      onSubmit={handleSubmit}
      className="border border-white rounded-xl p-10 space-y-6 bg-[#000000]/60 backdrop-blur"
    >
    <div>
      <label className="block text-sm mb-1 text-white">First name *</label>
      <input
        name="firstName"
        type="text"
        required
        className="w-full bg-[#1e1e1e] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your first name"
      />
    </div>

    <div>
      <label className="block text-sm mb-1 text-white">Last name *</label>
      <input
        name="lastName"
        type="text"
        required
        className="w-full bg-[#1e1e1e] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your last name"
      />
    </div>

    <div>
  <label className="block text-sm mb-1 text-white">Email *</label>
  <input
    name="email"
    type="email"
    required
    onBlur={validateEmail}
    className={`w-full bg-[#1e1e1e] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 ${
      emailError ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500"
    }`}
    placeholder="your@email.com"
  />
  {emailError && (
    <p className="text-red-500 text-sm mt-1">{emailError}</p>
  )}
</div>


    <div>
      <label className="block text-sm mb-1 text-white">Message</label>
      <textarea
        name="message"
        rows="5"
        className="w-full bg-[#1e1e1e] text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your message here..."
      ></textarea>
    </div>

    <div className="pt-4">
      <button
        type="submit"
        className="w-full border border-white py-2 rounded-full text-white hover:bg-white hover:text-black transition duration-300"
      >
        Submit
      </button>
      {success && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-green-400 text-sm text-center mt-4"
    >
      ✅ Message sent successfully!
    </motion.div>
  )}
    </div>
  </form>
</div>


     {/* Want to Reach Us Quicker cards */}
  <div className="w-full max-w-5xl">
    <h3 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
      Want to Reach Us Quicker?
    </h3>
    <div className="space-y-8">
    {[
      {
        icon: <PiPhoneCallDuotone className="text-5xl text-purple-400" />,
        title: "Phone",
        lines: ["+971 4 3322218", "+971 50 6975805"],
      },
      {
        icon: <PiEnvelopeSimpleDuotone className="text-5xl text-pink-400" />,
        title: "Email",
        lines: ["reachus@headon.ae"],
      },
      {
        icon: <PiMapPinDuotone className="text-5xl text-blue-400" />,
        title: "Office",
        lines: ["17 14a Street, Ras Al Khor, Dubai", "United Arab Emirates"],
      },
      {
        icon: <PiClockDuotone className="text-5xl text-yellow-400" />,
        title: "Business Hours",
        lines: ["Mon - Sat: 9AM – 6PM", "Sun: Closed"],
      },
    ].map(({ icon, title, lines }, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.07 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="relative group bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-transform duration-300"
      >
        {/* Gradient vertical bar */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#9b51e0] to-[#007bff] rounded-full"></div>

        <div className="flex items-start gap-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 min-w-[56px] rounded-full bg-white/10 text-white flex items-center justify-center text-2xl shadow-inner border border-white/10"
          >
            {icon}
          </motion.div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
</div>


       <div
  ref={ref}
  className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-12 mx-6 mb-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden font-sans"
>
  {/* Optional Gradient Glow Aura Behind */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#9b51e0] to-[#007bff] opacity-20 blur-3xl rounded-3xl -z-10"></div>

  {[
    { count: 2000, label: "Projects Completed", suffix: "+" },
    { count: 500, label: "Skilled Craftsmen", suffix: "+" },
    { count: 30000, label: "Inhouse Workspace", suffix: " sqft" },
    { count: 13, label: "Years Experience", suffix: "+" },
  ].map((item, i) => (
    <div
      key={i}
      className="text-center text-white px-2 py-4 transition-transform duration-300 hover:scale-105"
    >
      <h1 className="text-4xl font-extrabold mb-1">
        {inView && (
          <>
            <CountUp end={item.count} duration={2.5} separator="," />
            <span className="ml-1">{item.suffix}</span>
          </>
        )}
      </h1>
      <p className="text-sm text-gray-300 font-semibold tracking-wide">
        {item.label}
      </p>
    </div>
  ))}
</div>




        <div className="text-center my-20 px-4">
  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
    Visit Our Office
  </h2>
  <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
    Located in the heart of Ras Al Khor — where Dubai’s industrial power meets scenic beauty and seamless connectivity.
  </p>

  <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-10 py-12 mt-10 w-full max-w-5xl mx-auto shadow-2xl overflow-hidden">
    {/* Glow Accent Border */}
    <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-tr from-[#9b51e0] to-[#007bff] opacity-20 blur-3xl"></div>

    <div className="relative z-10 flex flex-col items-center justify-center text-white text-center space-y-4">
      <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed">
        Head On Technical Services LLC
      </h3>
      <p className="text-sm md:text-base text-gray-300">
       14a Street, Ras Al Khor, Dubai, UAE
      </p>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=HeadOn+Technical+Services+LLC,+B17+14a+Street,+Ras+Al+Khor,+Dubai,+UAE"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-white text-[#1a1d4a] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
      >
         Get Directions
      </a>
    </div>
  </div>
</div>


        </div>
      

      {/* WhatsApp Floating Button */}
      <a
  href="https://wa.me/971506975805"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-4 bg-black hover:bg-gray-800 text-white rounded-full p-2 shadow-lg flex items-center justify-center z-50"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp size={28} />
</a>

    </motion.div>

    
 <footer className="bg-black text-white font-sans py-12 px-6 md:px-10">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
    
    {/* Brand & Contact Info */}
    <div>
      <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#a044ff] to-[#2a9df4] bg-clip-text text-transparent mb-4">
        HEAD <span className="ml-1">ON</span>
      </h3>
      <p className="text-gray-400 mb-4">
        Dubai's premier design studio specializing in exhibition stands, interior design, fit out works, and advertising solutions.
      </p>
      <p className="text-gray-400 flex items-center gap-2 mb-1">📍 Dubai, United Arab Emirates</p>
      <p className="text-gray-400 flex items-center gap-2 mb-1">📞 +971 4 332 2218</p>
      <p className="text-gray-400 flex items-center gap-2">✉️ contact@headon.ae</p>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-md font-semibold mb-3">Services</h4>
      <ul className="text-gray-400 space-y-2">
        <li><Link to="/services" className="hover:text-white">Exhibition Stands</Link></li>
        <li><Link to="/services" className="hover:text-white">Interior Design</Link></li>
        <li><Link to="/services" className="hover:text-white">Custom Wooden Requirements</Link></li>
        <li><Link to="/services" className="hover:text-white">Advertising</Link></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="text-md font-semibold mb-3">Company</h4>
      <ul className="text-gray-400 space-y-2">
        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
        <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-6">
    <p>© 2025 HeadOn. All rights reserved.</p>

    {/* Privacy/Terms/Cookies */}
    <div className="flex gap-6">
             <span className="text-gray-500 cursor-not-allowed">Privacy</span>

             <span className="text-gray-500 cursor-not-allowed">Terms</span>

             <span className="text-gray-500 cursor-not-allowed">Cookies</span>

           </div>

    {/* Social Media Icons */}
   <div className="flex gap-4 text-white text-sm">
  <a
    href="https://www.instagram.com/headonts/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-purple-400 transition"
  >
    <FaInstagram size={18} />
  </a>
  <a
    href="https://twitter.com/headonuae"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaTwitter size={18} />
  </a>
  <a
    href="https://www.linkedin.com/company/head-on-technical-services-llc"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition"
  >
    <FaLinkedinIn size={18} />
  </a>
  <a
    href="https://www.facebook.com/headontsllc/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition"
  >
    <FaFacebookF size={18} />
  </a>
</div>

  </div>
</footer>


    
    </>
  );
}
