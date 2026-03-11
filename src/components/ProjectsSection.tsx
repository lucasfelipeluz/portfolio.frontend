import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  TestTube,
  View,
  Eye,
} from "lucide-react";
import powpeImage from "@/assets/powpe-dashboard.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demo?: string;
  pageUrl?: string;
  problem?: string;
  result?: string;
  github?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Powpe - App de Controle Financeiro",
    description:
      "O Powpe é o aplicativo que vai revolucionar como você e sua família controlam as finanças. Divida gastos, monitore despesas e mantenha a transparência financeira entre todos.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Gemini API",
    ],
    // problem: "Loja física precisava migrar para o digital com sistema robusto",
    // result: "Aumento de 150% nas vendas em 6 meses",
    image: powpeImage,
    // github: "https://github.com",
    pageUrl: "https://powpe.com.br",
    featured: true,
  },
  // {
  //   title: "Task Management App",
  //   description:
  //     "Aplicativo de gestão de tarefas e projetos em tempo real com colaboração entre equipes, notificações e integrações.",
  //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
  //   problem: "Equipes remotas com dificuldade de sincronização",
  //   result: "Produtividade aumentou 40% nas equipes usuárias",
  //   image:
  //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
  //   github: "https://github.com",
  //   featured: false,
  // },
  // {
  //   title: "FinTech Dashboard",
  //   description:
  //     "Dashboard financeiro com visualização de dados em tempo real, relatórios automatizados e análise preditiva.",
  //   technologies: ["React", "D3.js", "Python", "FastAPI", "AWS"],
  //   problem: "Dados financeiros dispersos sem visão consolidada",
  //   result: "Redução de 60% no tempo de análise",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: false,
  // },
  // {
  //   title: "Health & Fitness App",
  //   description:
  //     "Aplicativo mobile de acompanhamento de saúde e fitness com integração de wearables e planos personalizados.",
  //   technologies: ["React Native", "Firebase", "Node.js", "TensorFlow"],
  //   problem: "Usuários sem engajamento em apps de saúde",
  //   result: "Retenção de 70% após 30 dias",
  //   image:
  //     "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=500&fit=crop",
  //   github: "https://github.com",
  //   featured: false,
  // },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Projetos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trabalhos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de projetos que demonstram minha capacidade técnica e
            abordagem orientada a resultados.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-elevated overflow-hidden group"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  } ${project.pageUrl ? "cursor-pointer" : ""}`}
                  onClick={() =>
                    project.pageUrl && window.open(project.pageUrl, "_blank")
                  }
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <span className="text-primary text-sm font-medium mb-2">
                      Projeto em Destaque
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {project.problem && (
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-foreground min-w-[70px]">
                            Desafio:
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {project.problem}
                          </span>
                        </div>
                      )}
                      {project.result && (
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-success min-w-[70px]">
                            Resultado:
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {project.result}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={18} />
                          Código
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Eye size={18} />
                          Demo
                        </a>
                      )}
                      {project.pageUrl && (
                        <a
                          href={project.pageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={18} />
                          Página
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-elevated p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Eye size={20} />
                        </a>
                      )}
                      {project.pageUrl && (
                        <a
                          href={project.pageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
