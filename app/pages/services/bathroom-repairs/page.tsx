import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Bathroom Repairs",
  description:
    "Targeted bathroom repairs by TGA Builders — caulk, tile, shower doors, fixtures, and plumbing done cleanly.",
  path: "/pages/services/bathroom-repairs",
});

export default function BathroomRepairs() {
  return (
    <ServicePage
      title="Bathroom Repairs"
      description="Targeted bathroom repairs — caulk, tile, shower doors, fixtures, and plumbing — done cleanly and carefully."
      intro={[
        "Bathrooms see heavy daily use. Moisture and wear add up fast. TGA Builders has the experience and tools to handle bathroom issues before they become larger problems.",
      ]}
      image={{
        src: "/bathroom-repairs.webp",
        alt: "Professional bathroom repair work",
      }}
      sections={[
        {
          title: "Core Repairs",
          body: [
            "Recaulking for eroded or moldy caulk and wall leaks. Tile repairs for chipped floor or shower tiles. Shower door repairs for hinges, tracks, and replacements when needed.",
          ],
          items: [
            "Recaulking showers and tubs",
            "Tile repairs",
            "Shower door repair or replacement",
          ],
        },
        {
          title: "Fixtures & Plumbing",
          body: [
            "We service shower heads that leak or clog, and handle faucet, tub, and toilet plumbing to help prevent water damage. We can also install replacements you choose.",
          ],
          items: [
            "Shower head servicing",
            "Faucet, tub, and toilet plumbing",
            "Toilet repairs and installation",
            "Drywall repair and finishing",
            "Light fixture repairs",
            "General bathroom maintenance",
          ],
        },
      ]}
      contactDescription="Need a bathroom repair? Call us for a clear assessment and next steps."
    />
  );
}
