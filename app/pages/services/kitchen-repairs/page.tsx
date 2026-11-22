import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kitchen Remodeling",
  description:
    "Kitchen remodeling by TGA Builders — floors, countertops, sinks, and faucets planned around your budget and goals.",
  path: "/pages/services/kitchen-repairs",
});

export default function KitchenRepairs() {
  return (
    <ServicePage
      title="Kitchen Remodeling"
      description="From floors and countertops to sinks and faucets — kitchen work planned around your budget and goals."
      intro={[
        "The kitchen is the heart of the home. TGA Builders helps you finish a remodel from start to finish — assessing feasibility, budget, and the right scope of work.",
      ]}
      image={{
        src: "/kitchen-repairs.webp",
        alt: "Kitchen with wood cabinetry and island",
      }}
      sections={[
        {
          title: "Remodeling Services",
          items: [
            "Floor replacement — tile, linoleum, and hardwood",
            "Replace or refinish countertops",
            "Faucet replacement and repairs",
            "New sink installation",
            "Drywall, appliances, and cabinet coordination",
          ],
          body: [
            "Refinishing countertops can save significantly when cabinets stay in place — depending on material and condition. We'll help you choose the approach that fits your space and budget.",
          ],
        },
        {
          title: "What to Expect",
          body: [
            "We confirm specs before you purchase fixtures, walk through options clearly, and keep the project moving so your kitchen returns to use as soon as possible.",
          ],
        },
      ]}
      contactDescription="Ready to remodel or refresh your kitchen? Contact us for a consultation."
    />
  );
}
