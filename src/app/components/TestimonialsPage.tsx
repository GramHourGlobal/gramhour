import { Star, X } from 'lucide-react';

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

      {/* Header Section */}
      <section className="px-6 py-12 text-center">
        <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white text-[36px] font-bold">Student </span>
          <span className="text-[#C4943A] text-[36px] font-bold">Success Stories</span>
        </h1>
        <p
          className="text-[#FFFAF0] text-[15px] max-w-[600px] mx-auto"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Real results from real students.
        </p>
      </section>

      {/* Testimonial Cards */}
      <section className="px-6 pb-12">
        <div className="flex flex-col gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#C4943A] fill-[#C4943A]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-white text-[16px] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#C4943A] rounded-full flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-white font-bold text-[16px]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-[#FFFAF0] text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-12">
        <button
          onClick={onBookDemo}
          className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Join These Students — Book Demo →
        </button>
      </section>
    </div>
  );
}
