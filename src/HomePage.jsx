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
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({ triggerOnce: true });

  // Chatbase bot loader
  useEffect(() => {
    if (document.getElementById("znfosVgfCr2soGDil5YF_")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "znfosVgfCr2soGDil5YF_"; // Replace with your actual bot ID if needed
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
              Where Brands <br />
              <span className="block">Come to Life</span>
            </h1>
            <div className="w-36 h-1 bg-purple-500 mb-6"></div>
            <p className="text-lg md:text-xl mb-8">
              From planning to execution, we manage every detail so you shine at every event.
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
        className="relative py-28 px-6 md:px-12 overflow-hidden font-sans bg-gradient-to-br from-[#0e0e2c] to-black text-white"
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
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            From vision to execution, we craft immersive spaces and experiences that elevate your brand presence.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Exhibition Stand Design",
              desc: "Show-stopping exhibition stands that captivate and convert. From concept to on-site delivery.",
            },
            {
              title: "Interior Design and Fit-Out Works",
              desc: "Stylish, functional interiors designed to impress and inspire — from commercial to creative.",
            },
            {
              title: "Custom Wooden Requirements",
              desc: "Full-spectrum with precision craftsmanship and seamless execution.",
            },
            {
              title: "Advertising Solutions",
              desc: "Smart campaigns that connect, engage and amplify your message across every channel.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl hover:shadow-lg transition-all hover:scale-[1.03] group overflow-hidden bg-[#141827]/70 border border-white/10 text-white"
            >
              {/* Top Bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 to-blue-500 opacity-50 rounded-t-2xl" />

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.desc}</p>

              <Link
                to="/services"
                className="inline-block mt-5 text-sm font-semibold transition text-white underline hover:text-white/80"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <div
        ref={ref}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-12 mx-6 mb-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden font-sans"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9b51e0] to-[#007bff] opacity-20 blur-3xl rounded-3xl -z-10"></div>

        {[
          { count: 2000, label: "Projects Completed", suffix: "+" },
          { count: 100, label: "Skilled Craftsmen", suffix: "+" },
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
  modules={[Autoplay]}
  autoplay={{
    delay: 0, // no pause between slides
    disableOnInteraction: false,
  }}
  speed={5000} // control scroll speed (higher = slower)
  loop={true}
  freeMode={true}
  slidesPerView="auto"
  spaceBetween={30}
  grabCursor={false}
  allowTouchMove={false} // prevent manual dragging
  className="relative z-10 max-w-7xl mx-auto"
>
  {[
    [
      "AGS International General Trading LLC",
      "We engaged HeadOn Technical Services for the Middle East Energy exhibition in Dubai for two consecutive years (2024 & 2025), and they are the most reliable team with a professional approach.",
    ],
    [
      "Tanya Faulkner",
      "We had the pleasure of engaging HeadOn Technical Services for designing and building our stand at AccessAbilities Expo 2024, and their team showed professionalism, high skills, and dedication.",
    ],
    [
  "Keemz Dental",
  "HeadOn Technical Services did an outstanding job constructing our booth at AEEDC 2025, showcasing exceptional expertise and attention to detail that truly made our booth stand out impressively.",
],
    [
      "Yoonus Bin Yoosaf",
      "I had the pleasure of collaborating with HeadOn Technical Services for our stand at the Wetex Exhibition, and their team delivered an outstanding result with dedication to excellence throughout the process.",
    ],
   [
  "Benita Lileikyte",
  "We hired HeadOn Technical Services for branding and graphics, and everything went smoothly from the first point of contact, with fast, clear communication and great flexibility throughout the entire process.",
],
    [
  "Marina Martinovich",
  "We participated in Automechanika Dubai, and HeadOn did a perfect job with an amazing design. The team was very attentive to every detail, making the process smooth and easy from start to finish.",
],
  ].map(([name, review], index) => (
  <SwiperSlide key={index} className="!w-[350px]">
    <div className="bg-[#141827] border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl h-full">
      <div className="flex flex-col">
        {/* Reviewer Name */}
        <h4 className="text-white font-semibold text-base mb-3">{name}</h4>

        {/* Review */}
        <p className="text-sm text-gray-300 italic leading-relaxed">“{review}”</p>
      </div>
    </div>
  </SwiperSlide>
  ))}
</Swiper>

      </section>

      {/* Partners Section */}
      <section className="py-24 px-4 bg-[#0a0a26] text-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              Partners
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We’re proud to collaborate with industry-leading brands and organizations across the globe.
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-xl shadow-lg max-w-7xl mx-auto">
          <img
            src="/Images/partners-full.png"
            alt="Our Partners"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6 bg-black overflow-hidden">
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 opacity-20 rounded-full animate-pulse blur-3xl"></div>

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
            <Link to="/" className="flex items-center">
              <img src="/Images/logo1.png" alt="Logo" className="h-16 w-auto object-contain" />
            </Link>

            <p className="text-gray-400 mb-4">
              Dubai's premier design studio specializing in exhibition stands, interior design, fit out works, and advertising solutions.
            </p>
            <p className="text-gray-400 flex items-center gap-2 mb-1"> Dubai, United Arab Emirates</p>
            <p className="text-gray-400 flex items-center gap-2 mb-1"> +971 4 332 2218</p>
            <p className="text-gray-400 flex items-center gap-2">reachus@headon.ae</p>
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
