import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/grid-logo.png.asset.json";
import { Atmosphere } from "@/components/grid/Atmosphere";
import { Cursor } from "@/components/grid/Cursor";
import { Loader } from "@/components/grid/Loader";
import { Nav } from "@/components/grid/Nav";
import { Hero } from "@/components/grid/Hero";
import { About } from "@/components/grid/About";
import { Infrastructure } from "@/components/grid/Infrastructure";
import { ArcSection } from "@/components/grid/ArcSection";
import { Proof } from "@/components/grid/Proof";
import { Manifesto } from "@/components/grid/Manifesto";
import { Utilities } from "@/components/grid/Utilities";
import { Token } from "@/components/grid/Token";
import { Footer } from "@/components/grid/Footer";
import { LaunchModal } from "@/components/grid/LaunchModal";
import { LaunchProvider } from "@/components/grid/launch";

const TITLE = "GRID — Autonomous Energy Grid";
const DESC =
  "GRID explores autonomous energy infrastructure, machine-to-machine payments, real-time data, and programmable settlement on Arc.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: "Energy Meets Programmable Money." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: "Energy Meets Programmable Money." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GRID — Autonomous Energy Grid",
          description: DESC,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LaunchProvider>
      <Loader />
      <Cursor />
      <Atmosphere />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <div className="relative bg-[oklch(0.17_0.04_263_/_0.45)]">
            <About />
          </div>
          <Infrastructure />
          <div className="relative bg-[oklch(0.13_0.032_265_/_0.55)]">
            <ArcSection />
            <Proof />
          </div>
          <Manifesto />
          <div className="relative bg-[oklch(0.17_0.04_263_/_0.4)]">
            <Utilities />
          </div>
          <Token />
        </main>
        <Footer />
      </div>
      <LaunchModal />
      <link rel="preload" as="image" href={logo.url} />
    </LaunchProvider>
  );
}
