import { Target, Users, Globe, Lightbulb, Flame, X } from 'lucide-react';

interface AboutPageProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export default function AboutPage({ onClose, onBookDemo }: AboutPageProps) {
  return (
    <div className="w-[90vw] max-w-[1000px] min-h-screen bg-[#000000] relative overflow-y-auto">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[rgba(196,148,58,0.2)] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/imports/watermark_PNG.png"
              alt="GramHour Global"
              className="h-11"
              style={{ mixBlendMode: 'multiply', opacity: 1 }}
            />
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[rgba(196,148,58,0.1)] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#C4943A]" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white text-[36px] font-bold">About </span>
          <span className="text-[#C4943A] text-[36px] font-bold">GramHour Global</span>
        </h1>
        <p
          className="text-[#C4943A] text-[16px] italic mb-8"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          We Exist to Transform Lives Through Communication
        </p>

        {/* Body Text */}
        <div className="max-w-[600px] mx-auto">
          <p
            className="text-[#FFFAF0] text-[15px] leading-relaxed mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            GramHour Global was built on one belief — that the right words, spoken with confidence, can open any door in the world. We are a premium training institute offering IELTS coaching, Spoken English, Personality Development, Soft Skills, Sales Communication, Interview Preparation, and Communication Skills training.
          </p>
          <p
            className="text-[#FFFAF0] text-[15px] leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Our students come from all walks of life — fresh graduates, working professionals, entrepreneurs, and dreamers. What unites them is a desire to grow, communicate better, and achieve more.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 py-12 bg-[#0A0A0A]">
        <div
          className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6"
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center">
              <Flame className="w-7 h-7 text-[#C4943A]" />
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-white text-[22px] font-bold text-center mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Mission
          </h2>

          {/* Body */}
          <p
            className="text-[#FFFAF0] text-[15px] text-center leading-relaxed max-w-[500px] mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            To empower every student with the communication skills, confidence, and clarity to succeed in any global environment.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-6 py-12 bg-[#000000]">
        {/* Section Heading */}
        <h2 className="mb-10 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white text-[28px] font-bold">Our </span>
          <span className="text-[#C4943A] text-[28px] font-bold">Values</span>
        </h2>

        {/* Value Blocks */}
        <div className="flex flex-col gap-6">
          {/* Block 1 - Excellence First */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1A0F00] rounded-full flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[18px] font-bold mb-2"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Excellence First
            </h3>
            <p
              className="text-[#FFFAF0] text-[14px] max-w-[500px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We never settle for average results.
            </p>
          </div>

          {/* Block 2 - Student Centered */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1A0F00] rounded-full flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[18px] font-bold mb-2"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Student Centered
            </h3>
            <p
              className="text-[#FFFAF0] text-[14px] max-w-[500px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Every decision we make puts our students first.
            </p>
          </div>

          {/* Block 3 - Global Vision */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1A0F00] rounded-full flex items-center justify-center mb-3">
              <Globe className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[18px] font-bold mb-2"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Global Vision
            </h3>
            <p
              className="text-[#FFFAF0] text-[14px] max-w-[500px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We prepare students for international standards.
            </p>
          </div>

          {/* Block 4 - Real Transformation */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#1A0F00] rounded-full flex items-center justify-center mb-3">
              <Lightbulb className="w-6 h-6 text-[#C4943A]" />
            </div>
            <h3
              className="text-white text-[18px] font-bold mb-2"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Real Transformation
            </h3>
            <p
              className="text-[#FFFAF0] text-[14px] max-w-[500px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Skills that work in real life, not just classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-12 bg-[#000000]">
        <button
          onClick={onBookDemo}
          className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Join GramHour Global →
        </button>
      </section>
    </div>
  );
}
