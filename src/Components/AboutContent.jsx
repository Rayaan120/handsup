// AboutContent.jsx
import React from "react";

import CTASection from "@/Components/CTASection";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { LazyMotion, domAnimation, m } from "framer-motion";


import {
  PiFlaskDuotone,
  PiHandshakeDuotone,
  PiLockLaminatedDuotone,
  PiMedalDuotone,
  PiClockCountdownDuotone,
  PiLightbulbFilamentDuotone,
} from "react-icons/pi";

import {
  
  PiLightbulbBold,
  
  PiHandshakeBold,
  
} from "react-icons/pi";

import {
  
  PiCubeFocusBold,
  PiHammerBold,
  
} from "react-icons/pi";

const AboutContent = () => {
  return (
    <>
      
     <Helmet>
  <title>About HeadOn | Leading Exhibition & Interior Studio in Dubai</title>
  <meta
    name="description"
    content="HeadOn is Dubai’s premier creative studio, delivering exhibition stands, interior design, fit-outs, and advertising solutions for over 15 years."
  />
  <meta
    name="keywords"
    content="Dubai exhibition stands, UAE interior design, fit out company Dubai, creative branding agency, HeadOn Technical Services"
  />
  <meta name="author" content="HeadOn Technical Services LLC" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="About HeadOn | Dubai's Leading Design Studio" />
  <meta property="og:description" content="Discover our 15+ years of design legacy in exhibitions, interiors, branding & more." />
  <meta property="og:image" content="/Images/slide1.jpg" /> {/* Replace with actual preview image */}
  <meta property="og:url" content="https://www.headon.ae/about" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About HeadOn | Dubai Exhibition & Interior Experts" />
  <meta name="twitter:description" content="Explore our journey, values, and achievements over 15 years in the UAE." />
  <meta name="twitter:image" content="/Images/slide1.jpg" />
</Helmet>


    <LazyMotion features={domAnimation}>
  <m.main
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="font-inter bg-gradient-to-bl from-black to-[#1a1d4a] text-white min-h-screen flex flex-col"
  >
        <div className="bg-transparent text-white leading-relaxed font-['Inter']">
          {/* HEADER */}
          <header className="bg-transparent text-white py-24 px-6 relative z-10 font-sans">

            <div className="max-w-6xl mx-auto text-center">
              
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
                Crafting{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Extraordinary
                </span>{" "}
                Experiences
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mx-auto mt-6 mb-8" />
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
                For over 13 years, Head On has redefined spaces across the UAE — from iconic exhibition stands to stunning interiors, seamless fit-outs, and campaigns that leave lasting impressions.
              </p>
              
            </div>
          </header>

          {/* OUR STORY */}
          <section className="bg-transparent text-white py-24 px-6 relative z-10 font-sans">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 mb-5 leading-relaxed">
                  Since 2012, we’ve been crafting environments that inspire, connect, and captivate. From a passionate team of visionaries to one of Dubai’s most trusted creative studios.
                </p>
                <p className="text-lg text-gray-300 mb-5 leading-relaxed">
                  With <span className="text-purple-300 font-bold">2000+ projects</span> delivered across exhibitions, interiors, and branding.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At HeadOn, we build <span className="text-blue-400 font-semibold">meaningful experiences</span> that elevate brands.
                </p>
              </m.div>

              <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl"
              >
                <Swiper
                  modules={[Autoplay, Pagination, EffectFade]}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  loop={true}
                  effect="fade"
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {["/Images/slide1.jpg", "/Images/slide2.jpg", "/Images/slide3.jpg", "/Images/slide4.jpg", "/Images/slide5.jpg", "/Images/slide6.jpg", "/Images/slide7.jpg", "/Images/slide8.jpg", "/Images/slide9.jpg", "/Images/slide10.jpg", "/Images/slide11.jpg", "/Images/74.jpg"].map((src, i) => (
                    <SwiperSlide key={i}>
                    <img
  src={src}
  alt={`HeadOn project image ${i + 1}`}
  loading="lazy"
  className="w-full h-80 object-cover transition-opacity duration-700 opacity-0"
  onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
/>


                    </SwiperSlide>
                  ))}
                </Swiper>
              </m.div>
            </div>
          </section>

          {/* VALUES */}
          <section className="bg-transparent text-white py-24 px-6 relative font-sans">
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-lg">
      Our Core Values
    </h2>
    <p className="text-gray-300 mb-14 text-base md:text-lg max-w-3xl mx-auto">
      The foundational principles that shape our culture and every client interaction.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {[ 
        {
          icon: <PiFlaskDuotone className="text-5xl text-purple-400 mb-4" />,
          title: "Innovation",
          desc: "Fresh ideas and future-forward design solutions.",
        },
        {
          icon: <PiMedalDuotone className="text-5xl text-yellow-400 mb-4" />,
          title: "Excellence",
          desc: "Highest standards of quality and creativity.",
        },
        {
          icon: <PiHandshakeDuotone className="text-5xl text-pink-400 mb-4" />,
          title: "Collaboration",
          desc: "Co-creation and inspiring partnerships.",
        },
        {
          icon: <PiLockLaminatedDuotone className="text-5xl text-blue-400 mb-4" />,
          title: "Integrity",
          desc: "Trust, transparency, and reliability.",
        },
      ].map(({ icon, title, desc }, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all duration-300 text-left"
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 3 }} transition={{ duration: 0.3 }}>
            {icon}
          </motion.div>

          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
        </motion.div>
      ))}
    </div>
  </m.div>
</section>

     {/* Process Section with custom emojis */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.15 }}
  className="text-center p-10 max-w-6xl mx-auto bg-[#000000]/60 backdrop-blur border border-white rounded-xl font-sans"
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
        icon: <PiLightbulbBold />,
      },
      {
        title: "3D Design & Visualization",
        desc: "Our designers create detailed 3D models and photorealistic renderings for your approval.",
        icon: <PiCubeFocusBold />,
      },
      {
        title: "Mock Up",
        desc: "Expert craftsmen bring your design to life using premium materials and advanced techniques.",
        icon: <PiHammerBold />,
      },
      {
        title: "Installation & Support",
        desc: "Professional installation team ensures flawless setup and provides on-site support throughout your event.",
        icon: <PiHandshakeBold />,
      },
    ].map(({ title, desc, icon }) => (
      <motion.div
        key={title}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-left bg-[#111] text-white p-6 rounded-lg border-t-4 border-purple-500 shadow-md transition duration-300 hover:shadow-2xl hover:scale-105"
      >
        <div className="text-4xl text-purple-400 mb-4">{icon}</div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

         

          {/* LEGACY */}
         <section className="relative bg-gradient-to-br from-[#0e0e2c] via-[#1c1c4d] to-[#2f2f65] text-white py-28 px-6 overflow-hidden font-sans">

            <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500 opacity-20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-white opacity-[0.03] blur-3xl rounded-full z-0" />
           <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="relative z-10 max-w-6xl mx-auto text-center"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-blue-400 drop-shadow-lg">
                Our Legacy of Excellence
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-14 leading-relaxed">
                Over 13 years of redefining design in the UAE. At HeadOn, we don't just craft spaces — we shape unforgettable stories.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    icon: <PiMedalDuotone className="text-5xl text-purple-400" />,
                    title: "2000+ Projects",
                    desc: "Award-winning projects across the GCC and beyond.",
                  },
                  {
                    icon: <PiClockCountdownDuotone className="text-5xl text-blue-400" />,
                    title: "13+ Years of Trust",
                    desc: "A decade and a half of creativity and reliability.",
                  },
                  {
                    icon: <PiLightbulbFilamentDuotone className="text-5xl text-pink-400" />,
                    title: "Design-Driven",
                    desc: "We blend emotion, tech, and storytelling.",
                  },
                ].map(({ icon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 w-72 text-left shadow-xl hover:shadow-purple-600/30 transition-all duration-300"
                  >
                    <div className="mb-5">{icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </m.div>
          </section>

          {/* CTA */}
          <CTASection />

          {/* FOOTER */}
           <footer className="bg-black text-white font-sans py-12 px-6 md:px-10">

             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">

               
               {/* Brand & Contact Info */}
               <div>
                   <Link to="/" className="flex items-center">
  <img 
    src="/Images/logo1.png" 
    alt="Logo" 
    className="h-16 w-auto object-contain"


  />
</Link>
                 <p className="text-gray-400 mb-4">
                   Dubai's premier design studio specializing in exhibition stands, interior design, fit out works, and advertising solutions.
                 </p>
                 <p className="text-gray-400 flex items-center gap-2 mb-1">📍 Dubai, United Arab Emirates</p>
                 <p className="text-gray-400 flex items-center gap-2 mb-1">📞 +971 4 332 2218</p>
                 <p className="text-gray-400 flex items-center gap-2">✉️ reachus@headon.ae</p>
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
      </m.main>
      </LazyMotion>
    </>
  );
};

export default AboutContent;
