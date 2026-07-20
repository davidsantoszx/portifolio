import { softwareSkills, infrastructureSkills } from "../../data/skills";

export default function Skills({ isDarkMode }) {
  const renderSkill = (skill) => (
    <div key={skill.name}>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-semibold">{skill.name}</span>
        <span className="opacity-60 font-mono">{skill.level}</span>
      </div>

      <div
        className={`h-1.5 w-full rounded-full ${
          isDarkMode
  ? "bg-[color:var(--color-surface)]"
  : "bg-neutral-200"}`}
      >
        <div
          className="h-full bg-[color:var(--color-primary)] rounded-full"
          style={{ width: `${skill.progress}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className={`py-24 border-t border-b fade-in-section transition-colors duration-300 ${
        isDarkMode
        ? "bg-[color:var(--color-background)] border-[color:var(--color-border)]"
        : "bg-neutral-100/40 border-neutral-200/80"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Skills</h2>


          <p className={`max-w-xl mx-auto text-sm ${isDarkMode ? "text-[color:var(--color-text-secondary)]" : "text-[color:var(--color-background)]" }`}>

            Competências técnicas balanceadas entre o desenvolvimento de software
            e a administração de infraestrutura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className={`text-xs font-bold font-mono tracking-wider uppercase flex items-center gap-2 ${isDarkMode ? "text-[color:var(--color-text-secondary)]" : "text-[color:var(--color-background)]" }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-primary)]"></span>
              Desenvolvimento de Software
            </h3>

            <div className="space-y-4">
              {softwareSkills.map(renderSkill)}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={`text-xs font-bold font-mono tracking-wider uppercase flex items-center gap-2 ${isDarkMode ? "text-[color:var(--color-text-secondary)]" : "text-[color:var(--color-background)]" }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-primary)]"></span>
              SysAdmin & IT Support
            </h3>

            <div className="space-y-4">
              {infrastructureSkills.map(renderSkill)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}