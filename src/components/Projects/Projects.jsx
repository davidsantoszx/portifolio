
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Projects({
  isDarkMode,
  activeTab,
  setActiveTab,
  filteredProjects,
}) {
  const [previewProject, setPreviewProject] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projectsContainerRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!projectsContainerRef.current) return;

    projectsContainerRef.current.scrollBy({
      left: direction === "right" ? 414 : -414,
      behavior: "smooth",
    });
  };

  const openPreview = (project) => {
    setPreviewProject(project);
    setCurrentImage(0);
  };

  const closePreview = () => {
    setPreviewProject(null);
    setCurrentImage(0);
  };

  const openModal = (project, imageIndex = 0) => {
    setModalProject(project);
    setCurrentImage(imageIndex);
  };

  const closeModal = () => {
    setModalProject(null);
    setCurrentImage(0);
  };

  const nextImage = (project) => {
    if (!project?.images?.length) return;

    setCurrentImage((current) =>
      current >= project.images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = (project) => {
    if (!project?.images?.length) return;

    setCurrentImage((current) =>
      current <= 0 ? project.images.length - 1 : current - 1
    );
  };

  const getProjectImage = (project) => {
    if (!project?.images?.length) return null;

    return project.images[currentImage % project.images.length];
  };

  const isDark = isDarkMode;

  return (
    <section
      id="projects"
      className="py-24"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
      }}
    >
      <div className="max-w-[1680px] mx-auto px-6">
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              Meu trabalho
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Projetos
              
            </h2>

            <p
              className="mt-4 max-w-xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Alguns dos projetos que desenvolvi, explorando diferentes
              tecnologias e soluções.
            </p>
          </div>

          {/* FILTROS */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Todos", value: "all" },
              { label: "Web Dev", value: "dev" },
              { label: "Scripts / Automação", value: "sysadmin" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveTab(filter.value)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === filter.value
                      ? "var(--color-primary)"
                      : "var(--color-surface)",
                  color:
                    activeTab === filter.value
                      ? "#ffffff"
                      : "var(--color-text-secondary)",
                  borderColor:
                    activeTab === filter.value
                      ? "var(--color-primary)"
                      : "var(--color-border)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="relative">
          {/* SETA ESQUERDA */}
          <button
            type="button"
            onClick={() => scrollProjects("left")}
            aria-label="Projetos anteriores"
            className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-20
              w-11 h-11 rounded-full flex items-center justify-center
              border shadow-lg transition-all duration-300
              hover:scale-110"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* ÁREA DE ROLAGEM */}
          <div
            ref={projectsContainerRef}
            className="projects-carousel flex gap-6 overflow-x-auto scroll-smooth pb-5"
          >
            {filteredProjects.map((project) => {
              const isInDevelopment =
                project.inDevelopment || !project.images?.length;

              return (
                <article
                  key={project.id}
                  className="group flex-shrink-0 w-[390px] min-w-[390px]
                    flex flex-col justify-between p-6 border
                    transition-all duration-300 hover:-translate-y-1
                    hover:shadow-2xl rounded-xl"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div>
                    {/* IMAGEM / PREVIEW */}
                    <div
                      className="relative w-full h-[210px] rounded-lg overflow-hidden
                        mb-6 flex items-center justify-center"
                      style={{
                        backgroundColor: isDark
                          ? "#101720"
                          : "var(--color-background)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {isInDevelopment ? (
                        <div className="flex flex-col items-center gap-3 text-center px-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="opacity-60"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="3"
                            />
                            <path d="M8 12h8M12 8v8" />
                          </svg>

                          <span
                            className="text-sm font-medium"
                            style={{
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            Em desenvolvimento
                          </span>
                        </div>
                      ) : (
                        <>
                          <img
                            src={project.images[0]}
                            alt={`Preview do projeto ${project.title}`}
                            className="w-full h-full object-cover
                              transition-transform duration-500
                              group-hover:scale-105"
                          />

                          <button
                            type="button"
                            onClick={() => openPreview(project)}
                            className="absolute inset-0 bg-black/50 opacity-0
                              group-hover:opacity-100 transition-opacity
                              duration-300 flex items-center justify-center
                              text-white font-medium"
                          >
                            Visualizar projeto
                          </button>
                        </>
                      )}
                    </div>

                    {/* TÍTULO E DESTAQUE */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span
                          className="text-xs font-semibold px-3 py-1
                            rounded-full whitespace-nowrap"
                          style={{
                            backgroundColor: "var(--color-primary)",
                            color: "#ffffff",
                          }}
                        >
                          Destaque
                        </span>
                      )}
                    </div>

                    {/* DESCRIÇÃO */}
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* TECNOLOGIAS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech?.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs px-3 py-1.5 rounded-md border"
                          style={{
                            backgroundColor: "var(--color-background)",
                            borderColor: "var(--color-border)",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AÇÕES */}
                  <div
                    className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    {isInDevelopment ? (
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Em desenvolvimento
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openPreview(project)}
                        className="text-sm font-semibold transition-colors
                          hover:opacity-75"
                        style={{ color: "var(--color-primary)" }}
                      >
                        Ver imagens
                      </button>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-opacity
                          hover:opacity-70"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* SETA DIREITA */}
          <button
            type="button"
            onClick={() => scrollProjects("right")}
            aria-label="Próximos projetos"
            className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-20
              w-11 h-11 rounded-full flex items-center justify-center
              border shadow-lg transition-all duration-300
              hover:scale-110"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* PREVIEW DAS IMAGENS */}
      {previewProject &&
        !previewProject.inDevelopment &&
        previewProject.images?.length > 0 && (
          <div
            className="fixed inset-0 z-[100] bg-black/90
              flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closePreview}
                aria-label="Fechar preview"
                className="absolute -top-12 right-0 text-white
                  hover:opacity-70 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="relative flex items-center justify-center">
                <img
                  src={getProjectImage(previewProject)}
                  alt={`Imagem ${currentImage + 1} de ${previewProject.title}`}
                  className="max-h-[75vh] max-w-full object-contain rounded-lg"
                />

                {previewProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => previousImage(previewProject)}
                      aria-label="Imagem anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                        w-11 h-11 rounded-full bg-black/60 text-white
                        flex items-center justify-center hover:bg-black/80"
                    >
                      <span className="text-2xl">‹</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => nextImage(previewProject)}
                      aria-label="Próxima imagem"
                      className="absolute right-3 top-1/2 -translate-y-1/2
                        w-11 h-11 rounded-full bg-black/60 text-white
                        flex items-center justify-center hover:bg-black/80"
                    >
                      <span className="text-2xl">›</span>
                    </button>
                  </>
                )}
              </div>

              <p className="text-center text-white/80 text-sm mt-4">
                {previewProject.title} — {currentImage + 1} /{" "}
                {previewProject.images.length}
              </p>

              <button
                type="button"
                onClick={() => openModal(previewProject, currentImage)}
                className="block mx-auto mt-4 text-sm text-white
                  underline underline-offset-4 hover:opacity-70"
              >
                Ampliar imagem
              </button>
            </div>
          </div>
        )}

      {/* MODAL DE IMAGEM AMPLIADA */}
      {modalProject &&
        modalProject.images?.length > 0 &&
        createPortal(
          <div
            className="fixed inset-0 z-[110] bg-black/95
              flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar imagem"
              className="absolute top-6 right-6 text-white
                hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div
              className="relative flex items-center justify-center w-full h-full"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => previousImage(modalProject)}
                aria-label="Imagem anterior"
                className="absolute left-2 md:left-8 text-white
                  text-5xl hover:opacity-70"
              >
                ‹
              </button>

              <img
                src={getProjectImage(modalProject)}
                alt={`Imagem ampliada de ${modalProject.title}`}
                className="max-w-[85vw] max-h-[85vh] object-contain"
              />

              <button
                type="button"
                onClick={() => nextImage(modalProject)}
                aria-label="Próxima imagem"
                className="absolute right-2 md:right-8 text-white
                  text-5xl hover:opacity-70"
              >
                ›
              </button>

              <span className="absolute bottom-5 text-white/80 text-sm">
                {currentImage + 1} / {modalProject.images.length}
              </span>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
