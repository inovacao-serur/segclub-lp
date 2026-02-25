import gsap from 'gsap/all'
import './cta.css'
import { useRef } from 'react'

export default function CTA() {

  const buttonIncluido = useRef(null)
  const textIncluido = useRef(null)

  const enter = () => {
    gsap.to(buttonIncluido.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to(textIncluido.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
  }
  
  const leave = () => {
    gsap.to(buttonIncluido.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
    gsap.to(textIncluido.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
  }


  const buttonSegclub = useRef(null)
  const textSegclub = useRef(null)

  const enterSegclub = () => {
    gsap.to(buttonSegclub.current, { yPercent: -100, duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to(textSegclub.current, { yPercent: 50, duration: 0.3, ease: "power2.out", overwrite: true });
  }
  
  const leaveSegclub = () => {
    gsap.to(buttonSegclub.current, { yPercent: 0, duration: 0.3, ease: "power2.in", overwrite: true });
    gsap.to(textSegclub.current, { yPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true });
  }
  
  return (
    <section>
      <div className="padding-global">
        <div className="container-large padding-section-medium">
          <div className="cta-component">
            <div className="cta-content">
              <h2 className="heading-style-h4 text-color-neutral-light">
              Comece Hoje. Com Calma <br/> Do seu Jeito.
              </h2>
              <div className="button-group">
                <a href="#" className="button is-violet w-inline-block" onPointerEnter={enterSegclub} onPointerLeave={leaveSegclub}>
                  <span ref={textSegclub} className='relative inline-block'>Quero Entrar no Seg Club +</span>
                  <div ref={buttonSegclub} className="button-transition-wrapper translate-y-full">
                    <div className="button-transition">
                      <div>Quero Entrar no Seg Club +</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="button is-white w-inline-block" onPointerEnter={enter} onPointerLeave={leave}>
                  <span ref={textIncluido} className='relative inline-block'>Ver o que está incluído</span>
                  <div ref={buttonIncluido} className="button-transition-wrapper translate-y-full">
                    <div className="button-transition is-white">
                      <div>Ver o que está incluído</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-media">
              <img
                src="/images/cta-media.avif"
                loading="lazy"
                sizes="100vw"
                srcSet="/images/cta-media-p-500.avif 500w, /images/cta-media-p-800.avif 800w, /images/cta-media-p-1080.avif 1080w, /images/cta-media.avif 3045w"
                alt=""
                className="image-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
