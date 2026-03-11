import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  MessageCircle,
  Send,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lucasfelipeluz.dev@gmail.com",
    href: "mailto:lucasfelipeluz.dev@gmail.com",
  },
  // {
  //   icon: Linkedin,
  //   label: "LinkedIn",
  //   value: "/in/lucasfelipeluz",
  //   href: "https://linkedin.com/in/lucasfelipeluz",
  // },
  {
    icon: Github,
    label: "GitHub",
    value: "@lucasfelipeluz",
    href: "https://github.com/lucasfelipeluz",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Pernambuco, Brasil",
    href: null,
  },
];

const WHATSAPP_NUMBER = "5581996335923";
const TELEGRAM_USERNAME = "lucasfelipeluz";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu portfólio e gostaria de conversar."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // Contato
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e desafios interessantes.
            Entre em contato para discutirmos seu projeto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tempo de resposta:</strong>{" "}
                Geralmente respondo em até 24 horas úteis.
              </p>
            </div> */}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Vamos conversar?
            </h3>
            <p className="text-muted-foreground text-center max-w-md mb-4">
              Escolha a plataforma de sua preferência para entrar em contato
              diretamente comigo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white py-6 text-base font-medium"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>

              <Button
                onClick={handleTelegram}
                className="flex-1 bg-[#0088cc] hover:bg-[#0077b5] text-white py-6 text-base font-medium"
              >
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </Button>
            </div>

            {/* <Button
              asChild
              variant="outline"
              className="w-full max-w-md py-6 text-base font-medium border-border hover:bg-muted"
            >
              <a href="/curriculo.pdf" download="Joao_Silva_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Baixar Currículo
              </a>
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
