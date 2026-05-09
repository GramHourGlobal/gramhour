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
    <div className="w-[1440px] min-h-screen bg-[#000000] relative overflow-y-auto">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[rgba(196,148,58,0.2)] px-20 py-5">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/imports/watermark_PNG.png"
              alt="GramHour Global"
              className="h-12"
              style={{}}
            />
          </div>
          {/* Close Button */}
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
      <section className="px-20 py-24 text-center">
        <div className="max-w-[900px] mx-auto">
          <h1 className="mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-white text-[44px] font-bold">Contact </span>
            <span className="text-[#C4943A] text-[44px] font-bold">Us</span>
          </h1>
          <p
            className="text-[#FFFAF0] text-[17px]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We're here to help. Reach out and we'll respond within a few hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-20 pb-16">
        <div className="max-w-[900px] mx-auto flex flex-col gap-5">
          {/* Card 1 - Instagram */}
          <a
            href="https://www.instagram.com/gramhourglobal?igsh=MTR2ZTZlNHB2MXU1ag=="
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#111111] border border-[rgba(196,148,58,0.35)] rounded-2xl p-6 hover:border-[rgba(196,148,58,0.5)] transition-colors cursor-pointer"
          >
            {/* Top Row - Icon + Handle */}
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-7 h-7 text-[#C4943A]" />
              <h3
                className="text-white text-[20px] font-bold"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                @gramhourglobal
              </h3>
            </div>

            {/* Description */}
            <p
              className="text-[rgba(255,250,240,0.7)] text-[15px] mb-6 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Follow us for student success stories, tips, and daily updates.
            </p>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-white rounded-xl p-2 mb-2.5">
                <img
                  src="/src/imports/Insta_QR.jpeg"
                  alt="Instagram QR Code"
                  className="w-[140px] h-[140px] object-cover"
                />
              </div>
              <p
                className="text-[rgba(255,250,240,0.6)] text-[13px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Scan to follow us
              </p>
            </div>

            {/* Link */}
            <div className="text-center">
              <span
                className="text-[#C4943A] text-[15px] font-semibold"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Visit Instagram →
              </span>
            </div>
          </a>

          {/* Card 2 - Phone */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-[#C4943A]" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-white text-[20px] font-bold mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Call Us
                </h3>
                <p
                  className="text-[#FFFAF0] text-[15px] mb-3 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  +91 7904383043
                </p>
                <a
                  href="tel:+917904383043"
                  className="text-[#C4943A] text-[15px] font-semibold hover:text-[#E0B050] transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Call Now →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 - Email */}
          <div className="bg-[#0F0A00] border border-[rgba(196,148,58,0.3)] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#1A0F00] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-[#C4943A]" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-white text-[20px] font-bold mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Email Us
                </h3>
                <p
                  className="text-[#FFFAF0] text-[15px] mb-3 leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  gramhourglobal@gmail.com
                </p>
                <a
                  href="mailto:gramhourglobal@gmail.com"
                  className="text-[#C4943A] text-[15px] font-semibold hover:text-[#E0B050] transition-colors"
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
      <section className="px-20 py-20 bg-[#0A0A0A]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="mb-10 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-white text-[32px] font-bold">Quick </span>
            <span className="text-[#C4943A] text-[32px] font-bold">Enquiry</span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[56px] bg-[#0D0D0D] border border-[rgba(196,148,58,0.3)] rounded-xl px-6 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#C4943A] transition-colors text-[16px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            />

            {/* Phone Field */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-[56px] bg-[#0D0D0D] border border-[rgba(196,148,58,0.3)] rounded-xl px-6 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#C4943A] transition-colors text-[16px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            />

            {/* Message Field */}
            <textarea
              placeholder="Your Question or Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-[140px] bg-[#0D0D0D] border border-[rgba(196,148,58,0.3)] rounded-xl px-6 py-5 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#C4943A] transition-colors resize-none text-[16px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-16 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors text-[17px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Send My Enquiry →
            </button>
          </form>

          {/* Response Time Note */}
          <p
            className="text-[rgba(255,250,240,0.6)] text-[14px] text-center mt-7"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We typically respond within 2–4 hours on business days.
          </p>
        </div>
      </section>
    </div>
  );
}
