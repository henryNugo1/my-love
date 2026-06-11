import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";

// Existing motion videos — leave these as they are
import vid1 from "../assets/videos/ha3.mp4";
import vid2 from "../assets/videos/ta1.mp4";
import vid3 from "../assets/videos/ta2.mp4";

// Real project videos — replace these file paths when you add your real videos
import projectVid1 from "../assets/videos/The Noir Suite.mp4";
import projectVid2 from "../assets/videos/The Garden Retreat.mp4";
import projectVid3 from "../assets/videos/The Grand Living Space.mp4";
import projectVid4 from "../assets/videos/The Modern Haven.mp4";
import projectVid5 from "../assets/videos/The Future Kitchen.mp4";
import projectVid6 from "../assets/videos/The Calm Retreat.mp4";
import projectVid7 from "../assets/videos/The Creative Lounge.mp4";
import bedFitVid1 from "../assets/videos/bed-fitting-1.mp4";
import bedFitVid2 from "../assets/videos/bed-fitting-2.mp4";
import bedFitVid3 from "../assets/videos/bed-fitting-3.mp4";
type ProjectItem = {
  src: string;
  label: string;
  title: string;
  desc: string;
};

const motionVideos = [
  { src: vid1, title: "Material Study I" },
  { src: vid2, title: "Light & Surface" },
  { src: vid3, title: "Process Detail" },
];

const loopingVideos = [...motionVideos, ...motionVideos];

const projectVideos: ProjectItem[] = [
  {
    src: projectVid1,
    label: "Project 01",
    title: "The Noir Suite",
    desc: "A beautifully finished master suite designed with warm lighting, clean details, and a modern luxury feel. The combination of elegant chandeliers, custom shelving, and dark tones creates a calm and sophisticated atmosphere.",
  },

  {
    src: projectVid2,
    label: "Project 02",
    title: "The Garden Retreat",
    desc: "A modern backyard designed with elegant finishes, warm lighting, and a relaxing outdoor feel.",
  },

  {
    src: projectVid3,
    label: "Project 03",
    title: "The Grand Living Space",
    desc: "A modern family living space designed with clean finishes, warm lighting, and an open elegant layout that brings comfort and sophistication together.",
  },

  {
    src: projectVid4,
    label: "Project 04",
    title: "The Modern Haven",
    desc: "A beautifully designed apartment living room featuring clean lines, soft lighting, and modern finishes that create a calm and welcoming atmosphere.",
  },

  {
    src: projectVid5,
    label: "Project 05",
    title: "The Future Kitchen",
    desc: "A sleek modern kitchen with elegant lighting, clean lines, and a refined futuristic feel.",
  },

  {
    src: projectVid6,
    label: "Project 06",
    title: "The Calm Retreat",
    desc: "A beautifully finished restroom with warm lighting, modern details, and a calm luxury feel.",
  },

  {
    src: projectVid7,
    label: "Project 07",
    title: "The Creative Lounge",
    desc: "A bold modern space designed with creative lighting, unique styling, and a futuristic atmosphere. This project reflects our flexibility in design and shows that we are ready to bring any client idea or vision to life with a clean and modern finish.",
  },
];

const bedFittingVideos: ProjectItem[] = [
  {
    src: bedFitVid1,
    label: "Signature Bed 01",
    title: "Elegant Bed Design",
    desc: "A custom bed design with soft finishes, warm lighting, and carefully crafted details that bring comfort and style to the bedroom.",
  },
  {
    src: bedFitVid2,
    label: "Signature Bed 02",
    title: "Luxury Bed Fitting",
    desc: "A beautifully fitted bed created with quality materials and clean craftsmanship, giving the space a calm and premium feel.",
  },
  {
    src: bedFitVid3,
    label: "Signature Bed 03",
    title: "Modern Bedroom Feature",
    desc: "A bespoke bed installation designed to blend comfort and elegance, adding a timeless touch to the overall bedroom design.",
  },
];

