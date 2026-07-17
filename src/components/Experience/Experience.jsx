export default function Experience({ experiences }) {
  return (
    <section id="experiences" className="max-w-4xl mx-auto px-6 py-24 fade-in-section">
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Experência Profissional
        </h2>

        <p className="text-[color:var(--text-secondary)] max-w-xl text-sm">
          Evolução de responsabilidades, cuidando da integridade de dados e aplicando automação técnica.
        </p>
      </div>

      <div className="relative border-l border-neutral-500/10 pl-6 md:pl-8 ml-4 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">

            <div
            className="absolute -left-[31px] md:-left-[39px] top-1.5 border-2 border-neutral-500 rounded-full w-4 h-4 flex items-center justify-center bg-[color:var(--background)] group-hover:scale-110 hover:-translate-y-1 hover:border-[color:var(--primary)] transition-all duration-300" >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold group-hover:text-[color:var(--secondary)] transition-colors">
                {exp.title}
              </h3>

              <span className="text-[11px] font-mono px-3 py-1 rounded border border-neutral-500/10 bg-[color:var(--primary)]/10 text-[color:var(--text-secondary)] w-fit">
                {exp.period}
              </span>
            </div>

            <h4 className="text-xs md:text-sm font-semibold opacity-70 mb-4 flex flex-wrap items-center gap-2">
              <span>{exp.company}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-normal text-[color:var(--text-secondary)]">{exp.type}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-normal text-[color:var(--text-secondary)]">{exp.location}</span>
            </h4>

            <p className="text-xs md:text-sm leading-relaxed text-[color:var(--text-secondary)] text-justify">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}