import { Reveal } from "../components/Reveal";
import paintImg from "../assets/images/paint.jpg";

import texture1 from "../assets/images/black.jpg";
import texture2 from "../assets/images/Blue.jpg";
import texture3 from "../assets/images/Brown.jpg";
import texture4 from "../assets/images/Cream.jpg";
import texture5 from "../assets/images/wood.jpg";
import texture6 from "../assets/images/wood patern.jpg";

// 👉 add your videos
import vid1 from "../assets/videos/ta3.mp4";
import vid2 from "../assets/videos/ha1.mp4";
import vid3 from "../assets/videos/ha2.mp4";

export function PaintPage() {
  const textures = [
    { img: texture1, name: "Obsidian", tone: "Deep Matte" },
    { img: texture2, name: "Azure", tone: "Mineral Blue" },
    { img: texture3, name: "Terra", tone: "Warm Earth" },
    { img: texture4, name: "Limewash", tone: "Soft Cream" },
    { img: texture5, name: "Oak Vein", tone: "Organic Wood" },
    { img: texture6, name: "Raw Grain", tone: "Textured Pattern" },
  ];

  const videos = [vid1, vid2, vid3];

  return (
    <main className="pt-32 bg-[#f8f5f0] text-neutral-900">
      {/* HERO */}
      <section className="px-6 md:px-12 py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Surface Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-extralight leading-tight">
              Mineral paint,
              <span className="block italic text-neutral-600">
                crafted by hand.
              </span>
            </h1>

            <p className="mt-6 text-neutral-600 max-w-xl">
              A curated palette of mineral finishes designed to respond to
              light, texture, and space.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-6 md:px-12 pb-20">
        <Reveal>
          <div className="aspect-[16/9] overflow-hidden rounded-sm">
            <img src={paintImg} className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* TEXTURE PALETTE (🔥 PREMIUM SECTION) */}
      <section className="px-6 md:px-12 py-28">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              Material Palette
            </h2>

            <p className="text-neutral-600">
              Each finish is developed through layered mineral application,
              creating subtle variation and depth across every surface.
            </p>
          </div>

          {/* PALETTE GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {textures.map((t, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                {/* IMAGE */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={t.img}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                {/* TEXT */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {t.tone}
                  </p>
                  <h3 className="text-lg font-light">{t.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VIDEO SHOWCASE (🔥 replaces before/after) */}
      <section className="px-6 md:px-12 py-32 bg-white">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              In Space
            </h2>

            <p className="text-neutral-600">
              Real environments showcasing how finishes interact with light,
              movement, and architecture.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {videos.map((v, i) => (
              <div
                key={i}
                className="min-w-[240px] md:min-w-[280px] aspect-[9/16] overflow-hidden rounded-sm bg-black"
              >
                <video
                  src={v}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
