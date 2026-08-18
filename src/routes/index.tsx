import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/oakwood-hero.jpg";
import productImg from "@/assets/oakwood-product.jpg";
import notesImg from "@/assets/oakwood-notes.jpg";
import ctaImg from "@/assets/oakwood-cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OAKWOOD by Sarkar | Warm Woody Parfum 50ML" },
      {
        name: "description",
        content:
          "OAKWOOD — where warmth meets confidence. An earthy, warm parfum from Sarkar. Rich woods, amber and musk. 50ML at Rs 799.",
      },
      { property: "og:title", content: "OAKWOOD by Sarkar | Where Warmth Meets Confidence" },
      {
        property: "og:description",
        content:
          "An earthy, warm fragrance crafted for those who leave a lasting impression. Sarkar's newest parfum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Oakwood,
});

const NOTES = [
  { label: "Top Notes", items: ["Bergamot", "Black Pepper"] },
  { label: "Heart Notes", items: ["Oakwood", "Cedarwood", "Sandalwood"] },
  { label: "Base Notes", items: ["Amber", "Musk", "Vanilla"] },
];

const PERSONALITY = [
  { title: "Warm", copy: "Rich woody notes create a warm and inviting scent." },
  { title: "Confident", copy: "A distinctive fragrance designed to leave an impression." },
  { title: "Timeless", copy: "A versatile scent made for everyday wear." },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <p className="bg-background py-2.5 text-center text-[0.6rem] tracked-tight text-muted-foreground">
        Claim two 7ml freebies with every order
      </p>
      <div className="flex items-center justify-between border-b border-border/60 bg-background/85 px-5 py-4 backdrop-blur-md sm:px-10">
        <span className="text-[0.6rem] tracked text-muted-foreground">New Parfum</span>
        <a href="#top" className="text-base font-medium tracked sm:text-lg">
          Sarkar
        </a>
        <a href="#shop" className="hidden text-[0.6rem] tracked-tight text-muted-foreground hover:text-foreground sm:block">
          Buy Now
        </a>
      </div>
    </header>
  );
}

function Oakwood() {
  return (
    <div id="top" className="bg-background">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="OAKWOOD parfum by Sarkar, amber glass chess-king bottle"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/70" />
        <div className="relative z-10 w-full max-w-3xl px-6 pb-20 text-center fade-up sm:pb-28">
          <p className="eyebrow">The Newest Sarkar</p>
          <h1 className="mt-6 text-5xl font-light tracked sm:text-7xl">Oakwood</h1>
          <p className="mt-5 text-[0.7rem] tracked text-foreground/80 sm:text-xs">
            Where warmth meets confidence.
          </p>
          <p className="mx-auto mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
            An earthy, warm fragrance crafted for those who leave a lasting impression.
          </p>
          <a href="#shop" className="btn-outline mt-10">
            Shop Oakwood
          </a>
        </div>
      </section>

      {/* MEET OAKWOOD */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Introduction</p>
          <h2 className="mt-6 text-2xl font-light tracked sm:text-4xl">Meet Oakwood</h2>
          <div className="mx-auto mt-8 h-px w-16 bg-border" />
          <p className="mt-8 text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9">
            Oakwood is a warm, woody fragrance created for those who leave a lasting impression.
            Rich woods blend with soft amber and musk to create a scent that feels confident,
            effortless and timeless.
          </p>
          <p className="mt-10 text-[0.65rem] tracked text-oak">Woody · Amber · Musk</p>
        </div>
      </section>

      {/* THE NOTES */}
      <section className="relative overflow-hidden">
        <img
          src={notesImg}
          alt="Oak wood, cedarwood shavings, black peppercorns and amber resin"
          width={1408}
          height={912}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <p className="eyebrow">Composition</p>
            <h2 className="mt-6 text-2xl font-light tracked sm:text-4xl">The Notes</h2>
          </div>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
            {NOTES.map((n) => (
              <div key={n.label} className="bg-background/85 px-8 py-12 text-center backdrop-blur-sm">
                <p className="text-[0.6rem] tracked text-oak">{n.label}</p>
                <ul className="mt-6 space-y-3">
                  {n.items.map((i) => (
                    <li key={i} className="text-sm tracked-tight text-foreground/90">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="shop" className="bg-ivory text-ivory-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center">
            <img
              src={productImg}
              alt="OAKWOOD 50ML parfum bottle by Sarkar"
              width={1008}
              height={1008}
              loading="lazy"
              className="w-full max-w-sm"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-[0.6rem] tracked text-ivory-foreground/60">Eau De Parfum</p>
            <h2 className="mt-5 text-3xl font-light tracked sm:text-5xl">Oakwood</h2>
            <p className="mt-4 text-[0.65rem] tracked text-ivory-foreground/70">50 ML</p>
            <p className="mt-6 text-2xl font-light">₹799</p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-ivory-foreground/75">
              Your everyday signature scent, made to leave a lasting impression.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 md:items-start">
              <a href="#final" className="btn-outline-dark">
                Shop Oakwood
              </a>
              <p className="text-[0.6rem] tracked text-ivory-foreground/50">
                Free shipping · Two 7ml freebies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OAKWOOD */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="eyebrow">Character</p>
            <h2 className="mt-6 text-2xl font-light tracked sm:text-4xl">Why Oakwood</h2>
          </div>
          <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {PERSONALITY.map((p, idx) => (
              <div key={p.title} className="text-center">
                <p className="text-[0.6rem] tracked text-oak">0{idx + 1}</p>
                <h3 className="mt-5 text-lg font-light tracked">{p.title}</h3>
                <div className="mx-auto mt-5 h-px w-10 bg-border" />
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final" className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src={ctaImg}
          alt="OAKWOOD parfum in warm light"
          width={1920}
          height={1088}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/90" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center md:text-right">
          <h2 className="ml-auto max-w-xl text-3xl font-light tracked sm:text-5xl">
            Make Oakwood your signature.
          </h2>
          <p className="ml-auto mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
            Discover a fragrance built around warmth, confidence and character.
          </p>
          <a href="#shop" className="btn-outline mt-10">
            Shop Oakwood
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center">
        <p className="text-sm tracked">Sarkar</p>
        <p className="mt-4 text-[0.6rem] tracked text-muted-foreground">
          Unisex in spirit. Absolute in command.
        </p>
      </footer>
    </div>
  );
}
