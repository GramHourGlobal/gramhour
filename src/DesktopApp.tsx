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

export default function DesktopApp() {
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
      {/* Desktop Frame - 1440px wide */}
      <div className="w-[1440px] min-h-screen bg-[#000000] relative">
        {/* Navbar - Desktop */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1440px] px-20">
          <div
            className="bg-[#0D0D0D]/90 backdrop-blur-xl border border-[rgba(196,148,58,0.35)] rounded-full px-8 py-4 flex items-center justify-between w-full"
            style={{
              boxShadow: '0 0 30px rgba(196, 148, 58, 0.15), 0 8px 16px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Logo - Left */}
            <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="GramHour Global"
    className="h-11"
  />

  <div className="flex flex-col leading-none">
    <span className="text-white text-lg font-semibold tracking-wide">
      GramHour
    </span>

    <span className="text-yellow-400 text-sm tracking-[0.25em] uppercase">
      Global
    </span>
  </div>
</div>

            {/* Navigation Links - Center */}
            <div className="flex items-center gap-8 flex-1 justify-center">
              <a
                href="#"
                className="text-white hover:text-[#C4943A] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Home
              </a>
              <div className="relative group">
                <button
                  className="text-white hover:text-[#C4943A] transition-colors text-[15px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Our Courses
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => setShowIELTSPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    IELTS Training
                  </button>
                  <button
                    onClick={() => setShowSpokenEnglishPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Spoken English
                  </button>
                  <button
                    onClick={() => setShowSoftSkillPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Soft Skill Development
                  </button>
                  <button
                    onClick={() => setShowSalesCommunicationPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Sales Communication
                  </button>
                  <button
                    onClick={() => setShowInterviewPreparationPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Interview Preparation
                  </button>
                  <button
                    onClick={() => setShowCommunicationSkillsPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Communication Skills
                  </button>
                  <button
                    onClick={() => setShowPersonalityDevelopmentPage(true)}
                    className="block w-full text-left px-4 py-2 text-[#FFFAF0] hover:text-[#C4943A] hover:bg-[rgba(196,148,58,0.1)] transition-colors text-[14px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Personality Development
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  const section = document.getElementById('why-gramhour-section');
                  if (section) {
                    const navbarHeight = 100;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-white hover:text-[#C4943A] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Why Choose Us
              </button>
              <button
                onClick={() => setShowTestimonialsPage(true)}
                className="text-white hover:text-[#C4943A] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Student Reviews
              </button>
              <button
                onClick={() => setShowAboutPage(true)}
                className="text-white hover:text-[#C4943A] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                About Us
              </button>
              <button
                onClick={() => setShowContactPage(true)}
                className="text-white hover:text-[#C4943A] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Contact Us
              </button>
            </div>

            {/* Book Free Demo Button - Right */}
            <button
              onClick={() => setShowBookingPage(true)}
              className="bg-[#C4943A] text-[#0A0A0A] px-6 py-2.5 rounded-full hover:bg-[#E0B050] transition-all duration-300 flex-shrink-0"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                boxShadow: '0 0 30px rgba(196, 148, 58, 0.4)'
              }}
            >
              Book Free Demo
            </button>
          </div>
        </nav>


        {/* Hero Section - Desktop Two Column */}
        <section className="relative min-h-screen flex items-center justify-center px-20 pt-32 pb-40 overflow-hidden">
          {/* Enhanced Radial Glow Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 1200px 800px at center 60%, rgba(196, 163, 90, 0.15), rgba(196, 163, 90, 0.08) 40%, transparent 70%)'
            }}
          ></div>

          {/* Additional Top Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(196, 163, 90, 0.12), transparent 70%)',
              filter: 'blur(80px)'
            }}
          ></div>

          {/* Floating Gold Particles - Hero Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-hero-desktop">
            {[...Array(30)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.25 : size === 4 ? 0.18 : 0.12;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="relative z-10 w-full max-w-[1280px] grid grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col">
              {/* Heading */}
              <h1 className="mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span
                  className="block text-white text-[64px] leading-[1.05] font-bold tracking-tight"
                  style={{
                    textShadow: '0 2px 40px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Your Future Begins{' '}
                </span>
                <span
                  className="block text-[#C4943A] text-[64px] leading-[1.05] font-bold tracking-tight"
                  style={{
                    textShadow: '0 0 40px rgba(196, 163, 90, 0.6), 0 0 80px rgba(196, 163, 90, 0.3)'
                  }}
                >
                  Here
                </span>
              </h1>

              {/* Subtext */}
              <p
                className="text-[#FFFAF0] max-w-[500px] mb-12 leading-[1.7] text-[17px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Master IELTS & Spoken English with expert guidance. Transform your communication, elevate your career, and unlock global opportunities.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 w-full max-w-[400px]">
                <button
                  onClick={() => setShowBookingPage(true)}
                  className="flex-1 h-14 bg-[#C4943A] text-[#0A0A0A] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#E0B050] transition-all duration-300"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    boxShadow: '0 0 30px rgba(196, 163, 90, 0.4), 0 8px 24px rgba(196, 163, 90, 0.2)'
                  }}
                >
                  Book Free Demo →
                </button>
              </div>
            </div>

            {/* Right Column - Large Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="GramHour Global"
                className="w-[500px]"
                style={{
                  filter: 'drop-shadow(0 0 60px rgba(196, 148, 58, 0.3))'
                }}
              />
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
        <section className="relative px-20 py-32 bg-[#0A0A0A] overflow-hidden">
          {/* Floating Gold Particles - Programs Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-programs-desktop">
            {[...Array(18)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.22 : size === 4 ? 0.18 : 0.14;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          {/* Section Heading */}
          <div className="relative z-10 text-center mb-16 max-w-[900px] mx-auto">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white text-[44px] font-bold">Our </span>
              <span className="text-[#C4943A] text-[44px] font-bold">Premium </span>
              <span className="text-white text-[44px] font-bold">Programs</span>
            </h2>
            <p
              className="text-[#FFFAF0] text-[17px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Carefully crafted courses designed for excellence and real-world success
            </p>
          </div>

          {/* Cards - 3 Column Grid */}
          <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-3 gap-6">
            {/* Card 1 - IELTS Training */}
            <div
              onClick={() => setShowIELTSPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>

            {/* Card 2 - Spoken English */}
            <div
              onClick={() => setShowSpokenEnglishPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>

            {/* Card 3 - Soft Skill Development */}
            <div
              onClick={() => setShowSoftSkillPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>

            {/* Card 4 - Sales Communication */}
            <div
              onClick={() => setShowSalesCommunicationPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>

            {/* Card 5 - Interview Preparation */}
            <div
              onClick={() => setShowInterviewPreparationPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>

            {/* Card 6 - Communication Skills */}
            <div
              onClick={() => setShowCommunicationSkillsPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>

          </div>

          {/* Card 7 - Personality Development (Centered) */}
          <div className="relative z-10 max-w-[1280px] mx-auto mt-6 flex justify-center">
            <div
              onClick={() => setShowPersonalityDevelopmentPage(true)}
              className="relative bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:border-[rgba(196,148,58,0.9)] hover:border-2 hover:-translate-y-1.5 w-full max-w-[400px]"
              style={{
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(196,148,58,0.3), 0px 12px 32px rgba(196,148,58,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* View Course Badge */}
              <div className="absolute top-4 right-4 bg-[#C4A35A] text-[#0A0A0A] px-3 py-1 rounded-[13px] text-[12px] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                View Course
              </div>

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
              <div className="grid grid-cols-2 gap-4 mb-4">
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

              {/* Explore Course Link */}
              <div className="text-right mt-3">
                <span className="text-[#C4A35A] text-[14px] hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Explore Course →
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why GramHour Global Section */}
        <section id="why-gramhour-section" className="relative px-20 py-32 bg-[#0A0A0A] overflow-hidden">
          {/* Floating Gold Particles - Why GramHour Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-whygramhour-desktop">
            {[...Array(14)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.20 : size === 4 ? 0.16 : 0.12;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          {/* Section Heading */}
          <div className="relative z-10 text-center mb-16 max-w-[900px] mx-auto">
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white text-[44px] font-bold">Why </span>
              <span className="text-[#C4943A] text-[44px] font-bold">GramHour Global</span>
            </h2>
            <p
              className="text-[#FFFAF0] text-[17px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We don't just teach — we transform
            </p>
          </div>

          {/* Feature Blocks - 4 Columns */}
          <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-4 gap-8">
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
        <section className="relative px-20 py-32 bg-[#0A0A0A] overflow-hidden">
          {/* Floating Gold Particles - Testimonials Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-testimonials-desktop">
            {[...Array(12)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.18 : size === 4 ? 0.14 : 0.10;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          {/* Section Heading */}
          <div className="relative z-10 text-center mb-16 max-w-[900px] mx-auto">
            <h2 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#FFFAF0] text-[44px] font-bold">Student </span>
              <span className="text-[#C4943A] text-[44px] font-bold">Success Stories</span>
            </h2>
            <p
              className="text-[rgba(255,250,240,0.8)] text-[17px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Real transformations from real students.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative z-10 mb-12 max-w-[900px] mx-auto">
            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-8">
              {/* Left Arrow */}
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-[#1A1A1A] border border-[#C4943A] rounded-full flex items-center justify-center hover:bg-[rgba(196,148,58,0.1)] transition-colors flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-[#C4943A]" />
              </button>

              {/* Testimonial Card - 600px wide */}
              <div
                className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-8 w-full max-w-[600px] transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#C4943A] fill-[#C4943A]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[#FFFAF0] text-[16px] mb-8 leading-[1.7]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 bg-[#C4943A] rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <span
                      className="text-white font-bold text-[16px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-white font-bold text-[18px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p
                      className="text-[#C4943A] text-[15px]"
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
                className="w-12 h-12 bg-[#1A1A1A] border border-[#C4943A] rounded-full flex items-center justify-center hover:bg-[rgba(196,148,58,0.1)] transition-colors flex-shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-[#C4943A]" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="relative z-10 flex gap-2.5 items-center justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-8 h-2.5 bg-[#C4943A]'
                    : 'w-2.5 h-2.5 bg-[rgba(255,250,240,0.3)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Focused Training Section */}
        <section className="px-20 py-32 bg-[#000000] relative overflow-hidden">
          {/* Floating Gold Particles - Focused Training Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-focused-desktop">
            {[...Array(16)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.22 : size === 4 ? 0.16 : 0.12;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          {/* Subtle Background Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(196, 148, 58, 0.2), transparent 70%)',
              filter: 'blur(90px)'
            }}
          ></div>

          <div className="text-center max-w-[900px] mx-auto relative z-10">
            <h2
              className="text-white text-[42px] font-bold mb-5 tracking-tight leading-[1.15]"
              style={{
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 2px 30px rgba(255, 255, 255, 0.1)'
              }}
            >
              Focused, Result-Driven Training
            </h2>
            <h3
              className="text-[#C4943A] text-[22px] mb-6 font-medium"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                textShadow: '0 0 20px rgba(196, 148, 58, 0.5)'
              }}
            >
              Built for Real-World Confidence
            </h3>
            <p
              className="text-[rgba(255,250,240,0.8)] text-[17px] leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We don't believe in shortcuts. Every program is designed to build lasting skills, genuine fluency, and the confidence to succeed on any global platform.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-20 py-32 bg-[#000000] relative overflow-hidden">
          {/* Floating Gold Particles - CTA Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-cta-desktop">
            {[...Array(22)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.25 : size === 4 ? 0.22 : 0.18;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          {/* Enhanced Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-30 z-0"
            style={{
              background: 'radial-gradient(ellipse, rgba(196, 148, 58, 0.25), transparent 70%)',
              filter: 'blur(80px)'
            }}
          ></div>

          <div className="text-center max-w-[900px] mx-auto relative z-10">
            <h2 className="mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span
                className="block text-white text-[52px] leading-[1.1] font-bold tracking-tight"
                style={{ textShadow: '0 2px 40px rgba(255, 255, 255, 0.1)' }}
              >
                Start Your{' '}
              </span>
              <span
                className="block text-[#C4943A] text-[52px] leading-[1.1] font-bold tracking-tight"
                style={{ textShadow: '0 0 40px rgba(196, 148, 58, 0.8)' }}
              >
                Global Journey{' '}
              </span>
              <span
                className="block text-white text-[52px] leading-[1.1] font-bold tracking-tight"
                style={{ textShadow: '0 2px 40px rgba(255, 255, 255, 0.1)' }}
              >
                Today
              </span>
            </h2>
            <p
              className="text-[rgba(255,250,240,0.8)] text-[17px] mb-12 leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Join a community of achievers. Take the first step towards international success.
            </p>
            <button
              onClick={() => setShowBookingPage(true)}
              className="w-[320px] h-16 bg-[#C4943A] text-[#0A0A0A] font-semibold hover:bg-[#E0B050] transition-all duration-300 text-[17px]"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                borderRadius: '32px',
                boxShadow: '0 0 40px rgba(196, 148, 58, 0.6), 0 8px 24px rgba(196, 148, 58, 0.4)'
              }}
            >
              Book Your Free Demo →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-20 py-20 bg-[#000000] border-t border-[rgba(196,148,58,0.2)] overflow-hidden">
          {/* Floating Gold Particles - Footer Desktop */}
          <div className="absolute inset-0 pointer-events-none z-0" data-layer="particles-footer-desktop">
            {[...Array(8)].map((_, i) => {
              const size = [3, 4, 6][Math.floor(Math.random() * 3)];
              const opacity = size === 6 ? 0.15 : size === 4 ? 0.10 : 0.08;
              return (
                <div
                  key={i}
                  className="absolute bg-[#C4943A] rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    animation: `floatUp ${15 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto">
            {/* Top Row - Logo and Description */}
            <div className="mb-12 flex flex-col items-center text-center">
              <img
                src="/logo.png"
                alt="GramHour Global"
                className="w-48 mb-5"
                style={{}}
              />
              <p
                className="text-[#FFFAF0] text-[16px] max-w-[500px] leading-[1.6]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Empowering students with world-class IELTS and Spoken English training.
              </p>
            </div>

            {/* Middle Row - Links and Contact */}
            <div className="grid grid-cols-2 gap-16 mb-12 max-w-[800px] mx-auto">
              {/* Quick Links Section */}
              <div>
                <h4
                  className="text-white font-bold text-[18px] mb-5 pb-2 border-b-2 border-[#C4943A] inline-block"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    boxShadow: '0 2px 15px rgba(196, 148, 58, 0.3)'
                  }}
                >
                  Quick Links
                </h4>
                <div className="flex flex-col gap-3.5">
                  <a
                    href="#"
                    className="text-[rgba(255,250,240,0.8)] text-[16px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Our Courses
                  </a>
                  <button
                    onClick={() => {
                      const section = document.getElementById('why-gramhour-section');
                      if (section) {
                        const navbarHeight = 100;
                        const elementPosition = section.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="text-[rgba(255,250,240,0.8)] text-[16px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1 text-left"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Why Choose Us
                  </button>
                  <button
                    onClick={() => setShowTestimonialsPage(true)}
                    className="text-[rgba(255,250,240,0.8)] text-[16px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1 text-left"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Student Reviews
                  </button>
                </div>
              </div>

              {/* Connect With Us Section */}
              <div>
                <h4
                  className="text-white font-bold text-[18px] mb-5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Connect With Us
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.instagram.com/gramhourglobal?igsh=MTR2ZTZlNHB2MXU1ag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#C4943A] transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#C4943A]" style={{ filter: 'drop-shadow(0 0 8px rgba(196, 148, 58, 0.5))' }} />
                    <span
                      className="text-[rgba(255,250,240,0.8)] text-[16px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      @gramhourglobal
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#C4943A]" style={{ filter: 'drop-shadow(0 0 8px rgba(196, 148, 58, 0.5))' }} />
                    <span
                      className="text-[rgba(255,250,240,0.8)] text-[16px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      +91 7904383043
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C4943A]" style={{ filter: 'drop-shadow(0 0 8px rgba(196, 148, 58, 0.5))' }} />
                    <span
                      className="text-[rgba(255,250,240,0.8)] text-[16px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      gramhourglobal@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div
              className="border-t border-[rgba(196,148,58,0.3)] pt-8"
              style={{
                boxShadow: '0 -1px 20px rgba(196, 148, 58, 0.1)'
              }}
            >
              <p
                className="text-[rgba(255,250,240,0.6)] text-[14px] text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                © 2026 GramHour Global. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
