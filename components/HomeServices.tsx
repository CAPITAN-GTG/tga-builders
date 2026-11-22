"use client";

import { useRef, useState } from "react";
import {
  Lightbulb,
  Wrench,
  DoorClosed,
  TreePine,
  Droplet,
  Building2,
  Home,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicePopup from "./ServicePopup";
import { InfiniteMovingServices } from "@/components/ui/infinite-moving-services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
};

const services: Service[] = [
  {
    title: "Residential Construction",
    description: "Remodels, framing, drywall, paint, and water-damage repairs for homes.",
    icon: Home,
    services: [
      "Remodels",
      "Drywall installation",
      "Paint",
      "Water damages",
      "Wall repairs",
      "Framing",
      "Drywall",
    ],
  },
  {
    title: "Commercial Construction",
    description: "Facility upgrades and build-outs that keep spaces open for business.",
    icon: Building2,
    services: [
      "Remodels",
      "Drywall installation",
      "Paint",
      "Water damages",
      "Wall repairs",
      "Framing",
      "Drywall",
      "External paint",
    ],
  },
  {
    title: "Electrical & Lighting",
    description: "Minor electrical, GFCI and fixture replacements done cleanly and safely.",
    icon: Lightbulb,
    services: [
      "Minor Electrical",
      "GFCI replacements",
      "Plug replacements",
      "Light replacements",
      "Light bulbs replacement",
    ],
  },
  {
    title: "General Maintenance",
    description: "Handyman work, interior/exterior repairs, and ongoing building care.",
    icon: Wrench,
    services: [
      "Handyman services",
      "Cleaning interior buildings",
      "Pest control repairs",
      "Pest control inspections",
      "Building repairs interior and exterior",
      "And more",
    ],
  },
  {
    title: "Doors & Gates",
    description: "Welding, replacements, and commercial door installation.",
    icon: DoorClosed,
    services: [
      "Welding repairs",
      "Doors replacement",
      "New doors installation",
      "Commercial doors installation",
      "Welding",
      "And more",
    ],
  },
  {
    title: "Landscape Services",
    description: "Yards, trees, pavers, and cleanouts for residential and commercial lots.",
    icon: TreePine,
    services: [
      "Landscaping",
      "Tree trimming",
      "Clean yards lots etc.",
      "Paver installation",
      "Landscaping Bedrock conversions",
      "Tree removal",
    ],
  },
  {
    title: "Plumbing",
    description: "Emergency leak response and minor plumbing fixes when you need them.",
    icon: Droplet,
    services: [
      "Emergency water leaks",
      "Minor plumbing issues",
      "Valve replacements",
    ],
  },
];

export default function HomeServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions ?? {};
          const header = section.querySelectorAll("[data-services-reveal='header']");
          const carousel = section.querySelectorAll("[data-services-reveal='carousel']");

          if (reduceMotion) {
            gsap.set([header, carousel], { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set([header, carousel], { autoAlpha: 0, y: 28 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            })
            .to(header, {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.1,
            })
            .to(
              carousel,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
              },
              "-=0.25"
            );
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="services"
        className="relative overflow-hidden bg-brand-mist py-16 lg:py-24"
        aria-labelledby="home-services-heading"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p
              data-services-reveal="header"
              className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green"
            >
              What we build
            </p>
            <h2
              id="home-services-heading"
              data-services-reveal="header"
              className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-brand-ink"
            >
              Services
            </h2>
            <p
              data-services-reveal="header"
              className="mt-4 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg"
            >
              Construction, maintenance, and specialty trades — one accountable team from first
              call to final walkthrough.
            </p>
          </div>
        </div>

        <div data-services-reveal="carousel" className="mt-10">
          <InfiniteMovingServices
            items={services}
            speed="slow"
            direction="left"
            onSelect={(item) => {
              const match = services.find((s) => s.title === item.title) ?? null;
              setSelectedService(match);
            }}
          />
        </div>
      </section>

      <ServicePopup
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title ?? ""}
        services={selectedService?.services ?? []}
        icon={selectedService?.icon ?? Home}
      />
    </>
  );
}
