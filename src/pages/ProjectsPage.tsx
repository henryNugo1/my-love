import { Reveal } from "../components/Reveal";
import { useNavigate } from "react-router-dom";

import proj1 from "../assets/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import proj2 from "../assets/images/kam-idris-hYb7kbu4x7E-unsplash.jpg";
import proj3 from "../assets/images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg";
import proj4 from "../assets/images/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import proj5 from "../assets/images/huy-nguyen-fQgYAnWVFeo-unsplash.jpg";
import proj6 from "../assets/images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg";

// 🎥 videos
import vid1 from "../assets/videos/ha3.mp4";
import vid2 from "../assets/videos/ta1.mp4";
import vid3 from "../assets/videos/ta2.mp4";

const projects = [
  {
    img: proj1,
    title: "Minimal Residence",
    desc: "A quiet composition of light, shadow, and natural textures.",
  },
  {
    img: proj2,
    title: "Urban Apartment",
    desc: "Refined spatial flow within a dense architectural context.",
  },
  {
    img: proj3,
    title: "Concrete Loft",
    desc: "Raw surfaces softened through tonal layering.",
  },
  {
    img: proj4,
    title: "Soft Light Studio",
    desc: "Designed to shift subtly throughout the day.",
  },
  {
    img: proj5,
    title: "Textured Living",
    desc: "Material-driven interior with handcrafted finishes.",
  },
  {
    img: proj6,
    title: "Monochrome Space",
    desc: "Restrained palette focused on depth and contrast.",
  },
];

const videos = [
  { src: vid1, title: "Material Study I" },
  { src: vid2, title: "Light & Surface" },
  { src: vid3, title: "Process Detail" },
];

export function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-32 bg-[#f6f1ea] text-neutral-900">
      {/* HERO */}
      <section className="px-6 md:px-12 py-24 relative">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_50%)]" />

        <Reveal>
          <div className="max-w-3xl relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-extralight leading-tight">
              Selected projects,
              <span className="block italic text-neutral-600">
                shaped by material.
              </span>
            </h1>
          </div>
        </Reveal>
      </section>

      {/* VIDEOS */}
      <section className="px-6 md:px-12 pb-32 bg-white">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {videos.map((v, i) => (
              <div
                key={i}
                className="relative aspect-[9/16] overflow-hidden bg-black group cursor-pointer rounded-sm"
              >
                {/* VIDEO */}
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                />

                {/* OVERLAY FIX (FULL COVER) */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

                <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />

                {/* LABEL */}
                <div className="absolute bottom-5 left-5 text-xs tracking-[0.3em] uppercase text-white/70">
                  {v.title}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 md:px-12 pb-40 bg-[#f6f1ea]">
        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => navigate(`/projects/${i}`)}
                className="group cursor-pointer transition duration-700 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={p.img}
                    className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-xs tracking-[0.3em] uppercase text-white/70">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-light mb-2 group-hover:tracking-wide transition">
                    {p.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
