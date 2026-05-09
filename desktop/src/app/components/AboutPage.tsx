import { Target, Users, Globe, Lightbulb, Flame, X, Instagram, Phone, Mail } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export default function AboutPage({ onClose, onBookDemo }: AboutPageProps) {
  return (
    <div className="w-[1440px] min-h-screen bg-[#0A0A0A] relative overflow-y-auto">
      {/* Navbar - Desktop */}
      <nav className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[rgba(196,148,58,0.2)] px-20 py-5">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/src/imports/watermark_PNG.png"
              alt="GramHour Global"
              className="h-12"
              style={{}}
            />
          </div>

          {/* Close Button - Right */}
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(196,148,58,0.1)] transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-[#C4943A]" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-20 py-24">
        {/* Heading Centered */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h1 className="mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-[#FFFAF0] text-[48px] font-bold">About </span>
            <span className="text-[#C4A35A] text-[48px] font-bold">GramHour Global</span>
          </h1>
          <p
            className="text-[#C4943A] text-[20px] italic"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We Exist to Transform Lives Through Communication
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-[580px_480px] gap-12 justify-center items-start">
          {/* Left Column - Body Text */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[#FFFAF0] text-[16px] leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              GramHour Global was built on one belief — that the right words, spoken with confidence, can open any door in the world. We are a premium training institute offering IELTS coaching, Spoken English, Personality Development, Soft Skills, Sales Communication, Interview Preparation, and Communication Skills training.
            </p>
            <p
              className="text-[#FFFAF0] text-[16px] leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Our students come from all walks of life — fresh graduates, working professionals, entrepreneurs, and dreamers. What unites them is a desire to grow, communicate better, and achieve more.
            </p>
          </div>

          {/* Right Column - Mission Card */}
          <div className="bg-[#111111] border border-[rgba(196,148,58,0.35)] rounded-2xl p-10 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-[#1A0F00] rounded-full flex items-center justify-center mb-5">
              <Flame className="w-8 h-8 text-[#C4943A]" />
            </div>

            {/* Title */}
            <h2
              className="text-white text-[26px] font-bold mb-5"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Mission
            </h2>

            {/* Body */}
            <p
              className="text-[#FFFAF0] text-[16px] leading-[1.7]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              To empower every student with the communication skills, confidence, and clarity to succeed in any global environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-20 py-32 bg-[#000000]">
        {/* Section Heading */}
        <h2 className="mb-16 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white text-[40px] font-bold">Our </span>
          <span className="text-[#C4943A] text-[40px] font-bold">Values</span>
        </h2>

        {/* Value Blocks - 4 Horizontal */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-8">
          {/* Block 1 - Excellence First */}
          <div className="flex flex-col items-center text-center w-[280px]">
            <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[19px] font-bold mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Excellence First
            </h3>
            <p
              className="text-[#FFFAF0] text-[15px] leading-[1.6]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We never settle for average results.
            </p>
          </div>

          {/* Block 2 - Student Centered */}
          <div className="flex flex-col items-center text-center w-[280px]">
            <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[19px] font-bold mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Student Centered
            </h3>
            <p
              className="text-[#FFFAF0] text-[15px] leading-[1.6]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Every decision we make puts our students first.
            </p>
          </div>

          {/* Block 3 - Global Vision */}
          <div className="flex flex-col items-center text-center w-[280px]">
            <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center mb-4">
              <Globe className="w-7 h-7 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[19px] font-bold mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Global Vision
            </h3>
            <p
              className="text-[#FFFAF0] text-[15px] leading-[1.6]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We prepare students for international standards.
            </p>
          </div>

          {/* Block 4 - Real Transformation */}
          <div className="flex flex-col items-center text-center w-[280px]">
            <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-7 h-7 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[19px] font-bold mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Real Transformation
            </h3>
            <p
              className="text-[#FFFAF0] text-[15px] leading-[1.6]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Skills that work in real life, not just classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-20 py-20 text-center bg-[#0A0A0A]">
        <button
          onClick={onBookDemo}
          className="w-[280px] h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors text-[16px]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Join GramHour Global →
        </button>
      </section>

      {/* Footer */}
      <footer className="px-20 py-20 bg-[#000000] border-t border-[rgba(196,148,58,0.2)]">
        <div className="max-w-[1280px] mx-auto">
          {/* Top Row - Logo and Description */}
          <div className="mb-12 flex flex-col items-center text-center">
            <img
              src="/src/imports/watermark_PNG.png"
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
                <button
                  onClick={onClose}
                  className="text-[rgba(255,250,240,0.8)] text-[16px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1 text-left"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Home
                </button>
                <button
                  onClick={onClose}
                  className="text-[rgba(255,250,240,0.8)] text-[16px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1 text-left"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Our Courses
                </button>
                <button
                  onClick={onClose}
                  className="text-[rgba(255,250,240,0.8)] text-[16px] hover:text-[#C4943A] transition-all duration-300 hover:translate-x-1 text-left"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Why Choose Us
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
  );
}
