export default function Header({
  isDarkMode,
  setIsDarkMode,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
}) {

const theme = isDarkMode
  ? {
      header: "bg-[color:var(--color-background)]/80 border-[color:var(--color-border)]/80",
      text: "text-[color:var(--color-text-secondary)]",
      hover: "hover:text-[color:var(--color-accent)]",
      button:
        "border-neutral-700 text-[color:var(--color-text)] hover:bg-neutral-800/60 hover:text-[color:var(--color-accent)]",
      toggle:
        "bg-[color:var(--color-surface)] border-[color:var(--color-border)] hover:bg-[color:var(--color-surface-hover)] text-yellow-500",
      mobile: "bg-[color:var(--color-background)] border-[color:var(--color-border)]",
    }
  : {
      header: "bg-white/80 border-neutral-200/85",
      text: "text-neutral-600",
      hover: "hover:text-neutral-900",
      button:
        "border-neutral-300 text-neutral-700 hover:bg-neutral-100",
      toggle:
        "bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-600",
      mobile: "bg-white border-neutral-200",
    };





  return (    

    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme.header}`}>
        <div className="max-w-6xl mx-auto px-6 py-1 flex justify-between items-center">
          
          {/* Logo Minimalista */}
          <button onClick={() => scrollToSection('about')} className="font-mono text-sm md:text-base font-extrabold tracking-widest uppercase focus:outline-none">
            DS<span className="text-neutral-500 font-normal">.DEV</span>
          </button>

          {/* Menu de Navegação - Monospace, Caixa Alta, Espaçado */}
          <nav className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('experiences')} 
              className={`font-mono text-xs uppercase tracking-[3px] transition-colors focus:outline-none ${theme.text} ${theme.hover}`}
            >
              experience
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`font-mono text-xs uppercase tracking-[3px] transition-colors focus:outline-none ${theme.text} ${theme.hover}`}
            >
              about
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`font-mono text-xs uppercase tracking-[3px] transition-colors focus:outline-none ${theme.text} ${theme.hover}`}
            >
              skills
            </button>
            <button 
              onClick={() => scrollToSection('certs')} 
              className={`font-mono text-xs uppercase tracking-[3px] transition-colors focus:outline-none ${theme.text} ${theme.hover}`}
            >
              certs
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Botão de Contato - Retangular Seco de Canto Vivo como em image_35e0c9.png */}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hidden md:block font-mono text-[11px] tracking-widest px-6 py-2.5 transition-all font-semibold uppercase border ${theme.button}`}>    
              Contato
            </button>

            {/* Toggle de Tema Light/Dark */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`p-2 rounded-lg border transition-colors ${theme.toggle}`}
              title="Alternar Tema"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828 0l-.707-.707m12.728-12.728l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Menu responsivo de celular */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2 rounded-lg text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-accent)]"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Dropdown Celular */}
        {isMobileMenuOpen && (
          <div className={`md:hidden px-6 py-4 flex flex-col space-y-4 border-t transition-all ${theme.mobile}`}>
            <button onClick={() => scrollToSection('experiences')} className="text-left py-2 font-mono text-xs tracking-wider uppercase">experience</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 font-mono text-xs tracking-wider uppercase">about</button>
            <button onClick={() => scrollToSection('skills')} className="text-left py-2 font-mono text-xs tracking-wider uppercase">skills</button>
            <button onClick={() => scrollToSection('certs')} className="text-left py-2 font-mono text-xs tracking-wider uppercase">certs</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 font-mono text-xs tracking-wider uppercase text-[#BFC9BF]">Contato</button>
          </div>
        )}
      </header>

    )};