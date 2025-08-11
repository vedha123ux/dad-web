"use client";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { 
  FaWhatsapp, 
  FaTruck, 
  FaMapMarkerAlt, 
  FaBox, 
  FaPhone, 
  FaUser, 
  FaInfoCircle,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaHome,
  FaWarehouse,
  FaRoad
} from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function LoadsPage() {
  const { language } = useLanguage();
  const isTamil = language === "ta";

  const whatsappNumber = "9443546505"; 
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    cargoType: "",
    message: "",
  });

  const cargoTypes = [
    isTamil ? "பஞ்சு" : "Cotton",
    isTamil ? "சிமெண்ட் தாள்" : "Cement Sheets",
    isTamil ? "விலங்கு தீனிகள்" : "Animal Feeds",
    isTamil ? "பால் தூள்" : "Milk Powder",
    isTamil ? "செமெண்ட் செங்கற்கள்" : "Cement Bricks",
    isTamil ? "தூள்கள்" : "Broomsticks",
    isTamil ? "பானங்கள் (Frooti)" : "Frooti (Beverages)",
    isTamil ? "மற்றவை" : "Others",
  ];

  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const msg = `${isTamil ? "பெயர்" : "Name"}: ${formData.name}%0A${
      isTamil ? "தொலைபேசி எண்" : "Phone"
    }: ${formData.phone}%0A${
      isTamil ? "இடம்" : "Location"
    }: ${formData.location}%0A${
      isTamil ? "சரக்குகள்" : "Cargo"
    }: ${formData.cargoType}%0A${
      isTamil ? "செய்தி" : "Message"
    }: ${formData.message}`;
    
    window.open(`${whatsappLink}?text=${msg}`, "_blank");
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>{isTamil ? "சரக்கு போக்குவரத்து" : "Load Transport"} | Sri Jaya Murgan</title>
        <meta name="description" content={isTamil ? "ஸ்ரீ ஜெயமுருகன் போக்குவரத்து சரக்கு சேவைகள்" : "Sri Jaya Murgan Transport load services"} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:100px_100px] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 text-center relative z-10"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="inline-flex items-center justify-center bg-white/20 p-4 rounded-full mb-6"
            >
              <FaTruck className="text-white text-3xl" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isTamil ? "ஸ்ரீ ஜெயமுருகன் போக்குவரத்து" : "Sri Jaya Murgan Transport"}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              {isTamil
                ? `944-${whatsappNumber.slice(3)}-க்கு வாட்ஸ்அப் செய்து உங்கள் சரக்கு தேவைகளை பதிவு செய்யவும்`
                : `WhatsApp 944-${whatsappNumber.slice(3)} for instant booking`}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg text-lg flex items-center justify-center gap-2 mx-auto"
              onClick={sendWhatsApp}
            >
              <FaWhatsapp size={20} />
              {isTamil ? "வாட்ஸ்அப்பில் அனுப்பவும்" : "Send via WhatsApp"}
            </motion.button>
          </motion.div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Cargo Types Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                {isTamil ? "நாங்கள் கையாளும் சரக்கு வகைகள்" : "Load Types We Handle"}
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cargoTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg"
                >
                  <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBox className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{type}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                {isTamil ? "எங்கள் சேவை நன்மைகள்" : "Our Service Benefits"}
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
                  title: isTamil ? "காப்பீடு" : "Insured Transport",
                  desc: isTamil ? "உங்கள் சரக்குகளுக்கு முழு காப்பீடு" : "Full insurance coverage for your cargo"
                },
                {
                  icon: <FaClock className="text-green-500 text-2xl" />,
                  title: isTamil ? "விரைவான சேவை" : "Fast Service",
                  desc: isTamil ? "4 நாட்களுக்குள் எடுப்பு" : "Pickup within 4 days"
                },
                {
                  icon: <FaCheckCircle className="text-purple-500 text-2xl" />,
                  title: isTamil ? "நம்பகமானது" : "Reliable",
                  desc: isTamil ? "500+ வாடிக்கையாளர்களின் நம்பிக்கை" : "Trusted by 500+ customers"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enquiry Form */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">
                    {isTamil ? "944-க்கு கேள்வி அனுப்பவும்" : "Enquire via WhatsApp 944"}
                  </h2>
                  <p className="text-green-100">
                    {isTamil 
                      ? "உங்கள் சரக்கு தேவைகளுக்கு இப்போதே தொடர்பு கொள்ளவும்" 
                      : "Get instant quotes for your cargo needs"}
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendWhatsApp();
              }}
              className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isTamil ? "பெயர்" : "Name"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder={isTamil ? "உங்கள் பெயர்" : "Your Name"}
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isTamil ? "தொலைபேசி எண்" : "Phone Number"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={isTamil ? "91XXXXXXXXXX" : "91XXXXXXXXXX"}
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isTamil ? "பிக்-அப் இடம்" : "Pickup Location"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    placeholder={isTamil ? "உங்கள் இடம்" : "Your Location"}
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isTamil ? "சரக்கு வகை" : "Cargo Type"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBox className="text-gray-400" />
                  </div>
                  <select
                    name="cargoType"
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                    onChange={handleInput}
                  >
                    <option value="">
                      {isTamil ? "சரக்கு வகையை தேர்வு செய்யவும்" : "Select Cargo Type"}
                    </option>
                    {cargoTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isTamil ? "மேலும் தகவல்" : "Additional Message"}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={isTamil ? "உங்கள் செய்தி (விருப்பம்)" : "Your Message (Optional)"}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onChange={handleInput}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg"
                >
                  <FaWhatsapp size={20} /> 
                  {isTamil ? " அனுப்பவும்" : "Send"}
                </motion.button>
              </div>
            </form>
          </motion.section>

          {/* WhatsApp Floating Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 text-white p-5 rounded-full shadow-xl flex items-center justify-center"
              onClick={sendWhatsApp}
            >
              <FaWhatsapp className="text-3xl" />
              <span className="sr-only">WhatsApp {whatsappNumber}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isTamil 
                ? "உங்கள் சரக்கு போக்குவரத்து தேவைகளுக்கு தயாராக உள்ளோம்!" 
                : "Ready to transport your goods?"}
            </h2>
            <p className="text-xl mb-8">
              {isTamil 
                ? `944-${whatsappNumber.slice(3)}-க்கு இப்போதே தொடர்பு கொள்ளவும்` 
                : `Contact 944-${whatsappNumber.slice(3)} now for instant service`}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg text-lg flex items-center justify-center gap-2 mx-auto"
              onClick={sendWhatsApp}
            >
              <FaWhatsapp size={20} />
              {isTamil ? "இப்போது தொடர்பு கொள்ளவும்" : "Contact Us Now"}
              <FaArrowRight />
            </motion.button>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaTruck className="text-green-400 text-3xl" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {isTamil ? 'ஸ்ரீ ஜெயமுருகன் போக்குவரத்து' : 'Sri Jaya Murgan Transport'}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {isTamil 
                    ? '2004 முதல் தரமான லாஜிஸ்டிக்ஸ் சேவைகளை வழங்குகிறோம்.' 
                    : 'Delivering excellence in logistics since 2004.'}
                </p>
                
                {/* Social Media */}
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  {isTamil ? 'விரைவு இணைப்புகள்' : 'Quick Links'}
                </h4>
                <ul className="space-y-3">
                  {[
                    { en: "Home", ta: "முகப்பு", link: "/" },
                    { en: "Services", ta: "சேவைகள்", link: "/services" },
                    { en: "Loads", ta: "சரக்குகள்", link: "/loads" },
                    { en: "Contact", ta: "தொடர்பு", link: "/contact" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.link} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {isTamil ? link.ta : link.en}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  {isTamil ? 'எங்கள் சேவைகள்' : 'Our Services'}
                </h4>
                <ul className="space-y-3">
                  {[
                    { en: "Cotton Transport", ta: "பருத்தி போக்குவரத்து" },
                    { en: "Cement Logistics", ta: "சிமெண்ட் லாஜிஸ்டிக்ஸ்" },
                    { en: "Heavy Loads", ta: "கனரக சுமைகள்" },
                    { en: "All India Delivery", ta: "இந்தியா முழுவதும் விநியோகம்" }
                  ].map((service, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {isTamil ? service.ta : service.en}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  {isTamil ? 'எங்களைத் தொடர்பு கொள்ள' : 'Contact Us'}
                </h4>
                <address className="not-italic text-gray-400 space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">Ayyan Kattur Near Andavor IOC</p>
                      <p className="text-gray-400">Sankari, Tamil Nadu 637301</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-green-400" />
                    <a 
                      href={`tel:+91${whatsappNumber}`} 
                      className="hover:text-white transition-colors"
                    >
                      +91 {whatsappNumber.slice(0, 3)}-{whatsappNumber.slice(3)}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-green-400" />
                    <a 
                      href="mailto:nathiraj1@yahoo.com" 
                      className="hover:text-white transition-colors"
                    >
                      nathiraj1@yahoo.com
                    </a>
                  </div>
                  
                  {/* Business Hours */}
                  <div className="pt-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-1">
                      {isTamil ? 'வேலை நேரம்' : 'Business Hours'}
                    </h5>
                    <p className="text-gray-400">
                      {isTamil 
                        ? 'திங்கள் - சனி: காலை 8:00 - இரவு 8:00' 
                        : 'Mon - Sat: 8:00 AM - 8:00 PM'}
                    </p>
                  </div>
                </address>
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} {isTamil 
                    ? 'ஸ்ரீ ஜெயமுருகன் போக்குவரத்து. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' 
                    : 'Sri Jaya Murgan Transport. All rights reserved.'}
                </p>
                
                {/* Additional Links */}
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    {isTamil ? 'தனியுரிமைக் கொள்கை' : 'Privacy Policy'}
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    {isTamil ? 'விதிமுறைகள்' : 'Terms of Service'}
                  </a>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex justify-center mt-8 gap-6">
                <div className="bg-gray-800 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <FaShieldAlt className="text-green-400" />
                  {isTamil ? '100% பாதுகாப்பானது' : '100% Secure'}
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <FaTruck className="text-blue-400" />
                  {isTamil ? 'நம்பகமான சேவை' : 'Trusted Service'}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}