import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.027 1.792-4.699 4.533-4.699 1.312 0 2.686.236 2.686.236v2.97h-1.512c-1.49 0-1.953.934-1.953 1.89v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M7.5 0h9A7.5 7.5 0 0 1 24 7.5v9a7.5 7.5 0 0 1-7.5 7.5h-9A7.5 7.5 0 0 1 0 16.5v-9A7.5 7.5 0 0 1 7.5 0Zm0 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2h-9ZM12 6.2A5.8 5.8 0 1 1 6.2 12 5.8 5.8 0 0 1 12 6.2Zm0 2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2Zm6.3-2.65a1.35 1.35 0 1 1-1.35-1.35 1.35 1.35 0 0 1 1.35 1.35Z" />
  </svg>
);

const linkClass =
  "transition-colors duration-300 hover:text-brand-green-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink font-body text-brand-silver">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Contact info
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+17473038403"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <Phone className="h-5 w-5 text-brand-green" />
                <span>(747) 303-8403</span>
              </a>
              <a
                href="tel:+17027553316"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <Phone className="h-5 w-5 text-brand-green" />
                <span>(702) 755-3316</span>
              </a>
              <a
                href="mailto:tgabuildersinc@gmail.com"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <Mail className="h-5 w-5 text-brand-green" />
                <span>tgabuildersinc@gmail.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=14120 Pierce St, Arleta, CA 91331"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-green" />
                <span className="text-center md:text-left">14120 Pierce St, Arleta, CA 91331</span>
              </a>
              <div className="border-t border-white/10 pt-2 text-center text-sm md:text-left">
                <p>License 1126206</p>
                <p>Classification(s) B General C27 C42</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Navigate
            </h3>
            <nav className="space-y-4">
              <Link href="/" className={`block text-center md:text-left ${linkClass}`}>
                Home
              </Link>
              <Link href="/pages/about-us" className={`block text-center md:text-left ${linkClass}`}>
                About Us
              </Link>
              <Link href="/pages/reviews" className={`block text-center md:text-left ${linkClass}`}>
                Reviews
              </Link>
              <Link href="/pages/gallery" className={`block text-center md:text-left ${linkClass}`}>
                Gallery
              </Link>
              <Link
                href="/pages/contact-us"
                className={`block text-center md:text-left ${linkClass}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Resources
            </h3>
            <nav className="space-y-4">
              <Link href="/pages/terms" className={`block text-center md:text-left ${linkClass}`}>
                Terms of Service
              </Link>
              <Link href="/pages/privacy" className={`block text-center md:text-left ${linkClass}`}>
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-center font-display text-lg font-semibold tracking-wide text-white md:text-left">
              Follow us
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575034021265&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <FacebookIcon className="h-5 w-5 text-brand-green" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/tgabuildersinc?igsh=MTBpa2VhanBwaXg4OQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <InstagramIcon className="h-5 w-5 text-brand-green" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@tgabuildersinc?_t=ZT-8vSEDJDadCQ&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <Image
                  src="/tiktok.webp"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-md object-contain invert"
                />
                <span>TikTok</span>
              </a>
              <Link
                href="/pages/whatsapp"
                className={`flex items-center justify-center gap-3 md:justify-start ${linkClass}`}
              >
                <MessageCircle className="h-5 w-5 text-brand-green" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-brand-steel">
              © {currentYear}. TGA Builders Inc. All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/pages/terms" className={`text-brand-steel ${linkClass}`}>
                Terms of service
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/pages/privacy" className={`text-brand-steel ${linkClass}`}>
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <a
                href="https://grimo-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs text-brand-steel ${linkClass}`}
              >
                Powered by GrimoDev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
