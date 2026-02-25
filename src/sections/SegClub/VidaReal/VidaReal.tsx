import gsap from 'gsap/all';
import LeftIcon from '../../../components/icons/VidaReal/LeftIcon';
import RightIcon from '../../../components/icons/VidaReal/RightIcon';
import WellBeingCardIcon from '../../../components/icons/VidaReal/WellBeingCardIcon';
import WellBeingCardIcon2 from '../../../components/icons/VidaReal/WellBeingCardIcon2';
import WellBeingCardIcon3 from '../../../components/icons/VidaReal/WellBeingCardIcon3';
import WellBeingCardIcon4 from '../../../components/icons/VidaReal/WellBeingCardIcon4';
import WellBeingCardIcon5 from '../../../components/icons/VidaReal/WellBeingCardIcon5';
import WellBeingIcon from '../../../components/icons/VidaReal/WellBeingIcon';
import './vidareal.css';
import { useRef, useState } from 'react';

export default function VidaReal() {
    const vidareal = '/images/segclub_vidareal.avif';
    const carousel = useRef<HTMLDivElement>(null);
    const firstItem = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const dragStartCarouselX = useRef(0);

    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const getLimits = () => {
        const carouselElement = carousel.current;
        const container = carouselElement?.parentElement;
        if (!carouselElement || !container) return { minX: 0 };
        const visibleWidth = container.offsetWidth;
        const totalContentWidth = carouselElement.scrollWidth;
        return { minX: -(totalContentWidth - visibleWidth) };
    };

    const snapTo = (nextX: number) => {
        const carouselElement = carousel.current;
        if (!carouselElement) return;
        const { minX } = getLimits();
        setCanLeft(nextX < 0);
        setCanRight(nextX > minX);
        gsap.to(carouselElement, { x: nextX, duration: 0.4, ease: "power3.out" });
    };

    // Botões: move um card por vez
    const move = (direction: 'left' | 'right') => {
        const element = firstItem.current;
        const carouselElement = carousel.current;
        if (!element || !carouselElement) return;
        const { minX } = getLimits();
        const currentX = Number(gsap.getProperty(carouselElement, "x")) || 0;
        const elementSize = element.offsetWidth;
        const nextX = direction === 'right'
            ? Math.max(minX, currentX - elementSize)
            : Math.min(0, currentX + elementSize);
        snapTo(nextX);
    };

    // Touch: arrastar em tempo real e snappear ao soltar
    const handleTouchStart = (e: React.TouchEvent) => {
        const carouselElement = carousel.current;
        if (!carouselElement) return;
        gsap.killTweensOf(carouselElement);
        touchStartX.current = e.touches[0].clientX;
        dragStartCarouselX.current = Number(gsap.getProperty(carouselElement, "x")) || 0;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const carouselElement = carousel.current;
        if (!carouselElement) return;
        const { minX } = getLimits();
        const diff = e.touches[0].clientX - touchStartX.current;
        const newX = Math.min(0, Math.max(minX, dragStartCarouselX.current + diff));
        gsap.set(carouselElement, { x: newX });
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const element = firstItem.current;
        const carouselElement = carousel.current;
        if (!element || !carouselElement) return;
        const { minX } = getLimits();
        const elementSize = element.offsetWidth;
        const dragDistance = e.changedTouches[0].clientX - touchStartX.current;
        const threshold = elementSize * 0.2; // 20% do card para disparar o snap

        if (Math.abs(dragDistance) < threshold) {
            // Drag insuficiente: volta para posição original
            snapTo(dragStartCarouselX.current);
            return;
        }

        // Quantos cards o usuário arrastou
        const cardsToMove = Math.max(1, Math.round(Math.abs(dragDistance) / elementSize));
        const nextX = dragDistance < 0
            ? Math.max(minX, dragStartCarouselX.current - cardsToMove * elementSize)
            : Math.min(0, dragStartCarouselX.current + cardsToMove * elementSize);
        snapTo(nextX);
    };

    return (
        <div className='background-color-linear-pink overflow-hidden'>
            <div className='padding-global'>
                <div className='container-large padding-section-large'>
                    <div className='component-wellbeing'>
                        <div className='segclub_media'>
                            <img className='image-full' src={vidareal} alt='Vida Real' />
                            <div className='trial_badge'>
                                <div className='icon-embed-medium'>
                                    <div className='w-embed'>
                                        <WellBeingIcon />
                                    </div>
                                </div>
                                <div className='text-sm text-primary-violet'>
                                    Suporte Humano Sempre Disponível
                                </div>
                            </div>
                        </div>

                        <div className='wellbeing_content'>
                            <div className='wellbeing_header'>
                                <div className='text-[1rem] font-medium uppercase text-primary-violet'>
                                    para a vida real
                                </div>
                                <h2 className='heading-style-h4 text-primary-violet'>
                                    Longevidade, bem-estar e proteção em uma única jornada digital.
                                </h2>
                            </div>
                            <div className='wellbeing-slider_component'>
                                <div className='shadow-slide'></div>
                                <div
                                    className='wellbeing-slider_cms_wrap swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden'
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div ref={carousel} className='wellbeing-slider_cms_list swiper-wrapper' aria-live='polite'>

                                        <div ref={firstItem} className='wellbeing-slider_cms_item swiper-slide is-active' role='group' aria-label='1 / 5'>
                                            <div className='wellbeing_card'>
                                                <div className='wellbeing_card-icon'>
                                                    <div className='image-full w-embed'>
                                                        <WellBeingCardIcon />
                                                    </div>
                                                </div>
                                                <div className='text-[1rem] font-semibold text-primary-violet'>
                                                    Treinos Inteligentes
                                                </div>
                                                <div className='text-[.75rem] text-primary-violet'>
                                                    Plano de exercícios adaptado ao seu nível, tempo disponível e preferências. 15–45 min/dia.
                                                </div>
                                                <div className='wellbeing_card-content'>
                                                    <div className='text-[.75rem] text-primary-violet'>
                                                        +4 anos de vida com exercícios que você gosta
                                                    </div>

                                                </div>
                                                <div className='text-[.625rem] text-595959'>
                                                    "30 min de atividade 5x/semana = +4 anos (OMS)"
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wellbeing-slider_cms_item swiper-slide is-active" role="group" aria-label="2 / 5">
                                            <div className="wellbeing_card">
                                                <div className="wellbeing_card-icon">
                                                    <div className="image-full w-embed">
                                                        <WellBeingCardIcon2 />
                                                    </div>
                                                </div>
                                                <div className="text-[1rem] font-semibold text-primary-violet">
                                                    Mente Equilibrada
                                                </div>
                                                <div className="text-[.75rem] text-primary-violet">
                                                    Meditação guiada, treinos cognitivos, sono inteligente, gestão de stress, neuroplasticidade.
                                                </div>
                                                <div className="wellbeing_card-content">
                                                    <div className="text-[.75rem] text-primary-violet">
                                                        + saúde mental + memória + performance
                                                    </div>
                                                </div>
                                                <div className="text-[.625rem] text-595959">
                                                    "Quem treina o cérebro reduz risco de depressão em 67% e vive 5,2 anos a mais (Journal of Clinical Psychology, 2023)"
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wellbeing-slider_cms_item swiper-slide swiper-slide-next" role="group" aria-label="3 / 5">
                                            <div className="wellbeing_card">
                                                <div className="wellbeing_card-icon">
                                                    <div className="image-full w-embed">
                                                        <WellBeingCardIcon3 />
                                                    </div>
                                                </div>
                                                <div className="text-[1rem] font-semibold font-primary-violet">
                                                    Nutrição Personalizada
                                                </div>
                                                <div className="text-[.75rem] font-primary-violet">
                                                    Cardápio semanal sob medida. Receitas guiadas e lista de compras automática.
                                                </div>
                                                <div className="wellbeing_card-content">
                                                    <div className="text-[.75rem] font-primary-violet">
                                                        +3 anos de vida com alimentação sob medida
                                                    </div>
                                                </div>
                                                <div className="text-[.625rem] text-595959">
                                                    "Quem segue plano alimentar personalizado vive 3 anos a mais (Harvard, 2023)"
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wellbeing-slider_cms_item swiper-slide" role="group" aria-label="4 / 5">
                                            <div className="wellbeing_card">
                                                <div className="wellbeing_card-icon">
                                                    <div className="image-full w-embed">
                                                        <WellBeingCardIcon4 />
                                                    </div>
                                                </div>
                                                <div className="text-[1rem] font-semibold font-primary-violet">
                                                    Descontos Exclusivos
                                                </div>
                                                <div className="text-[.75rem] font-primary-violet">
                                                    Descontos de 10% a 50% em parceiros de bem-estar. Uso ilimitado.
                                                </div>
                                                <div className="wellbeing_card-content">
                                                    <div className="text-[.75rem] font-primary-violet">
                                                        Até R$ 3.600 de economia por ano.
                                                    </div>
                                                </div>
                                                <div className="text-[.625rem] text-595959">
                                                    "Membros SegClub+ economizam em média R$ 3.600 por ano em saúde e bem-estar (Pesquisa Interna SegAI, 2024)"
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wellbeing-slider_cms_item swiper-slide" role="group" aria-label="5 / 5">
                                            <div className="wellbeing_card">
                                                <div className="wellbeing_card-icon">
                                                    <div className="image-full w-embed">
                                                        <WellBeingCardIcon5 />
                                                    </div>
                                                </div>
                                                <div className="text-[1rem] font-semibold text-primary-violet">
                                                    Comunidade Exclusiva
                                                </div>
                                                <div className="text-[.75rem] text-primary-violet">
                                                    Comunidade com mais propósito e conexão por meio de experiências guiadas de bem-estar.
                                                </div>
                                                <div className="wellbeing_card-content">
                                                    <div className="text-[.75rem] text-primary-violet">
                                                        Experiências de bem-estar com base científica
                                                    </div>
                                                </div>
                                                <div className="text-[.625rem] text-595959">
                                                    “Quem participa de experiências de bem-estar vive 2,7 anos a mais” (Social Science &amp; Medicine, 2023)
                                                </div>
                                            </div>
                                        </div>
                                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>

                                    </div>

                                </div>
                                <div className="wellbeing-slider_layout">
                                    <div className="wellbeing-slider_btn_layout">
                                        <div
                                            onClick={(e) => { e.preventDefault(); if (canLeft) move("left"); }}
                                            className={`wellbeing-slider_btn_element is-left is-prev ${!canLeft ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-disabled={!canLeft}
                                        >
                                            <div className="icon-embed-slide w-embed">
                                                <LeftIcon />
                                            </div>
                                        </div>
                                        <div
                                            onClick={(e) => { e.preventDefault(); if (canRight) move("right"); }}
                                            className={`wellbeing-slider_btn_element is-next ${!canRight ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-disabled={!canRight}
                                        >
                                            <div className="icon-embed-slide w-embed">
                                                <RightIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
