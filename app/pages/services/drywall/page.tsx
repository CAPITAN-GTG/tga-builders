import ServicePage from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Drywall Repairs",
  description:
    "Drywall crack, hole, and texture repairs by TGA Builders — matched carefully and finished clean.",
  path: "/pages/services/drywall",
});

export default function DrywallRepairs() {
  return (
    <ServicePage
      title="Drywall Repairs"
      description="Crack, hole, and texture repairs — matched carefully and finished clean."
      intro={[
        "From settling cracks and doorknob holes to moisture damage, drywall needs vary by the type of damage. TGA Builders brings over 18 years of experience to timely, quality repairs — with the exception of actively flooded properties.",
      ]}
      image={{ src: "/drywall.webp", alt: "Drywall repair in progress" }}
      sections={[
        {
          title: "What We Repair",
          items: [
            "Crack repairs from settling",
            "Wall hole repairs",
            "Texture matching",
            "Color matching",
            "Complete wall repairs",
          ],
        },
        {
          title: "What to Expect",
          body: [
            "We cut out damaged drywall, secure new board, tape and mud joints, sand, and paint. Texture and color matching is handled carefully — we'll set clear expectations if a perfect match isn't possible.",
            "If a home has been flooded, it must be fully dried and validated before drywall work. We can paint an entire wall after replacement and vacuum and dispose of debris when the job is done.",
          ],
        },
      ]}
      contactDescription="Need drywall repaired? Call us for a free assessment and quote."
    />
  );
}
