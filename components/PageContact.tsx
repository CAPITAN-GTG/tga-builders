"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type PageContactProps = {
  title?: string;
  description?: string;
};

const phones = [
  { label: "(747) 303-8403", href: "tel:+17473038403" },
  { label: "(702) 755-3316", href: "tel:+17027553316" },
];

export default function PageContact({
  title = "Ready when you are.",
  description = "Call us or send a note — we'll respond with a clear next step.",
}: PageContactProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const reduce = !!context.conditions?.reduceMotion;
          const reveals = gsap.utils.toArray<HTMLElement>(
            "[data-page-contact-reveal]",
            sectionRef.current ?? undefined
          );
          const rule = sectionRef.current?.querySelector("[data-page-contact-rule]");

          if (reduce) {
            gsap.set(reveals, { autoAlpha: 1, y: 0 });
            if (rule) gsap.set(rule, { scaleX: 1 });
            return;
          }

          gsap.set(reveals, { autoAlpha: 0, y: 24 });
          if (rule) gsap.set(rule, { scaleX: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          });

          tl.to(reveals, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          });

          if (rule) {
            tl.to(
              rule,
              { scaleX: 1, duration: 0.55, ease: "power2.out" },
              "-=0.35"
            );
          }
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-brand-ink"
      aria-labelledby="page-contact-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-green/25 via-transparent to-brand-navy/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p
            data-page-contact-reveal
            className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green-bright"
          >
            Start a project
          </p>
          <h2
            id="page-contact-heading"
            data-page-contact-reveal
            className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-[0.04em] text-white"
          >
            {title}
          </h2>
          <div
            data-page-contact-rule
            className="mt-5 h-0.5 w-16 origin-left bg-brand-green-bright"
            aria-hidden
          />
          <p
            data-page-contact-reveal
            className="mt-5 font-body text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {description}
          </p>
        </div>

        <div
          data-page-contact-reveal
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          {phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="inline-flex h-12 items-center justify-center border border-white/25 px-5 font-body text-sm font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {phone.label}
            </a>
          ))}
          <Link
            href="/pages/contact-us"
            className="inline-flex h-12 items-center justify-center bg-brand-green px-6 font-body text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-green-bright"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
