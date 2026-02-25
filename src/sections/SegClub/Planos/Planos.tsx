import "./planos.css";
import IconEstrela from "../../../components/icons/Planos/IconEstrela";
import gsap from "gsap/all";
import { useRef } from "react";

export default function Planos() {

    const textEssencial = useRef(null)
    const buttonEssencial = useRef(null)
  
    const enter = () => {
      gsap.to(buttonEssencial.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
      gsap.to(textEssencial.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
    }
    
    const leave = () => {
      gsap.to(buttonEssencial.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
      gsap.to(textEssencial.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
    }

    const textPremium = useRef(null)
    const buttonPremium = useRef(null)
  
    const enterPremium = () => {
      gsap.to(buttonPremium.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
      gsap.to(textPremium.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
    }
    
    const leavePremium = () => {
      gsap.to(buttonPremium.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
      gsap.to(textPremium.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
    }

    const textElite = useRef(null)
    const buttonElite = useRef(null)
  
    const enterElite = () => {
      gsap.to(buttonElite.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
      gsap.to(textElite.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
    }
    
    const leaveElite = () => {
      gsap.to(buttonElite.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
      gsap.to(textElite.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
    }



  return (
    <div className="section">
      <div className="padding-global">
        <div className="container-large padding-section-large">
          <div className="component_pricing">
            <div className="pricing_header">
              <div className="text-[1rem] font-medium uppercase text-neutral-dark opacity-60">
                Formas de assinatura
              </div>
              <div className="pricing_title">
                <h2 className="heading-style-h3 text-neutral-dark font-semibold">
                  Compare os Planos
                </h2>
                <div className="text-[1.25rem]">
                  Proteger não é se prevenir, é sobre escolha simplificada.
                </div>
              </div>
            </div>

            <div className="pricing_grid">
              {/* Card 1 — Essencial */}
              <div className="pricing_card is-1">
                <div className="pricing_content">
                  <div className="heading-style-h6 font-bold text-neutral-dark">
                    Essencial
                  </div>
                  <div className="text-[1rem] text-neutral-700">
                    Acesso completo aos apps de longevidade. Tudo&nbsp;&nbsp;que
                    você precisa para transformar sua saúde.
                  </div>
                </div>
                <div className="pricing_content">
                  <div className="heading-style-h5 font-bold text-neutral-dark">
                    R$ 67{" "}
                    <span className="text-[1rem] text-neutral-700">/ mês</span>
                  </div>
                  <div className="text-[1rem] text-primary-purple font-medium">
                    Plano Anual: 40% OFF
                  </div>
                  <div className="text-[1rem] text-neutral-800">
                    Valor entregue: R$ 6.000
                  </div>
                </div>
                <div className="pricing_badge">
                  <div>Comece Aqui</div>
                </div>
                <a
                  className="button max-w-full is-princing is-1 inline-block cursor-pointer"
                  onPointerEnter={enter}
                  onPointerLeave={leave}
                >
                  <span ref={textEssencial} className="inline-block relative">
                    Seja Essencial
                  </span>
                  <div
                    ref={buttonEssencial}
                    className="button-transition-wrapper translate-y-full"
                  >
                    <div className="button-transition is-purple">
                      Seja Essencial
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 2 — Premium */}
              <div className="pricing_card is-2">
                <div className="pricing_content">
                  <div className="heading-style-h6 font-bold text-neutral-dark">
                    Premium
                  </div>
                  <div className="text-[1rem] text-neutral-700">
                    Acesso + descontos de até 10%. Economize
                    R$&nbsp;&nbsp;2.400/mês. Sua economia paga o plano.
                  </div>
                </div>
                <div className="pricing_content">
                  <div className="heading-style-h5 font-bold text-neutral-dark">
                    R$ 127{" "}
                    <span className="text-[1rem] text-neutral-700">/ mês</span>
                  </div>
                  <div className="text-[1rem] text-primary-purple font-medium">
                    Plano Anual: 40% OFF
                  </div>
                  <div className="text-[1rem] text-neutral-800">
                    Valor entregue: R$ 10.340
                  </div>
                  <div className="text-[1rem] text-green">
                    Lucro líquido: R$ 7.576
                  </div>
                </div>
                <a
                  className="button max-w-full is-princing is-2 inline-block cursor-pointer"
                  onPointerEnter={enterPremium}
                  onPointerLeave={leavePremium}
                >
                  <span ref={textPremium} className="inline-block relative">
                    Seja Premium
                  </span>
                  <div
                    ref={buttonPremium}
                    className="button-transition-wrapper translate-y-full"
                  >
                    <div className="button-transition bg-primary-violet">
                      Seja Premium
                    </div>
                  </div>
                </a>
                <div className="pricing_badge is-2">
                  <div className="icon_badge">
                    <div className="image-full is-center w-embed">
                      <IconEstrela />
                    </div>
                  </div>
                  <div>&nbsp;Melhor Negócio</div>
                </div>
              </div>

              {/* Card 3 — Elite */}
              <div className="pricing_card is-3">
                <div className="pricing_content">
                  <div className="heading-style-h6 font-bold text-neutral-dark">
                    Elite
                  </div>
                  <div className="text-[1rem] text-neutral-700">
                    Acesso total + descontos de até 20% + <br />
                    experiências exclusivas. Para quem busca o <br />
                    máximo em saúde e longevidade.
                  </div>
                </div>
                <div className="pricing_content">
                  <div className="heading-style-h5 font-bold text-neutral-dark">
                    R$ 297{" "}
                    <span className="text-[1rem] text-neutral-700">/ mês</span>
                  </div>
                  <div className="text-[1rem] text-primary-purple font-medium">
                    Plano Anual: 40% OFF
                  </div>
                  <div className="text-[1rem] text-neutral-800">
                    Valor entregue: R$ 24.508
                  </div>
                  <div className="text-[1rem] text-green">
                    Lucro líquido: R$ 16.765
                  </div>
                </div>
                <div className="pricing_content is-full">
                <a
                  className="button max-w-full bg-primary-violet! is-princing  inline-block cursor-pointer"
                  onPointerEnter={enterElite}
                  onPointerLeave={leaveElite}
                >
                  <span ref={textElite} className="inline-block relative">
                    Seja Elite
                  </span>
                  <div
                    ref={buttonElite}
                    className="button-transition-wrapper translate-y-full"
                  >
                    <div className="button-transition bg-primary-graphite!">
                      Seja Elite
                    </div>
                  </div>
                </a>
                  <div className="text-[.875rem] font-medium text-neutral-500">
                    Vagas limitadas para experiências (sujeito a
                    disponibilidade)
                  </div>
                </div>
                <div className="pricing_badge is-3">
                  <div>Exclusivo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
