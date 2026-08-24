const projects = [
  {
    id: 3,
    title: "TodoList",
    category: "dev",
    tech: ["React", "Vite", "Tailwind CSS", "Context API"],
    description:
      "Aplicação rica de gerenciamento pessoal. Conta com sistema de autenticação de usuários, dashboard de produtividade, calendário e um mural interativo de notas adesivas.",
    images: [
      `${import.meta.env.BASE_URL}images/projects/todolist/1.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/2.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/3.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/5.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/6.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/7.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/8.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/9.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/10.png`,
      `${import.meta.env.BASE_URL}images/projects/todolist/11.png`,
    ],
  },

  {
    id: 2,
    title: "Central de Suporte TI",
    category: "sysadmin",
    tech: ["PowerShell", "Active Directory", "Automations"],
    description:
      "Script profissional desenvolvido em PowerShell para automatizar tarefas recorrentes do suporte de TI e administração em ambientes corporativos Windows Server/Client.",

    images: [
      `${import.meta.env.BASE_URL}images/projects/suporte/1.png`,
      `${import.meta.env.BASE_URL}images/projects/suporte/2.png`,
      `${import.meta.env.BASE_URL}images/projects/suporte/3.png`,
      `${import.meta.env.BASE_URL}images/projects/suporte/4.png`,
    ],
  },

  {
    id: 1,
    title: "Gerenciador de Salário",
    category: "dev",
    tech: ["Flask", "React", "SQLAlchemy", "Tailwind CSS"],
    description:
      "Desenvolvido com foco em organização financeira pessoal. Permite criar planos salariais customizados com controle preciso de despesas, receitas e gráficos visuais claros.",

    images: [
      `${import.meta.env.BASE_URL}images/projects/salario/1.png`,
      `${import.meta.env.BASE_URL}images/projects/salario/2.png`,
      `${import.meta.env.BASE_URL}images/projects/salario/3.png`,
      `${import.meta.env.BASE_URL}images/projects/salario/4.png`,
    ],
  },
];

export default projects;