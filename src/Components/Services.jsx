import React from "react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Link } from "react-router-dom";


import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Added this

import { Helmet } from "react-helmet";




export default function ExhibitionWebsite() {
  return (
    <div className="font-sans bg-gradient-to-bl from-black to-[#1a1d4a] text-white min-h-screen flex flex-col">

     <Helmet>
    <title>HeadOn | Exhibition Stand Design Dubai</title>
    <meta name="description" content="Award-winning exhibition stand design, interior design, fit out works and advertising solutions in Dubai. Make your mark with HeadOn." />
    <meta name="keywords" content="Exhibition Stands Dubai, Interior Design UAE, Fit Out Works, Event Design Dubai, Advertising Solutions" />
    <meta name="author" content="HeadOn Technical Services" />
  </Helmet>

      {/* Navbar */}
      
      <motion.div
            initial={{ opacity: 0, y: 50 }} // from bottom
            animate={{ opacity: 1, y: 0 }} // to original
            exit={{ opacity: 0, y: -50 }} // exit up
            transition={{ duration: 0.5 }}
            className = "flex-grow"
          >
      {/* Hero Section */}
     <section className="flex items-center justify-center text-center px-6 py-24 relative z-10">
  <div className="max-w-3xl space-y-8">
    {/* Tagline Badge */}
    <div className="inline-block px-5 py-2 text-sm font-semibold text-purple-800 bg-purple-200 rounded-full shadow-md ring-2 ring-purple-400/50">
      Exhibition Stand Design
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
      Create <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 drop-shadow-lg animate-pulse">
        Unforgettable
      </span>{" "}
      Experiences
    </h1>

    {/* Description */}
    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
      Stand out from the crowd with our award-winning exhibition stands that captivate audiences,
      drive engagement, and deliver measurable results at trade shows and events.
    </p>
    
    {/* Call to Action Buttons */}
    <div className="pt-6 flex flex-wrap justify-center gap-4">
      <Link to="/contact" className="inline-block">
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 ease-out">
          Get Free Quote
        </Button>
      </Link>
      <Link to="/portfolio" className="inline-block">
        <Button className="bg-white text-[#1a1d4a] px-6 py-3 rounded-full font-semibold border border-gray-300 shadow-md hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
          View Portfolio
        </Button>
      </Link>
    </div>
  </div>
</section>


{/* Services Section */}
    {/* Updated Services Section with 4 Animated Blocks */}
{[
  {
    id: "01",
    title: "Exhibition Stand Design",
    desc: "We specialize in designing and building eye-catching exhibition stands that elevate your brand presence, engage attendees, and drive impactful business outcomes at events and trade shows.",
    services: [
      "Custom 3D design", "Modular booths", "Double deck stands", "Portable displays",
      "Interactive elements", "Lighting integration", "Project management", "Mall & venue approvals",
      "Install & dismantle", "On-site support", "Event logistics",
    ],
  },
  {
    id: "02",
    title: "Interior Design and Fit-Out Works",
    desc: "Transform your space with creative interior design solutions that blend aesthetics and functionality — whether it's retail, office, hospitality, or commercial environments.",
    services: [
      "Concept development", "3D visualization", "Furniture layout", "Material selection",
      "Lighting plans", "Color palette curation", "Retail & office interiors", "Mood boards",
      "Space planning", "Ceiling & flooring designs", "Brand-aligned interiors",
    ],
  },
  {
    id: "03",
    title: "Custom Wooden Requirements",
    desc: "Delivering turnkey fit-out services that bring your vision to life — from civil works and carpentry to electrical, painting, and final finishes, on time and with quality assured.",
    services: [
      "Bespoke furniture design",
  "Custom cabinetry",
  "Wardrobes & closets",
  "Wooden wall paneling",
  "Reception desks & counters",
  "Custom shelving & storage",
  "Doors & door frames",
  "Wooden partition systems",
  "Decorative wood elements",
  "Joinery & detailing",
  "Staining, polishing & finishes",
    ],
  },
  {
    id: "04",
    title: "Advertising Solutions",
    desc: "Boost your visibility and customer engagement through compelling ad strategies — from digital campaigns to print, outdoor, activations, and everything in between.",
    services: [
      "Billboards", "Digital campaigns", "Brand activations",
      "Printing services", "Brochure & flyer design", "Outdoor media",
      "Retail branding",
    ],
  },
].map((section, i) => (
  <section key={section.id} className="px-6 py-24 text-white bg-gradient-to-b from-[#2F326C] to-black">
    <div
      className={`max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center ${
        i % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Column */}
      <motion.div
        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h2 className="text-4xl font-bold mb-4">{section.id} {section.title}</h2>
        <p className="text-gray-300 leading-relaxed mb-6">{section.desc}</p>
        <div className="w-16 h-1 bg-white mb-6"></div>

        <div className="flex flex-wrap gap-3">
          {section.services.map((item, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 rounded-full bg-[#111] border border-white/20 text-sm font-medium hover:bg-purple-500 hover:text-white transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

  
    </div>
  </section>

))}




      {/* Solutions Section */}
       
      

       
      <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="text-center px-8 py-16"
>
  <h2 className="text-3xl font-bold mb-2">Complete Exhibition Solutions</h2>
  <p className="text-gray-300 max-w-2xl mx-auto mb-10">
    From initial concept to final dismantling, we handle every aspect of your exhibition presence
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        title: "Custom 3D Design",
        desc: "Photorealistic visualizations before production.",
        icon: "🎨",
      },
      {
        title: "Project Management",
        desc: "From planning to execution, we handle it all.",
        icon: "🧑‍💼",
      },
      {
        title: "On-site Installation",
        desc: "Professional setup team at your service.",
        icon: "🏗️",
      },
      {
        title: "Tech Integration",
        desc: "Interactive screens, AR/VR, and more.",
        icon: "🔌",
      },
      {
        title: "Sustainable Materials",
        desc: "Eco-friendly and reusable construction.",
        icon: "🌱",
      },
      {
        title: "Storage & Transport",
        desc: "Safe handling before and after events.",
        icon: "🚚",
      },
      {
        title: "24/7 Event Support",
        desc: "Always on call for smooth operations.",
        icon: "⏰",
      },
      {
        title: "Post-event Reports",
        desc: "Insights and analytics delivered fast.",
        icon: "📊",
      },
    ].map(({ title, desc, icon }, index) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
        className="bg-[#000000]/60 backdrop-blur border border-white p-6 rounded-xl shadow-lg transition hover:scale-105 duration-300 text-left"
      >
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* Process Section with custom emojis */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.15 }}
  className="text-center p-10 max-w-6xl mx-auto bg-[#000000]/60 backdrop-blur border border-white rounded-xl"
>
  <h2 className="text-2xl font-bold mb-2 text-white">Our Process</h2>
  <p className="text-gray-300 max-w-xl mx-auto mb-8">
    A proven methodology that ensures your exhibition stand exceeds expectations
  </p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      {
        title: "Concept Development",
        desc: "We start with understanding your brand, objectives, and target audience to create compelling concepts.",
        icon: "🧠",
      },
      {
        title: "3D Design & Visualization",
        desc: "Our designers create detailed 3D models and photorealistic renderings for your approval.",
        icon: "🖼️",
      },
      {
        title: "Mock Up",
        desc: "Expert craftsmen bring your design to life using premium materials and advanced techniques.",
        icon: "🛠️",
      },
      {
        title: "Installation & Support",
        desc: "Professional installation team ensures flawless setup and provides on-site support throughout your event.",
        icon: "⚙️",
      },
    ].map(({ title, desc, icon }) => (
      <motion.div
        key={title}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-left bg-[#111] text-white p-6 rounded-lg border-t-4 border-purple-500 shadow-md transition duration-300 hover:shadow-2xl hover:scale-105"
      >
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>


{/* Why Choose Us Section */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.15 }}
  className="text-center px-8 py-16"
>
  <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
  <p className="text-gray-300 max-w-xl mx-auto mb-10">
    Here’s what makes our exhibition stands a cut above the rest.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        icon: "⚡",
        title: "Fast Turnaround",
        desc: "We deliver on tight timelines without compromising quality.",
      },
      {
        icon: "🎯",
        title: "Strategic Designs",
        desc: "Our stands are built to attract, engage, and convert visitors.",
      },
      {
        icon: "🛠️",
        title: "Full-Service Support",
        desc: "From concept to setup and beyond — we’ve got it all covered.",
      },
      {
        icon: "💡",
        title: "Creative Innovation",
        desc: "We integrate tech like AR/VR for future-ready experiences.",
      },
    ].map(({ icon, title, desc }) => (
      <motion.div
        key={title}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        className="bg-[#000000]/60 backdrop-blur p-6 rounded-xl text-left shadow-md border border-white hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 ease-in-out transform hover:-translate-y-2"
      >
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>



      {/* Call to Action */}
      {/* Call to Action */}
<section
  className="text-white text-center p-10"
  style={{
    background: "linear-gradient(360deg, #000000 0.5757%, #2F356C 100%)",
  }}
>
  <h2 className="text-3xl font-bold mb-2">Ready to Make Your Mark?</h2>
  <p className="mb-6 max-w-xl mx-auto">
    Let's create an exhibition stand that stops visitors in their tracks and drives real business results
  </p>
  <Link to="/contact">
    <Button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
      Start Your Project
    </Button>
  </Link>
</section>



      
      </motion.div>
      {/* Footer */}
       <footer className="bg-[#0e1323] text-white py-12 px-6 md:px-10">
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
               <li><Link to="/services" className="hover:text-white">Fit Out Works</Link></li>
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
