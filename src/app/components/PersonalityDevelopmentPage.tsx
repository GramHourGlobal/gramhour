import { CircleCheckBig } from 'lucide-react';

interface PersonalityDevelopmentPageProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export default function PersonalityDevelopmentPage({ onClose, onBookDemo }: PersonalityDevelopmentPageProps) {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] relative overflow-y-auto">
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
        <h1 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="block text-white text-[44px] font-bold leading-[1.1]">Personality</span>
          <span className="block text-[#C4943A] text-[44px] font-bold leading-[1.1]">Development</span>
        </h1>
        <p
          className="text-[#C4943A] text-[16px] italic mb-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Build a Stronger Personality That Stands Out.
        </p>
        <p
          className="text-[#FFFAF0] text-[15px] max-w-[600px] mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          It's not about changing who you are. It's about becoming the best, most powerful version of yourself.
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
              Building unshakeable self confidence
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Developing a growth and winner mindset
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Powerful body language and presence
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Personal grooming and professional image
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Social skills and likability
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Handling pressure and staying composed
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Goal setting and self discipline
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Personal branding and how others see you
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
              className="text-[#C4943A] text-[28px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              8 Weeks
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Full Transformation Program
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[28px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              100%
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Students Report Higher Confidence
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[28px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Life-Long
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Skills That Never Expire
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
          Transform My Personality →
        </button>
      </section>
    </div>
  );
}
