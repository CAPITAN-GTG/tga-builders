import Image from "next/image";
import GalleryHeroVideo from "@/components/GalleryHeroVideo";
import GalleryClipVideo from "@/components/GalleryClipVideo";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Project Gallery",
  description:
    "Browse completed residential and commercial projects by TGA Builders across Southern California.",
  path: "/pages/gallery",
});

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectCategory {
  category: string;
  description: string;
  images: GalleryImage[];
}

const galleryImages: GalleryImage[] = Array.from({ length: 33 }, (_, i) => ({
  src: i < 30 ? `/gallery-${i + 1}.webp` : `/landscape_${i - 29}.webp`,
  alt: i < 30 ? `TGA Builders project ${i + 1}` : `TGA Builders landscape ${i - 29}`,
}));

const fitnessStoneWallsImages: GalleryImage[] = Array.from({ length: 21 }, (_, i) => ({
  src: `/gallery-${31 + i}.webp`,
  alt: `24h Fitness stone walls ${i + 1}`,
}));

const projects: ProjectCategory[] = [
  {
    category: "Commercial",
    description: "Commercial spaces built for daily use and lasting performance.",
    images: galleryImages.slice(0, 10),
  },
  {
    category: "Interiors",
    description: "Clean interior finishes for homes and facilities.",
    images: galleryImages.slice(10, 15),
  },
  {
    category: "Renovations",
    description: "Remodels and upgrades from start to final walkthrough.",
    images: galleryImages.slice(15, 20),
  },
  {
    category: "Architecture",
    description: "Structural and architectural work across Southern California.",
    images: galleryImages.slice(20, 25),
  },
  {
    category: "Specialty builds",
    description: "Focused builds that solve specific site needs.",
    images: galleryImages.slice(25, 30),
  },
  {
    category: "Landscape",
    description: "Outdoor spaces, yards, and property improvements.",
    images: galleryImages.slice(30, 33),
  },
  {
    category: "24h Fitness stone walls",
    description: "Stone wall construction for commercial fitness facilities.",
    images: fitnessStoneWallsImages,
  },
];

const clipVideos = [
  {
    title: "Project clip 1",
    src: "https://uuihthmh3pjyd1m5.public.blob.vercel-storage.com/gallery-1.mp4",
  },
  {
    title: "Project clip 2",
    src: "https://uuihthmh3pjyd1m5.public.blob.vercel-storage.com/gallery-13.mp4",
  },
  {
    title: "Project clip 3",
    src: "https://uuihthmh3pjyd1m5.public.blob.vercel-storage.com/gallery-26.mp4",
  },
];

const videoSrc = process.env.NEXT_PUBLIC_TGA_VIDEO_URL || "/tga-video.mp4";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-brand-mist">
      <section className="relative w-full overflow-hidden bg-brand-ink" aria-label="Gallery highlight reel">
        <div className="relative h-[min(70vh,520px)] w-full sm:h-[min(75vh,600px)] lg:h-[min(80vh,680px)]">
          <GalleryHeroVideo
            src={videoSrc}
            poster="/tga-video-poster.jpg"
            title="TGA Builders work in action"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-20">
          {projects.map((project, projectIndex) => (
            <section
              key={project.category}
              className="scroll-mt-24"
              id={project.category.toLowerCase().replace(/\s+/g, "-")}
              aria-labelledby={`gallery-${projectIndex}`}
            >
              <div className="max-w-2xl">
                <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                  Projects
                </p>
                <h2
                  id={`gallery-${projectIndex}`}
                  className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
                >
                  {project.category}
                </h2>
                <p className="mt-3 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={image.src}
                    className="group relative overflow-hidden border border-brand-silver/40 bg-white"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={projectIndex === 0 && imageIndex < 4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="scroll-mt-24" id="project-videos" aria-labelledby="project-videos-heading">
            <div className="max-w-2xl">
              <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                On site
              </p>
              <h2
                id="project-videos-heading"
                className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-brand-ink"
              >
                Project clips
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-brand-navy/75 sm:text-lg">
                Short loops from recent work — unmute to hear audio.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {clipVideos.map((video) => (
                <div key={video.src} className="border border-brand-silver/40 bg-white">
                  <GalleryClipVideo src={video.src} title={video.title} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
