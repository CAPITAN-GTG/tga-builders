import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Call, email, or send a message to TGA Builders. Licensed construction and facility maintenance across Southern California.",
  path: "/pages/contact-us",
});

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="TGA Builders"
        title="Contact Us"
        description="Licensed construction and facility maintenance across Southern California. Call, email, or send a message — we'll respond with a clear next step."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactForm showHeading={false} />
    </main>
  );
}
