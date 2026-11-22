import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Emergency Services",
  description:
    "24/7 emergency repair and maintenance from TGA Builders when urgent situations can't wait across Southern California.",
  path: "/pages/services/emergency",
});

export default function EmergencyServices() {
  return (
    <ServicePage
      title="Emergency Services"
      description="24/7 emergency repair and maintenance when urgent situations can't wait."
      intro={[
        "When something fails suddenly, a fast response can prevent further damage. TGA Builders provides around-the-clock emergency repair and maintenance for urgent residential and commercial needs.",
      ]}
      sections={[
        {
          title: "Emergency Response Includes",
          items: [
            "Water damage response",
            "Urgent repairs",
            "Storm damage",
            "Structural issues",
            "24/7 response team",
          ],
        },
      ]}
      contactTitle="Available 24/7."
      contactDescription="Call our emergency line anytime — we'll help you stabilize the situation and plan the next step."
    />
  );
}
