import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Helmet } from "react-helmet";
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ['All', 'Exhibition Stands', 'Interior Design and Fit-Out Works', 'Custom Wooden Requirements', 'Advertising'];

  const projects = [
  {
    category: 'Exhibition Stands',
    image: '/Images/stand1.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior1.jpg',
  },
 
  {
    category: 'Advertising',
    image: '/Images/billboard_design_01.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand2.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior2.jpg',
  },
 
  {
    category: 'Advertising',
    image: '/Images/billboard_design_02.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand3.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior3.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden1.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden2.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_03.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand4.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior4.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden3.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_4.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand5.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior5.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden4.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_5.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand6.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior6.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden4.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_6.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand7.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior7.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden4.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_7.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand8.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior8.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden5.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_8.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand9.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior9.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden6.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_9.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand10.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior10.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden7.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_10.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand11.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior11.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden8.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_11.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand12.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior12.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden9.jpg',
  },
  {
    category: 'Advertising',
    image: '/Images/billboard_design_12.jpg',
  },
  {
    category: 'Exhibition Stands',
    image: '/Images/stand13.jpg',
  },
  {
    category: 'Interior Design and Fit-Out Works',
    image: '/Images/interior13.jpg',
  },
  {
    category: 'Custom Wooden Requirements',
    image: '/Images/customwooden10.jpg',
  },
  


];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="font-inter bg-gradient-to-bl from-black to-[#1a1d4a] text-white min-h-screen">
    

      <Helmet>
  <title>Portfolio | HeadOn - Dubai Exhibition Stands, Interiors & Branding</title>
  <meta name="description" content="Explore HeadOn's portfolio of exhibition stands, interior designs, fit-out works, wooden craftsmanship, and advertising solutions in Dubai." />
  <meta name="keywords" content="HeadOn Portfolio, Exhibition Stands Dubai, Interior Fit Out UAE, Custom Wood Works, Advertising Dubai" />
  <meta name="author" content="HeadOn Technical Services" />
  <meta property="og:title" content="HeadOn Portfolio - Elevating Brand Experiences" />
  <meta property="og:description" content="See our curated work in exhibitions, interiors, branding and more." />
  <meta property="og:image" content="/preview.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.headon.ae/portfolio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="HeadOn Portfolio - Design Excellence in Dubai" />
  <meta name="twitter:description" content="Award-winning portfolio of exhibitions, interiors, and brand activations." />
  <meta name="twitter:image" content="/preview.jpg" />
</Helmet>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // from bottom
        animate={{ opacity: 1, y: 0 }} // to original
        exit={{ opacity: 0, y: -50 }} // exit up
        transition={{ duration: 0.5 }}
        className="font-inter bg-gradient-to-bl from-black to-[#1a1d4a] text-white min-h-screen flex flex-col"
      >

        <header className="text-center py-24 px-6 relative overflow-hidden font-sans">

  {/* Glow Effect Background Blur (Optional Layer) */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1d4a]/60 via-[#2a2e5d]/40 to-transparent blur-2xl opacity-30 pointer-events-none z-0" />

  {/* Foreground Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
   

    {/* Headline */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl">
      Crafting a <br />
      <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
        Portfolio of Excellence
      </span>
    </h1>

    {/* Subtext */}
    <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
      Dive into a collection of iconic works — immersive exhibition stands, luxurious interiors, visionary fit-outs, and unforgettable brand experiences that redefine innovation.
    </p>
  </div>
</header>


        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 my-10 font-sans">

         {filters.map((item, index) => (
  <motion.button
    key={index}
    whileTap={{ scale: 0.95 }} // click animation
    onClick={() => setActiveFilter(item)}
    className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
      activeFilter === item
        ? 'bg-gradient-to-r from-[#8e2de2] to-[#4a90e2] text-white shadow-lg'
        : 'bg-[#ece9ff] text-black hover:bg-[#d6d1ff]'
    }`}
  >
    {item}
  </motion.button>
))}

        </div>

        {/* Filtered Cards */}
        {/* Image Gallery Only */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto">

  {filteredProjects.map((project, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-2xl group shadow-xl hover:shadow-purple-700/40 transition-all duration-500"
    >
      {/* Image */}
      <img
  loading="lazy"
  src={project.image}
  alt={`${project.category} - Project ${index + 1}`}
  className="w-full h-52 sm:h-60 md:h-64 lg:h-72 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
/>

      {/* Overlay (optional visual polish) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Optional icon or zoom effect */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300">
        <a
  href={project.image}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300"
>
  <div className="bg-white/80 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
    View
  </div>
</a>

      </div>
    </div>
  ))}
</div>


        <div
  ref={ref}
  className="bg-gradient-to-br from-[#10002b] via-[#1a1d4a] to-[#2c2f6c] py-20 px-6 text-center font-sans"
>

  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 tracking-tight">
    Our Track Record Speaks for Itself
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {[
      { label: "Projects Completed", value: 1000 },
      { label: "Happy Clients", value: 500 },
      { label: "Awards Won", value: 25 },
      { label: "Years Experience", value: 15 },
    ].map(({ label, value }, index) => (
      <div
        key={index}
        className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-400 mb-2">
          {inView && <CountUp end={value} duration={2} />}+
        </h1>
        <p className="text-sm text-gray-300 uppercase tracking-wide">
          {label}
        </p>
      </div>
    ))}
  </div>
</div>

        

       <div
  className="text-white text-center py-20 px-6 relative overflow-hidden font-sans"
  style={{
    background: "linear-gradient(360deg, #000000 0.5757%, #2F356C 100%)",
  }}
>


  {/* Decorative Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6a00a0]/30 via-transparent to-[#4a90e2]/30 blur-3xl opacity-40 pointer-events-none z-0" />

  <div className="relative z-10 max-w-3xl mx-auto">
    {/* Headline */}
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
      Let's <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Create Your Next Success Story</span>
    </h2>

    {/* Subtext */}
    <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
      Ready to elevate your brand, space, or event? Let's collaborate and bring your vision to life with our award-winning expertise.
    </p>

    {/* CTA Button */}
    <Link to="/contact">
      <button className="bg-white text-[#6a00a0] px-8 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
        Start Your Project →
      </button>
    </Link>
  </div>
</div>



      </motion.div>
      {/* Footer */}
           <footer className="bg-black text-white font-sans py-12 px-6 md:px-10">

              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                
                {/* Brand & Contact Info */}
                <div>
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#a044ff] to-[#2a9df4] bg-clip-text text-transparent mb-4">
                    Head <span className="ml-1">On</span>
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
          
    </div>
  );
}
