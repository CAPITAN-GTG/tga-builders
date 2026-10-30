"use client";

import type { ElementType } from "react";
import { X } from "lucide-react";

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  services: string[];
  icon: ElementType;
}

export default function ServicePopup({
  isOpen,
  onClose,
  title,
  services,
  icon: Icon,
}: ServicePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <button
          type="button"
          className="fixed inset-0 bg-black/75 transition-opacity"
          aria-label="Close dialog"
          onClick={onClose}
        />

        <div className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl animate-[modalIn_0.3s_ease-out_forwards]">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none transition-colors duration-200"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <Icon className="h-6 w-6 text-cyan-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {title}
              </h3>
              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2">
                  {services.map((service) => (
                    <li key={service} className="text-gray-600">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 