import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Client Reviews",
  description:
    "See why homeowners and businesses trust TGA Builders for construction, renovation, and facility maintenance.",
  path: "/pages/reviews",
});

export default function ReviewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
