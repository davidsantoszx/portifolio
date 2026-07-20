export default function Hero({
  isDarkMode,
  scrollToSection,
}) {
  return (
    <section
      id="about"
      className="relative min-h-screen max-w-4xl mx-auto px-6 pt-32 pb-24 md:py-40 flex flex-col gap-8 fade-in-section"
    >
      <div className="space-y-6 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">

        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[color:var(--color-border)] text-xs tracking-wider uppercase font-mono bg-[color:var(--color-primary)]/10">
          <span className="w-2 h-2 rounded-full bg-[#888888] animate-pulse"></span>
          <span>Disponível para projetos</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
          <span>David </span>
          <span className="text-[#7EC8E3]">Santos</span>
        </h1>

        <h2
          className={`text-base md:text-lg font-medium tracking-wide font-mono ${
            isDarkMode
              ? "text-[color:var(--color-text-secondary)]"
              : "text-[color:var(--color-background)]"
          }`}
        >
          Full Stack Developer{" "}
          <span className="text-neutral-600">|</span> IT Support Technician{" "}
          <span className="text-neutral-600">|</span> SysAdmin
        </h2>

        <p
          className={`text-sm md:text-base leading-relaxed text-justify max-w-3xl ${
            isDarkMode
              ? "text-[color:var(--color-text)]"
              : "text-[color:var(--color-background)]"
          }`}
        >
          Profissional de TI com experiência em infraestrutura, Active
          Directory, redes e automação de processos. Atualmente atuo na
          administração de ambientes corporativos, associando essa vivência ao
          desenvolvimento de aplicações web modernas com React, JavaScript,
          Tailwind, Node e PostgreSQL, criando soluções modernas e agregando
          máxima eficiência operacional.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap gap-4 pt-2">

          <button
            onClick={() => scrollToSection("projects")}
            className={`font-mono text-xs md:text-sm tracking-widest px-8 py-4 transition-all font-bold uppercase border rounded-none ${
              isDarkMode
                ? "bg-[color:var(--color-primary)] text-white border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)]"
                : "bg-[#171A18] text-white border-neutral-900 hover:bg-neutral-800"
            }`}
          >
            → Ver projetos
          </button>

          <a
            href="https://www.linkedin.com/in/davidsantoszx/"
            target="_blank"
            rel="noreferrer"
            className={`font-mono text-xs md:text-sm tracking-widest px-8 py-4 transition-all font-bold uppercase border rounded-none ${
              isDarkMode
                ? "border-[color:var(--color-border)] text-[color:var(--color-text)] hover:border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/10"
                : "border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100"
            }`}
          >
            LinkedIn ↗
          </a>

        </div>

      </div>

{/* Indicador de Scroll */}

<div className="absolute left-[-100px] bottom-10 hidden lg:flex flex-col items-center animate-scroll pointer-events-none">


  <div className="mt-3 w-px h-12 bg-[color:var(--color-border)]"></div>

  <svg
    className="w-5 h-5 mt-2 text-[color:var(--color-text-secondary)]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M12 5v14m0 0l-5-5m5 5l5-5"
    />
  </svg>

</div>

    </section>
  );
}