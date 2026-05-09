import { CircleCheckBig, Target, Award, Users, Star, ChevronLeft, ChevronRight, Instagram, Phone, Mail, Zap, X, ChevronDown, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';
import BookingPage from './components/BookingPage';
import IELTSPage from './components/IELTSPage';
import TestimonialsPage from './components/TestimonialsPage';
import SpokenEnglishPage from './components/SpokenEnglishPage';
import SoftSkillPage from './components/SoftSkillPage';
import SalesCommunicationPage from './components/SalesCommunicationPage';
import InterviewPreparationPage from './components/InterviewPreparationPage';
import CommunicationSkillsPage from './components/CommunicationSkillsPage';
import PersonalityDevelopmentPage from './components/PersonalityDevelopmentPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesExpanded, setCoursesExpanded] = useState(false);
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [showIELTSPage, setShowIELTSPage] = useState(false);
  const [showTestimonialsPage, setShowTestimonialsPage] = useState(false);
  const [showSpokenEnglishPage, setShowSpokenEnglishPage] = useState(false);
  const [showSoftSkillPage, setShowSoftSkillPage] = useState(false);
  const [showSalesCommunicationPage, setShowSalesCommunicationPage] = useState(false);
  const [showInterviewPreparationPage, setShowInterviewPreparationPage] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      initials: 'MS',
      name: 'Madhan S.P',
      role: 'IELTS Student',
      quote: 'My trainer at GramHour Global was truly exceptional. His positive energy and motivating approach made every session impactful. The guidance I received was clear, practical, and transformative. He is without doubt one of the finest educators I have encountered.'
    },
    {
      initials: 'PR',
      name: 'Praiselin',
      role: 'IELTS Student',
      quote: 'Joining GramHour Global was one of the best decisions I made for my future. My trainer played a major role in shaping my understanding. His clear teaching style helped me overcome stage fear and truly grasp every topic. I highly recommend GramHour Global to anyone planning higher education abroad.'
    },
    {
      initials: 'SV',
      name: 'Sarath Vishwaa',
      role: 'Spoken English Student',
      quote: 'The classes at GramHour Global were highly interactive and engaging. My trainer\'s depth of knowledge in English and his unique style of delivery made every session enjoyable and deeply enriching. I gained enormous confidence in my communication skills.'
    },
    {
      initials: 'PS',
      name: 'Parish S',
      role: 'Spoken English Student',
      quote: 'My instructor at GramHour Global has been both highly informative and wonderfully approachable. The classes were fun, engaging, and the daily improvement in my use of English has been astonishing. I am truly grateful for this experience.'
    },
    {
      initials: 'KS',
      name: 'Kathiravan S',
      role: 'IELTS Student',
      quote: 'I was particularly impressed by the extensive knowledge and expertise in IELTS coaching at GramHour Global. The deep understanding of exam requirements, scoring criteria, and section-wise strategies gave me a clear edge in my preparation.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const [showCommunicationSkillsPage, setShowCommunicationSkillsPage] = useState(false);
  const [showPersonalityDevelopmentPage, setShowPersonalityDevelopmentPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);

  if (showBookingPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <BookingPage onClose={() => setShowBookingPage(false)} />
      </div>
    );
  }

  if (showIELTSPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <IELTSPage
          onClose={() => setShowIELTSPage(false)}
          onBookDemo={() => {
            setShowIELTSPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showSpokenEnglishPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <SpokenEnglishPage
          onClose={() => setShowSpokenEnglishPage(false)}
          onBookDemo={() => {
            setShowSpokenEnglishPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showSoftSkillPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <SoftSkillPage
          onClose={() => setShowSoftSkillPage(false)}
          onBookDemo={() => {
            setShowSoftSkillPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showSalesCommunicationPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <SalesCommunicationPage
          onClose={() => setShowSalesCommunicationPage(false)}
          onBookDemo={() => {
            setShowSalesCommunicationPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showInterviewPreparationPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <InterviewPreparationPage
          onClose={() => setShowInterviewPreparationPage(false)}
          onBookDemo={() => {
            setShowInterviewPreparationPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showCommunicationSkillsPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <CommunicationSkillsPage
          onClose={() => setShowCommunicationSkillsPage(false)}
          onBookDemo={() => {
            setShowCommunicationSkillsPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showPersonalityDevelopmentPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <PersonalityDevelopmentPage
          onClose={() => setShowPersonalityDevelopmentPage(false)}
          onBookDemo={() => {
            setShowPersonalityDevelopmentPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showAboutPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <AboutPage
          onClose={() => setShowAboutPage(false)}
          onBookDemo={() => {
            setShowAboutPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  if (showContactPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <ContactPage
          onClose={() => setShowContactPage(false)}
        />
      </div>
    );
  }

  if (showTestimonialsPage) {
    return (
      <div className="size-full flex justify-center bg-[#000000]">
        <TestimonialsPage
          onClose={() => setShowTestimonialsPage(false)}
          onBookDemo={() => {
            setShowTestimonialsPage(false);
            setShowBookingPage(true);
          }}
        />
      </div>
    );
  }

  return (
    <div className="size-full flex justify-center bg-[#000000]">
      {/* Mobile Frame - 375px wide */}
      <div className="w-[375px] min-h-screen bg-[#000000] relative">
        {/* Navbar */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div
            className="bg-[#0D0D0D]/90 backdrop-blur-xl border border-[rgba(196,148,58,0.35)] rounded-full px-5 py-3.5 flex items-center justify-between w-[327px]"
            style={{
              boxShadow: '0 0 30px rgba(196, 148, 58, 0.15), 0 8px 16px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="GramHour Global"
                className="h-11"
                style={{ opacity: 1 }}
              />
            </div>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1 cursor-pointer"
              aria-label="Open menu"
            >
              <div className="w-5 h-0.5 bg-[#C4943A]" style={{ boxShadow: '0 0 8px rgba(196, 148, 58, 0.5)' }}></div>
              <div className="w-5 h-0.5 bg-[#C4943A]" style={{ boxShadow: '0 0 8px rgba(196, 148, 58, 0.5)' }}></div>
              <div className="w-5 h-0.5 bg-[#C4943A]" style={{ boxShadow: '0 0 8px rgba(196, 148, 58, 0.5)' }}></div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 z-[60]"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div
              className="fixed top-0 right-0 w-[375px] h-screen bg-[#0F0A00] z-[70] overflow-y-auto"
              style={{
                animation: 'slideIn 0.3s ease-out'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(196,148,58,0.1)] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#C4943A]" />
              </button>

              {/* Logo Section */}
              <div className="flex flex-col items-center pt-12 pb-8 px-6">
                <img
                  src="/logo.png"
                  alt="GramHour Global"
                  className="w-40"
                  style={{}}
                />
              </div>

              {/* Menu Items */}
              <nav className="px-6 pb-8">
                <ul className="flex flex-col">
                  {/* Home */}
                  <li className="border-b border-[rgba(196,148,58,0.2)]">
                    <a
                      href="#"
                      className="block py-4 text-white text-[22px] font-bold hover:text-[#C4943A] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Home
                    </a>
                  </li>

                  {/* Our Courses */}
                  <li className="border-b border-[rgba(196,148,58,0.2)]">
                    <button
                      onClick={() => setCoursesExpanded(!coursesExpanded)}
                      className="w-full flex items-center justify-between py-4 text-white text-[22px] font-bold hover:text-[#C4943A] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      <span>Our Courses</span>
                      {coursesExpanded ? (
                        <ChevronDown className="w-5 h-5 text-[#C4943A]" />
                      ) : (
                        <ChevronRightIcon className="w-5 h-5 text-[#C4943A]" />
                      )}
                    </button>

                    {/* Sub-list */}
                    {coursesExpanded && (
                      <ul className="pl-4 pb-3 flex flex-col gap-2">
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowIELTSPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>IELTS Training</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowSpokenEnglishPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>Spoken English</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowSoftSkillPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>Soft Skill Development</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowSalesCommunicationPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>Sales Communication</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowInterviewPreparationPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>Interview Preparation</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowCommunicationSkillsPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>Communication Skills</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setShowPersonalityDevelopmentPage(true);
                            }}
                            className="flex items-center gap-2 text-[#C4943A] text-[16px] hover:text-[#C4943A] transition-colors py-1 w-full text-left"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            <span>→</span>
                            <span>Personality Development</span>
                          </button>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* About Us */}
                  <li className="border-b border-[rgba(196,148,58,0.2)]">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setShowAboutPage(true);
                      }}
                      className="block w-full text-left py-4 text-white text-[22px] font-bold hover:text-[#C4943A] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      About Us
                    </button>
                  </li>

                  {/* Why Choose Us */}
                  <li className="border-b border-[rgba(196,148,58,0.2)]">
                    <a
                      href="#"
                      className="block py-4 text-white text-[22px] font-bold hover:text-[#C4943A] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Why Choose Us
                    </a>
                  </li>

                  {/* Student Reviews */}
                  <li className="border-b border-[rgba(196,148,58,0.2)]">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setShowTestimonialsPage(true);
                      }}
                      className="block w-full text-left py-4 text-white text-[22px] font-bold hover:text-[#C4943A] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Student Reviews
                    </button>
                  </li>

                  {/* Contact Us */}
                  <li className="border-b border-[rgba(196,148,58,0.2)]">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setShowContactPage(true);
                      }}
                      className="block w-full text-left py-4 text-white text-[22px] font-bold hover:text-[#C4943A] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Contact Us
                    </button>
                  </li>

                  {/* Book Free Demo Button */}
                  <li className="pt-6">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setShowBookingPage(true);
                      }}
                      className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-all duration-300"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        boxShadow: '0 0 30px rgba(196, 148, 58, 0.4)'
                      }}
                    >
                      Book Free Demo
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Bottom Contact Info */}
              <div className="px-6 pb-8 mt-4 text-center">
                <p
                  className="text-[rgba(255,250,240,0.6)] text-sm mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  gramhourglobal@gmail.com
                </p>
                <p
                  className="text-[rgba(255,250,240,0.6)] text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  +91 7904383043
                </p>
              </div>
            </div>

            <style>{`
              @keyframes slideIn {
                from {
                  transform: translateX(100%);
                }
                to {
                  transform: translateX(0);
                }
              }
            `}</style>
          </>
        )}

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 overflow-hidden">
          {/* Enhanced Radial Glow Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 700px 500px at center 60%, rgba(196, 163, 90, 0.15), rgba(196, 163, 90, 0.08) 40%, transparent 70%)'
            }}
          ></div>

          {/* Additional Top Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(196, 163, 90, 0.12), transparent 70%)',
              filter: 'blur(60px)'
            }}
          ></div>

          {/* Floating Gold Particles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.2,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="GramHour Global"
              className="w-50 mb-8"
              style={{}}
            />

            {/* Heading */}
            <h1 className="mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span
                className="block text-white text-[56px] leading-[1.05] font-bold tracking-tight"
                style={{
                  textShadow: '0 2px 40px rgba(255, 255, 255, 0.1)'
                }}
              >
                Your Future Begins{' '}
              </span>
              <span
                className="block text-[#C4943A] text-[56px] leading-[1.05] font-bold tracking-tight"
                style={{
                  textShadow: '0 0 40px rgba(196, 163, 90, 0.6), 0 0 80px rgba(196, 163, 90, 0.3)'
                }}
              >
                Here
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-[#FFFAF0] max-w-[310px] mb-12 leading-[1.7] text-[15px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Master IELTS & Spoken English with expert guidance. Transform your communication, elevate your career, and unlock global opportunities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-[320px]">
              <button
                onClick={() => setShowBookingPage(true)}
                className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#E0B050] transition-all duration-300"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  boxShadow: '0 0 30px rgba(196, 163, 90, 0.4), 0 8px 24px rgba(196, 163, 90, 0.2)'
                }}
              >
                Book Free Demo →
              </button>
            </div>
          </div>

          {/* Floating Animation Keyframes */}
          <style>{`
            @keyframes floatUp {
              from {
                transform: translateY(0);
                opacity: 0.2;
              }
              50% {
                opacity: 0.15;
              }
              to {
                transform: translateY(-100vh);
                opacity: 0;
              }
            }
          `}</style>
        </section>

        {/* All Programs Section */}
        <section className="relative px-6 py-20 bg-[#0A0A0A] overflow-hidden">
          {/* Particles - Programs */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.2,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Section Heading */}
          <div className="relative z-10 text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white text-[36px] font-bold">Our </span>
              <span className="text-[#C4943A] text-[36px] font-bold">Premium </span>
              <span className="text-white text-[36px] font-bold">Programs</span>
            </h2>
            <p
              className="text-[#FFFAF0] max-w-[327px] mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Carefully crafted courses designed for excellence and real-world success
            </p>
          </div>

          {/* Cards */}
          <div className="relative z-10 flex flex-col gap-5">
            {/* Card 1 - IELTS Training */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-white text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                IELTS Training
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Achieve Your Target Band Score
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Comprehensive training for all four modules with structured learning and personalized feedback.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Band 7+ Focus
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Mock Tests
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Expert Assessment
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Flexible Batches
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowIELTSPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>

            {/* Card 2 - Spoken English */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-[#C4943A] text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Spoken English
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Speak Fluently. Communicate Confidently.
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Build fluency, confidence, and professional communication skills for career growth and global opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Accent Training
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Real Conversations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Public Speaking
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Interview Prep
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowSpokenEnglishPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>

            {/* Card 3 - Soft Skill Development */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-white text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Soft Skill Development
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Essential Skills for Real Life Success
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Master the human skills that employers and the world demand — adaptability, teamwork, leadership, and emotional intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Leadership Skills
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Emotional Intelligence
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Time Management
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Team Collaboration
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowSoftSkillPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>

            {/* Card 4 - Sales Communication */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-white text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Sales Communication
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Learn. Connect. Close. Grow.
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Master the art of persuasion, pitching, and building client relationships that convert and last.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Pitch Training
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Objection Handling
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Client Psychology
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Closing Techniques
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowSalesCommunicationPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>

            {/* Card 5 - Interview Preparation */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-white text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Interview Preparation
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Crack Interviews With Confidence
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                From HR rounds to technical panels — prepare for every interview format with mock sessions and expert coaching.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Mock Interviews
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Body Language
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Answer Frameworks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Confidence Building
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowInterviewPreparationPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>

            {/* Card 6 - Communication Skills */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-white text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Communication Skills
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Express Better. Connect Deeper.
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Develop powerful verbal and non-verbal communication that builds trust, commands attention, and creates impact.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Voice Modulation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Active Listening
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Assertiveness
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Storytelling
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowCommunicationSkillsPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>

            {/* Card 7 - Personality Development */}
            <div className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] hover:-translate-y-1 transition-all duration-200 overflow-hidden group hover:shadow-[0_8px_24px_rgba(196,148,58,0.25)]">
              <h3
                className="text-white text-[24px] font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Personality Development
              </h3>
              <p
                className="text-[#C4943A] text-[14px] italic mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Build a Stronger Personality That Stands Out
              </p>
              <p
                className="text-[#FFFAF0] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Transform how you think, carry yourself, and present yourself to the world — personally and professionally.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Self Confidence
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Body Language
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Growth Mindset
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-[#C4943A] flex-shrink-0" />
                  <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Personal Branding
                  </span>
                </div>
              </div>

              {/* View Course Button */}
              <button
                onClick={() => setShowPersonalityDevelopmentPage(true)}
                className="w-full h-11 border border-[#C4943A] bg-transparent text-[#C4943A] rounded-[22px] font-semibold hover:bg-[#C4943A] hover:text-[#0A0A0A] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                View Course →
              </button>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C4943A] to-transparent animate-shimmer"></div>
            </div>
          </div>
        </section>

        {/* Why GramHour Global Section - Simple */}
        <section className="relative px-6 py-20 bg-[#0A0A0A] overflow-hidden">
          {/* Particles - Why GramHour */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.18,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Section Heading */}
          <div className="relative z-10 text-center mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white text-[36px] font-bold">Why </span>
              <span className="text-[#C4943A] text-[36px] font-bold">GramHour Global</span>
            </h2>
            <p
              className="text-[#FFFAF0] max-w-[327px] mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We don't just teach — we transform
            </p>
          </div>

          {/* Feature Blocks */}
          <div className="relative z-10 flex flex-col gap-10">
            {/* Block 1 - Personalized Training */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#1A0F00] rounded-[14px] flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[#C4943A]" />
              </div>
              <h3
                className="text-white font-bold text-[20px] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Personalized Training
              </h3>
              <p
                className="text-[#FFFAF0] text-[15px] max-w-[327px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Every student gets a tailored roadmap built around their unique goals, strengths, and learning pace.
              </p>
            </div>

            {/* Block 2 - Expert Guidance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#1A0F00] rounded-[14px] flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-[#C4943A]" />
              </div>
              <h3
                className="text-white font-bold text-[20px] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Expert Guidance
              </h3>
              <p
                className="text-[#FFFAF0] text-[15px] max-w-[327px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Learn from certified professionals with real-world experience across corporate, academic, and global platforms.
              </p>
            </div>

            {/* Block 3 - Structured Learning */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#1A0F00] rounded-[14px] flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#C4943A]" />
              </div>
              <h3
                className="text-white font-bold text-[20px] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Structured Learning
              </h3>
              <p
                className="text-[#FFFAF0] text-[15px] max-w-[327px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Proven step-by-step methodologies that deliver measurable results — not just knowledge, but transformation.
              </p>
            </div>

            {/* Block 4 - All-In-One Growth Hub */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#1A0F00] rounded-[14px] flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-[#C4943A]" />
              </div>
              <h3
                className="text-white font-bold text-[20px] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                All-In-One Growth Hub
              </h3>
              <p
                className="text-[#FFFAF0] text-[15px] max-w-[327px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                From IELTS to personality development — everything you need to become a confident, globally competitive individual. All under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Student Success Stories Section */}
        <section className="relative px-6 py-20 bg-[#0A0A0A] overflow-hidden">
          {/* Particles - Testimonials */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.15,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Section Heading */}
          <div className="relative z-10 text-center mb-12">
            <h2 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#FFFAF0] text-[36px] font-bold">Student </span>
              <span className="text-[#C4943A] text-[36px] font-bold">Success Stories</span>
            </h2>
            <p
              className="text-[rgba(255,250,240,0.8)] text-[15px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Real transformations from real students.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative z-10 mb-8">
            {/* Navigation Arrows */}
            <div className="flex items-center justify-between gap-4">
              {/* Left Arrow */}
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 bg-[#1A1A1A] border border-[#C4943A] rounded-full flex items-center justify-center hover:bg-[rgba(196,148,58,0.1)] transition-colors flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#C4943A]" />
              </button>

              {/* Testimonial Card */}
              <div
                className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 w-full max-w-[327px] mx-auto transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#C4943A] fill-[#C4943A]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[#FFFAF0] text-[15px] mb-6 leading-[1.6]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 bg-[#C4943A] rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-white font-bold text-[16px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p
                      className="text-[#C4943A] text-[13px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 bg-[#1A1A1A] border border-[#C4943A] rounded-full flex items-center justify-center hover:bg-[rgba(196,148,58,0.1)] transition-colors flex-shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#C4943A]" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="relative z-10 flex gap-2 items-center justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-6 h-2 bg-[#C4943A]'
                    : 'w-2 h-2 bg-[rgba(255,250,240,0.3)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Focused Training Section */}
        <section className="px-6 py-28 bg-[#000000] relative overflow-hidden">
          {/* Particles - Focused Training */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.2,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Subtle Background Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(196, 148, 58, 0.2), transparent 70%)',
              filter: 'blur(70px)'
            }}
          ></div>

          <div className="text-center max-w-[310px] mx-auto relative z-10">
            <h2
              className="text-white text-[34px] font-bold mb-4 tracking-tight leading-[1.15]"
              style={{
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 2px 30px rgba(255, 255, 255, 0.1)'
              }}
            >
              Focused, Result-Driven Training
            </h2>
            <h3
              className="text-[#C4943A] text-[19px] mb-5 font-medium"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                textShadow: '0 0 20px rgba(196, 148, 58, 0.5)'
              }}
            >
              Built for Real-World Confidence
            </h3>
            <p
              className="text-[rgba(255,250,240,0.8)] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We don't believe in shortcuts. Every program is designed to build lasting skills, genuine fluency, and the confidence to succeed on any global platform.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-28 bg-[#000000] relative overflow-hidden">
          {/* Particles - CTA */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.25,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Enhanced Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(ellipse, rgba(196, 148, 58, 0.25), transparent 70%)',
              filter: 'blur(60px)'
            }}
          ></div>

          <div className="text-center max-w-[310px] mx-auto relative z-10">
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span
                className="block text-white text-[42px] leading-[1.1] font-bold tracking-tight"
                style={{ textShadow: '0 2px 40px rgba(255, 255, 255, 0.1)' }}
              >
                Start Your{' '}
              </span>
              <span
                className="block text-[#C4943A] text-[42px] leading-[1.1] font-bold tracking-tight"
                style={{ textShadow: '0 0 40px rgba(196, 148, 58, 0.8)' }}
              >
                Global Journey{' '}
              </span>
              <span
                className="block text-white text-[42px] leading-[1.1] font-bold tracking-tight"
                style={{ textShadow: '0 2px 40px rgba(255, 255, 255, 0.1)' }}
              >
                Today
              </span>
            </h2>
            <p
              className="text-[rgba(255,250,240,0.8)] text-[15px] mb-10 leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Join a community of achievers. Take the first step towards international success.
            </p>
            <button
              onClick={() => setShowBookingPage(true)}
              className="w-[300px] h-14 bg-[#C4943A] text-[#0A0A0A] font-semibold hover:bg-[#E0B050] transition-all duration-300"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                borderRadius: '28px',
                boxShadow: '0 0 40px rgba(196, 148, 58, 0.6), 0 8px 24px rgba(196, 148, 58, 0.4)'
              }}
            >
              Book Your Free Demo →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-6 py-16 bg-[#000000] border-t border-[rgba(196,148,58,0.2)] overflow-hidden">
          {/* Particles - Footer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C4A35A]"
                style={{
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  opacity: 0.1,
                  animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Logo Row */}
          <div className="relative z-10 mb-10 flex flex-col items-center text-center">
            <img
              src="/src/imports/watermark_PNG.png"
              alt="GramHour Global"
              className="w-40 mb-4"
              style={{}}
            />
            <p
              className="text-[#FFFAF0] text-[14px] max-w-[280px] leading-[1.6]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Empowering students with world-class IELTS and Spoken English training.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-10">
            <h4
              className="text-white font-bold text-[17px] mb-4 pb-1.5 border-b-2 border-[#C4943A] inline-block"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                boxShadow: '0 2px 15px rgba(196, 148, 58, 0.3)'
              }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[rgba(255,250,240,0.8)] text-[15px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Our Courses
              </a>
              <a
                href="#"
                className="text-[rgba(255,250,240,0.8)] text-[15px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Why Choose Us
              </a>
              <button
                onClick={() => setShowTestimonialsPage(true)}
                className="text-[rgba(255,250,240,0.8)] text-[15px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1 text-left"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Student Reviews
              </button>
            </div>
          </div>

          {/* Connect With Us Section */}
          <div className="relative z-10 mb-10">
            <h4
              className="text-white font-bold text-[17px] mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3.5">
              <button
                onClick={() => window.open('https://www.instagram.com/gramhourglobal?igsh=MTR2ZTZlNHB2MXU1ag==', '_blank')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-[#C4943A]" style={{ filter: 'drop-shadow(0 0 8px rgba(196, 148, 58, 0.5))' }} />
                <span
                  className="text-[rgba(255,250,240,0.8)] text-[15px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  @gramhourglobal
                </span>
              </button>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C4943A]" style={{ filter: 'drop-shadow(0 0 8px rgba(196, 148, 58, 0.5))' }} />
                <span
                  className="text-[rgba(255,250,240,0.8)] text-[15px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  +91 7904383043
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C4943A]" style={{ filter: 'drop-shadow(0 0 8px rgba(196, 148, 58, 0.5))' }} />
                <span
                  className="text-[rgba(255,250,240,0.8)] text-[15px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  gramhourglobal@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="relative z-10 border-t border-[rgba(196,148,58,0.3)] pt-7"
            style={{
              boxShadow: '0 -1px 20px rgba(196, 148, 58, 0.1)'
            }}
          >
            <p
              className="text-[rgba(255,250,240,0.6)] text-[13px] text-center"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              © 2026 GramHour Global. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
