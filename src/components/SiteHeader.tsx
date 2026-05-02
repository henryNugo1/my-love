import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Paint", id: "paint" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function goTo(id: string) {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl tracking-tight text-white drop-shadow-md">
          Maren <span className="italic text-blue-500">&amp; Co.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors drop-shadow-md"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setOpen(!open)} className="text-black">
            <div className="space-y-1.5">
              <span className="block w-6 h-px bg-black" />
              <span className="block w-6 h-px bg-black" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  document
                    .getElementById(l.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="text-sm uppercase tracking-[0.22em]"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
