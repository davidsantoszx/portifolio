export default function Education({ isDarkMode }) {
    return (
        
  

      <section id="certs" className="max-w-5xl mx-auto px-6 py-24 fade-in-section">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Formação & Certificações</h2>
          <p className="text-[#BFC9BF] max-w-xl mx-auto text-sm">
            Estudos acadêmicos estruturados e capacitações de mercado em engenharia, governança corporativa e dados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Educação Principal (Ensino Superior) */}
          <div className={`p-6 border transition-all ${isDarkMode ? 'bg-[#171A18]/30 border-[#2D332B]' : 'bg-white border-neutral-200'}`} style={{ borderRadius: '2px' }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#BFC9BF]">Graduação Ensino Superior</span>
                <h3 className="text-lg md:text-xl font-bold mt-1">Análise e Desenvolvimento de Sistemas</h3>
              </div>
              <span className="px-2.5 py-0.5 text-[9px] font-mono border border-neutral-500/30 text-[#BFC9BF] bg-[#556B2F]/5 rounded-full uppercase">
                Concluído
              </span>
            </div>
            <p className="text-xs md:text-sm font-semibold opacity-80">Unopar</p>
            <p className="text-xs md:text-sm text-[#BFC9BF] mt-4 leading-relaxed">
              Formação prática robusta englobando engenharia de software corporativa, modelagem de dados relacionais e governança de tecnologia da informação.
            </p>
          </div>

          {/* Certificações Livres / Tecnológicas */}
          <div className="space-y-3.5">
            <div className={`p-4 border flex items-center justify-between hover:-translate-y-1 hover:border-[#556B2F] transition-all duration-300 ${isDarkMode ? 'bg-[#171A18]/30 border-[#2D332B]'    : 'bg-white border-neutral-200'}`}style={{ borderRadius: '2px' }}>
              <div>
                <h4 className="text-xs md:text-sm font-bold">Certificação ITIL® v4 Foundation</h4>
                <p className="text-[11px] text-[#BFC9BF] font-mono mt-0.5">Gerenciamento de Serviços de TI (ITSM) • 20h</p>
              </div>
              <span className="p-1.5 rounded bg-[#556B2F]/10 text-[#BFC9BF] font-mono text-[9px]">Udemy</span>
            </div>

           <div className={`p-4 border flex items-center justify-between hover:-translate-y-1 hover:border-[#556B2F] transition-all duration-300 ${isDarkMode ? 'bg-[#171A18]/30 border-[#2D332B]'    : 'bg-white border-neutral-200'}`}style={{ borderRadius: '2px' }}>
              <div>
                <h4 className="text-xs md:text-sm font-bold">Engenharia de Software</h4>
                <p className="text-[11px] text-[#BFC9BF] font-mono mt-0.5">Modelagem de Processos & Metodologias Ágeis • 100h</p>
              </div>
              <span className="p-1.5 rounded bg-[#556B2F]/10 text-[#BFC9BF] font-mono text-[9px]">FIAP</span>
            </div>

            <div className={`p-4 border flex items-center justify-between hover:-translate-y-1 hover:border-[#556B2F] transition-all duration-300 ${isDarkMode ? 'bg-[#171A18]/30 border-[#2D332B]'    : 'bg-white border-neutral-200'}`}style={{ borderRadius: '2px' }}>
              <div>
                <h4 className="text-xs md:text-sm font-bold">Análise de Dados com Python</h4>
                <p className="text-[11px] text-[#BFC9BF] font-mono mt-0.5">Pandas, NumPy & Tratamento Estruturado de Dados • 40h</p>
              </div>
              <span className="p-1.5 rounded bg-[#556B2F]/10 text-[#BFC9BF] font-mono text-[9px]">Trilha Unopar</span>
            </div>

            <div className={`p-4 border flex items-center justify-between hover:-translate-y-1 hover:border-[#556B2F] transition-all duration-300 ${isDarkMode ? 'bg-[#171A18]/30 border-[#2D332B]'    : 'bg-white border-neutral-200'}`}style={{ borderRadius: '2px' }}>
              <div>
                <h4 className="text-xs md:text-sm font-bold">Programação em Python</h4>
                <p className="text-[11px] text-[#BFC9BF] font-mono mt-0.5">Lógica de Programação & Estruturas de Dados • 18h</p>
              </div>
              <span className="p-1.5 rounded bg-[#556B2F]/10 text-[#BFC9BF] font-mono text-[9px]">Fundação Bradesco</span>
            </div>
          </div>


          <div
            className={`p-4 border flex items-center justify-between hover:-translate-y-    hover:border-[#556B2F]  transition-all duration-300  ${isDarkMode  ? 'bg-[#171A18]/30 border-[#2D332B]'     : 'bg-white border-neutral-200'}`}    style={{ borderRadius: '2px' }}>
            <div>
              <h4 className="text-xs md:text-sm font-bold">
                Backend Python Django
              </h4>

              <p className="text-[11px] text-[#BFC9BF] font-mono mt-0.5">
                Desenvolvimento Backend com Django • 200h
              </p>

              <p className="text-[10px] text-[#8F9A8F] mt-1">
                Junho/2025 • Dezembro/2025
              </p>
            </div>

            <span className="px-2 py-1 rounded bg-[#556B2F]/10 text-[#BFC9BF] font-mono text-[9px]">
              Udemy
            </span>
          </div>

        </div>
      </section>

        );
}
