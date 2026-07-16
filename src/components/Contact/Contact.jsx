export default function Contact({ isDarkMode }) {
    return (
            <section id="contact" className="py-24 max-w-5xl mx-auto px-6 text-center fade-in-section">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#BFC9BF]">
            <span className="w-8 h-[1px] bg-[#556B2F]"></span>
            <span>Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Vamos conversar?
          </h2>
        </div>

        <p className="text-[#BFC9BF] max-w-2xl mx-auto text-xs md:text-sm mb-12 leading-relaxed">
          Aberto a oportunidades em desenvolvimento de sistemas, suporte de redes, governança de TI e novos projetos. Fique à vontade para entrar em contato através de qualquer canal.
        </p>

        {/* Grades de Contato no Formato Caixa Monospace do Hiago */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {/* E-mail Box */}
          <a 
            href="mailto:david.flameng0187@gmail.com.br" 
            className={`flex items-center gap-3 px-6 py-4 rounded border font-mono text-[11px] md:text-xs transition-all ${
              isDarkMode 
                ? 'border-[#2D332B] bg-[#171A18]/40 hover:border-neutral-700 hover:bg-[#171A18]/80 text-[#ECE7DD]' 
                : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 shadow-sm'
            }`}
          >
            <svg className="w-4 h-4 text-[#BFC9BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>david.flameng0187@gmail.com.br</span>
          </a>

          {/* Phone Box */}
          <a 
            href="https://wa.me/5561992317493" 
            target="_blank" 
            rel="noreferrer"
            className={`flex items-center gap-3 px-6 py-4 rounded border font-mono text-[11px] md:text-xs transition-all ${
              isDarkMode 
                ? 'border-[#2D332B] bg-[#171A18]/40 hover:border-neutral-700 hover:bg-[#171A18]/80 text-[#ECE7DD]' 
                : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 shadow-sm'
            }`}
          >
            <svg className="w-4 h-4 text-[#BFC9BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+55 (61) 992317493</span>
          </a>

          {/* LinkedIn Box */}
          <a 
            href="https://www.linkedin.com/in/davidsantoszx/" 
            target="_blank" 
            rel="noreferrer"
            className={`flex items-center gap-3 px-6 py-4 rounded border font-mono text-[11px] md:text-xs transition-all ${
              isDarkMode 
                ? 'border-[#2D332B] bg-[#171A18]/40 hover:border-neutral-700 hover:bg-[#171A18]/80 text-[#ECE7DD]' 
                : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 shadow-sm'
            }`}
          >
            <span className="text-[#BFC9BF] font-bold text-xs lowercase">in</span>
            <span>/davidsantoszx</span>
          </a>
        </div>
      </section>



    );
}