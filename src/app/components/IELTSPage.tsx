import { CircleCheckBig } from 'lucide-react';

interface IELTSPageProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export default function IELTSPage({ onClose, onBookDemo }: IELTSPageProps) {
  return (
    <div className="w-full min-h-screen bg-[#000000] relative overflow-y-auto">
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
          {/* Back Button */}
          <button
            onClick={onClose}
            className="text-[#C4943A] font-semibold hover:text-[#E0B050] transition-colors"
            aria-label="Back"
          >
            ← Back to Courses
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="block text-white text-[44px] font-bold leading-[1.1]">IELTS</span>
          <span className="block text-[#C4943A] text-[44px] font-bold leading-[1.1]">Mastery</span>
        </h1>
        <p
          className="text-[#FFFAF0] text-[15px] max-w-[600px] mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Achieve Band 7+ with structured coaching, mock tests, and expert feedback.
        </p>
        <button
          onClick={onBookDemo}
          className="w-full max-w-[400px] h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Book Free Demo →
        </button>
      </section>

      {/* What You'll Learn Section */}
      <section className="px-6 py-12 bg-[#0A0A0A]">
        <h2 className="mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white text-[34px] font-bold">What You'll </span>
          <span className="text-[#C4943A] text-[34px] font-bold">Learn</span>
        </h2>

        <div className="flex flex-col gap-5 mx-[30%]">
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Listening strategies for Band 7+
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Reading speed and comprehension
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Writing Task 1 and Task 2 mastery
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Speaking fluency and pronunciation
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              10+ full mock tests with evaluation
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Personalized feedback every session
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Flexible morning and evening batches
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Study material and resources included
            </span>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-12 bg-[#000000]">
        <div className="grid grid-cols-3 gap-3">
          {/* Stat Box 1 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[32px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              8.5
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Highest Band Scored
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[32px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              94%
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Students Hit Target Band
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[32px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              6
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Weeks Average Duration
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
          Start My IELTS Journey →
        </button>
      </section>
    </div>
  );
}
