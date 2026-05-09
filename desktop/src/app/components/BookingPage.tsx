import { useState } from 'react';
import { X, CheckCircle2, Instagram, Phone, Mail } from 'lucide-react';

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

  const getCourseLabel = (value: string) => {
    const courseMap: { [key: string]: string } = {
      'ielts': 'IELTS Training',
      'spoken-english': 'Spoken English',
      'soft-skill': 'Soft Skill Development',
      'sales': 'Sales Communication',
      'interview': 'Interview Preparation',
      'communication': 'Communication Skills',
      'personality': 'Personality Development',
      'multiple': 'Multiple Courses'
    };
    return courseMap[value] || value;
  };

  const getBatchLabel = (value: string) => {
    const batchMap: { [key: string]: string } = {
      'morning': 'Morning 7AM-10AM',
      'afternoon': 'Afternoon 12PM-3PM',
      'evening': 'Evening 5PM-8PM',
      'weekend': 'Weekend Only'
    };
    return batchMap[value] || value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const courseLabel = getCourseLabel(formData.course);
    const batchLabel = getBatchLabel(formData.batchTime);

    // Create WhatsApp URL
    const whatsappMessage = `Hi GramHour Global! I would like to book a free demo. My details are as follows:%0AName: ${encodeURIComponent(formData.fullName)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACourse: ${encodeURIComponent(courseLabel)}%0ABatch: ${encodeURIComponent(batchLabel)}`;
    const whatsappURL = `https://wa.me/917904383043?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Show success message
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const courseLabel = getCourseLabel(formData.course);
    const batchLabel = getBatchLabel(formData.batchTime);

    const emailSubject = 'Free Demo Booking - GramHour Global';
    const emailBody = `Hi GramHour Global,%0A%0AI would like to book a free demo.%0A%0AName: ${encodeURIComponent(formData.fullName)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACourse Interest: ${encodeURIComponent(courseLabel)}%0APreferred Batch: ${encodeURIComponent(batchLabel)}%0A%0APlease contact me at your earliest convenience.`;
    const mailtoURL = `mailto:gramhourglobal@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoURL;
    setSubmitted(true);
  };

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

      {/* Two Column Layout */}
      <section className="px-20 py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[500px_480px] gap-20 justify-center">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Heading */}
            <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#FFFAF0] text-[48px] font-bold block">Book Your </span>
              <span className="text-[#C4943A] text-[48px] font-bold">Free Demo</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-[#FFFAF0] text-[16px] mb-8 leading-[1.6]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Fill in your details and we'll contact you within 24 hours.
            </p>

            {/* Trust Points */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C4943A] flex-shrink-0" />
                <span
                  className="text-[#FFFAF0] text-[16px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Free — no payment needed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C4943A] flex-shrink-0" />
                <span
                  className="text-[#FFFAF0] text-[16px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  No obligation whatsoever
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C4943A] flex-shrink-0" />
                <span
                  className="text-[#FFFAF0] text-[16px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Response within 24 hours guaranteed
                </span>
              </div>
            </div>

            {/* Logo */}
            <img
              src="/src/imports/watermark_PNG.png"
              alt="GramHour Global"
              className="w-[200px]"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Right Column - Form Card or Success Message */}
          <div className="bg-[#111111] border border-[#C4943A] rounded-[20px] p-10">
            {submitted ? (
              /* Success Message */
              <div className="flex flex-col items-center text-center">
                {/* Large Gold Checkmark */}
                <div className="w-[60px] h-[60px] rounded-full bg-[#C4A35A] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#0A0A0A]" />
                </div>

                {/* Heading */}
                <h2
                  className="text-[#FFFAF0] text-[28px] font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  You're All Set!
                </h2>

                {/* Body Text */}
                <p
                  className="text-[#FFFAF0] text-[15px] leading-[1.7] mb-6"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Thank you for booking your free demo with GramHour Global. We will contact you on WhatsApp or email within 24 hours.
                </p>

                {/* Contact Info */}
                <div className="flex flex-col gap-2 mb-6">
                  <p
                    className="text-[#C4A35A] text-[16px] font-semibold"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    +91 7904383043
                  </p>
                  <p
                    className="text-[#C4A35A] text-[16px] font-semibold"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    gramhourglobal@gmail.com
                  </p>
                </div>

                {/* Footer Text */}
                <p
                  className="text-[#FFFAF0] text-[14px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  We look forward to speaking with you!
                </p>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="mt-8 w-[280px] h-12 bg-[#C4A35A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors text-[15px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Back to Home
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-[400px] h-[52px] bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-5 text-white placeholder-[#FFFAF0] focus:outline-none focus:border-[#E0B050] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-[400px] h-[52px] bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-5 text-white placeholder-[#FFFAF0] focus:outline-none focus:border-[#E0B050] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                required
              />

              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-[400px] h-[52px] bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-5 text-white placeholder-[#FFFAF0] focus:outline-none focus:border-[#E0B050] transition-colors text-[15px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                required
              />

              {/* Select Course */}
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-[400px] h-[52px] bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-5 text-white focus:outline-none focus:border-[#E0B050] transition-colors appearance-none cursor-pointer text-[15px]"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23C4943A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  backgroundSize: '20px'
                }}
                required
              >
                <option value="" disabled style={{ color: '#FFFAF0' }}>
                  Select Course
                </option>
                <option value="ielts">IELTS Training</option>
                <option value="spoken-english">Spoken English</option>
                <option value="soft-skill">Soft Skill Development</option>
                <option value="sales">Sales Communication</option>
                <option value="interview">Interview Preparation</option>
                <option value="communication">Communication Skills</option>
                <option value="personality">Personality Development</option>
                <option value="multiple">Multiple Courses</option>
              </select>

              {/* Preferred Batch Time */}
              <select
                value={formData.batchTime}
                onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                className="w-[400px] h-[52px] bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-5 text-white focus:outline-none focus:border-[#E0B050] transition-colors appearance-none cursor-pointer text-[15px]"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23C4943A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  backgroundSize: '20px'
                }}
                required
              >
                <option value="" disabled style={{ color: '#FFFAF0' }}>
                  Preferred Batch Time
                </option>
                <option value="morning">Morning 7AM-10AM</option>
                <option value="afternoon">Afternoon 12PM-3PM</option>
                <option value="evening">Evening 5PM-8PM</option>
                <option value="weekend">Weekend Only</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[400px] h-14 bg-[#C4A35A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors mt-3 text-[16px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Confirm My Free Demo →
              </button>

              {/* Privacy Notice */}
              <p
                className="text-[rgba(255,250,240,0.6)] text-[13px] text-center mt-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                🔒 Your information is 100% private. No spam ever.
              </p>

              {/* Email Option */}
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="text-[#C4A35A] text-[14px] hover:underline"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Or email us instead →
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
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
