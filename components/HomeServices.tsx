"use client";

import { useState } from "react";
import {
  Lightbulb,
  Wrench,
  DoorClosed,
  TreePine,
  ArrowRight,
  Droplet,
  Building2,
  Home,
  type LucideIcon,
} from "lucide-react";
import ServicePopup from "./ServicePopup";

type Service = {
  title: string;
  icon: LucideIcon;
  services: string[];
};

const services: Service[] = [
  {
    title: "Residential Construction",
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

  return (
    <>
      <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <button
            key={service.title}
            type="button"
            className="group relative overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer text-left"
            onClick={() => setSelectedService(service)}
          >
            <div className="flex flex-col items-center text-center">
              <service.icon className="h-8 w-8 text-cyan-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <div className="mt-4 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-cyan-400/50 transition-colors duration-300 pointer-events-none" />
          </button>
        ))}
      </div>

      {selectedService && (
        <ServicePopup
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          services={selectedService.services}
          icon={selectedService.icon}
        />
      )}
    </>
  );
}
