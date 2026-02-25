import gsap from "gsap/all";
import "./idadebiologica.css";
import { useRef } from "react";
export default function IdadeBiologica() {

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
    <div className="section overflow-hidden">
      <div className="padding-global">
        <div className="container-large padding-section-large">
          <div className="component_biological">
            <div className="biological_content">
              <div className="biological_heading">
                <div className="text-[1rem] text-neutral-dark uppercase opacity-60 font-medium">
                  PARA COMEÇAR
                </div>
                <h2 className="heading-style-h3 text-primary-graphite">
                  Entender é o primeiro passo para se proteger melhor.
                </h2>
              </div>
              <div className="biological_body">
                <div className="max-w-[36.563rem]">
                  <div className="text-xl text-neutral-dark">
                    Nossa IA vai ajudar a escolher o melhor para você baseado no
                    seu perfil de saúde, trazendo economia, além do acesso ao
                    SegClub+ um ecossistema completo de longevidade, bem-estar,
                    descontos e experiências incríveis.
                  </div>
                </div>
                <div className="biological_actions">
                  <a className="button max-w-full inline-block cursor-pointer" onPointerEnter={enter} onPointerLeave={leave}>

                    <span ref={textIdade} className="inline-block relative">Descubra sua Idade Biológica</span>

                    <div ref={buttonIdade} className="button-transition-wrapper translate-y-full">
                      <div className="button-transition">
                        Descubra sua Idade Biológica
                      </div>
                    </div>

                  </a>
                  <div className="biological_benefits-wrapper">
                    <div className="text-[.875rem] font-semibold text-[#888]">
                      • Diagnóstico Completo
                    </div>
                    <div className="text-[.875rem] font-semibold text-[#888]">
                      • Sem Cartão de Crédito
                    </div>
                    <div className="text-[.875rem] font-semibold text-[#888]">
                      • 100% Gratuíto
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="biological_media second">
              <div className="card-glow"></div>
              <div className="biological_card-media is-1">
                <img
                  src="/images/card-media-1.avif"
                  loading="lazy"
                  sizes="(max-width: 3104px) 100vw, 3104px"
                  className="image-full"
                />
              </div>
              <div className="biological_card-media is-2">
                <img
                  src="/images/card-media-2.avif"
                  loading="lazy"
                  sizes="(max-width: 2247px) 100vw, 2247px"
                  className="image-full"
                />
              </div>
              <div className="biological_card-media is-3">
                <img
                  src="/images/card-media-3.avif"
                  loading="lazy"
                  sizes="(max-width: 1274px) 100vw, 1274px"
                  className="image-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
