import { Instagram, Phone, Mail, X } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onClose: () => void;
}

export default function ContactPage({ onClose }: ContactPageProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, phone, message });
  };

  return (
    <div className="w-[375px] min-h-screen bg-[#000000] relative overflow-y-auto">
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
          <span className="text-white text-[36px] font-bold">Contact </span>
          <span className="text-[#C4943A] text-[36px] font-bold">Us</span>
        </h1>
        <p
          className="text-[#FFFAF0] text-[15px] max-w-[300px] mx-auto"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          We're here to help. Reach out and we'll respond within a few hours.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pb-12">
        <div className="flex flex-col gap-4">
          {/* Card 1 - Instagram */}
          <div className="bg-[#111111] border border-[rgba(196,148,58,0.35)] rounded-2xl p-6">
            {/* Top row: Icon + Handle */}
            <div className="flex items-center gap-3 mb-3">
              <Instagram className="w-6 h-6 text-[#C4943A]" />
              <h3
                className="text-white text-[18px] font-bold"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                @gramhourglobal
              </h3>
            </div>

            {/* Body text */}
            <p
              className="text-[rgba(255,250,240,0.7)] text-[14px] mb-6 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Follow us for student success stories, tips, and daily updates.
            </p>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-4">
              <div className="bg-white rounded-xl p-2 mb-2">
                <img
                  src="/src/imports/Insta_QR.jpeg"
                  alt="Instagram QR Code"
                  className="w-[140px] h-[140px]"
                />
              </div>
              <p
                className="text-[#FFFAF0] text-[13px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Scan to follow us
              </p>
            </div>

            {/* Link */}
            <button
              onClick={() => window.open('https://www.instagram.com/gramhourglobal?igsh=MTR2ZTZlNHB2MXU1ag==', '_blank')}
              className="text-[#C4943A] text-[14px] font-semibold hover:text-[#E0B050] transition-colors w-full text-center"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Visit Instagram →
            </button>
          </div>

          {/* Card 2 - Phone */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1A0F00] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#C4943A]" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-white text-[18px] font-bold mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Call Us
                </h3>
                <p
                  className="text-[#FFFAF0] text-[14px] mb-3 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  +91 7904383043
                </p>
                <a
                  href="tel:+917904383043"
                  className="text-[#C4943A] text-[14px] font-semibold hover:text-[#C4943A] transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Call Now →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 - Email */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1A0F00] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#C4943A]" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-white text-[18px] font-bold mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Email Us
                </h3>
                <p
                  className="text-[#FFFAF0] text-[14px] mb-3 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  gramhourglobal@gmail.com
                </p>
                <a
                  href="mailto:gramhourglobal@gmail.com"
                  className="text-[#C4943A] text-[14px] font-semibold hover:text-[#C4943A] transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Send an Email →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Form */}
      <section className="px-6 py-12 bg-[#0A0A0A]">
        <h2 className="mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white text-[24px] font-bold">Quick </span>
          <span className="text-[#C4943A] text-[24px] font-bold">Enquiry</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[52px] bg-[#0D0D0D] border border-[rgba(196,148,58,0.3)] rounded-xl px-5 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          />

          {/* Phone Field */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-[52px] bg-[#0D0D0D] border border-[rgba(196,148,58,0.3)] rounded-xl px-5 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          />

          {/* Message Field */}
          <textarea
            placeholder="Your Question or Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-[120px] bg-[#0D0D0D] border border-[rgba(196,148,58,0.3)] rounded-xl px-5 py-4 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#C4943A] transition-colors resize-none"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Send My Enquiry →
          </button>
        </form>

        {/* Response Time Note */}
        <p
          className="text-[rgba(255,250,240,0.6)] text-[13px] text-center mt-6"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          We typically respond within 2–4 hours on business days.
        </p>
      </section>
    </div>
  );
}
