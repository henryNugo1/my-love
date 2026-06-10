import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Paints", id: "paint" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function goTo(id: string) {
    setOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    navigate("/", { state: { scrollTo: id } });
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    if (location.pathname !== "/") {
      if (location.pathname.includes("projects")) setActiveId("projects");
      if (location.pathname.includes("paint")) setActiveId("paint");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0,
      },
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/65 backdrop-blur-3xl border-b border-[#C9A45C]/30 shadow-2xl"
            : "bg-black/35 backdrop-blur-2xl border-b border-[#C9A45C]/20"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-12 py-3 md:py-4 flex items-center justify-between">
          <button
            onClick={() => goTo("home")}
            className="group flex items-center gap-3 md:gap-4"
          >
            <img
              src={logo}
              alt="Sapphire & Beryl Logo"
              className="h-12 md:h-16 w-auto object-contain transition duration-700 group-hover:scale-105 group-hover:rotate-[2deg]"
            />

            <div className="hidden md:block text-left">
              <h1 className="text-[#C9A45C] text-base lg:text-lg tracking-[0.32em] uppercase leading-none transition-transform duration-700 ease-out group-hover:translate-x-1">
                {" "}
                Sapphire & Beryl
              </h1>

              <p className="mt-2 text-[9px] lg:text-[10px] tracking-[0.22em] uppercase text-white/45 transition-transform duration-700 ease-out group-hover:translate-x-1">
                {" "}
                Interior Design | Home Finishing | Paint Line
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className={`group relative text-[0.72rem] uppercase tracking-[0.25em] transition ${
                  activeId === l.id
                    ? "text-[#C9A45C]"
                    : "text-white/65 hover:text-[#C9A45C]"
                }`}
              >
                {l.label}

                <span
                  className={`absolute -bottom-3 left-0 h-px bg-[#C9A45C] transition-all duration-500 ${
                    activeId === l.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden group">
            <div className="space-y-1.5">
              <span className="block w-6 h-px bg-[#C9A45C] group-hover:w-4 transition-all" />
              <span className="block w-4 h-px bg-[#C9A45C] group-hover:w-6 transition-all" />
            </div>
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/35 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[78%] max-w-[320px] bg-black/55 backdrop-blur-2xl border-l border-[#C9A45C]/25 text-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          <img src={logo} alt="Sapphire & Beryl Logo" className="h-14 w-auto" />

          <button
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.3em] uppercase text-white/60 hover:text-[#C9A45C]"
          >
            Close
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-8 px-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className={`text-base tracking-[0.25em] uppercase transition text-left ${
                activeId === l.id
                  ? "text-[#C9A45C]"
                  : "text-white/70 hover:text-[#C9A45C]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-10 left-8 text-xs tracking-[0.3em] text-[#C9A45C]/50">
          Sapphire & Beryl
        </div>
      </div>
    </>
  );
}
