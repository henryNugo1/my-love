type SectionTitleProps = {
  number: string;
  label: string;
  title: string;
  accent: string;
  desc?: string;
  dark?: boolean;
};

export function SectionTitle({
  number,
  label,
  title,
  accent,
  desc,
  dark = true,
}: SectionTitleProps) {
  return (
    <div className="section-title relative max-w-3xl overflow-visible">
        <div className="section-glow -top-24 -left-24 absolute pointer-events-none" />
      <div
        className={`absolute -top-10 -left-2 text-7xl md:text-9xl font-light tracking-[-0.08em] pointer-events-none ${
          dark ? "text-white/[0.04]" : "text-black/[0.04]"
        }`}
      >
        {number}
      </div>

      <div className="relative flex items-center gap-4 mb-5">
        <span
          className={`text-xs tracking-[0.35em] uppercase ${
            dark ? "text-[#C9A45C]" : "text-[#8A6A2F]"
          }`}
        >
          {number}
        </span>

        <span
          className={`section-title-line h-px w-20 ${
            dark ? "bg-[#C9A45C]/60" : "bg-[#8A6A2F]/60"
          }`}
        />

        <p
          className={`text-xs uppercase tracking-[0.3em] ${
            dark ? "text-[#C9A45C]" : "text-[#8A6A2F]"
          }`}
        >
          {label}
        </p>
      </div>

      <h2
        className={`relative text-3xl md:text-5xl font-light leading-tight ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}
        <span
          className={`block italic ${
            dark ? "text-[#C9A45C]" : "text-[#8A6A2F]"
          }`}
        >
          {accent}
        </span>
      </h2>

      {desc && (
        <p
          className={`relative mt-6 leading-relaxed max-w-2xl ${
            dark ? "text-white/65" : "text-[#5E564B]"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
