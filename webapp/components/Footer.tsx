import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">CONTACT INFO</h3>
            <div className="space-y-4">
              <a href="tel:+17473038403" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="h-5 w-5" />
                <span>(747) 303-8403</span>
              </a>
              <a href="mailto:tgabuildersinc@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span>tgabuildersinc@gmail.com</span>
              </a>
              <a href="https://maps.google.com/?q=14120 Pierce St, Arleta, CA 91331" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-cyan-400 transition-colors duration-300 group">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>14120 Pierce St, Arleta, CA 91331</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">NAVIGATE</h3>
            <nav className="space-y-4">
              <Link href="/pages/Home" className="block hover:text-cyan-400 transition-colors duration-300">Home</Link>
              <Link href="/pages/about-us" className="block hover:text-cyan-400 transition-colors duration-300">About Us</Link>
              <Link href="/pages/services" className="block hover:text-cyan-400 transition-colors duration-300">Services</Link>
              <Link href="/pages/reviews" className="block hover:text-cyan-400 transition-colors duration-300">Reviews</Link>
              <Link href="/pages/gallery" className="block hover:text-cyan-400 transition-colors duration-300">Gallery</Link>
              <Link href="/pages/contact-us" className="block hover:text-cyan-400 transition-colors duration-300">Contact</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">RESOURCES</h3>
            <nav className="space-y-4">
              <Link href="/pages/faq" className="block hover:text-cyan-400 transition-colors duration-300">FAQ</Link>
              <Link href="/pages/terms" className="block hover:text-cyan-400 transition-colors duration-300">Terms and Condition</Link>
              <Link href="/pages/privacy" className="block hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">FOLLOW US</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-white text-lg font-semibold mb-6">OUR GALLERY</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <Link 
                key={i} 
                href="/pages/gallery" 
                className="group relative aspect-square bg-gray-800 rounded-lg overflow-hidden hover:ring-2 ring-cyan-400 transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-gray-600 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear}. TGA Builders Inc. All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/pages/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms & Condition
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/pages/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 