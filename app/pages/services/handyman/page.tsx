import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Handyman Services",
  description:
    "Skilled handyman repairs and improvements by TGA Builders for homes and commercial properties across Southern California.",
  path: "/pages/services/handyman",
});

export default function HandymanServices() {
  return (
    <ServicePage
      title="Handyman Services"
      description="Over 18 years of skilled repairs and improvements for homes and commercial properties across Southern California."
      intro={[
        "Whether you need minor repairs or larger home improvements, our experienced handymen are here to help. We take pride in quality workmanship and your satisfaction on every project.",
        "TGA Builders Inc. provides comprehensive handyman services for residential and commercial properties — from painting and drywall to doors, fixtures, and general household repairs.",
      ]}
      sections={[
        {
          title: "Services Include",
          items: [
            "Interior and exterior painting",
            "Kitchen and bathroom repairs",
            "Drywall repairs and installation",
            "Door installation and repair",
            "Window repairs",
            "Flooring installation and repairs",
            "Cabinet installation and repairs",
            "Furniture assembly",
            "Shelving installation",
            "Light fixture installation",
            "Minor electrical repairs",
            "Minor plumbing repairs",
            "General household repairs",
          ],
        },
      ]}
      highlights={[
        {
          title: "Experienced professionals",
          description:
            "Our handymen have extensive experience across home repair and maintenance.",
        },
        {
          title: "Quality workmanship",
          description:
            "Every job is completed to a high standard we stand behind.",
        },
        {
          title: "Timely service",
          description:
            "We respect your time and work efficiently to stay on schedule.",
        },
        {
          title: "Clean and professional",
          description:
            "We clean up after the work and treat your property with respect.",
        },
      ]}
      process={[
        "Initial consultation to understand your needs",
        "Detailed assessment of the work required",
        "Clear pricing and timeline",
        "Professional execution",
        "Final inspection and cleanup",
      ]}
      contactDescription="Contact us to discuss your handyman needs. We offer free estimates and can help plan your next repair or improvement."
    />
  );
}
