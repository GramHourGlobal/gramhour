import { useState } from 'react';
import { X } from 'lucide-react';

interface BookingPageProps {
  onClose: () => void;
}

export default function BookingPage({ onClose }: BookingPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    batchTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const whatsappMessage = `Hi GramHour Global! I would like to book a free demo. My details are as follows:%0AName: ${encodeURIComponent(formData.fullName)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACourse: ${encodeURIComponent(formData.course)}%0ABatch Time: ${encodeURIComponent(formData.batchTime)}`;
    const whatsappURL = `https://wa.me/917904383043?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const emailBody = `Hi GramHour Global,%0A%0AI would like to book a free demo.%0A%0AName: ${encodeURIComponent(formData.fullName)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACourse Interest: ${encodeURIComponent(formData.course)}%0APreferred Batch: ${encodeURIComponent(formData.batchTime)}%0A%0APlease contact me at your earliest convenience.`;
    const mailtoURL = `mailto:gramhourglobal@gmail.com?subject=Free Demo Booking - GramHour Global&body=${emailBody}`;

    window.location.href = mailtoURL;
  };

  return (
    <div className="w-[90vw] max-w-[1000px] min-h-screen bg-[#0A0A0A] relative overflow-y-auto">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[rgba(196,148,58,0.2)] px-6 py-4">
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

      {/* Content */}
      <div className="px-6 py-12">
        {!submitted ? (
          <>
            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="text-white text-[36px] font-bold">Book Your </span>
                <span className="text-[#C4943A] text-[36px] font-bold">Free Demo</span>
              </h1>
              <p
                className="text-[#FFFAF0] text-[15px] max-w-[600px] mx-auto"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Fill in your details and we'll contact you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-[30%]">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white placeholder-[#CCBF9E] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            required
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white placeholder-[#CCBF9E] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            required
          />

          {/* Email Address */}
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white placeholder-[#CCBF9E] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            required
          />

          {/* Select Course */}
          <select
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white focus:outline-none focus:border-[#C4943A] transition-colors appearance-none cursor-pointer"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23E87722' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '20px'
            }}
            required
          >
            <option value="" disabled style={{ color: '#CCBF9E' }}>
              Select Course
            </option>
            <option value="ielts">IELTS Training</option>
            <option value="spoken-english">Spoken English</option>
            <option value="soft-skill">Soft Skill Development</option>
            <option value="sales">Sales Communication</option>
            <option value="interview">Interview Preparation</option>
            <option value="communication">Communication Skills</option>
            <option value="personality">Personality Development</option>
            <option value="multiple">Multiple Courses (I want a bundle)</option>
          </select>

          {/* Preferred Batch Time */}
          <select
            value={formData.batchTime}
            onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white focus:outline-none focus:border-[#C4943A] transition-colors appearance-none cursor-pointer"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23E87722' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '20px'
            }}
            required
          >
            <option value="" disabled style={{ color: '#CCBF9E' }}>
              Preferred Batch Time
            </option>
            <option value="morning">Morning (7AM - 10AM)</option>
            <option value="afternoon">Afternoon (12PM - 3PM)</option>
            <option value="evening">Evening (5PM - 8PM)</option>
            <option value="weekend">Weekend Only</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors mt-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Confirm My Free Demo →
          </button>

          {/* Email Alternative Button */}
          <button
            type="button"
            onClick={handleEmailSubmit}
            className="text-[#C4943A] text-[14px] text-center hover:underline"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Or email us instead →
          </button>

          {/* Privacy Notice */}
          <p
            className="text-[rgba(255,250,240,0.6)] text-sm text-center mt-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            🔒 Your information is 100% private. No spam ever.
          </p>
        </form>
          </>
        ) : (
          /* Success Message */
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-[#111111] border border-[#C4943A] rounded-2xl p-10 text-center max-w-[600px]">
              {/* Checkmark */}
              <div className="w-[60px] h-[60px] rounded-full bg-[#C4943A] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0A0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Heading */}
              <h2
                className="text-[#FFFAF0] text-[28px] font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                You're All Set!
              </h2>

              {/* Body */}
              <p
                className="text-[#FFFAF0] text-[15px] mb-6 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Thank you for booking your free demo with GramHour Global. We will contact you on WhatsApp or email within 24 hours.
              </p>

              {/* Contact Info */}
              <p
                className="text-[#C4943A] text-[16px] font-semibold mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                +91 7904383043
              </p>
              <p
                className="text-[#C4943A] text-[16px] font-semibold mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                gramhourglobal@gmail.com
              </p>

              {/* Footer Message */}
              <p
                className="text-[rgba(255,250,240,0.7)] text-[14px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                We look forward to speaking with you!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
