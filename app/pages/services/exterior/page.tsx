import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Exterior Services",
  description:
    "Exterior construction and repairs by TGA Builders — siding, windows, paint, decks, and waterproofing.",
  path: "/pages/services/exterior",
});

export default function ExteriorServices() {
  return (
    <ServicePage
      title="Exterior Services"
      description="Curb appeal and weather protection — siding, windows, paint, decks, and waterproofing."
      intro={[
        "Your exterior does two jobs: it presents the property and protects it from the elements. TGA Builders delivers exterior work with durable materials and lasting results.",
      ]}
      sections={[
        {
          title: "Exterior Services",
          items: [
            "Siding installation and repair",
            "Window and door installation",
            "Exterior painting",
            "Deck and patio construction",
            "Weatherproofing",
          ],
        },
      ]}
      contactDescription="Ready to upgrade or protect your exterior? Contact us for a consultation."
    />
  );
}
