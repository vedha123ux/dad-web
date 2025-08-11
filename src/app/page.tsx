"use client";
import { useLanguage } from "../components/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Truck, Clock, ShieldCheck, MapPin, Package, PhoneCall, Award, Leaf, Users, Star, Quote, Calendar, Check, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 max-w-lg animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              <Truck className="w-4 h-4 mr-2" />
              {language === "en" ? "Trusted Transport Since 2019" : "2019 முதல் நம்பிக்கையான போக்குவரத்து"}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              {language === "en"
                ? "Precision Logistics for Industrial & Agricultural Goods"
                : "தொழில்துறை & விவசாய பொருட்களுக்கான துல்லியமான போக்குவரத்து"}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {language === "en"
                ? "We bridge the gap between producers and markets with reliable, temperature-controlled transport solutions across India."
                : "உற்பத்தியாளர்களுக்கும் சந்தைகளுக்கும் இடையே நம்பகமான, வெப்பநிலை கட்டுப்பாடு கொண்ட போக்குவரத்து தீர்வுகளை வழங்குகிறோம்."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/9443546505"
                className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                {language === "en"
                  ? "Book Your Load Now"
                  : "இப்போது உங்கள் சரக்கு பதிவு செய்யுங்கள்"}
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Package className="w-5 h-5 mr-2" />
                {language === "en" ? "Our Services" : "எங்கள் சேவைகள்"}
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">7+</div>
                <div className="text-sm text-gray-500">{language === "en" ? "Years Experience" : "ஆண்டுகள் அனுபவம்"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">7000+</div>
                <div className="text-sm text-gray-500">{language === "en" ? "Happy Clients" : "திருப்தியான வாடிக்கையாளர்கள்"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-500">{language === "en" ? "Safety Record" : "பாதுகாப்பு பதிவு"}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/cotton.jpg"
                alt="Cotton Transport"
                width={600}
                height={400}
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-30 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full opacity-50" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-6 py-8 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
              text: language === "en" ? "Fully Insured" : "முழு காப்பீடு",
              subtext: language === "en" ? "Cargo Protection" : "சரக்கு பாதுகாப்பு"
            },
            {
              icon: <Clock className="w-8 h-8 text-orange-600" />,
              text: language === "en" ? "On-Time Delivery" : "நேரத்திற்கு விநியோகம்",
              subtext: language === "en" ? "98% Punctuality" : "98% நேரத்துல்லியம்"
            },
            {
              icon: <MapPin className="w-8 h-8 text-orange-600" />,
              text: language === "en" ? "Pan-India Network" : "இந்தியா முழுவதும்",
              subtext: language === "en" ? "Wide Coverage" : "விரிவான வலையமைப்பு"
            },
            {
              icon: <Award className="w-8 h-8 text-orange-600" />,
              text: language === "en" ? "Certified" : "சான்றளிக்கப்பட்டது",
              subtext: language === "en" ? "ISO Standards" : "ஐஎஸ்ஓ தரநிலைகள்"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-orange-50 rounded-full">
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{item.text}</div>
                <div className="text-sm text-gray-500">{item.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Tailored Transport Solutions" : "தனிப்பயன் போக்குவரத்து தீர்வுகள்"}
            </h2>
            <p className="text-gray-600">
              {language === "en" 
                ? "Specialized services designed for your specific cargo needs"
                : "உங்கள் குறிப்பிட்ட சரக்கு தேவைகளுக்காக வடிவமைக்கப்பட்ட சிறப்பு சேவைகள்"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-orange-600" />,
                en: "Agricultural Commodities",
                ta: "விவசாய பொருட்கள்",
                descEn: "Temperature-controlled transport for cotton, seeds, and perishables.",
                descTa: "பருத்தி, விதைகள் மற்றும் கெட்டுப்போகும் பொருட்களுக்கு வெப்பநிலை கட்டுப்பாட்டு போக்குவரத்து.",
                features: [
                  language === "en" ? "Moisture control" : "ஈரப்பதம் கட்டுப்பாடு",
                  language === "en" ? "Ventilated containers" : "காற்றோட்டம் கொண்ட கொள்கலன்கள்",
                  language === "en" ? "Quick turnaround" : "விரைவான திருப்பம்"
                ]
              },
              {
                icon: <Package className="w-8 h-8 text-orange-600" />,
                en: "Construction Materials",
                ta: "கட்டுமானப் பொருட்கள்",
                descEn: "Heavy-duty transport for cement, steel, and building supplies.",
                descTa: "சிமெண்ட், எஃகு மற்றும் கட்டுமான பொருட்களுக்கான கனரக போக்குவரத்து.",
                features: [
                  language === "en" ? "Dust-proof containers" : "தூசி-எதிர்ப்பு கொள்கலன்கள்",
                  language === "en" ? "Crane loading" : "கிரேன் ஏற்றுதல்",
                  language === "en" ? "Site delivery" : "தள விநியோகம்"
                ]
              },
              {
                icon: <Truck className="w-8 h-8 text-orange-600" />,
                en: "Fleet Solutions",
                ta: "வாகனத் தீர்வுகள்",
                descEn: "Diverse fleet options from 10T to 40T capacity vehicles.",
                descTa: "10 டன் முதல் 40 டன் திறன் கொண்ட வாகனங்கள்.",
                features: [
                  language === "en" ? "GPS tracked" : "GPS கண்காணிப்பு",
                  language === "en" ? "Regular maintenance" : "வழக்கமான பராமரிப்பு",
                  language === "en" ? "Trained drivers" : "பயிற்சி பெற்ற ஓட்டுநர்கள்"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl shadow-sm p-8 transform hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-orange-100"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "en" ? service.en : service.ta}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "en" ? service.descEn : service.descTa}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/logo.jpg"
                  alt="Transport Team"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-30"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === "en" ? "About Our Company" : "எங்கள் நிறுவனம் பற்றி"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "en"
                  ? "Founded in 2019, Sri Jayamurgan Transport has grown from a single truck operation to one of the most trusted logistics providers in South India. Our family-owned business is built on the principles of reliability, integrity, and exceptional service."
                  : "2019 ஆம் ஆண்டில் நிறுவப்பட்ட ஸ்ரீ ஜெயமுருகன் போக்குவரத்து, ஒரு லாரி செயல்பாட்டிலிருந்து தென்னிந்தியாவின் மிகவும் நம்பகமான லாஜிஸ்டிக்ஸ் சேவை வழங்குநர்களில் ஒருவராக வளர்ந்துள்ளது. எங்கள் குடும்ப சொத்து வணிகம் நம்பகத்தன்மை, நேர்மை மற்றும் சிறந்த சேவை ஆகிய கொள்கைகளின் அடிப்படையில் கட்டப்பட்டது."}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === "en" ? "Our Mission" : "எங்கள் பணி"}
                    </h4>
                    <p className="text-gray-600">
                      {language === "en"
                        ? "To deliver goods safely, on time, and with the highest level of customer satisfaction."
                        : "பொருட்களை பாதுகாப்பாக, நேரத்திற்கு மற்றும் அதிகபட்ச வாடிக்கையாளர் திருப்தியுடன் வழங்குவது."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === "en" ? "Our Vision" : "எங்கள் பார்வை"}
                    </h4>
                    <p className="text-gray-600">
                      {language === "en"
                        ? "To be the most preferred logistics partner for agricultural and industrial businesses across India."
                        : "இந்தியா முழுவதும் விவசாய மற்றும் தொழில்துறை வணிகங்களுக்கான மிகவும் விரும்பப்படும் லாஜிஸ்டிக்ஸ் பங்காளியாக இருக்க வேண்டும்."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === "en" ? "Our Values" : "எங்கள் மதிப்புகள்"}
                    </h4>
                    <p className="text-gray-600">
                      {language === "en"
                        ? "Honesty, transparency, and commitment to excellence in every delivery."
                        : "ஒவ்வொரு டெலிவரியிலும் நேர்மை, வெளிப்படைத்தன்மை மற்றும் சிறந்த தரத்திற்கான உறுதிப்பாடு."}
                    </p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
              >
                {language === "en" ? "Learn more about us" : "எங்களைப் பற்றி மேலும் அறிய"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "en" ? "What Our Clients Say" : "எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்"}
            </h2>
            <p className="text-gray-600">
              {language === "en" 
                ? "Trusted by businesses across multiple industries"
                : "பல தொழில்களில் உள்ள வணிகங்களால் நம்பப்படுகிறது"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Kumar Cotton Mills",
                reviewEn: "Their cotton transport service is exceptional. Never had any moisture damage issues even during monsoon.",
                reviewTa: "அவர்களின் பருத்தி போக்குவரத்து சேவை அருமையானது. பருவமழையின் போது கூட ஈரப்பதம் சேதம் பிரச்சினைகள் எதுவும் இல்லை.",
                rating: 5
              },
              {
                name: "Priya Anand",
                company: "Anand Constructions",
                reviewEn: "Timely delivery of cement to our remote sites has improved our project timelines significantly.",
                reviewTa: "எங்கள் தொலைதூர தளங்களுக்கு சிமெண்ட் நேரத்தில் விநியோகிப்பது எங்கள் திட்ட காலக்கெடுவை கணிசமாக மேம்படுத்தியுள்ளது.",
                rating: 4
              },
              {
                name: "Vijay Balaji",
                company: "Balaji Agri Products",
                reviewEn: "Reliable service for our perishable goods. Temperature control is always perfect.",
                reviewTa: "எங்கள் கெட்டுப்போகும் பொருட்களுக்கு நம்பகமான சேவை. வெப்பநிலை கட்டுப்பாடு எப்போதும் சரியாக இருக்கும்.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-orange-200 mb-4" />
                <p className="text-gray-600 mb-6">
                  {language === "en" ? testimonial.reviewEn : testimonial.reviewTa}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Our Simple Process" : "எங்கள் எளிய செயல்முறை"}
            </h2>
            <p className="text-gray-600">
              {language === "en" 
                ? "Three easy steps to get your cargo moving"
                : "உங்கள் சரக்கை நகர்த்துவதற்கான மூன்று எளிய படிகள்"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                en: "Request a Load",
                ta: "விலைப்புள்ளியை கோரவும்",
                descEn: "Contact us with your load details for a competitive Load.",
                descTa: "போட்டி விலைக்கான உங்கள் சரக்கு விவரங்களுடன் எங்களைத் தொடர்பு கொள்ளவும்."
              },
              {
                step: "02",
                en: "Vehicle Allocation",
                ta: "வாகன ஒதுக்கீடு",
                descEn: "We match your requirements with the perfect vehicle from our fleet.",
                descTa: "உங்கள் தேவைகளுக்கு ஏற்ற வாகனத்தை எங்கள் கடற்படையிலிருந்து பொருத்துகிறோம்."
              },
              {
                step: "03",
                en: "Timely Delivery",
                ta: "நேரத்திற்கு விநியோகம்",
                descEn: "Your cargo is transported safely and delivered on schedule.",
                descTa: "உங்கள் சரக்கு பாதுகாப்பாக கொண்டு செல்லப்பட்டு திட்டமிட்ட நேரத்தில் வழங்கப்படும்."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="bg-white rounded-xl shadow-md p-8 pt-16 text-center h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === "en" ? item.en : item.ta}
                  </h3>
                  <p className="text-gray-600">
                    {language === "en" ? item.descEn : item.descTa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en" 
              ? "Ready to Transport Your Goods Safely?" 
              : "உங்கள் பொருட்களை பாதுகாப்பாக கொண்டு செல்ல தயாரா?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "en" 
              ? "Get a free quote today and experience our premium transport services."
              : "இன்றே இலவச மதிப்பீட்டைப் பெற்று எங்கள் பிரீமியம் போக்குவரத்து சேவைகளை அனுபவிக்கவும்."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/9443546505"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              {language === "en" ? "Call Now" : "இப்போது அழைக்கவும்"}
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300"
            >
              <Package className="w-5 h-5 mr-2" />
              {language === "en" ? "Learn More" : "மேலும் அறிய"}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
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
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}
              </h4>
              <ul className="space-y-2">
                {[
                  { en: "Home", ta: "முகப்பு", link: "#" },
                  { en: "Services", ta: "சேவைகள்", link: "#services" },
                  { en: "About Us", ta: "எங்களைப் பற்றி", link: "#about" },
                  { en: "Contact", ta: "தொடர்பு", link: "#contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="text-gray-400 hover:text-white transition-colors">
                      {language === "en" ? link.en : link.ta}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Services" : "சேவைகள்"}
              </h4>
              <ul className="space-y-2">
                {[
                  { en: "Cotton Transport", ta: "பருத்தி போக்குவரத்து", link: "#" },
                  { en: "Cement Logistics", ta: "சிமெண்ட் லாஜிஸ்டிக்ஸ்", link: "#" },
                  { en: "Heavy Loads", ta: "கனரக சுமைகள்", link: "#" },
                  { en: "All India Delivery", ta: "இந்தியா முழுவதும் விநியோகம்", link: "#" }
                ].map((service, index) => (
                  <li key={index}>
                    <a href={service.link} className="text-gray-400 hover:text-white transition-colors">
                      {language === "en" ? service.en : service.ta}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "en" ? "Contact Us" : "எங்களைத் தொடர்பு கொள்ள"}
              </h4>
              <address className="not-italic text-gray-400 space-y-2">
                <p>Ayyan Kattur Near Andavor Ioc <br />Sankari,Tamil Nadu</p>
                <p>
                  <a href="tel:+919443546505" className="hover:text-white transition-colors">
                    +91 94435 46505
                  </a>
                </p>
                <p>
                  <a href="mailto:nathiraj1@yahoo.com" className="hover:text-white transition-colors">
                    nathiraj1@yahoo.com
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {language === "en" 
                ? "Jayamurgan Transport. All rights reserved." 
                : "ஜெயமுருகன் போக்குவரத்து. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {language === "en" ? "Privacy Policy" : "தனியுரிமைக் கொள்கை"}
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {language === "en" ? "Terms of Service" : "சேவை விதிமுறைகள்"}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}