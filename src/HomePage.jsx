import { useEffect, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Colored Google logo
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const images = [
  "/Images/your-background1.jpg",
  "/Images/your-background2.jpg",
  "/Images/your-background3.jpg",
  "/Images/your-background4.jpg",
  "/Images/your-background5.jpg",
  "/Images/your-background6.jpg",
  "/Images/your-background7.jpg",
  "/Images/your-background8.jpg",
  "/Images/your-background9.jpg",
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);

  // Chatbase bot loader
  useEffect(() => {
    if (document.getElementById("Z0IeA1TgPW0pjEwpAGZ1U")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "Z0IeA1TgPW0pjEwpAGZ1U"; // Replace with your actual bot ID if needed
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // Background image interval with overlapping fade
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="font-sans">
       <Helmet>
      <title>HeadOn | Premier Exhibition & Interior Studio in Dubai</title>
      <meta
        name="description"
        content="HeadOn is Dubai’s leading creative studio, delivering innovative exhibition stands, interior fit-outs, and advertising solutions for over 15 years."
      />
      <meta
        name="keywords"
        content="Dubai exhibition stands, interior design, branding UAE, fit-out company, advertising solutions"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="HeadOn Technical Services" />
    </Helmet>

    

      {/* Hero Section */}
      <section className="relative flex items-center h-screen overflow-hidden">
        {/* Background images with overlapping fade */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {/* Previous image fades out */}
          {prevImageIndex !== currentImageIndex && (
            <motion.div
              key={prevImageIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[prevImageIndex]})` }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setPrevImageIndex(currentImageIndex)}
            />
          )}

          {/* Current image fades in */}
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="text-white max-w-xl md:max-w-2xl">
           <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight mb-3">
              Welcome to <br />
              <span className="block">Head On</span>
              
            </h1>
            <div className="w-36 h-1 bg-purple-500 mb-6"></div>
            <p className="text-lg md:text-xl mb-8">
              From planning to execution, your comprehensive technical services & solutions partner.
            </p>
            <Link to="/services">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded transition">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative bg-gradient-to-br from-[#0e0e2c] to-black py-28 px-6 md:px-12 overflow-hidden text-white font-sans"
      >
        {/* Glowing ambient orb */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-indigo-600 opacity-20 blur-[150px]" />
        </div>

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Services That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Transform
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From vision to execution, we craft immersive spaces and experiences that elevate your brand presence.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Exhibition Stand Design",
              color: "from-pink-500 via-rose-500 to-fuchsia-500",
              desc: "Show-stopping exhibition stands that captivate and convert. From concept to on-site delivery.",
            },
            {
              title: "Interior Design and Fit-Out Works",
              color: "from-cyan-400 via-teal-400 to-blue-400",
              desc: "Stylish, functional interiors designed to impress and inspire — from commercial to creative.",
            },
            {
              title: "Custom Wooden Requirements",
              color: "from-emerald-400 via-green-500 to-lime-400",
              desc: "Full-spectrum with precision craftsmanship and seamless execution.",
            },
            {
              title: "Advertising Solutions",
              color: "from-yellow-400 via-orange-500 to-amber-500",
              desc: "Smart campaigns that connect, engage and amplify your message across every channel.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl backdrop-blur-md bg-[#141827]/70 border border-white/10 hover:shadow-2xl transition-all hover:scale-[1.03] group overflow-hidden"
            >
              {/* Animated gradient top bar */}
              <div
                className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${service.color} opacity-80 animate-pulse`}
              />

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.desc}</p>

              <Link
                to="/services"
                className="inline-block mt-5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-br from-[#0e0e2c] to-black py-28 px-6 md:px-10 overflow-hidden text-white font-sans">
        {/* Blurred background glow */}
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
          <div className="w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 opacity-25 blur-[140px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FcGoogle className="text-[48px] drop-shadow-sm" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Hundreds
              </span>
            </h2>
          </div>
          <div className="text-lg text-gray-300 flex justify-center items-center gap-3 mt-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-semibold text-white">4.9</span>
            <span className="text-gray-500">• 60+ Reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          {[
            [
              "Ahmed Al Mansouri",
              "Emirates Technologies",
              "Outstanding exhibition stand design that attracted record visitors to our booth. Professional team with exceptional creativity.",
            ],
            [
              "Sarah Johnson",
              "Dubai Business Hub",
              "HeadOn completely transformed our office space. The design exceeded all expectations and the team was incredibly professional.",
            ],
            [
              "Mohammad Hassan",
              "Premium Retail Group",
              "Exceptional fit-out work for our retail store. The attention to detail and quality of work was remarkable.",
            ],
            [
              "Lisa Chen",
              "Innovation Labs",
              "Innovative advertising solutions that significantly boosted our brand visibility. Highly recommend their creative team.",
            ],
            [
              "David K.",
              "Skyline Events",
              "Working with HeadOn was seamless — they delivered a gorgeous exhibition booth under tight deadlines!",
            ],
            [
              "Priya Mehta",
              "Zen Interiors",
              "Truly visionary team. They turned our ideas into an immersive, premium design experience.",
            ],
          ].map(([name, company, review], index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#141827] border border-white/10 backdrop-blur-lg p-6 md:p-7 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02] h-full"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-inner text-sm">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold text-base">{name}</h4>
                        <p className="text-xs text-gray-400">{company}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 italic leading-relaxed">“{review}”</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6 bg-black overflow-hidden">
        {/* Animated gradient ring background */}
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 opacity-20 rounded-full animate-pulse blur-3xl"></div>

        {/* Central Glassy CTA Box */}
        <div className="relative max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Let's <span className="text-purple-400">Bring Your Vision</span> to Life
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Partner with HeadOn for cutting-edge design, expert execution, and creative brilliance. Let’s build something unforgettable — together.
          </p>

          <div className="flex justify-center flex-wrap gap-6">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-transform duration-300">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white/10 text-white border border-white/30 font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
