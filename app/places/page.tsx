'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaTruckMoving, 
  FaMapMarkerAlt, 
  FaWeightHanging, 
  FaCalendarAlt, 
  FaBoxes,
  FaInfo,
  FaPhone,
  FaShieldAlt,
  FaRoad,
  FaArrowRight,
  FaWarehouse,
  FaShippingFast,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const LOCATIONS = [
  { 
    state: 'Tamil Nadu', 
    cities: ['Chennai', 'Coimbatore', 'Tirupur', 'Salem', 'Trichy', 'Madurai', 'Erode', 'Thoothukudi'],
    description: {
      en: 'Major logistics hub with textile and manufacturing focus',
      ta: 'துணி மற்றும் உற்பத்தி மையமாக விளங்கும் முக்கிய லாஜிஸ்டிக்ஸ் மையம்'
    },
    image: '/images/tamilnadu.jpeg'
  },
  { 
    state: 'Karnataka', 
    cities: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubli'],
    description: {
      en: 'IT and manufacturing corridor with excellent connectivity',
      ta: 'சிறந்த இணைப்புடன் கூடிய ஐடி மற்றும் உற்பத்தி மண்டலம்'
    },
    image: '/images/Bangalore.jpeg'
  },
  { 
    state: 'Maharashtra', 
    cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
    description: {
      en: 'Financial and industrial capital with major port facilities',
      ta: 'முக்கிய துறைமுக வசதிகளுடன் கூடிய நிதி மற்றும் தொழில்துறை தலைநகரம்'
    },
    image: '/images/mumbai.jpeg'
  },
  { 
    state: 'West Bengal', 
    cities: ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur'],
    description: {
      en: 'Eastern gateway with jute and tea trade focus',
      ta: 'சணல் மற்றும் தேயிலை வணிகத்தில் கவனம் செலுத்தும் கிழக்கு நுழைவாயில்'
    },
    image: '/images/kolktata.jpeg'
  },
];

const SERVICES = [
  {
    icon: <FaTruckMoving className="text-green-500" size={24} />,
    title: {
      en: 'Nationwide Coverage',
      ta: 'தேசிய அளவிலான சேவை'
    },
    description: {
      en: 'Lorry transport service covering all major cities across India',
      ta: 'இந்தியாவின் அனைத்து முக்கிய நகரங்களுக்கும் சரக்கு போக்குவரத்து சேவை'
    }
  },
  {
    icon: <FaWeightHanging className="text-blue-500" size={24} />,
    title: {
      en: 'Heavy Cargo Capacity',
      ta: 'கனரக சரக்கு திறன்'
    },
    description: {
      en: 'Cargo weight up to 21 tons with various vehicle options',
      ta: '21 டன் வரை சரக்கு எடை மற்றும் பல்வேறு வாகன விருப்பங்கள்'
    }
  },
  {
    icon: <FaCalendarAlt className="text-purple-500" size={24} />,
    title: {
      en: 'Quick Pickup',
      ta: 'விரைவான எடுப்பு'
    },
    description: {
      en: 'Pickup within 4 days from booking confirmation',
      ta: 'முன்பதிவு உறுதிப்படுத்தப்பட்ட பிறகு 4 நாட்களுக்குள் எடுப்பு'
    }
  },
  {
    icon: <FaBoxes className="text-orange-500" size={24} />,
    title: {
      en: 'Diverse Cargo',
      ta: 'பல்வேறு சரக்கு வகைகள்'
    },
    description: {
      en: 'Transport for cotton, cement, milk powder, beverages and more',
      ta: 'பருத்தி, சிமெண்ட், பால் பொடி, பானங்கள் மற்றும் பலவற்றிற்கான போக்குவரத்து'
    }
  },
];

const PlacesPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('locations');

  return (
    <>
      <Head>
        <title>{language === 'ta' ? 'இடங்கள் மற்றும் சேவைகள்' : 'Locations & Services'}</title>
        <meta name="description" content={language === 'ta' ? 'ஸ்ரீ ஜெயமுருகன் போக்குவரத்து இடங்கள் மற்றும் சேவைகள்' : 'Sri Jayamurgan Transport locations and services'} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3"
            >
              <FaTruckMoving className="text-yellow-300" size={40} />
              {language === 'ta' ? 'இடங்கள் மற்றும் சேவைகள்' : 'Locations & Services'}
            </motion.h1>
            <p className="text-xl md:text-2xl mb-8">
              {language === 'ta' 
                ? 'இந்தியாவின் முக்கிய நகரங்களுக்கு நம்பகமான சரக்கு போக்குவரத்து சேவைகள்'
                : 'Reliable lorry transport services across India'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-all"
            >
              {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Get a Quote'}
            </motion.button>
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="flex justify-center mb-12">
            <div className="flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
              <button
                onClick={() => setActiveTab('locations')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'locations' ? 'bg-green-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {language === 'ta' ? 'இடங்கள்' : 'Locations'}
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'services' ? 'bg-green-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {language === 'ta' ? 'சேவைகள்' : 'Services'}
              </button>
            </div>
          </div>

          {/* Locations Tab */}
          {activeTab === 'locations' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
            >
              {LOCATIONS.map(({ state, cities, description, image }, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image 
                      src={image} 
                      alt={state} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {state}
                      </h3>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-bold">
                        {cities.length} {language === 'ta' ? 'நகரங்கள்' : 'cities'}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {description[language === 'ta' ? 'ta' : 'en']}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cities.map((city, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.section>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-opacity-20" style={{ 
                      backgroundColor: `${service.icon.props.className.includes('green') ? 'rgba(16, 185, 129, 0.1)' : 
                        service.icon.props.className.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 
                        service.icon.props.className.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : 
                        'rgba(249, 115, 22, 0.1)'}` 
                    }}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {service.title[language === 'ta' ? 'ta' : 'en']}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description[language === 'ta' ? 'ta' : 'en']}
                  </p>
                </motion.div>
              ))}
            </motion.section>
          )}

          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <FaInfo className="text-green-500" />
              {language === 'ta' ? 'கூடுதல் தகவல்கள்' : 'Key Features'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaRoad className="text-green-500" size={24} />,
                  title: language === 'ta' ? 'வாகன வகைகள்' : 'Vehicle Types',
                  desc: language === 'ta' ? '6, 10, 12, 14, 16 சக்கர லாரிகள்' : '6 to 16 wheeler lorries'
                },
                {
                  icon: <FaShippingFast className="text-blue-500" size={24} />,
                  title: language === 'ta' ? 'விரைவான சேவை' : 'Fast Service',
                  desc: language === 'ta' ? '4 நாட்களுக்குள் எடுப்பு' : 'Pickup within 4 days'
                },
                {
                  icon: <FaPhone className="text-purple-500" size={24} />,
                  title: language === 'ta' ? '24/7 ஆதரவு' : '24/7 Support',
                  desc: language === 'ta' ? 'எப்போதும் கிடைக்கும்' : 'Always available'
                },
                {
                  icon: <FaShieldAlt className="text-orange-500" size={24} />,
                  title: language === 'ta' ? 'காப்பீடு' : 'Insurance',
                  desc: language === 'ta' ? 'பாதுகாப்பான போக்குவரத்து' : 'Safe transport'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-opacity-20" style={{ 
                      backgroundColor: `${feature.icon.props.className.includes('green') ? 'rgba(16, 185, 129, 0.1)' : 
                        feature.icon.props.className.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 
                        feature.icon.props.className.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : 
                        'rgba(249, 115, 22, 0.1)'}` 
                    }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'ta' 
                ? 'உங்கள் சரக்கு போக்குவரத்து தேவைகளுக்கு தயாராக உள்ளோம்!' 
                : 'Ready to transport your goods?'}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              {language === 'ta' 
                ? 'இன்றே எங்களைத் தொடர்பு கொள்ளவும்' 
                : 'Get in touch with us today for a seamless experience'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto"
            >
              {language === 'ta' ? 'தொடர்பு கொள்ள' : 'Contact Us'} <FaArrowRight />
            </motion.button>
          </motion.section>
        </div>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaTruckMoving className="text-green-400 text-3xl" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {language === 'ta' ? 'ஸ்ரீ ஜெயமுருகன் போக்குவரத்து' : 'Sri Jayamurgan Transport'}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {language === 'ta' 
                    ? '2019 முதல் தரமான லாஜிஸ்டிக்ஸ் சேவைகளை வழங்குகிறோம்.' 
                    : 'Delivering excellence in logistics since 2019.'}
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
                <h4 className="text-lg font-semibold mb-4">
                  {language === 'ta' ? 'விரைவு இணைப்புகள்' : 'Quick Links'}
                </h4>
                <ul className="space-y-2">
                  {[
                    { en: "Home", ta: "முகப்பு", link: "/" },
                    { en: "Services", ta: "சேவைகள்", link: "/services" },
                    { en: "Locations", ta: "இடங்கள்", link: "/locations" },
                    { en: "Contact", ta: "தொடர்பு", link: "/contact" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.link} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {language === 'ta' ? link.ta : link.en}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {language === 'ta' ? 'எங்கள் சேவைகள்' : 'Our Services'}
                </h4>
                <ul className="space-y-2">
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
                        {language === 'ta' ? service.ta : service.en}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {language === 'ta' ? 'எங்களைத் தொடர்பு கொள்ள' : 'Contact Us'}
                </h4>
                <address className="not-italic text-gray-400 space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                    <p>Ayyan Kattur Near Andavor IOC <br />Sankari, Tamil Nadu</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-green-400" />
                    <a href="tel:+919443546505" className="hover:text-white transition-colors">
                      +91 94435 46505
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-green-400" />
                    <a href="mailto:nathiraj1@yahoo.com" className="hover:text-white transition-colors">
                      nathiraj1@yahoo.com
                    </a>
                  </div>
                </address>
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} {language === 'ta' 
                  ? 'ஸ்ரீ ஜெயமுருகன் போக்குவரத்து. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' 
                  : 'Sri Jayamurgan Transport. All rights reserved.'}
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  {language === 'ta' ? 'தனியுரிமைக் கொள்கை' : 'Privacy Policy'}
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  {language === 'ta' ? 'விதிமுறைகள்' : 'Terms of Service'}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PlacesPage;