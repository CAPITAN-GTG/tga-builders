import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home Improvements",
  description:
    "Whole-home renovations and upgrades by TGA Builders — planned around your goals across Southern California.",
  path: "/pages/services/home-improve",
});

export default function HomeImproveServices() {
  return (
    <ServicePage
      title="Home Improvements"
      description="Whole-home renovations, laundry upgrades, and efficiency-minded projects — planned around your goals."
      intro={[
        "With over 18 years of tradesman experience, TGA Builders helps homeowners achieve clear project goals — from unified renovations to focused room upgrades.",
      ]}
      sections={[
        {
          title: "Whole Home Renovations",
          body: [
            "We assess requirements, walk through options, and provide budget estimates so design and execution stay aligned across the home.",
          ],
        },
        {
          title: "Laundry & Storage",
          body: [
            "Refresh a laundry area with practical storage — built-in cabinets and shelves for supplies, coats, boots, and everyday essentials.",
          ],
        },
        {
          title: "Energy-Minded Upgrades",
          body: [
            "Efficient lighting, dual-flush toilets, and new windows can reduce utility costs while improving comfort, appearance, and property value.",
          ],
        },
      ]}
      contactDescription="Have a home improvement project in mind? Contact us to talk through scope and budget."
    />
  );
}
