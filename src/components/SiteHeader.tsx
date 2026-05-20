import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Paints ", id: "paint" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function goTo(id: string) {
    navigate(`/#${id}`);
    setOpen(false);
  }

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-[#C9A45C]/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => goTo("home")}
            className="cursor-pointer flex items-center gap-4"
          >
            {/* LOGO IMAGE */}
            <img
              src={logo}
              alt="Sapphire & Beryl Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />

            {/* LOGO TEXT */}
            <div className="hidden md:block">
              <h1 className="text-[#C9A45C] text-lg tracking-[0.35em] uppercase leading-none">
                Sapphire & Beryl
              </h1>

              <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-white/50">
                Interior Design | Home Finishing | Paint Line
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="text-[0.75rem] uppercase tracking-[0.25em] text-white/70 hover:text-[#C9A45C] transition"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setOpen(true)} className="md:hidden group">
            <div className="space-y-1.5">
              <span className="block w-6 h-px bg-white group-hover:w-4 transition-all" />
              <span className="block w-4 h-px bg-white group-hover:w-6 transition-all" />
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY (background dim) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[52%] max-w-[300px]
  bg-black/60 backdrop-blur-xl border-l border-white/10
  text-white z-50 transform transition-transform duration-400 ease-out ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
      >
        {/* BACK BUTTON */}
        <div className="p-6">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-white/70 hover:text-[#C9A45C] transition"
          >
            <span className="text-xl">←</span>
            <span className="text-xs tracking-[0.3em] uppercase">Back</span>
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="mt-10 flex flex-col gap-8 px-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="text-lg tracking-[0.3em] uppercase text-white/70 hover:text-[#C9A45C] transition text-left"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* FOOTER BRAND */}
        <div className="absolute bottom-10 left-8 text-xs tracking-[0.3em] text-white/30">
          Maren & Co.
        </div>
      </div>
    </>
  );
}
