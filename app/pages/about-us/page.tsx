import { Clock, Shield, Users, Wrench } from "lucide-react";
import Link from "next/link";
import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about TGA Builders — licensed construction and facility maintenance across Southern California. Your vision is our business.",
  path: "/pages/about-us",
});

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Our Customer Care team is available every day of the year, around the clock.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "All services are completed by licensed, bonded, and insured professionals.",
  },
  {
    icon: Users,
    title: "Background Checked",
    description:
      "All our employees undergo thorough background checks for your peace of mind.",
  },
  {
    icon: Wrench,
    title: "Professional Service",
    description:
      "Over 18 years of experience delivering quality construction and maintenance.",
  },
];

const values = [
  "Reliable service at an affordable and fair price.",
  "Taking responsibility for our services and advice.",
  "Transparency in licensing, bonds, and insurance that we hold.",
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="TGA Builders"
        title="About Us"
        description="Licensed construction and facility maintenance across Southern California — your vision is our business."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="max-w-3xl" aria-labelledby="about-intro">
          <h2 id="about-intro" className="sr-only">
            Who we are
          </h2>
          <p className="font-body text-lg leading-relaxed text-brand-ink sm:text-xl">
            At TGA Builders Inc. our mission is to deliver the best service in
            California to our residential and commercial clients. We believe that
            a team of technicians willing to listen to customers&apos; specific
            requirements is critical to the success of any project. That&apos;s
            why we consider the advice we give as important as the services we
            provide.
          </p>
          <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg">
            What sets us apart is how much we value our customers&apos; feedback —
            shown through our track record, testimonials, and over 18 years in
            this business. We work hard to deliver quality results within budget
            and established timelines.
          </p>
        </section>

        <section
          className="mt-16 grid grid-cols-1 gap-10 border-y border-brand-ink/10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          aria-label="What we stand for"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="border-l-2 border-brand-green pl-5">
                <Icon className="h-5 w-5 text-brand-green" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold tracking-wide text-brand-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-navy/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-16 max-w-3xl" aria-labelledby="corporate-values">
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
            How we work
          </p>
          <h2
            id="corporate-values"
            className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
          >
            Corporate Values
          </h2>
          <ul className="mt-8 space-y-4">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-start gap-3 font-body text-base leading-relaxed text-brand-ink"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                  aria-hidden
                />
                {value}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base leading-relaxed text-brand-navy/75">
            We also empower our team members in their careers with us. New hires
            are trained to a high standard, and we continually invest in training
            and equipment so our work stays consistent and efficient.
          </p>
        </section>

        <section
          className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          aria-label="Vision and approach"
        >
          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Our Vision
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
            <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75">
              We are focused on continually improving our reputation within
              California and strengthening relationships with existing clients.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
              We are also excited about working with new clients who heard
              positive things from friends and family. Most of our new customers
              found us that way — rather than through advertising.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Our Approach
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
            <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75">
              We tailor services to each client&apos;s needs, drawing on years of
              tradesman experience in maintenance, improvements, flooring, and
              demolitions.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
              Instead of a cookie-cutter approach, we bring experience, knowledge,
              and skill to make home and business owners&apos; project dreams come
              true.
            </p>
          </div>
        </section>

        <section
          className="mt-20 border-t border-brand-ink/10 pt-16"
          aria-labelledby="quality-assurance"
        >
          <h2
            id="quality-assurance"
            className="font-display text-2xl font-bold tracking-wide text-brand-ink"
          >
            Quality Assurance
          </h2>
          <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-brand-navy/75">
            TGA Builders Inc. maintains a quality assurance program so our
            workmanship stays satisfactory to us and our clients — on every job.
          </p>
        </section>

        <section
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-ink/10 pt-10"
          aria-label="Related pages"
        >
          <Link
            href="/pages/about-us/mission"
            className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-green transition-colors hover:text-brand-green-bright"
          >
            Our Mission →
          </Link>
          <Link
            href="/pages/about-us/why-use-us"
            className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-green transition-colors hover:text-brand-green-bright"
          >
            Why Use Us →
          </Link>
        </section>
      </div>

      <PageContact description="Need professional services? We're here to help." />
    </main>
  );
}
