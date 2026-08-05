import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";
import { ViewportVideo } from "../components/ViewportVideo";
import { cloudinaryImage, cloudinaryVideo } from "../lib/cloudinary";

const bucket1 = cloudinaryImage("orange_cpu0eh", "webp");
const bucket2 = cloudinaryImage("green_c1yg7l", "webp");
const bucket3 = cloudinaryImage("brown_p0hggc", "webp");
const bucket4 = cloudinaryImage("blue_utf1q2", "webp");
const texture1 = cloudinaryImage("black_faihql", "jpg");
const texture2 = cloudinaryImage("Blue_yqwkuk", "jpg");
const texture3 = cloudinaryImage("Brown_pjt8ii", "jpg");
const texture4 = cloudinaryImage("Cream_pidnrn", "jpg");
const texture5 = cloudinaryImage("wood_n8rj9m", "jpg");
const texture6 = cloudinaryImage("wood_patern_ohahus", "jpg");
const paint1 = cloudinaryVideo("paint-1_egtets");
const paint2 = cloudinaryVideo("paint-2_w2gsk7");
const paint3 = cloudinaryVideo("paint-3_se669i");
const paint4 = cloudinaryVideo("paint-4_obfjok");
const paint5 = cloudinaryVideo("paint-5_orglbv");

export function PaintPage() {
  const bucketSectionRef = useRef<HTMLElement | null>(null);
  const [bucketsVisible, setBucketsVisible] = useState(false);
  const [selectedPaintProject, setSelectedPaintProject] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedPaintProject) return;

    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedPaintProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBucketsVisible(true);
        }
      },
      { threshold: 0.35 },
    );

    if (bucketSectionRef.current) {
      observer.observe(bucketSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const paintBuckets = [
    { img: bucket1, name: "Eggshell Finish" },
    { img: bucket2, name: "Emulsion Paint" },
    { img: bucket3, name: "Matt Finish" },
    { img: bucket4, name: "Satin Finish" },
  ];
  const textures = [
    { img: texture1, name: "Obsidian", tone: "Deep Matte" },
    { img: texture2, name: "Azure", tone: "Mineral Blue" },
    { img: texture3, name: "Terra", tone: "Warm Earth" },
    { img: texture4, name: "Limewash", tone: "Soft Cream" },
    { img: texture5, name: "Oak Vein", tone: "Organic Wood" },
    { img: texture6, name: "Raw Grain", tone: "Textured Pattern" },
  ];

  const paintProjects = [
    {
      src: paint1,
      title: "Exterior Paint Renewal",
      desc: "A clean exterior repaint focused on fresh colour, smooth coverage, and a neat lasting finish for the building.",
    },
    {
      src: paint2,
      title: "Outdoor Wall Finish",
      desc: "A careful exterior painting project designed to improve the look of the property with even application and strong surface coverage.",
    },
    {
      src: paint3,
      title: "Facade Painting",
      desc: "A refined exterior finish that gives the building a cleaner, brighter, and more complete appearance.",
    },
    {
      src: paint4,
      title: "Building Paint Upgrade",
      desc: "A professional paint application created to refresh the exterior and give the property a polished finish.",
    },
    {
      src: paint5,
      title: "Exterior Colour Finish",
      desc: "A smooth exterior coating project showing clean workmanship, balanced colour, and durable paint coverage.",
    },
  ];

  return (
    <main className="pt-28 md:pt-32 bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-12 py-20 md:py-24 bg-black">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,92,0.14),transparent_55%)]" />

        <Reveal>
          <div className="max-w-3xl relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
              Patreon Paint
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              Coat Once,
              <span className="block italic text-[#C9A45C]">Stains Twice.</span>
            </h1>

            <p className="mt-6 text-white/65 max-w-xl leading-relaxed">
              Patreon Paint offers smooth coverage, rich colour, and durable
              finishes for interior and exterior spaces.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PAINT BUCKET SHOWCASE */}
      <section ref={bucketSectionRef} className="px-6 md:px-12 pb-20 bg-black">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-[#F6F1EA] px-6 py-12 md:px-12 md:py-16">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,rgba(201,164,92,0.18),transparent_60%)]" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 items-end">
              {paintBuckets.map((bucket, index) => (
                <div
                  key={bucket.name}
                  className={`group flex flex-col items-center ${
                    bucketsVisible
                      ? "paint-bucket-row-slide"
                      : "opacity-0 translate-x-24"
                  }`}
                  style={{
                    animationDelay: `${index * 180}ms`
                  }}
                >
                  <img
                    src={bucket.img}
                    alt={`${bucket.name} paint bucket`}
                    loading="lazy"
                    className="w-full max-w-[170px] md:max-w-[220px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition duration-700 group-hover:scale-105"
                  />

                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#8A6A2F]">
                    {bucket.name}
                  </p>
                </div>
              ))}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {textures.map((t, i) => (
              <div
                key={i}
                className="premium-card group relative overflow-hidden rounded-sm cursor-pointer bg-black shadow-sm transition duration-700 hover:-translate-y-2 hover:scale-[1.03]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
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
            <div className="premium-card relative overflow-hidden rounded-sm bg-black min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-center text-center px-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,164,92,0.22),transparent_60%)]" />

              <p className="relative text-5xl font-light text-[#C9A45C]">+</p>

              <h3 className="relative mt-4 text-lg font-light text-white">
                And Many More
              </h3>

              <p className="relative mt-3 text-xs leading-relaxed text-white/55">
                More colours, textures, and finishes are available for different
                spaces.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
      {/* PAINT PROJECTS */}
      <section className="relative px-6 md:px-12 py-20 md:py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,92,0.12),transparent_55%)]" />

        <Reveal>
          <div className="relative z-10 max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
              Exterior Projects
            </p>

            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Exterior painting,
              <span className="block italic text-[#C9A45C]">
                finished with precision.
              </span>
            </h2>

            <p className="mt-5 text-white/65 leading-relaxed max-w-2xl">
              Real exterior painting projects showing clean application, smooth
              coverage, and durable finishes with Patreon Paint.
            </p>
          </div>
        </Reveal>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {paintProjects.map((project, index) => (
            <Reveal key={index}>
              <button
                onClick={() => setSelectedPaintProject(project)}
                className="group text-left w-full"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-neutral-950">
                  <ViewportVideo
                    src={project.src}
                    className="absolute inset-0 w-full h-full object-contain bg-black transition duration-[1200ms] group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />
                  <div className="absolute inset-0 ring-1 ring-[#C9A45C]/20 pointer-events-none" />

                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-[#C9A45C]">
                    0{index + 1}
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-light text-white group-hover:text-[#C9A45C] transition">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      {selectedPaintProject && (
        <div
          onClick={() => setSelectedPaintProject(null)}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center px-4 py-6 overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-full flex flex-col items-center justify-center"
          >
            <video
              src={selectedPaintProject.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-auto max-h-[75vh] bg-black object-contain rounded-sm"
            />

            <div className="mt-4 w-full flex items-center justify-between gap-4 text-white">
              {" "}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-2">
                  Exterior Project
                </p>

                <h3 className="text-2xl md:text-4xl font-light">
                  {selectedPaintProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPaintProject(null)}
                className="shrink-0 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-white/80 hover:text-[#C9A45C] hover:border-[#C9A45C]/40 transition text-[10px] tracking-[0.28em] uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
