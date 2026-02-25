import DiferencialSVG from "./DiferencialSVG";
import "./Diferencial2.css";
import gsap from "gsap/all";
import { useRef } from "react";


const Diferencial2 = () => {

  const buttonDiferencial = useRef(null);
  const textDiferencial = useRef(null);

  const enter = () => {
    gsap.to(buttonDiferencial.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
    gsap.to(textDiferencial.current, {
      yPercent: 50,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const leave = () => {
    gsap.to(buttonDiferencial.current, {
      yPercent: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: true,
    });
    gsap.to(textDiferencial.current, {
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
          <div className="component_comparison">
            <div className="comparison_header">
              <div className="text-size-regular text-style-allcaps text-color-neutral-dark opacity-60">
                Porque somos diferentes
              </div>
              <h2 className="heading-style-h2 text-color-neutral-dark">
                Por Que SegClub+ É Diferente?
              </h2>
            </div>
            <div className="comparison_table">
              <div className="comparison_row is-left is-segclub">
                <div className="vector-bg_top is-comparison">
                  <div className="w-embed">
                    <DiferencialSVG />
                  </div>
                </div>
                <div className="comparison_column is-label is-radius">
                  <div className="text-size-large text-color-neutral-dark">Personalização</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark">Acompanhamento</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark">Integração</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark">Tempo necessário</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark">Resultados</div>
                </div>
                <div className="comparison_column is-label is-2 segclub">
                  <div className="text-size-large text-color-neutral-dark">Custo/mês</div>
                </div>
              </div>
              <div className="comparison_row is-right is-segclub">
                <div className="comparison_column is-default is-title">
                  <div className="text-size-large text-color-neutral-dark opacity-50">Academia</div>
                </div>
                <div className="comparison_column is-default is-radius-top">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Treino Padrão</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Nenhum</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Só exercício</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">1-2/dia</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">6-12 meses</div>
                </div>
                <div className="comparison_column is-default is-2 segclub">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">R$ 150-300/mês</div>
                </div>
                <div className="comparison_column is-default is-title"></div>
              </div>
              <div className="comparison_row is-right is-segclub">
                <div className="comparison_column is-default is-title">
                  <div className="text-size-large text-color-neutral-dark opacity-50">Nutricionista</div>
                </div>
                <div className="comparison_column is-default is-radius-top">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Alta</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Mensal</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Só nutrição</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">1h/semana</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">3-6 meses</div>
                </div>
                <div className="comparison_column is-default is-2 segclub">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">R$ 400-800/mês</div>
                </div>
                <div className="comparison_column is-default is-title"></div>
              </div>
              <div className="comparison_row is-right is-segclub">
                <div className="comparison_column is-default is-title">
                  <div className="text-size-large text-color-neutral-dark opacity-50">Apps Genéricos</div>
                </div>
                <div className="comparison_column is-default is-radius-top">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Baixa</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Automático</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Fragmentado</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Não oferece</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">Variável</div>
                </div>
                <div className="comparison_column is-default is-2 segclub">
                  <div className="text-size-regular text-color-neutral-dark opacity-50">R$ 30-50/mês</div>
                </div>
                <div className="comparison_column is-default is-title"></div>
              </div>
              <div className="comparison_row is-center">
                <div className="comparison_column is-featured is-title">
                  <div className="text-size-large text-color-neutral-light">SegAi</div>
                </div>
                <div className="comparison_column is-featured is-2">
                  <div className="text-size-regular text-color-neutral-light">Online</div>
                </div>
                <div className="comparison_column is-featured">
                  <div className="text-size-regular text-color-neutral-light">Semanal</div>
                </div>
                <div className="comparison_column is-featured is-2">
                  <div className="text-size-regular text-color-neutral-light">8 Pilares</div>
                </div>
                <div className="comparison_column is-featured">
                  <div className="text-size-regular text-color-neutral-light">15-30 min/dia</div>
                </div>
                <div className="comparison_column is-featured is-2">
                  <div className="text-size-regular text-color-neutral-light">2-6 meses</div>
                </div>
                <div className="comparison_column is-featured is-btt segclub">
                  <div className="box-price-comparison">
                    <div className="text-size-micro text-color-neutral-light">Você tem tudo isso integrado por:</div>
                    <div className="heading-style-h4 text-color-neutral-light text-weight-normal">
                      <span className="text-size-regular">R$</span> 67,00
                    </div>
                  </div>
                  <a href="#" className="button is-white table w-inline-block" onPointerEnter={enter} onPointerLeave={leave}>
                    <span className="button-text" ref={textDiferencial}>
                      Começar com a SegAI
                    </span>
                    <div className="button-transition-wrapper translate-y-full" ref={buttonDiferencial}>
                      <div className="button-transition is-white ">
                        <div>Começar com a SegAI</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="component_comparison is-mobile">
            <div className="comparison_header">
              <div className="text-size-regular text-style-allcaps text-color-neutral-dark opacity-60">
                Porque somos diferentes
              </div>
              <h2 className="heading-style-h2 text-color-neutral-dark">
                Por Que SegClub+ É Diferente?
              </h2>
            </div>
            <div className="comparison_table is-2">
              <div className="comparison_row is-left is-segclub">
                <div className="vector-bg_top is-comparison hide">
                  <div className="w-embed">
                    <DiferencialSVG />
                  </div>
                </div>
                <div className="comparison_column is-label is-radius mobile-vw">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Personalização</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Acompanhamento</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Integração</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Tempo necessário</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Resultados</div>
                </div>
                <div className="comparison_column is-label is-2 segclub">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Custo/mês</div>
                </div>
              </div>
              <div className="comparison_row is-right is-segclub">
                <div className="comparison_column is-default is-title">
                  <div className="text-size-large text-color-neutral-dark opacity-50 mobile-vw">Academia</div>
                </div>
                <div className="comparison_column is-default is-radius-top">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Treino Padrão</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Nenhum</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Só exercício</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">1-2/dia</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">6-12 meses</div>
                </div>
                <div className="comparison_column is-default is-2 segclub last">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">R$ 150-300/mês</div>
                </div>
                <div className="comparison_column is-default is-title hide"></div>
              </div>
            </div>
            <div className="comparison_table is-2">
              <div className="comparison_row is-left is-segclub">
                <div className="vector-bg_top is-comparison hide">
                  <div className="w-embed">
                    <DiferencialSVG />
                  </div>
                </div>
                <div className="comparison_column is-label is-radius">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Personalização</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Acompanhamento</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Integração</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Tempo necessário</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Resultados</div>
                </div>
                <div className="comparison_column is-label is-2 segclub">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Custo/mês</div>
                </div>
              </div>
              <div className="comparison_row is-right is-segclub">
                <div className="comparison_column is-default is-title">
                  <div className="text-size-large text-color-neutral-dark opacity-50 mobile-vw">Nutricionista</div>
                </div>
                <div className="comparison_column is-default is-radius-top">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Alta</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Mensal</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Só nutrição</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">1h/semana</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">3-6 meses</div>
                </div>
                <div className="comparison_column is-default is-2 segclub last">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">R$ 400-800/mês</div>
                </div>
                <div className="comparison_column is-default is-title hide"></div>
              </div>
            </div>
            <div className="comparison_table is-2">
              <div className="comparison_row is-left is-segclub">
                <div className="vector-bg_top is-comparison hide">
                  <div className="w-embed">
                    <DiferencialSVG />
                  </div>
                </div>
                <div className="comparison_column is-label is-radius">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Personalização</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Acompanhamento</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Integração</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Tempo necessário</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Resultados</div>
                </div>
                <div className="comparison_column is-label is-2 segclub">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Custo/mês</div>
                </div>
              </div>
              <div className="comparison_row is-right is-segclub">
                <div className="comparison_column is-default is-title">
                  <div className="text-size-large text-color-neutral-dark opacity-50 mobile-vw">Apps Genéricos</div>
                </div>
                <div className="comparison_column is-default is-radius-top">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Baixa</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Automático</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Fragmentado</div>
                </div>
                <div className="comparison_column is-default is-2">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Não oferece</div>
                </div>
                <div className="comparison_column is-default">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">Variável</div>
                </div>
                <div className="comparison_column is-default is-2 segclub last">
                  <div className="text-size-regular text-color-neutral-dark opacity-50 mobile-vw">R$ 30-50/mês</div>
                </div>
                <div className="comparison_column is-default is-title hide"></div>
              </div>
            </div>
            <div className="comparison_table">
              <div className="comparison_row is-left is-segclub">
                <div className="vector-bg_top is-comparison hide">
                  <div className="w-embed">
                    <DiferencialSVG />
                  </div>
                </div>
                <div className="comparison_column is-label is-radius is-title">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Personalização</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Acompanhamento</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Integração</div>
                </div>
                <div className="comparison_column is-label is-2">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Tempo necessário</div>
                </div>
                <div className="comparison_column is-label">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Resultados</div>
                </div>
                <div className="comparison_column is-label is-2 segclub">
                  <div className="text-size-large text-color-neutral-dark mobile-vw">Custo/mês</div>
                </div>
              </div>
              <div className="comparison_row is-center custom">
                <div className="comparison_column is-featured is-title">
                  <div className="text-size-large text-color-neutral-light mobile-vw">SegAi</div>
                </div>
                <div className="comparison_column is-featured is-2">
                  <div className="text-size-regular text-color-neutral-light mobile-vw">Online</div>
                </div>
                <div className="comparison_column is-featured">
                  <div className="text-size-regular text-color-neutral-light mobile-vw">Semanal</div>
                </div>
                <div className="comparison_column is-featured is-2">
                  <div className="text-size-regular text-color-neutral-light mobile-vw">8 Pilares</div>
                </div>
                <div className="comparison_column is-featured">
                  <div className="text-size-regular text-color-neutral-light mobile-vw">15-30 min/dia</div>
                </div>
                <div className="comparison_column is-featured is-2">
                  <div className="text-size-regular text-color-neutral-light mobile-vw">2-6 meses</div>
                </div>
                <div className="comparison_column is-featured is-btt segclub">
                  <div className="box-price-comparison">
                    <div className="text-size-micro text-color-neutral-light">Você tem tudo isso integrado por:</div>
                    <div className="heading-style-h4 text-color-neutral-light text-weight-normal">
                      <span className="text-size-regular">R$</span> 67,00
                    </div>
                  </div>
                  <a href="#" className="button w-inline-block">
                    <div className="button-text">
                      Começar com a SegAI
                    </div>
                    <div className="button-transition-wrapper">
                      <div className="button-transition">
                        <div>Começar com a SegAI</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diferencial2;
