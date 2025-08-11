"use client";

import { useLanguage } from "../../components/LanguageContext";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = language === "en" ? "Name is required" : "பெயர் தேவை";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = language === "en" ? "Email is required" : "மின்னஞ்சல் தேவை";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === "en" ? "Invalid email format" : "தவறான மின்னஞ்சல் வடிவம்";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = language === "en" ? "Message is required" : "செய்தி தேவை";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "", newsletter: false });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-500">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      title: language === "en" ? "WhatsApp" : "வாட்ஸ்அப்",
      description: language === "en" ? "Chat with us instantly" : "எங்களுடன் உடனடியாக உரையாடவும்",
      link: "https://wa.me/919443546505",
      actionText: language === "en" ? "Message Now" : "இப்போது செய்தி அனுப்பவும்"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      title: language === "en" ? "Email" : "மின்னஞ்சல்",
      description: language === "en" ? "Send us an email" : "எங்களுக்கு மின்னஞ்சல் அனுப்பவும்",
      link: "mailto:contact@sjmoffice.com?subject=Contact%20Us&body=Hello%20SJM%20Office,",
      actionText: language === "en" ? "Send Email" : "மின்னஞ்சல் அனுப்பவும்"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500">
          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: language === "en" ? "Visit Us" : "எங்களைப் பார்வையிடவும்",
      description: language === "en" ? "Find us at our office" : "எங்கள் அலுவலகத்தில் எங்களைக் கண்டறியவும்",
      link: "#map",
      actionText: language === "en" ? "View Map" : "வரைபடத்தைக் காண்க"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col overflow-x-hidden">
      <Head>
        <title>{language === "en" ? "Contact SJM Office" : "SJM அலுவலகத்தைத் தொடர்பு கொள்ளவும்"}</title>
        <meta name="description" content={language === "en" ? "Reach out to SJM Office for professional services and support" : "தொழில்முறை சேவைகள் மற்றும் ஆதரவுக்காக SJM அலுவலகத்தைத் தொடர்பு கொள்ளவும்"} />
      </Head>

      {/* Hero Section with Parallax */}
      <motion.div
        ref={heroRef}
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), url('/images/office-hero.jpg')",
          backgroundPositionY: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-4"
        >
          <div className="inline-block mb-6">
            <span className="text-orange-400 font-medium tracking-wider">
              {language === "en" ? "GET IN TOUCH" : "தொடர்பு கொள்ளவும்"}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {language === "en" ? "Let's Start a Conversation" : "ஒரு உரையாடலைத் தொடங்குவோம்"}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Our team is ready to assist you with any inquiries. Reach out through any channel that works best for you."
              : "எந்தவொரு விசாரணைகளுக்கும் உதவ எங்கள் குழு தயாராக உள்ளது. உங்களுக்கு வசதியான எந்த சேனல் மூலமாகவும் தொடர்பு கொள்ளவும்."}
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {language === "en" ? "Send Us a Message" : "எங்களுக்கு ஒரு செய்தி அனுப்பவும்"}
              </h2>
              <p className="text-gray-600">
                {language === "en"
                  ? "Fill out the form below and we'll get back to you within 24 hours."
                  : "கீழே உள்ள படிவத்தை பூர்த்தி செய்யவும், 24 மணி நேரத்திற்குள் உங்களுக்கு பதிலளிப்போம்."}
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-medium">{language === "en" ? "Message sent successfully!" : "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!"}</h3>
                  <p className="text-sm mt-1">
                    {language === "en"
                      ? "We've received your message and will respond soon."
                      : "உங்கள் செய்தியைப் பெற்றுள்ளோம் மற்றும் விரைவில் பதிலளிப்போம்."}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-orange-500 ${
                      formData.name ? "-top-2 text-xs bg-white px-1 text-orange-500" : ""
                    }`}
                  >
                    {language === "en" ? "Your Name *" : "உங்கள் பெயர் *"}
                  </label>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-orange-500 ${
                      formData.email ? "-top-2 text-xs bg-white px-1 text-orange-500" : ""
                    }`}
                  >
                    {language === "en" ? "Email Address *" : "மின்னஞ்சல் முகவரி *"}
                  </label>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-orange-500 ${
                      formData.message ? "-top-2 text-xs bg-white px-1 text-orange-500" : ""
                    }`}
                  >
                    {language === "en" ? "Your Message *" : "உங்கள் செய்தி *"}
                  </label>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-600">
                    {language === "en"
                      ? "Subscribe to our newsletter for updates and offers"
                      : "புதுப்பிப்புகள் மற்றும் சலுகைகளுக்கு எங்கள் செய்திமடலுக்கு குழுசேரவும்"}
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {isSubmitting
                  ? language === "en"
                    ? "Sending..."
                    : "அனுப்பப்படுகிறது..."
                  : language === "en"
                  ? "Send Message"
                  : "செய்தியை அனுப்பவும்"}
              </button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {language === "en" ? "Other Ways to Connect" : "இணைக்க பிற வழிகள்"}
              </h2>
              <p className="text-gray-600">
                {language === "en"
                  ? "Prefer another method? We're available through multiple channels."
                  : "வேறு முறையை விரும்புகிறீர்களா? பல சேனல்கள் மூலம் நாங்கள் கிடைக்கிறோம்."}
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <a
                  href={method.link}
                  target={method.link.startsWith("http") || method.link.startsWith("mailto") ? "_blank" : "_self"}
                  rel={method.link.startsWith("http") || method.link.startsWith("mailto") ? "noopener noreferrer" : ""}
                  className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 hover:border-orange-100"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-orange-50 transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1.5">{method.title}</h3>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <span className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                        {method.actionText}
                        <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-500">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1.5">
                    {language === "en" ? "Business Hours" : "வணிக நேரம்"}
                  </h3>
                  <div className="text-gray-600 space-y-1.5">
                    <p className="flex justify-between max-w-xs">
                      <span>{language === "en" ? "Monday - Friday" : "திங்கள் - வெள்ளி"}</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>{language === "en" ? "Saturday" : "சனிக்கிழமை"}</span>
                      <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>{language === "en" ? "Sunday" : "ஞாயிற்றுக்கிழமை"}</span>
                      <span className="text-gray-900 font-medium">{language === "en" ? "Closed" : "மூடப்பட்டது"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
          id="map"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-orange-500 font-medium tracking-wider mb-2">
              {language === "en" ? "OUR LOCATION" : "எங்கள் இடம்"}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Find Our Office" : "எங்கள் அலுவலகத்தைக் கண்டறியவும்"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Visit us at our conveniently located office for personalized service."
                : "தனிப்பட்ட சேவைக்கு எங்கள் வசதியாக அமைந்துள்ள அலுவலகத்தைப் பார்வையிடவும்."}
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.808469581763!2d77.8843181!3d11.4937367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95f3a5149583d%3A0x53d6f757b6a2c908!2sSjm%20office!5e0!3m2!1sen!2sin!4v1751882282594!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:opacity-95 transition-opacity"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "en" ? "Office Address" : "அலுவலக முகவரி"}
              </h3>
              <address className="text-gray-600 not-italic">
               Ayyan Kattur Near Andavor Ioc
Sankari,Tamil Nadu
              </address>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "en" ? "Phone Number" : "தொலைபேசி எண்"}
              </h3>
              <p className="text-gray-600">
                <a href="tel:+919443546505" className="hover:text-orange-600 transition-colors">+91 94435 46505</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "en" ? "Email Address" : "மின்னஞ்சல் முகவரி"}
              </h3>
              <p className="text-gray-600">
                <a href="mailto:nathiraj1@yahoo.com" className="hover:text-orange-600 transition-colors">nathiraj1@yahoo.com</a>
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === "en" ? "SJM Office" : "SJM அலுவலகம்"}
              </h3>
              <p className="text-gray-400">
                {language === "en"
                  ? "Professional services with a personal touch."
                  : "தனிப்பட்ட தொடுதலுடன் தொழில்முறை சேவைகள்."}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{language === "en" ? "Home" : "முகப்பு"}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{language === "en" ? "Services" : "சேவைகள்"}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{language === "en" ? "About Us" : "எங்களைப் பற்றி"}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{language === "en" ? "Contact" : "தொடர்பு"}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Contact Info" : "தொடர்பு தகவல்"}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Ayyan Kattur Near Andavor Ioc
Sankari,Tamil Nadu</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 94435 46505</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>nathiraj1@yahoo.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Follow Us" : "எங்களைப் பின்தொடரவும்"}
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              {language === "en"
                ? "© 2025 SJM Office. All rights reserved."
                : "© 2025 SJM அலுவலகம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}