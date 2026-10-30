import Link from "next/link";
import Welcome from "../components/Welcome";
import LearnMoreButton from "../components/LearnMoreButton";
import Dream from "../components/Dream";
import ContactForm from "../components/ContactForm";
import StatsHero from "../components/StatsHero";
import HomeServices from "../components/HomeServices";

export default function FrontPage() {
  return (
    <main>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/bg.webp")' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Your satisfaction is our goal.</span>
              <span className="block mt-2">Your vision is our business.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-200 sm:max-w-3xl">
              Dreams are meant to come true. We&apos;ll make it happen for you.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <LearnMoreButton variant="dark" />
              <Link
                href="/pages/contact-us"
                className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>

          <HomeServices />
        </div>
      </div>
      <Welcome />
      <Dream />
      <StatsHero />
      <ContactForm />
    </main>
  );
}
