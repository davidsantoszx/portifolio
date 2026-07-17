export default function Footer({ isDarkMode }) {
    return (
       <footer className={`py-4 border-t transition-colors duration-300 ${isDarkMode ? 'bg-[#0b0b0b] border-neutral-900' : 'bg-neutral-100 border-neutral-200'}`}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-500">
          <div>
            © 2026 · David Santos ·
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            <span>Full Stack Developer</span>
            <span>·</span>
            <span>IT Support Technician</span>
            <span>·</span>
            <span>SysAdmin</span>
          </div>
        </div>
      </footer>
    );
}

