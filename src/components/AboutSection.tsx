import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "+7 anos",
    description: "de experiência em desenvolvimento",
  },
  {
    icon: Rocket,
    title: "+15 projetos",
    description: "entregues com sucesso",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "com times multidisciplinares",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "e boas práticas sempre",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              // Sobre mim
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Desenvolvedor focado em{" "}
              <span className="text-gradient">resultados</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 7 anos de experiência, transformo desafios de
                negócio em soluções tecnológicas de alta performance. Minha
                atuação vai além do código: foco na arquitetura de sistemas
                escaláveis e na entrega de valor real para o usuário final.
              </p>
              <p>
                Tenho experiência no desenvolvimento de funcionalidades
                críticas, como sistemas de monitoramento geoespacial em tempo
                real, automação com Visão Computacional (IA) e modernização de
                plataformas governamentais de larga escala (DETRAN-PE).
              </p>
              {/* <p>
                Atualmente, trabalho principalmente com{" "}
                <strong className="text-foreground">Node.js</strong>,{" "}
                <strong className="text-foreground">NestJS</strong>,{" "}
                <strong className="text-foreground">.NET</strong>,{" "}
                <strong className="text-foreground">TypeScript</strong> e{" "}
                <strong className="text-foreground">AWS</strong>, sempre
                buscando as melhores práticas de arquitetura e performance.
              </p> */}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card-elevated p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
