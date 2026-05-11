import { CircleCheckBig } from 'lucide-react';

interface CommunicationSkillsPageProps {
  onClose: () => void;
  onBookDemo: () => void;
}

export default function CommunicationSkillsPage({ onClose, onBookDemo }: CommunicationSkillsPageProps) {
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
          <span className="block text-white text-[44px] font-bold leading-[1.1]">Communication</span>
          <span className="block text-[#C4943A] text-[44px] font-bold leading-[1.1]">Skills</span>
        </h1>
        <p
          className="text-[#C4943A] text-[16px] italic mb-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Express Better. Connect Deeper.
        </p>
        <p
          className="text-[#FFFAF0] text-[15px] max-w-[600px] mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Everything you say — and how you say it — shapes how the world sees you. Master it.
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
              Verbal clarity and word choice
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Voice modulation and tone control
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[18px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Non-verbal communication and gestures
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Active listening and empathy
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Assertive communication techniques
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Written communication and emails
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Presenting ideas with impact
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckBig className="w-6 h-6 text-[#C4943A] flex-shrink-0 mt-0.5" />
            <span className="text-white text-[15px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Handling difficult conversations
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
              6 Weeks
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Program Duration
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[28px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              360°
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Communication Transformation
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-4 text-center">
            <p
              className="text-[#C4943A] text-[28px] font-bold mb-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              96%
            </p>
            <p
              className="text-[rgba(255,250,240,0.6)] text-[12px] leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Students Feel More Impactful
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
          Communicate With Impact →
        </button>
      </section>
    </div>
  );
}
