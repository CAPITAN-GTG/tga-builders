"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectCTA() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const reduce = !!ctx.conditions?.reduceMotion;
          const media = rootRef.current?.querySelector(".cta-media");
          const content = gsap.utils.toArray<HTMLElement>(
            "[data-cta-reveal]",
            rootRef.current ?? undefined
          );

          if (reduce) {
            gsap.set(content, { autoAlpha: 1, y: 0 });
            return;
          }

          if (media) {
            gsap.fromTo(
              media,
              { yPercent: -22 },
              {
                yPercent: 22,
                ease: "none",
                scrollTrigger: {
                  trigger: rootRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              }
            );
          }

          gsap.set(content, { autoAlpha: 0, y: 28 });
          gsap.to(content, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 78%",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden bg-brand-ink"
      aria-labelledby="project-cta-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="cta-media absolute inset-x-0 -top-[30%] h-[160%] w-full will-change-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dream.webp"
            alt=""
            className="h-full w-full scale-110 object-cover object-center"
            aria-hidden
          />
        </div>
        {/* Light overlays — keep text readable without burying the photo */}
        <div className="absolute inset-0 bg-brand-ink/25" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 via-brand-ink/30 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-brand-ink/15"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="project-cta-heading"
            data-cta-reveal
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[0.04em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
          >
            Ready when you are.
          </h2>
          <p
            data-cta-reveal
            className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/90 sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]"
          >
            Tell us what you need — we&apos;ll respond with a clear next step.
          </p>
        </div>

        <div data-cta-reveal>
          <Link href="/pages/contact-us" className="inline-flex">
            <MovingBorderButton
              as="div"
              borderRadius="0.25rem"
              containerClassName="h-12 w-auto min-w-[10rem]"
              className="border-brand-green/40 bg-brand-green px-6 font-body text-sm font-semibold tracking-wide text-white backdrop-blur-none"
              borderClassName="bg-[radial-gradient(#2f7fd1_40%,transparent_60%)]"
              duration={3200}
            >
              Book Now
            </MovingBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
