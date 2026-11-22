import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Construction Services",
  description:
    "Residential and commercial construction from TGA Builders — new builds, renovations, additions, and project management in Southern California.",
  path: "/pages/services/construction",
});

export default function ConstructionServices() {
  return (
    <ServicePage
      title="Construction Services"
      description="Residential and commercial construction — new builds, renovations, additions, and project management."
      intro={[
        "From new construction to renovations, our team handles projects with precision and professionalism — on time and to a high standard.",
      ]}
      sections={[
        {
          title: "Construction Services",
          items: [
            "New construction",
            "Renovations",
            "Additions",
            "Structural modifications",
            "Project management",
          ],
        },
      ]}
      contactDescription="Planning a construction project? Contact us for a consultation and estimate."
    />
  );
}
