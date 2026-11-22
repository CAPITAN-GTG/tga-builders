import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kitchen Cabinets",
  description:
    "Kitchen cabinet repair, refacing, and custom installation by TGA Builders across Southern California.",
  path: "/pages/services/kitchen-cabinets",
});

export default function KitchenCabinets() {
  return (
    <ServicePage
      title="Kitchen Cabinets"
      description="Cabinet repair, refacing, and custom installation — built for kitchens that see daily use."
      intro={[
        "With over 18 years of experience, TGA Builders handles cabinet repair and refacing of any size or type. When cabinets are still sturdy, repair or refacing can be a smarter path than a full remodel.",
        "We also install custom storage solutions and cabinetry beyond the kitchen — from offices to garages.",
      ]}
      image={{
        src: "/kitchen-repairs.webp",
        alt: "Kitchen cabinet craftsmanship",
      }}
      sections={[
        {
          title: "Cabinet Services",
          body: [
            "Repairs for peeling laminate, hinges, and handles. Refacing to freshen the look without a full remodel — including door styles, knobs, and pull-outs.",
          ],
          items: [
            "Cabinet repairs",
            "Cabinet refacing",
            "Wine and cutlery racks",
            "Custom spice racks",
            "Lazy Susan cabinets",
            "Recycle and garbage roll-out racks",
          ],
        },
        {
          title: "Custom Installation",
          items: [
            "Entertainment center cabinets",
            "Library and office cabinets",
            "Fireplace mantels and hearths",
            "Garage cabinets",
            "Vanity cabinets",
            "Soft-close hinges",
            "Glass door modifications",
            "Full-extension roll-outs",
          ],
        },
      ]}
      contactDescription="Looking to repair, reface, or install cabinets? Get in touch for an estimate."
    />
  );
}
