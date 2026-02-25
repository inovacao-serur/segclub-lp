import { useRef } from "react";
import ClockIcon from "../../../components/icons/Trial/ClockIcon";
import "./trial.css"
import gsap from "gsap/all";
const progressSteps = [
  { day: "Dia 1", label: "Diagnóstico" },
  { day: "Dia 2-3", label: "Execução" },
  { day: "Dia 4-5", label: "Ajustes" },
  { day: "Dia 6-7", label: "Avaliação" },
];

export default function Trial() {

  const buttonIdade = useRef(null);
  const textIdade = useRef(null);

  const enter = () => {
    gsap.to(buttonIdade.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
    gsap.to(textIdade.current, {
      yPercent: 50,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const leave = () => {
    gsap.to(buttonIdade.current, {
      yPercent: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: true,
    });
    gsap.to(textIdade.current, {
      yPercent: 0,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
  };

  
  return (
    <div className="section">
      <div className="padding-global">
        <div className="container-large padding-section-medium">
          <div className="component_trial">

            <div className="trial_content">
              <div className="trial-wrap">
                <div className="trial_header">
                  <div className="text-[1rem] font-medium uppercase opacity-60">
                    Sem risco. Sem pressa.
                  </div>
                  <h2 className="text-neutral-dark">
                    Experimente Grátis Por 7 Dias. Sem Compromisso.
                  </h2>
                </div>

                <div className="trial_body">
                  <div className="text-[1.25rem] text-neutral-dark">
                    Não acredita que funciona? Teste por 7 dias, grátis. Acesso
                    completo ao plano personalizado, receitas, treinos e
                    acompanhamento. Se não gostar, cancele com 1 clique. Sem
                    cobrança.
                  </div>

                  <div className="trial_progress">
                    <div className="line-progress"></div>
                    {progressSteps.map((step) => (
                      <div key={step.day} className="trial_progress-steps">
                        <div className="ball-steps"></div>
                        <div className="steps-content">
                          <div className="text-[1.25rem] text-neutral-dark">
                            {step.day}
                          </div>
                          <div className="text-[1rem] text-neutral-dark">
                            {step.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="trial_actions">
                  <a className="button max-w-full inline-block cursor-pointer" onPointerEnter={enter} onPointerLeave={leave}>

                    <span ref={textIdade} className="inline-block relative">Descubra sua Idade Biológica</span>

                    <div ref={buttonIdade} className="button-transition-wrapper bg-primary-violet translate-y-full">
                      <div className="button-transition">
                        Descubra sua Idade Biológica
                      </div>
                    </div>

                  </a>
                <div className="text-[.875rem] text-primary-violet">
                  <span className="font-bold">15.847</span> pessoas já
                  fizeram o checkUP. Faça o seu.
                </div>
              </div>
            </div>

            <div className="trial_media">
              <img
                src="/images/trial_media.avif"
                loading="lazy"
                alt=""
                className="image-full"
              />
              <div className="trial_badge">
                <div className="icon-embed-medium">
                  <div className="w-embed">
                    <ClockIcon />
                  </div>
                </div>
                <div className="text-[.875rem] text-primary-violet">
                  07 dias para sentir se faz sentido
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
