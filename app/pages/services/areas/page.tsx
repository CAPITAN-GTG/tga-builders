import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Service Areas",
  description:
    "TGA Builders serves Los Angeles, San Fernando, Santa Clarita, Orange County, and more across Southern California.",
  path: "/pages/services/areas",
});

export default function ServiceAreas() {
  return (
    <ServicePage
      title="Service Areas"
      description="Licensed construction and facility maintenance across Southern California and beyond."
      intro={[
        "TGA Builders serves residential and commercial clients throughout California — major cities and surrounding communities.",
      ]}
      sections={[
        {
          title: "Primary Locations",
          items: [
            "Los Angeles",
            "San Fernando",
            "Santa Clarita",
            "Glendale",
            "Burbank",
            "Orange County",
            "San Bernardino County",
            "Ventura County",
            "And more across California",
          ],
        },
        {
          title: "Not sure we cover you?",
          body: [
            "If your city isn't listed, still reach out. We'll confirm availability for your location and discuss your project needs.",
          ],
        },
      ]}
      contactTitle="Check availability."
      contactDescription="Not sure if we serve your area? Call us and we'll verify coverage for your project."
    />
  );
}
