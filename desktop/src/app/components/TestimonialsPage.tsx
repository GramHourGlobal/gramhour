import { Star, X, Instagram, Phone, Mail } from 'lucide-react';

interface TestimonialsPageProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export default function TestimonialsPage({ onClose, onBookDemo }: TestimonialsPageProps) {
  const testimonials = [
    {
      initials: 'PS',
      quote: "Scored 8.5 in IELTS. The mock tests were exactly like the real exam.",
      name: "Priya Sharma",
      course: "IELTS Student"
    },
    {
      initials: 'RM',
      quote: "My spoken English transformed in just 6 weeks. Got promoted at work.",
      name: "Rahul Mehta",
      course: "Spoken English Student"
    },
    {
      initials: 'SP',
      quote: "Best decision I made. Got into my dream university in Canada.",
      name: "Sneha Patel",
      course: "IELTS Student"
    },
    {
      initials: 'AS',
      quote: "The interview prep module helped me crack my visa interview confidently.",
      name: "Arjun Singh",
      course: "Interview Prep Student"
    },
    {
      initials: 'MN',
      quote: "Flexible batches and personal attention. Worth every penny.",
      name: "Meera Nair",
      course: "Personality Development Student"
    }
  ];

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

      {/* Header Section */}
      <section className="px-20 py-24 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-[#FFFAF0] text-[48px] font-bold">Student </span>
            <span className="text-[#C4A35A] text-[48px] font-bold">Success Stories</span>
          </h1>
          <p
            className="text-[#FFFAF0] text-[17px]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Real transformations from real students.
          </p>
        </div>
      </section>

      {/* Testimonial Cards - 2 Column Grid */}
      <section className="px-20 pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-8">
          {/* Left Column - Cards 1, 3, 5 */}
          <div className="flex flex-col gap-8">
            {[0, 2, 4].map((index) => (
              <div
                key={index}
                className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-7 w-[580px]"
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
                  className="text-white text-[17px] mb-7 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  "{testimonials[index].quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C4943A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-white font-bold text-[15px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[index].initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-white font-bold text-[17px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[index].name}
                    </p>
                    <p
                      className="text-[#FFFAF0] text-[15px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[index].course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Cards 2, 4 */}
          <div className="flex flex-col gap-8">
            {[1, 3].map((index) => (
              <div
                key={index}
                className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-7 w-[580px]"
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
                  className="text-white text-[17px] mb-7 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  "{testimonials[index].quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C4943A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-white font-bold text-[15px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[index].initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-white font-bold text-[17px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[index].name}
                    </p>
                    <p
                      className="text-[#FFFAF0] text-[15px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {testimonials[index].course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-20 py-20 text-center">
        <button
          onClick={onBookDemo}
          className="w-[280px] h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors text-[16px]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Join These Students — Book Demo →
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