export function ProjectsPage() {
  const [focusedMotionIndex, setFocusedMotionIndex] = useState<number | null>(
    null,
  );

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  useEffect(() => {
    if (!selectedProject) return;

    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedProject]);

  const [ripple, setRipple] = useState<{
    index: number;
    x: number;
    y: number;
    id: number;
  } | null>(null);

  function handleMotionClick(
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) {
    e.stopPropagation();

    if (focusedMotionIndex === index) {
      setFocusedMotionIndex(null);
      setRipple(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();

    setFocusedMotionIndex(index);
    setRipple({
      index,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    });
  }

  return (
    <main className="pt-28 md:pt-32 bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-12 py-20 md:py-24 bg-black">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,92,0.14),transparent_55%)]" />

        <Reveal>
          <div className="max-w-3xl relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
              Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              Selected projects,
              <span className="block italic text-[#C9A45C]">
                told through motion.
              </span>
            </h1>

            <p className="mt-6 text-white/65 max-w-2xl leading-relaxed">
              A closer look at interior design, home finishing, and paint
              application through real project videos and clear project notes.
            </p>
          </div>
        </Reveal>
      </section>

      {/* EXISTING MOTION VIDEOS */}
      <section
        onClick={() => {
          setFocusedMotionIndex(null);
          setRipple(null);
        }}
        className="px-6 md:px-12 py-16 md:py-24 bg-black"
      >
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
              In Motion
            </p>

            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Process, texture,
              <span className="block italic text-[#C9A45C]">
                and finished spaces.
              </span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

            <div
              className={`flex gap-6 animate-marquee ${
                focusedMotionIndex !== null ? "motion-paused" : ""
              }`}
            >
              {loopingVideos.map((v, i) => (
                <div
                  key={i}
                  onClick={(e) => handleMotionClick(e, i)}
                  className={`relative min-w-[260px] md:min-w-[320px] aspect-[4/5] overflow-hidden bg-neutral-900 group cursor-pointer rounded-sm transition duration-500 ${
                    focusedMotionIndex === i
                      ? "scale-[1.03] ring-1 ring-[#C9A45C]/60 z-20"
                      : ""
                  }`}
                >
                  <video
                    src={v.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500" />
                  <div className="absolute inset-0 ring-1 ring-[#C9A45C]/20 pointer-events-none" />
                  {ripple?.index === i && (
                    <span
                      key={ripple.id}
                      className="ripple-effect"
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                      }}
                    />
                  )}

                  <div className="absolute bottom-5 left-5 text-xs tracking-[0.3em] uppercase text-white/75">
                    {v.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* REAL PROJECT VIDEOS */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-[#EDE4D7] text-black">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A6A2F] mb-4">
              Real Projects
            </p>

            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Seven featured
              <span className="block italic text-[#8A6A2F]">
                project stories.
              </span>
            </h2>

            <p className="mt-6 text-[#5E564B] leading-relaxed">
              Each project will include a video preview and a short description
              explaining the work done, materials used, and final result.
            </p>
          </div>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {projectVideos.map((project, index) => (
            <Reveal key={index}>
              <article
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* VIDEO */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[4/5] max-w-[320px] overflow-hidden rounded-sm bg-black group cursor-pointer"
                >
                  <video
                    src={project.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition duration-500" />
                  <div className="absolute inset-0 ring-1 ring-[#8A6A2F]/30 pointer-events-none" />

                  <div className="absolute bottom-5 left-5 text-xs tracking-[0.3em] uppercase text-white/75">
                    {project.label}
                  </div>
                </div>

                {/* TEXT */}
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8A6A2F] mb-4">
                    {project.label}
                  </p>

                  <h3 className="text-3xl md:text-5xl font-light leading-tight mb-6 text-black">
                    {project.title}
                  </h3>

                  <p className="text-[#5E564B] leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <div className="h-px w-24 bg-[#A27B3D]/50" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BED FITTING PROJECTS */}
      <section className="relative px-6 md:px-12 py-20 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_75%_25%,rgba(201,164,92,0.13),transparent_55%)]" />

        <Reveal>
          <div className="relative z-10 max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#C9A45C] text-xs tracking-[0.35em] uppercase">
                02
              </span>
              <span className="h-px w-16 bg-[#C9A45C]/50" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                Bed Fitting
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Bedroom fittings,
              <span className="block italic text-[#C9A45C]">
                finished with detail.
              </span>
            </h2>

            <p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
              Clean bed installation, careful alignment, and refined bedroom
              finishing for spaces that feel calm, complete, and well put
              together.
            </p>
          </div>
        </Reveal>

        <div className="relative z-10 grid md:grid-cols-3 gap-6">
          {bedFittingVideos.map((project, index) => (
            <Reveal key={index}>
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900 group cursor-pointer border border-white/10 hover:border-[#C9A45C]/40 transition duration-500"
              >
                <video
                  src={project.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-[#C9A45C]/10 pointer-events-none" />

                <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-[#C9A45C]">
                  0{index + 1}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-light text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/55 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition duration-500">
                    {project.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center px-4 py-6 overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl h-full flex flex-col items-center justify-center"
          >
            <video
              src={selectedProject.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-auto max-h-[75vh] bg-black object-contain rounded-sm"
            />

            <div className="mt-4 w-full text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-2">
                    {selectedProject.label}
                  </p>

                  <h3 className="text-2xl md:text-4xl font-light">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full text-white/80 hover:text-[#C9A45C] hover:border-[#C9A45C]/40 transition text-[10px] md:text-[11px] tracking-[0.28em] uppercase"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
