import { X } from 'lucide-react';

interface BookingPageProps {
  onClose: () => void;
}

export default function BookingPage({ onClose }: BookingPageProps) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('name')
      ?.value || '';
    const phone = document.getElementById('phone')
      ?.value || '';
    const email = document.getElementById('email')
      ?.value || '';
    const course = document.getElementById('course')
      ?.value || '';
    const batch = document.getElementById('batch')
      ?.value || '';

    // Validate - make sure name and phone are filled
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // BUILD WHATSAPP MESSAGE
    const whatsappMessage = 
      `Hi GramHour Global! I'd like to book a free demo.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Course: ${encodeURIComponent(course)}%0A` +
      `Batch: ${encodeURIComponent(batch)}`;

    const whatsappURL = 
      `https://wa.me/917904383043?text=${whatsappMessage}`;

    // BUILD EMAIL
    const emailSubject = 
      `Free Demo Booking - ${name}`;
    const emailBody = 
      `Hi GramHour Global,%0A%0A` +
      `I would like to book a free demo.%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Course Interest: ${course}%0A` +
      `Preferred Batch: ${batch}%0A%0A` +
      `Please contact me at your earliest convenience.`;

    const mailURL = 
      `mailto:gramhourglobal@gmail.com` +
      `?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${emailBody}`;

    // OPEN WHATSAPP in new tab
    window.open(whatsappURL, '_blank');

    // OPEN EMAIL after 1 second delay
    setTimeout(() => {
      window.location.href = mailURL;
    }, 1000);

    // SHOW SUCCESS MESSAGE
    setTimeout(() => {
      document.getElementById('demo-form')
        .innerHTML = `
        <div style="text-align:center; padding:40px;">
          <div style="font-size:60px">✅</div>
          <h2 style="color:#C4943A; font-family:'Playfair Display'">
            You're All Set!
          </h2>
          <p style="color:#FFFAF0">
            We've received your request on both 
            WhatsApp and Email. We will contact 
            you within 24 hours.
          </p>
          <p style="color:#C4943A">
            +91 7904383043
          </p>
          <p style="color:#C4943A">
            gramhourglobal@gmail.com
          </p>
        </div>
      `;
    }, 1500);
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
        <form id="demo-form" className="flex flex-col gap-5 mx-[30%]">
          {/* Full Name */}
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white placeholder-[#CCBF9E] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            required
          />

          {/* Phone Number */}
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white placeholder-[#CCBF9E] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            required
          />

          {/* Email Address */}
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            className="w-full h-14 bg-[#1A1A1A] border border-[#C4943A] rounded-xl px-4 text-white placeholder-[#CCBF9E] focus:outline-none focus:border-[#C4943A] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            required
          />

          {/* Select Course */}
          <select
            id="course"
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
            id="batch"
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
            onClick={handleSubmit}
            className="w-full h-14 bg-[#C4943A] text-[#0A0A0A] font-bold rounded-full hover:bg-[#E0B050] transition-colors mt-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Confirm My Free Demo →
          </button>

          {/* Privacy Notice */}
          <p
            className="text-[rgba(255,250,240,0.6)] text-sm text-center mt-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            🔒 Your information is 100% private. No spam ever.
          </p>
        </form>
      </div>
    </div>
  );
}
