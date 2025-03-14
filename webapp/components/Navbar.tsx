"use client";

import { Disclosure, Transition, Menu } from '@headlessui/react';
import { 
  Menu as MenuIcon, 
  X,
  Home,
  Users,
  Wrench,
  Star,
  Image as ImageIcon,
  PhoneCall,
  ChevronDown,
  Home as HomeIcon,
  Utensils,
  Droplets,
  Box,
  Paintbrush2,
  Hammer,
  PaintBucket,
  Building,
  Building2,
  HardDrive,
  AlertTriangle,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC } from 'react';

const serviceOptions = [
  // Home & Interior Services
  { name: 'Home Improve Services', href: '/pages/services/home-improve', icon: HomeIcon, category: 'interior' },
  { name: 'Interior Services', href: '/pages/services/interior', icon: PaintBucket, category: 'interior' },
  { name: 'Drywall Repairs', href: '/pages/services/drywall', icon: Paintbrush2, category: 'interior' },
  
  // Kitchen & Bathroom
  { name: 'Kitchen Repairs', href: '/pages/services/kitchen-repairs', icon: Utensils, category: 'kitchen' },
  { name: 'Kitchen Cabinets', href: '/pages/services/kitchen-cabinets', icon: Box, category: 'kitchen' },
  { name: 'Bathroom', href: '/pages/services/bathroom', icon: Droplets, category: 'bathroom' },
  { name: 'Bathroom Repairs', href: '/pages/services/bathroom-repairs', icon: Droplets, category: 'bathroom' },
  
  // Construction & Exterior
  { name: 'Construction Services', href: '/pages/services/construction', icon: Building2, category: 'construction' },
  { name: 'Exterior Services', href: '/pages/services/exterior', icon: Building, category: 'construction' },
  { name: 'Demolitions', href: '/pages/services/demolitions', icon: Hammer, category: 'construction' },
  
  // Additional Services
  { name: 'Emergency Services', href: '/pages/services/emergency', icon: AlertTriangle, category: 'additional' },
  { name: 'Service Areas', href: '/pages/services/areas', icon: MapPin, category: 'additional' }
];

type NavigationItem = {
  name: string;
  shortName?: string;
  href: string;
  icon: React.ElementType;
  isDropdown?: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', shortName: 'About', href: '/pages/about-us', icon: Users },
  { name: 'Services', href: '#', icon: Wrench, isDropdown: true },
  { name: 'Reviews', href: '/pages/reviews', icon: Star },
  { name: 'Gallery', href: '/pages/gallery', icon: ImageIcon },
  { name: 'Contact Us', shortName: 'Contact', href: '/pages/contact-us', icon: PhoneCall },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  const isCurrentPath = (path: string): boolean => pathname === path;

  const ServicesDropdown = () => (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`
              flex items-center gap-1.5 md:gap-2 px-2 md:px-3 lg:px-4 py-2.5 
              rounded-md text-xs md:text-sm font-medium whitespace-nowrap
              text-white hover:bg-[#0f2b49]/60
              transition-all duration-200 ease-in-out hover:scale-105
              group relative
            `}
          >
            <Wrench className="h-4 w-4 flex-shrink-0 group-hover:animate-pulse" />
            <span className="tracking-wide">
              <span className="hidden md:block lg:hidden">Services</span>
              <span className="block md:hidden lg:block">Services</span>
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </Menu.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* Interior Services */}
              <div className="py-1">
                <div className="px-4 py-1 text-xs font-medium text-gray-500">Home & Interior</div>
                {serviceOptions
                  .filter(option => option.category === 'interior')
                  .map((option) => {
                    const Icon = option.icon;
                    return (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <Link
                            href={option.href}
                            className={`
                              flex items-center gap-2 px-4 py-2 text-sm
                              ${active ? 'bg-gray-50 text-cyan-600' : 'text-gray-700'}
                            `}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            {option.name}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
              </div>

              <div className="border-t border-gray-100" />

              {/* Kitchen & Bathroom */}
              <div className="py-1">
                <div className="px-4 py-1 text-xs font-medium text-gray-500">Kitchen & Bathroom</div>
                {serviceOptions
                  .filter(option => option.category === 'kitchen' || option.category === 'bathroom')
                  .map((option) => {
                    const Icon = option.icon;
                    return (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <Link
                            href={option.href}
                            className={`
                              flex items-center gap-2 px-4 py-2 text-sm
                              ${active ? 'bg-gray-50 text-cyan-600' : 'text-gray-700'}
                            `}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            {option.name}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
              </div>

              <div className="border-t border-gray-100" />

              {/* Construction & Exterior */}
              <div className="py-1">
                <div className="px-4 py-1 text-xs font-medium text-gray-500">Construction & Exterior</div>
                {serviceOptions
                  .filter(option => option.category === 'construction')
                  .map((option) => {
                    const Icon = option.icon;
                    return (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <Link
                            href={option.href}
                            className={`
                              flex items-center gap-2 px-4 py-2 text-sm
                              ${active ? 'bg-gray-50 text-cyan-600' : 'text-gray-700'}
                            `}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            {option.name}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
              </div>

              <div className="border-t border-gray-100" />

              {/* Additional Services */}
              <div className="py-1">
                <div className="px-4 py-1 text-xs font-medium text-gray-500">Additional Services</div>
                {serviceOptions
                  .filter(option => option.category === 'additional')
                  .map((option) => {
                    const Icon = option.icon;
                    return (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <Link
                            href={option.href}
                            className={`
                              flex items-center gap-2 px-4 py-2 text-sm
                              ${active ? 'bg-gray-50 text-cyan-600' : 'text-gray-700'}
                            `}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            {option.name}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );

  return (
    <Disclosure as="nav" className="bg-[#17416E] shadow-lg sticky top-0 z-50">
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
                    className="h-20 w-auto hover:scale-105 transition-transform duration-300 ease-in-out" 
                  />
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-3">
                  {navigation.map((item) => {
                    if (item.isDropdown) {
                      return <ServicesDropdown key={item.name} />;
                    }

                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          flex items-center gap-1.5 md:gap-2 px-2 md:px-3 lg:px-4 py-2.5 
                          rounded-md text-xs md:text-sm font-medium whitespace-nowrap
                          ${isCurrentPath(item.href)
                            ? 'bg-[#0f2b49] text-white shadow-inner'
                            : 'text-white hover:bg-[#0f2b49]/60'
                          }
                          transition-all duration-200 ease-in-out hover:scale-105
                          group relative
                        `}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0 group-hover:animate-pulse" />
                        <span className="tracking-wide">
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#0f2b49]/60 focus:outline-none focus:ring-2 focus:ring-white transition-transform active:scale-95">
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
                  if (item.isDropdown) {
                    return (
                      <div key={item.name} className="py-2">
                        <div className="px-4 text-sm font-medium text-white mb-2">Services</div>
                        <div className="space-y-1">
                          {serviceOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <Disclosure.Button
                                key={option.name}
                                as={Link}
                                href={option.href}
                                className="flex items-center gap-3 w-full rounded-md px-4 py-2 text-sm text-white hover:bg-[#0f2b49]/60"
                              >
                                <Icon className="h-4 w-4 flex-shrink-0" />
                                {option.name}
                              </Disclosure.Button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  const Icon = item.icon;
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={`
                        flex items-center gap-3 w-full rounded-md px-4 py-3 text-base font-medium
                        ${isCurrentPath(item.href)
                          ? 'bg-[#0f2b49] text-white'
                          : 'text-white hover:bg-[#0f2b49]/60'
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