"use client";

import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ContactFormProps = {
  showHeading?: boolean;
  title?: string;
  description?: string;
};

const contactChannels = [
  {
    icon: Phone,
    label: "Call",
    value: "(747) 303-8403",
    href: "tel:+17473038403",
  },
  {
    icon: Phone,
    label: "Call",
    value: "(702) 755-3316",
    href: "tel:+17027553316",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tgabuildersinc@gmail.com",
    href: "mailto:tgabuildersinc@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "14120 Pierce St, Arleta, CA 91331",
    href: "https://maps.google.com/?q=14120 Pierce St, Arleta, CA 91331",
    external: true,
  },
];

const ContactForm = ({
  showHeading = true,
  title = "Let's talk about your project.",
  description = "Share a few details and we'll follow up with a clear next step.",
}: ContactFormProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    storeConsent: false,
    privacyConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const reduce = context.conditions?.reduceMotion;
          const reveals = gsap.utils.toArray<HTMLElement>(
            "[data-contact-reveal]",
            sectionRef.current ?? undefined
          );

          if (reduce) {
            gsap.set(reveals, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set(reveals, { autoAlpha: 0, y: 28 });
          gsap.to(reveals, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          });
        },
        sectionRef
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");

    if (phoneNumber.length <= 3) return phoneNumber;
    if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        storeConsent: false,
        privacyConsent: false,
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We will get back to you soon.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const fieldClass =
    "mt-2 h-12 rounded-sm border-brand-steel/25 bg-white px-4 font-body text-base text-brand-ink shadow-none placeholder:text-brand-steel/60 focus-visible:border-brand-green focus-visible:ring-brand-green/25";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate overflow-hidden bg-brand-mist"
      aria-labelledby={showHeading ? "contact-heading" : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/[0.06] via-transparent to-brand-navy/[0.08]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-green/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-brand-navy/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {showHeading ? (
              <div data-contact-reveal>
                <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                  Get connected
                </p>
                <h2
                  id="contact-heading"
                  className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold uppercase tracking-[0.04em] text-brand-ink"
                >
                  {title}
                </h2>
                <div
                  className="mt-5 h-0.5 w-16 origin-left bg-brand-green"
                  aria-hidden
                />
                <p className="mt-5 max-w-md font-body text-base leading-relaxed text-brand-navy/80 sm:text-lg">
                  {description}
                </p>
              </div>
            ) : (
              <div data-contact-reveal>
                <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                  Direct lines
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold uppercase tracking-[0.04em] text-brand-ink">
                  Reach the team
                </h2>
                <div
                  className="mt-5 h-0.5 w-16 origin-left bg-brand-green"
                  aria-hidden
                />
                <p className="mt-5 max-w-md font-body text-base leading-relaxed text-brand-navy/80">
                  Prefer to talk now? Call, email, or stop by — we respond with a clear next step.
                </p>
              </div>
            )}

            <ul className="mt-10 space-y-0 border-t border-brand-ink/10" data-contact-reveal>
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={`${channel.label}-${channel.value}`} className="border-b border-brand-ink/10">
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-start gap-4 py-4 transition-colors hover:bg-white/50"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-brand-green/25 bg-white text-brand-green transition-colors group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-white">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-steel">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block font-body text-base text-brand-ink transition-colors group-hover:text-brand-green">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <p
              data-contact-reveal
              className="mt-8 font-body text-sm leading-relaxed text-brand-steel"
            >
              License 1126206 · B General · C27 · C42
            </p>
          </div>

          <div className="lg:col-span-7" data-contact-reveal>
            <div className="border border-brand-ink/10 bg-white/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
              <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                Send a message
              </p>
              <p className="mt-2 font-body text-sm text-brand-steel sm:text-base">
                Tell us what you need — estimates are free.
              </p>

              {submitStatus.type && (
                <div
                  role="status"
                  className={`mt-6 border p-4 font-body text-sm ${
                    submitStatus.type === "success"
                      ? "border-brand-green/30 bg-brand-green/10 text-brand-green"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="font-body text-brand-ink">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-body text-brand-ink">
                      Phone
                    </Label>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={14}
                      className={fieldClass}
                      placeholder="(555) 555-5555"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-body text-brand-ink">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-body text-brand-ink">
                    Message
                  </Label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${fieldClass} min-h-[140px] w-full resize-y py-3`}
                    placeholder="Tell us about your project..."
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-4 border-t border-brand-ink/10 pt-5">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="storeConsent"
                      checked={formData.storeConsent}
                      required
                      disabled={isSubmitting}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, storeConsent: checked === true }))
                      }
                      className="mt-0.5 size-5 rounded-sm border-brand-steel/40 data-checked:border-brand-green data-checked:bg-brand-green"
                    />
                    <Label
                      htmlFor="storeConsent"
                      className="font-body text-sm leading-relaxed font-normal text-brand-steel"
                    >
                      I consent to this website storing my submitted information so they can
                      respond to my inquiry.
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      required
                      disabled={isSubmitting}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, privacyConsent: checked === true }))
                      }
                      className="mt-0.5 size-5 rounded-sm border-brand-steel/40 data-checked:border-brand-green data-checked:bg-brand-green"
                    />
                    <Label
                      htmlFor="privacyConsent"
                      className="font-body text-sm leading-relaxed font-normal text-brand-steel"
                    >
                      I have read and understood this website&apos;s{" "}
                      <Link
                        href="/pages/privacy"
                        className="text-brand-green underline-offset-2 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="mt-2 h-12 w-full rounded-sm bg-brand-green px-8 font-body text-base font-semibold tracking-wide text-white hover:bg-brand-green-bright sm:w-auto sm:min-w-[12rem]"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <Send data-icon="inline-end" className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
