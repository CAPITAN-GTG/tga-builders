import PageContact from "@/components/PageContact";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Mission",
  description:
    "TGA Builders delivers the best service in California — listening first, advising clearly, and finishing strong.",
  path: "/pages/about-us/mission",
});

const coreValues = [
  {
    title: "Reliable Service",
    description: "Providing reliable service at an affordable and fair price.",
  },
  {
    title: "Responsibility",
    description: "Taking responsibility for our services and advice.",
  },
  {
    title: "Transparency",
    description:
      "Full transparency in licensing, bonds, and insurance that we hold.",
  },
  {
    title: "Quality Assurance",
    description:
      "An exemplary quality assurance program to ensure satisfactory workmanship.",
  },
];

export default function CompanyMission() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="About"
        title="Our Mission"
        description="Deliver the best service in California — listening first, advising clearly, and finishing strong."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/pages/about-us" },
          { label: "Our Mission" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="max-w-3xl" aria-labelledby="mission-statement">
          <h2 id="mission-statement" className="sr-only">
            Mission statement
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
            What sets us apart is how much we value our customers&apos; feedback.
            That shows in our track record, testimonials, and over 18 years of
            experience. We pride ourselves on our capabilities and resources,
            always working to deliver quality results within budget and
            established timelines.
          </p>
        </section>

        <section className="mt-20" aria-labelledby="core-values">
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
            What guides us
          </p>
          <h2
            id="core-values"
            className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
          >
            Core Values
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {coreValues.map((value, index) => (
              <div key={value.title} className="border-l-2 border-brand-green pl-5">
                <p className="font-display text-sm font-semibold tracking-[0.14em] text-brand-steel">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-wide text-brand-ink">
                  {value.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-navy/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="mt-20 grid grid-cols-1 gap-12 border-t border-brand-ink/10 pt-16 lg:grid-cols-2 lg:gap-16"
          aria-label="Vision and team"
        >
          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Our Vision
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
            <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75">
              We are focused on continually improving our reputation within
              California and strengthening relationships with our existing
              clients.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-brand-navy/75">
              We are also excited about working with new clients who heard
              positive things from friends and family. It makes us proud that
              most of our new customers found us this way, rather than through
              advertising.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-brand-ink">
              Team Development
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-green-bright" aria-hidden />
            <p className="mt-6 font-body text-base leading-relaxed text-brand-navy/75">
              It is our mission to empower our team members in their careers with
              us. We train new hires to a high standard of quality and
              consistently invest in new training and equipment so our team&apos;s
              work stays consistent and efficient.
            </p>
          </div>
        </section>
      </div>

      <PageContact description="Ready to experience our service? Contact us today." />
    </main>
  );
}
