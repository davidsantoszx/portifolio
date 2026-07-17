import React, { useState } from "react";


export default function Projects({
    isDarkMode,
    activeTab,
    setActiveTab,
    filteredProjects,
}) 

{

  const [previewProject, setPreviewProject] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

    return (
        
 

<section id="projects" className={`py-24 border-t border-b fade-in-section transition-colors duration-300 ${isDarkMode ? 'bg-[color:var(--color-background)]  border-[color:var(--border)]/80' : 'bg-neutral-100/40 border-neutral-200/80'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Projetos em Destaque</h2>
              <p className="text-[color:var(--text-secondary)] max-w-lg text-sm">
                Automações, scripts PowerShell e aplicações completas para fluxos práticos de operação.
              </p>
            </div>

            {/* Abas Filtros de Categoria */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase border transition-all ${activeTab === 'all' ? (isDarkMode ? 'bg-[color:var(--text)] text-[color:var(--background)] border-[color:var(--text)]' : 'bg-[#171border-[color:var(--border)]A18] text-white border-neutral-900') : (isDarkMode ? ' text-[color:var(--text-secondary)] hover:text-[#D8C9A3]' : 'border-neutral-300 text-neutral-600 hover:bg-neutral-200')}`}
                style={{ borderRadius: '1px' }}
              >
                Todos
              </button>
              <button 
                onClick={() => setActiveTab('dev')} 
                className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase border transition-all ${activeTab === 'dev' ? (isDarkMode ? 'bg-[color:var(--text)] text-[color:var(--background)] border-[color:var(--text)]' : 'bg-[color:var(--surface)]border-[color:var(--border)] text-white border-neutral-900') : (isDarkMode ? ' text-[color:var(--text-secondary)] hover:text-[#D8C9A3]' : 'border-neutral-300 text-neutral-600 hover:bg-neutral-200')}`}
                style={{ borderRadius: '1px' }}
              >
                Web Dev
              </button>
              <button 
                onClick={() => setActiveTab('sysadmin')} 
                className={`px-4 py-2 text-[10px] font-mono tracking-wider uppercase border transition-all ${activeTab === 'sysadmin' ? (isDarkMode ? 'bg-[color:var(--text)] text-[color:var(--background)] border-[color:var(--text)]' : 'bg-[color:var(--surface)] border-[color:var(--border)]border-[color:var(--border)]text-white border-neutral-900') : (isDarkMode ? ' text-[color:var(--text-secondary)] hover:text-[#D8C9A3]' : 'border-neutral-300 text-neutral-600 hover:bg-neutral-200')}`}
                style={{ borderRadius: '1px' }}
              >
                Scripts / Automação
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className={`group flex flex-col justify-between p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${isDarkMode ? 'bg-[#0F1110 border-[color:var(--border)]/80 hover:border-[color:var(--primary)]' : 'bg-white border-neutral-200 hover:shadow-lg'}`}
                style={{ borderRadius: '2px' }}
              >
<div>

{previewProject === project.id ? (

    <div className="relative">

          <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-3 right-3 bg-[color:var(--surface)]/90 z-30 hover:bg-[color:var(--primary)] transition p-1.5 rounded-full"
          >
              <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                  />
              </svg>
          </button>

                <img
                    src={project.images[currentImage]}
                    alt={project.title}
                    onClick={() => setModalProject(project)}
                    className="w-full h-52 object-cover rounded cursor-pointer transition-all duration-300 hover:opacity-90"
                />

        <div className="flex justify-between mt-3">

            <button
                onClick={() =>
                    setCurrentImage(
                        currentImage === 0
                            ? project.images.length - 1
                            : currentImage - 1
                    )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[color:var(--surface)]/80 hover:bg-[color:var(--primary)] transition p-1.5 rounded-full"
                >
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    onClick={() =>
                        setCurrentImage(
                            currentImage === project.images.length - 1
                                ? 0
                                : currentImage + 1
                        )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[color:var(--surface)]/80 hover:bg-[color:var(--primary)] transition p-1.5 rounded-full"
                >
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                    



        </div>

    </div>

) : (

    <>

        <div className="flex justify-between items-center mb-6">

            <span className={`p-2 rounded ${isDarkMode ? 'bg-[color:var(--surface)]' : 'bg-neutral-100'}`}>

                {project.category === 'dev' ? (

                    <svg className="w-4 h-4 text-[color:var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>

                ) : (

                    <svg className="w-4 h-4 text-[color:var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10" />
                    </svg>

                )}

            </span>

            <span className="text-[9px] tracking-wider uppercase font-mono text-neutral-500">
                {project.category === 'dev'
                    ? 'Web App'
                    : 'PowerShell Script'}
            </span>

        </div>

        <h3 className="text-base font-bold mb-3 transition-colors duration-300 group-hover:text-[#D8C9A3]">
            {project.title}
        </h3>

        <p className="text-xs md:text-sm text-[color:var(--text-secondary)] leading-relaxed mb-6">
            {project.description}
        </p>

    </>

)}

</div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded transition-all duration-300 hover:scale-105 bg-[color:var(--primary)]/10 border border-neutral-500/10 text-[color:var(--text-secondary)]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                      onClick={() => {
                          setPreviewProject(project.id);
                          setCurrentImage(0);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold hover:gap-2 transition-all"
                  >
                      <span>Preview</span>

                      <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                          />
                      </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

{modalProject && (

<div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
    onClick={() => setModalProject(null)}
>

    <div
        className="relative"
        onClick={(e)=>e.stopPropagation()}
    >

        {/* X */}

        <button
            onClick={() => setModalProject(null)}
            className="absolute top-3 right-3 z-30 bg-[color:var(--surface)] hover:bg-[color:var(--primary)] p-2 rounded-full"
        >
            <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>

        {/* seta esquerda */}

        <button
            onClick={() =>
                setCurrentImage(
                    currentImage === 0
                        ? modalProject.images.length - 1
                        : currentImage - 1
                )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[color:var(--surface)]/90 hover:bg-[color:var(--primary)] p-3 rounded-full"
        >
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>

        {/* seta direita */}

        <button
            onClick={() =>
                setCurrentImage(
                    currentImage === modalProject.images.length - 1
                        ? 0
                        : currentImage + 1
                )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[color:var(--surface)]/90 hover:bg-[color:var(--primary)] p-3 rounded-full"
        >
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>

        <img
            src={modalProject.images[currentImage]}
            alt=""
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        />

    </div>

</div>

)}

      </section>

   );
}