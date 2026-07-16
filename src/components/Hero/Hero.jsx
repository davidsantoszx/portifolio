
export default function Hero({
  isDarkMode,
  scrollToSection,
}) {
  return (



      <section id="about" className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:py-40 flex flex-col gap-8 fade-in-section">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-neutral-500/10 text-xs tracking-wider uppercase font-mono bg-[#556B2F]/5">
            <span className="w-2 h-2 rounded-full bg-[#888888] animate-pulse"></span>
            <span>Disponível para projetos corporativos</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            David Santos
          </h1>
          
          <h2 className="text-base md:text-lg font-medium tracking-wide font-mono text-[#BFC9BF]">
            Full Stack Developer <span className="text-neutral-600">|</span> IT Support Technician <span className="text-neutral-600">|</span> SysAdmin
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-[#BFC9BF] text-justify max-w-3xl">
            Profissional de TI com experiência em infraestrutura, Active Directory, redes e automação de processos. Atualmente atuo na administração de ambientes corporativos, aplicando essa vivência ao desenvolvimento de aplicações web modernas com React, JavaScript, Tailwind, Node e PostgreSQL, criando soluções modernas e agregando máxima eficiência operacional.
          </p>

          {/* Botões do Hero (Idêntico a image_437cc5.png) */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Botão Ver Projetos (Canto Seco e Sólido) */}
            <button 
              onClick={() => scrollToSection('projects')}
              className={`font-mono text-xs md:text-sm tracking-widest px-8 py-4 transition-all font-bold uppercase border rounded-none ${
                isDarkMode 
                  ? 'bg-neutral-100 text-neutral-900 border-neutral-100 hover:bg-neutral-200' 
                  : 'bg-[#171A18] text-white border-neutral-900 hover:bg-neutral-800'
              }`}
            >
              <span>→ Ver projetos</span>
            </button>

            {/* Botão LinkedIn (Canto Seco e Vazado) */}
            <a 
              href="https://www.linkedin.com/in/davidsantoszx/"
              target="_blank"
              rel="noreferrer"
              className={`font-mono text-xs md:text-sm tracking-widest px-8 py-4 transition-all font-bold uppercase border rounded-none ${
                isDarkMode 
                  ? 'border-[#2D332B] text-[#ECE7DD] hover:border-neutral-600 hover:bg-[#171A18]/20' 
                  : 'border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100'
              }`}
            >
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </section>
  )};