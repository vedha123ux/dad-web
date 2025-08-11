"use client";

import { useLanguage } from "../../components/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-orange-100 via-white to-orange-50 py-24 px-6 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            {language === "en"
              ? "About Sri Jayamurgan Transport"
              : "ஸ்ரீ ஜெயமுருகன் போக்குவரத்து பற்றி"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {language === "en"
              ? "A legacy of trust and excellence, delivering seamless logistics solutions across India with dedication and integrity."
              : "நம்பிக்கையும் சிறப்பும் கொண்ட பாரம்பரியம், இந்தியா முழுவதும் தடையற்ற தளவாட தீர்வுகளை அர்ப்பணிப்புடனும் நேர்மையுடனும் வழங்குகிறது."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="https://wa.me/9443546505"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {language === "en" ? "Connect With Us" : "எங்களுடன் இணையுங்கள்"}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            {language === "en" ? "Our Journey" : "எங்கள் பயணம்"}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {language === "en"
              ? "From a single lorry in Sankari to a trusted name in logistics across India, our journey is rooted in grit, integrity, and a commitment to service. Founded by our visionary father, Sri Jayamurgan Transport continues to thrive as a family-driven enterprise focused on reliability and customer satisfaction."
              : "சங்ககிரியில் ஒரு லாரியுடன் தொடங்கி, இந்தியா முழுவதும் நம்பகமான தளவாட நிறுவனமாக உயர்ந்த எங்கள் பயணம், உறுதியும் நேர்மையும் சேவை அர்ப்பணிப்பும் அடிப்படையாகக் கொண்டது. எங்கள் தொலைநோக்கு தந்தையால் நிறுவப்பட்ட இந்த குடும்ப நிறுவனம், நம்பகத்தன்மையையும் வாடிக்கையாளர் திருப்தியையும் மையமாகக் கொண்டு செழித்து வருகிறது."}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <Image
            src="/images/truck.jpg"
            alt="Our Truck"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50 animate-pulse" />
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-orange-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            {language === "en" ? "Who We Are" : "நாங்கள் யார்"}
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                titleEn: "Founder & Visionary",
                titleTa: "நிறுவனர் மற்றும் தொலைநோக்காளர்",
                descEn:
                  "Our father, whose unwavering commitment to honesty and service laid the foundation for our transport legacy.",
                descTa:
                  "எங்கள் தந்தை, அவரது நேர்மை மற்றும் சேவைக்கு அசைக்க முடியாத அர்ப்பணிப்பு எங்கள் போக்குவரத்து பாரம்பரியத்தின் அடித்தளமாக அமைந்தது.",
              },
              {
                titleEn: "Co-Founder & Pillar",
                titleTa: "இரண்டாம் நிறுவனர் மற்றும் ஆதரவுத் தூண்",
                descEn:
                  "Our mother, the backbone of our operations, whose support and wisdom guide us every step of the way.",
                descTa:
                  "எங்கள் தாயார், எங்கள் செயல்பாடுகளின் முதுகெலும்பு, அவரது ஆதரவும் ஞானமும் ஒவ்வொரு படியிலும் எங்களை வழிநடத்துகிறது.",
              },
              {
                titleEn: "Next Generation",
                titleTa: "அடுத்த தலைமுறை",
                descEn:
                  "Carrying forward the legacy with innovation, we're building a digital future for our family's vision.",
                descTa:
                  "பாரம்பரியத்தை புதுமையுடன் முன்னெடுத்து, எங்கள் குடும்பத்தின் தொலைநோக்குக்கு ஒரு டிஜிட்டல் எதிர்காலத்தை உருவாக்குகிறோம்.",
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-orange-700 mb-3">
                  {language === "en" ? person.titleEn : person.titleTa}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "en" ? person.descEn : person.descTa}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12 space-y-4"
          >
            <p className="text-xl font-medium text-gray-700">
              {language === "en"
                ? "Established in 2019 proudly serving over 7000+ satisfied clients"
                : "2004 இல் நிறுவப்பட்டு, 7000+ மகிழ்ச்சியான வாடிக்கையாளர்களுக்கு சேவையளித்து வருகிறோம்"}
            </p>
            <p className="text-2xl italic text-orange-600 font-serif">
              {language === "en"
                ? "“A family legacy, driven by trust and excellence.”"
                : "“நம்பிக்கையும் சிறப்பும் இயக்கும் குடும்ப பாரம்பரியம்.”"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-12">
            {language === "en" ? "Our Values" : "எங்கள் மதிப்புகள்"}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: "🚛",
                en: "Reliable Transport",
                ta: "நம்பகமான போக்குவரத்து",
                descEn: "Delivering goods safely and on time, every single time.",
                descTa: "ஒவ்வொரு முறையும் நேரத்தில் பாதுகாப்பாக சரக்குகளை வழங்குவது.",
              },
              {
                icon: "🤝",
                en: "Customer Respect",
                ta: "வாடிக்கையாளர் மரியாதை",
                descEn:
                  "We treat every client with care, humility, and honesty.",
                descTa:
                  "ஒவ்வொரு வாடிக்கையாளரையும் மரியாதையுடன் நேர்மையாக அணுகுகிறோம்.",
              },
              {
                icon: "👨‍👩‍👧",
                en: "Family-Driven",
                ta: "குடும்ப மையமானது",
                descEn: "A business born of family, grown with love and unity.",
                descTa: "குடும்பத்தில் பிறந்தது, அன்பிலும் ஒருமைப்பாட்டிலும் வளர்ந்தது.",
              },
              {
                icon: "⏰",
                en: "Timely Delivery",
                ta: "நேரடி டெலிவரி",
                descEn: "Punctuality is our pride and our promise.",
                descTa: "நேர்மை எங்கள் பெருமை மற்றும் நம்முடைய உறுதி.",
              },
              {
                icon: "💬",
                en: "Open Communication",
                ta: "தெளிவான தகவல்தொடர்பு",
                descEn: "We keep you informed from dispatch to delivery.",
                descTa:
                  "அனுப்பும் தருணத்திலிருந்து டெலிவரி வரை தகவல் தெரிவிக்கிறோம்.",
              },
              {
                icon: "🌟",
                en: "2000+ Happy Clients",
                ta: "2000+ மகிழ்ச்சியான வாடிக்கையாளர்கள்",
                descEn: "Our reputation is built by those who trust us.",
                descTa: "நம்மை நம்பும் வாடிக்கையாளர்களால் உருவான நற்பெயர்.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-orange-50 rounded-xl shadow-md p-6 hover:-translate-y-2 transform transition-all duration-300 text-left hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">
                  {language === "en" ? value.en : value.ta}
                </h3>
                <p className="text-gray-700">
                  {language === "en" ? value.descEn : value.descTa}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-orange-100 text-center py-16 px-6"
      >
        <p className="text-2xl md:text-3xl italic text-orange-700 font-serif leading-snug max-w-4xl mx-auto">
          {language === "en"
            ? "“Our wheels carry more than cargo—they carry trust, legacy, and a promise of excellence.”"
            : "“எங்கள் சக்கரங்கள் சரக்குகளை மட்டுமல்ல—நம்பிக்கை, பாரம்பரியம் மற்றும் சிறப்பு உறுதியையும் சுமக்கின்றன.”"}
        </p>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {language === "en"
                  ? "Sri Jayamurgan Transport"
                  : "ஸ்ரீ ஜெயமுருகன் போக்குவரத்து"}
              </h3>
              <p className="text-gray-400 mb-4">
                {language === "en"
                  ? "Delivering excellence in logistics since 2019."
                  : "2019 முதல் தரமான லாஜிஸ்டிக்ஸ் சேவைகளை வழங்குகிறோம்."}
              </p>
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
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
              </h4>
              <ul className="space-y-2">
                {[
                  { en: "Home", ta: "முகப்பு", link: "/" },
                  { en: "Services", ta: "சேவைகள்", link: "/services" },
                  { en: "About Us", ta: "எங்களைப் பற்றி", link: "/about" },
                  { en: "Contact", ta: "தொடர்பு", link: "/contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.link} className="text-gray-400 hover:text-white transition-colors">
                      {language === "en" ? link.en : link.ta}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Our Services" : "எங்கள் சேவைகள்"}
              </h4>
              <ul className="space-y-2">
                {[
                  { en: "Cotton Transport", ta: "பருத்தி போக்குவரத்து" },
                  { en: "Cement Logistics", ta: "சிமெண்ட் லாஜிஸ்டிக்ஸ்" },
                  { en: "Heavy Loads", ta: "கனரக சுமைகள்" },
                  { en: "All India Delivery", ta: "இந்தியா முழுவதும் விநியோகம்" }
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {language === "en" ? service.en : service.ta}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Contact Us" : "எங்களைத் தொடர்பு கொள்ள"}
              </h4>
              <address className="not-italic text-gray-400 space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-orange-400" />
                  <p>Ayyan Kattur Near Andavor Ioc <br />Sankari, Tamil Nadu</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-orange-400" />
                  <a href="tel:+919443546505" className="hover:text-white transition-colors">
                    +91 94435 46505
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-400" />
                  <a href="mailto:nathiraj1@yahoo.com" className="hover:text-white transition-colors">
                    nathiraj1@yahoo.com
                  </a>
                </div>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {language === "en" 
                ? "Sri Jayamurgan Transport. All rights reserved." 
                : "ஸ்ரீ ஜெயமுருகன் போக்குவரத்து. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
            </p>
            <p className="text-gray-500 text-sm">
              {language === "en" 
                ? "Proudly serving Tamil Nadu since 2019"
                : "2019 முதல் தமிழ்நாட்டிற்கு சேவை செய்து வருகிறோம்"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}