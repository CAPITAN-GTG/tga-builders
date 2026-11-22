import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Interior Services",
  description:
    "Interior finishes by TGA Builders — paint, trim, molding, and custom detail for homes and facilities.",
  path: "/pages/services/interior",
});

export default function InteriorServices() {
  return (
    <ServicePage
      title="Interior Services"
      description="Interior finishes that make spaces look sharp and work well — paint, trim, molding, and custom detail."
      intro={[
        "From full room makeovers to subtle improvements, TGA Builders brings technical care to interior finishes that match your style and how you use the space.",
      ]}
      sections={[
        {
          title: "What We Offer",
          items: [
            "Interior painting",
            "Wall texturing",
            "Crown molding",
            "Trim work",
            "Custom finishes",
          ],
        },
      ]}
      contactDescription="Planning an interior refresh? Get in touch for an estimate."
    />
  );
}
