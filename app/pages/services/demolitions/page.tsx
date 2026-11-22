import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Demolition Services",
  description:
    "Controlled demolition for remodels and removals by TGA Builders — bathrooms, kitchens, decks, and more.",
  path: "/pages/services/demolitions",
});

export default function DemolitionServices() {
  return (
    <ServicePage
      title="Demolition Services"
      description="Controlled demolition for remodels and removals — bathrooms, kitchens, decks, and more."
      intro={[
        "Demolition isn't only for unsalvageable properties. TGA Builders handles controlled removal of specific areas so your remodel can start clean and on schedule.",
        "Whether it's a rotting patio, a shed, or interior tear-out before renovation, we bring over 18 years of experience to the work.",
      ]}
      sections={[
        {
          title: "Services Include",
          items: [
            "Bathroom demolition",
            "Kitchen demolition",
            "Deck and patio removal",
            "Free-standing garages",
            "Docks and gazebos",
          ],
        },
        {
          title: "How We Approach It",
          body: [
            "Bathroom and kitchen demolitions include dumpster coordination and careful removal of cabinets, fixtures, flooring, and drywall as needed. Deck and patio work starts with an inspection — repair versus full removal — so you can compare cost and outcome.",
            "Kitchen tear-outs are scheduled to finish on time so your remodel crew can move in without delay.",
          ],
        },
      ]}
      contactDescription="Planning a teardown before a remodel? Call us for a clear assessment."
    />
  );
}
