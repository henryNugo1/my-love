import { SiteHeader } from "./components/SiteHeader";
import { Reveal } from "./components/Reveal";
import heroImage from "./assets/images/build-craft-interiors-T3IG80KOLYQ-unsplash.jpg";
import heroImage2 from "./assets/images/kam-idris-U39FPHKfDu0-unsplash.jpg";
import proj1 from "./assets/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import proj2 from "./assets/images/kam-idris-hYb7kbu4x7E-unsplash.jpg";
import proj3 from "./assets/images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg";
import proj4 from "./assets/images/florian-schmidinger-b_79nOqf95I-unsplash.jpg";
import proj5 from "./assets/images/huy-nguyen-fQgYAnWVFeo-unsplash.jpg";
import proj6 from "./assets/images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg";
import paintImg from "./assets/images/paint.jpg";
import logo from "./assets/images/logo.png";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { PaintPage } from "./pages/PaintPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";

const heroImages = [heroImage, heroImage2];
const projectImages = [proj1, proj2, proj3, proj4, proj5, proj6];
const loopingProjectImages = [...projectImages, ...projectImages];

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xqejayjr");

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Luxury interior design"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-in-out ${
                index === heroIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 pt-12 md:pt-0">
          <div className="w-full md:w-[55%] lg:w-[45%]">
            <div className="text-white">
              <img
                src={logo}
                alt="Sapphire & Beryl Logo"
                className="block md:hidden h-24 w-auto mb-6"
              />

              <p className="text-[12px] md:text-xs uppercase tracking-[0.22em] md:tracking-[0.35em] text-[#C9A45C]">
                Interior Design • Home Finishing • Paint Line
              </p>

              <h1 className="mt-4 text-[2.45rem] sm:text-5xl md:text-6xl font-light leading-[1.05] tracking-tight">
                Refined interiors,
                <span className="block italic text-[#C9A45C]">
                  finished with elegance.
                </span>
              </h1>

              <p className="mt-4 text-[15px] md:text-lg text-white/80 leading-relaxed max-w-md">
                We create elegant interiors, refined home finishes, and premium
                paint solutions designed to bring beauty and comfort into every
                space.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-5 py-3 border border-white/60 text-white hover:border-[#C9A45C] hover:text-[#C9A45C] transition w-full sm:w-auto text-center"
                >
                  View Work
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-5 py-3 bg-[#C9A45C] text-black hover:bg-[#b89145] transition shadow-lg w-full sm:w-auto text-center"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative px-6 md:px-12 py-24 md:py-36 overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(201,164,92,0.12),transparent_60%)]" />

        <div className="max-w-2xl mb-16 md:mb-20 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-4">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-6">Projects</h2>

          <p className="text-white/70 leading-relaxed">
            A curated selection of interiors, finishes, and material-driven
            spaces where light, texture, and craftsmanship define each
            environment.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex gap-8 animate-scroll-slow">
            {loopingProjectImages.map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-[260px] md:w-[340px] aspect-[4/5] overflow-hidden rounded-sm relative group bg-neutral-900"
              >
                <img
                  src={img}
                  alt="Interior project"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />
                <div className="absolute inset-0 ring-1 ring-[#C9A45C]/10 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center relative z-10">
          <button
            onClick={() => navigate("/projects")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#C9A45C]/50 text-[#C9A45C] uppercase tracking-widest text-xs hover:border-[#C9A45C] transition"
          >
            <span>View Projects</span>
            <span className="transform transition group-hover:translate-x-2">
              →
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A45C] group-hover:w-full transition-all duration-500"></span>
          </button>
        </div>
      </section>

      {/* PAINT */}
      <section
        id="paint"
        className="relative px-6 md:px-12 py-24 md:py-36 bg-[#F6F1EA] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,rgba(201,164,92,0.18),transparent_60%)]" />

        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={paintImg}
                  alt="Paint collection"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-6 left-6 bg-black/80 text-[#C9A45C] backdrop-blur px-4 py-2 text-xs tracking-widest uppercase">
                Premium Paints
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8A6A2F] mb-4">
                Paint Line
              </p>

              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-black">
                Premium Paint,
                <span className="block italic text-[#8A6A2F]">
                  made for refined spaces.
                </span>
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-8">
                Our paint line is created to support beautiful interiors with
                rich color, smooth finishing, and long-lasting elegance for
                homes and commercial spaces.
              </p>

              <div className="space-y-3 text-sm text-neutral-700">
                <p>• Elegant color finishes</p>
                <p>• Smooth and lasting application</p>
                <p>• Designed for modern interiors</p>
              </div>

              <button
                onClick={() => navigate("/paint")}
                className="mt-10 px-6 py-3 border border-black text-black hover:bg-black hover:text-[#C9A45C] transition"
              >
                Explore Paint Line
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative px-6 md:px-12 py-24 md:py-40 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A45C]/10 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neutral-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        </div>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8A6A2F] mb-6">
                The Studio
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-black">
                Built on beauty,
                <span className="block italic text-[#8A6A2F]">
                  refined through detail.
                </span>
              </h2>

              <p className="text-neutral-600 leading-relaxed mb-6">
                Sapphire & Beryl creates beautiful and functional spaces through
                interior design, home finishing, and premium paint solutions.
                Every project is guided by detail, elegance, and lasting
                quality.
              </p>

              <p className="text-neutral-500 leading-relaxed">
                From concept to final finish, every detail is intentional.
              </p>
            </div>

            <div className="relative h-[420px] md:h-[500px]">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-neutral-200 overflow-hidden group">
                <img
                  src={proj5}
                  alt="Interior studio process"
                  className="w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-neutral-300 overflow-hidden group">
                <img
                  src={proj1}
                  alt="Interior finishing detail"
                  className="w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />
              </div>

              <div className="absolute top-6 right-6 bg-black/80 text-[#C9A45C] backdrop-blur px-4 py-2 text-xs tracking-widest uppercase">
                Studio Process
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 md:px-12 py-24 md:py-40 bg-black text-white"
      >
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-6">
                Start a Project
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Let’s create something
                <span className="block italic text-[#C9A45C]">
                  worth experiencing.
                </span>
              </h2>

              <p className="text-white/70 max-w-md mb-10">
                Tell us about your space, your vision, or even just a rough
                idea. We’ll guide you through design, finishing, paint choices,
                and the full process.
              </p>

              <div className="space-y-4 text-sm text-white/60">
                <p>sapphireberyl12@gmail.com</p>
                <p>+2348039443920</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/30 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#C9A45C]"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/30 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#C9A45C]"
                required
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-transparent border-b border-white/30 py-3 placeholder:text-white/40 focus:outline-none focus:border-[#C9A45C] resize-none"
                required
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-6 px-6 py-3 bg-[#C9A45C] text-black hover:bg-[#b89145] transition disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Inquiry"}
              </button>

              {state.succeeded && (
                <p className="text-sm text-[#C9A45C] tracking-wide">
                  Thank you. Your inquiry has been received successfully.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/2348039443920"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="w-14 h-14 rounded-full bg-[#C9A45C] flex items-center justify-center shadow-lg hover:scale-110 transition">
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-black transition">
            <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.887.754 5.706 2.188 8.19L0 32l7.61-2.145a15.93 15.93 0 008.39 2.293c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.187c-2.53 0-5.01-.68-7.17-1.97l-.51-.303-4.52 1.273 1.21-4.4-.33-.52a13.58 13.58 0 01-2.1-7.27c0-7.49 6.1-13.59 13.59-13.59 3.63 0 7.04 1.41 9.6 3.97a13.48 13.48 0 013.98 9.6c0 7.49-6.1 13.59-13.59 13.59zm7.45-10.13c-.41-.2-2.43-1.2-2.81-1.33-.38-.14-.66-.2-.94.2-.28.41-1.08 1.33-1.32 1.6-.24.27-.48.3-.9.1-.41-.2-1.73-.64-3.3-2.03-1.22-1.08-2.05-2.41-2.29-2.82-.24-.41-.03-.63.18-.83.19-.18.41-.48.62-.72.21-.24.28-.41.42-.68.14-.27.07-.51-.03-.72-.1-.2-.94-2.27-1.29-3.1-.34-.82-.68-.71-.94-.72-.24-.01-.51-.01-.78-.01-.27 0-.72.1-1.1.51-.38.41-1.45 1.42-1.45 3.46s1.49 4.01 1.7 4.28c.21.27 2.94 4.49 7.13 6.29.99.43 1.76.69 2.36.88.99.31 1.89.27 2.6.17.79-.12 2.43-.99 2.78-1.95.34-.96.34-1.78.24-1.95-.1-.17-.38-.27-.79-.48z" />
          </svg>
        </div>
      </a>
    </main>
  );
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paint" element={<PaintPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
