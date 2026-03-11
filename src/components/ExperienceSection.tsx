import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedor Backend Pleno",
    company: "PromoExp",
    period: "Jun 2022 - Presente",
    description:
      "Atuação estratégica no desenvolvimento da plataforma core da PromoExp, responsável por conectar empresas de varejo a prestadores autônomos. Como Pleno, foquei na escalabilidade do ecossistema de logística, garantindo a gestão de rotas em tempo real e a orquestração de serviços de campo. Embora focado em Backend, assumi um papel híbrido liderando entregas críticas no Frontend, garantindo uma experiência fluida e integrada entre a API e a interface do usuário.",
    achievements: [
      "Liderança técnica na criação de módulos complexos, desde a modelagem do banco de dados e APIs (Node.js) até a implementação de interfaces responsivas e performáticas para o painel administrativo e mobile.",
      "Implementação de inteligência artificial via Google Cloud Vision API para processamento de imagens em tempo real. A solução permitiu a extração automática de dados (OCR) de produtos, preços e dimensões a partir de fotos tiradas pelos prestadores, reduzindo drasticamente o erro humano e o tempo de preenchimento manual no PDV (Ponto de Venda).",
      "Monitoramento Geoespacial em Tempo Real: Desenvolvimento de uma dashboard logística integrada à Google Maps JavaScript API, permitindo a visualização e gestão de centenas de prestadores simultaneamente.",
    ],
  },
  {
    title: "Desenvolvedor Backend Pleno",
    company: "Green Acesso",
    period: "Jun 2022 - Mai 2025",
    description:
      "Responsável pela arquitetura de microsserviços em um ecossistema de controle de acesso de alta disponibilidade. Atuação direta na modernização da infraestrutura, mentoria técnica e desenvolvimento de soluções de automação e comunicação em tempo real.",
    achievements: [
      "Concepção e desenvolvimento de um Chatbot para WhatsApp focado em moradores de condomínios, automatizando processos de liberação de visitantes e reduzindo a latência no atendimento.",
      "Implementação de camada de cache distribuído com Redis, otimizando a performance de consultas críticas e reduzindo a carga sobre o banco de dados principal.",
      "Refatoração e desenvolvimento de endpoints de alta criticidade para gestão de acesso, garantindo a integridade e segurança dos dados sob alta concorrência.",
    ],
  },
  {
    title: "Desenvolvedor Backend",
    company: "DETRAN/PE - Wipro",
    period: "Jun 2021 - Jul 2022",
    description:
      "Atuei na modernização do ecossistema digital do DETRAN-PE, sendo responsável pela definição e evolução da arquitetura de software e acompanhamento de desenvolvimento de novas funcionalidades.",
    achievements: [
      "Modernização do ecossistema digital do DETRAN-PE",
      "Integração com GovBR",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "2018 - 2021",
    description: `Colaborei com clientes para entender suas necessidades e projetar soluções tecnológicas por meio do desenvolvimento de software.
    Contratado por meio do Workana e 99Freelas`,
    achievements: ["7 projetos entregues"],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiencia"
      className="py-24 lg:py-32 bg-section-dark text-section-dark-foreground"
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Experiência
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trajetória <span className="text-gradient">profissional</span>
          </h2>
          <p className="text-section-dark-foreground/70 max-w-2xl mx-auto">
            Uma jornada de aprendizado contínuo e entrega de valor em diferentes
            contextos e desafios.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-section-dark z-10" />

                {/* Content */}
                <div
                  className={`ml-12 lg:ml-0 ${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16 lg:col-start-2"
                  }`}
                >
                  <div
                    className={`bg-section-dark border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors ${
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    } max-w-xl`}
                  >
                    <div
                      className={`flex items-center gap-2 text-primary text-sm mb-2 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div
                      className={`flex items-center gap-2 text-section-dark-foreground/70 mb-4 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      <Briefcase size={14} />
                      {exp.company}
                    </div>

                    <p className="text-section-dark-foreground/70 text-sm mb-4">
                      {exp.description}
                    </p>

                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className={`text-sm text-section-dark-foreground/80 flex items-center gap-2 ${
                            index % 2 === 0 ? "lg:justify-end" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-success" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
