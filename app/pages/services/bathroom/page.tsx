import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Bathroom Services",
  description:
    "Professional bathroom repairs and remodels by TGA Builders — from a fixture swap to a full transformation.",
  path: "/pages/services/bathroom",
});

export default function BathroomServices() {
  return (
    <ServicePage
      title="Bathroom Services"
      description="Professional bathroom repairs and remodels — from a single fixture swap to a full transformation."
      intro={[
        "If you're swapping a toilet or sink, we can handle the work with minimal planning on your part. We also fix leaky faucets, plumbing issues, and related bathroom repairs.",
        "Adding a bathroom or fully remodeling an existing one can feel overwhelming. Our team walks you through options so you know what's possible and what fits your budget — start to finish.",
      ]}
      image={{ src: "/bathroom.webp", alt: "Bathroom renovation by TGA Builders" }}
      sections={[
        {
          title: "Services Include",
          items: [
            "Cabinet installation and refacing",
            "Bathtub and shower enclosure replacement",
            "Light fixtures and wall sockets",
            "Granite countertops and customized vanities",
            "Complete bathroom remodeling",
          ],
        },
        {
          title: "Additional Expertise",
          body: [
            "Don't see what you need? Call us — Customer Care can answer questions for your specific project.",
          ],
          items: [
            "Replacing sinks and faucets",
            "Renovating walls and ceilings",
            "Adding brand new bathrooms",
            "Professional plumbing",
            "Expert tiling",
          ],
        },
      ]}
      contactDescription="Planning a bathroom project? Contact us for a consultation and estimate."
    />
  );
}
