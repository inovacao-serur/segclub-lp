import { useRef } from "react"
import HeroIcon from "../../../components/icons/Hero/HeroIcon"
import "./hero.css"
import gsap from "gsap/all"


export default function Hero() {
  const buttonCheckup = useRef(null)
  const buttonSegclub = useRef(null)
  const textCheckup = useRef(null)
  const textSegclub = useRef(null)

  const enter = () => {
    gsap.to(buttonCheckup.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to(textCheckup.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
  }
  
  const leave = () => {
    gsap.to(buttonCheckup.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
    gsap.to(textCheckup.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
  }


  const enterSegclub = () => {
    gsap.to(buttonSegclub.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to(textSegclub.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
  }
  
  const leaveSegclub = () => {
    gsap.to(buttonSegclub.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
    gsap.to(textSegclub.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
  }

  return (
    <div className="background-color-linear-pink overflow-hidden">
    <div className="hero-wrapper bg-primary-ivory padding-global rounded-[3rem]">
        <div className="hero-component is-smaller container-large">

          {/* Texto - Seção esquerda */}
          <div className="hero_content is-2">
            <div className="hero_heading">
              <div className="text-[1rem] text-neutral-dark uppercase opacity-60 font-medium">
                CORPO + MENTE + NUTRIÇÃO EM UM SÓ LUGAR
              </div>

              <h1 className="text-color-primary-graphite">Imagine viver mais e com <span className="text-linear">mais qualidade. </span></h1>

            </div>

            <div className="hero_body">
              <div className="max-w-lg">
                <div className="text-[1.5rem] max-[479px]:text-lg leading-normal font-light text-primary-graphite mobile-smaller">
                  O SegClub+ reúne exercícios, alimentação, saúde mental, além de descontos e experiências incríveis.
                </div>
              </div>

              <div className="hero_actions">
                <div className="button-group">
                  <a className="button max-w-full inline-block cursor-pointer" onPointerEnter={enter} onPointerLeave={leave}>

                    <span ref={textCheckup} className="inline-block relative "> Fazer CheckUP de Longevidade </span>

                    <div ref={buttonCheckup} className="button-transition-wrapper translate-y-full">
                      <div className="button-transition">
                        Fazer CheckUP de Longevidade
                      </div>
                    </div>

                  </a>

                  

                  <a className="button is-secondary max-w-full inline-block cursor-pointer" onPointerEnter={enterSegclub} onPointerLeave={leaveSegclub}>

                    <span ref={textSegclub} className="inline-block relative">Ver o que Está incluído no SegClub+</span>

                    <div ref={buttonSegclub} className="button-transition-wrapper translate-y-full">
                      <div className="button-transition is-secondary">
                        Ver o que Está incluído no SegClub+
                      </div>
                    </div>

                  </a>

                </div>

                <div className="hero_benefits-wrapper is-down text-sm font-semibold text-primary-purple">
                  <div>
                    • Resultados percebidos desde os primeiros dias
                  </div>
                  <div>
                    • Plano personalizado baseado nos seus 8 pilares de saúde
                  </div>
                  <div>
                    • Tudo organizado em único app
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Imagem - Seção direita */}

          <div className="hero_visual is-2">
            <img className="image-full" src="/images/hero_visual_segclub.avif" alt="" />
            <div className="hero_cta">
              <div className="content-cta">
                <div className="icon-btt-cta">
                  <HeroIcon />
                </div>
                <div className="heading-style-h4 font-figtree uppercase text-neutral-light">
                  100% você
                </div>
              </div>
              <div className="text-[1rem] font-medium font-figtree text-neutral-light">
                Tudo pensado para a sua rotina, do seu jeito.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
