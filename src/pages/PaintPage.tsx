import { Reveal } from "../components/Reveal";
import paintImg from "../assets/images/paint.jpg";

import texture1 from "../assets/images/black.jpg";
import texture2 from "../assets/images/Blue.jpg";
import texture3 from "../assets/images/Brown.jpg";
import texture4 from "../assets/images/Cream.jpg";
import texture5 from "../assets/images/wood.jpg";
import texture6 from "../assets/images/wood patern.jpg";

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
    <main className="pt-28 md:pt-32 bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-12 py-20 md:py-24 bg-black">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,92,0.14),transparent_55%)]" />

        <Reveal>
          <div className="max-w-3xl relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
              Paint Line
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              Premium paint,
              <span className="block italic text-[#C9A45C]">
                crafted for refined spaces.
              </span>
            </h1>

            <p className="mt-6 text-white/65 max-w-xl leading-relaxed">
              A curated collection of elegant paint finishes designed to bring
              depth, warmth, and lasting beauty into modern interiors.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-6 md:px-12 pb-20 bg-black">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-neutral-900">
            <img
              src={paintImg}
              alt="Premium paint finish"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 ring-1 ring-[#C9A45C]/20 pointer-events-none" />

            <div className="absolute bottom-6 left-6 bg-black/75 text-[#C9A45C] backdrop-blur px-4 py-2 text-xs tracking-[0.25em] uppercase">
              Sapphire & Beryl Paints
            </div>
          </div>
        </Reveal>
      </section>

      {/* TEXTURE PALETTE */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-[#EDE4D7] text-black">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A6A2F] mb-4">
              Colour & Finish
            </p>

            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Material Palette
            </h2>

            <p className="text-[#5E564B] leading-relaxed">
              Each finish is selected to complement interior spaces with rich
              tone, subtle texture, and a polished final appearance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {textures.map((t, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-sm cursor-pointer bg-black shadow-sm transition duration-700 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/45 transition duration-500" />
                <div className="absolute inset-0 ring-1 ring-[#8A6A2F]/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <p className="text-xs uppercase tracking-widest text-[#C9A45C]">
                    {t.tone}
                  </p>
                  <h3 className="text-lg font-light">{t.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-black text-white">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
              In Space
            </p>

            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Finishes that respond
              <span className="block italic text-[#C9A45C]">
                to light and movement.
              </span>
            </h2>

            <p className="text-white/65 leading-relaxed">
              Real environments showcasing how premium finishes interact with
              architecture, texture, and everyday living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900 group"
              >
                <video
                  src={v}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
                <div className="absolute inset-0 ring-1 ring-[#C9A45C]/20 pointer-events-none" />

                <div className="absolute bottom-5 left-5 text-xs tracking-[0.3em] uppercase text-white/75">
                  Paint Finish
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}