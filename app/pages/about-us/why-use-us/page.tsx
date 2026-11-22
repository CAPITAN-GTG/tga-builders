import { CheckCircle2, Clock, Shield } from "lucide-react";
import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Use Us",
  description:
    "Over 18 years of experience, clear accountability, and the same care we'd give friends and family. Choose TGA Builders.",
  path: "/pages/about-us/why-use-us",
});

const benefits = [
  {
    icon: Clock,
    title: "Available when it matters",
    description:
      "Our Customer Care team is available 24/7. If you have an emergency, you can count on us to be there when you need us most.",
  },
  {
    icon: CheckCircle2,
    title: "Convenient booking",
    description:
      "We make booking as convenient as possible because we know what it's like juggling work, family, and property repairs.",
  },
  {
    icon: Shield,
    title: "Respect for your space",
    description:
      "Our team treats your home with respect — protecting flooring and always cleaning up after the job is done.",
  },
];

export default function WhyUseUs() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="About"
        title="Why Use Us"
        description="Over 18 years of experience, clear accountability, and the same care we'd give friends and family."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/pages/about-us" },
          { label: "Why Use Us" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="max-w-3xl" aria-labelledby="why-intro">
          <h2 id="why-intro" className="sr-only">
            Introduction
          </h2>
          <p className="font-body text-lg leading-relaxed text-brand-ink sm:text-xl">
            When you choose TGA Builders Inc. you tap into the benefits of a
            company with over 18 years of experience. Our comprehensive,
            reliable service makes us a strong choice for home and business
            owners across California.
          </p>
          <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg">
            Our ethics and high standard for quality keep us accountable on the
            job. We provide the same level of service to our clients as we would
            to our friends and family — evident in our track record, testimonials,
            and the benefits customers regularly receive.
          </p>
        </section>

        <section className="mt-20" aria-labelledby="key-benefits">
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
            The difference
          </p>
          <h2
            id="key-benefits"
            className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
          >
            Key Benefits
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="border-t-2 border-brand-green pt-6"
                >
                  <Icon className="h-5 w-5 text-brand-green" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-wide text-brand-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-brand-navy/70">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="mt-20 grid grid-cols-1 gap-12 border-t border-brand-ink/10 pt-16 lg:grid-cols-2 lg:gap-16"
          aria-label="Pricing and guarantee"
        >
          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Fair Pricing
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
            <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75">
              We provide high-quality tradesman services in California at an
              affordable, fair price. Every technician on our team is fully
              trained and held to a professional standard at all times.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
              Billing is hourly for small jobs; for larger ones we can quote a
              fixed price so you know the work will stay within your budget.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Our Guarantee
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
            <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75">
              We only recruit skilled tradesmen with the knowledge, experience,
              and certifications needed for the jobs you book. We also invest in
              the tools, equipment, and vans our team needs to deliver exceptional
              service.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
              Our quality assurance team tracks workmanship throughout employment.
              If quality on a job doesn&apos;t meet our standards or yours, we
              correct it at no cost. We also take responsibility for defects that
              occur within 12 months — details are in our terms and conditions.
            </p>
          </div>
        </section>
      </div>

      <PageContact
        title="Get an estimate today."
        description="Call our Customer Care team to schedule a booking or ask a question."
      />
    </main>
  );
}
