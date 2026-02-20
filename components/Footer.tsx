const WA_LINK = "https://wa.me/56957394822";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ backgroundColor: "#1a0f07", borderColor: "#2d1c10" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="font-display text-xl tracking-[0.3em] uppercase font-semibold"
          style={{ color: "#b8924a" }}
        >
          Solkinest
        </span>

        <p
          className="text-xs text-center"
          style={{ color: "#4a3828", fontFamily: "var(--font-jost)" }}
        >
          © {new Date().getFullYear()} Solkinest SpA · Viña del Mar, Chile
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase transition-colors hover:text-gold"
          style={{ color: "#6b5a4a", fontFamily: "var(--font-jost)" }}
        >
          +56 9 5739 4822
        </a>
      </div>
    </footer>
  );
}
