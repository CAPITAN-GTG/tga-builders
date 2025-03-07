"use client";

import { Disclosure, Transition } from '@headlessui/react';
import { 
  Menu as MenuIcon, 
  X,
  Home,
  Users,
  Wrench,
  Star,
  Image as ImageIcon,
  PhoneCall,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC } from 'react';

type NavigationItem = {
  name: string;
  shortName?: string; // Optional shorter name for medium screens
  href: string;
  icon: React.ElementType;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', shortName: 'About', href: '/pages/about-us', icon: Users },
  { name: 'Services', href: '/pages/services', icon: Wrench },
  { name: 'Reviews', href: '/pages/reviews', icon: Star },
  { name: 'Gallery', href: '/pages/gallery', icon: ImageIcon },
  { name: 'Contact Us', shortName: 'Contact', href: '/pages/contact-us', icon: PhoneCall },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  const isCurrentPath = (path: string): boolean => pathname === path;

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-cyan-700 to-cyan-600 shadow-lg sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="block">
                  <img 
                    src="/logo.png" 
                    alt="TGA Builders Logo" 
                    className="h-16 w-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out" 
                  />
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-3">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          flex items-center gap-1.5 md:gap-2 px-2 md:px-3 lg:px-4 py-2.5 
                          rounded-md text-xs md:text-sm font-medium whitespace-nowrap
                          ${isCurrentPath(item.href)
                            ? 'bg-cyan-900 text-white shadow-inner'
                            : 'text-cyan-50 hover:bg-cyan-800/60'
                          }
                          transition-all duration-200 ease-in-out hover:scale-105
                          group relative
                        `}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0 group-hover:animate-pulse" />
                        <span className="tracking-wide">
                          {/* Show short name on medium screens, full name on large screens */}
                          <span className="hidden md:block lg:hidden">
                            {item.shortName || item.name}
                          </span>
                          <span className="block md:hidden lg:block">
                            {item.name}
                          </span>
                        </span>
                        {isCurrentPath(item.href) && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-cyan-50 hover:bg-cyan-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-50 transition-transform active:scale-95">
                  <span className="sr-only">
                    {open ? 'Close main menu' : 'Open main menu'}
                  </span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={`
                        flex items-center gap-3 w-full rounded-md px-4 py-3 text-base font-medium
                        ${isCurrentPath(item.href)
                          ? 'bg-cyan-900 text-white'
                          : 'text-cyan-50 hover:bg-cyan-800/60'
                        }
                        transition-all duration-200 ease-in-out active:scale-95
                      `}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
