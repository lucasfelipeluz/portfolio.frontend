import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Smartphone,
  Cloud,
  Wrench,
  Database,
  Layout,
  Terminal,
  Code,
} from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code,
    skills: ["TypeScript", "C#", "Go", "Javascript", "Dart"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "NestJS",
      "Fastify",
      "Express",
      "FastAPI",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS", "Sass"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
      "TypeORM",
      "Sequelize",
    ],
  },
  // {
  //   title: "Mobile",
  //   icon: Smartphone,
  //   skills: ["React Native", "Flutter"],
  // },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: [
      "IA Generativa",
      "Cursor",
      "Claude",
      "Git",
      "VS Code",
      "Figma",
      "Trello",
      "Notion",
      "Postman",
      "Linux",
      "Jest",
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Habilidades
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Stack <span className="text-gradient">tecnológica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que domino e utilizo no dia a dia para entregar soluções
            de alta qualidade.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1 }}
              className="card-elevated p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + catIndex * 0.1 + index * 0.03,
                    }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
