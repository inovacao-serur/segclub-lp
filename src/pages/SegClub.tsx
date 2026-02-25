import { useEffect } from 'react';
import { gsap } from 'gsap/all';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import "../styles/globalSegClub.css";
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Hero from '../sections/SegClub/Hero/Hero';
import VidaReal from '../sections/SegClub/VidaReal/VidaReal';
import IdadeBiologica from '../sections/SegClub/IdadeBiologica/IdadeBiologica';
import Pilares from '../sections/SegClub/Pilares/Pilares';
import Planos from '../sections/SegClub/Planos/Planos';
import QEA from '../sections/SegClub/Q&A/Q&A';
import Checkup from '../sections/SegClub/Checkup/Checkup';
import Trial from '../sections/SegClub/Trial/Trial';
import Diferencial2 from '../sections/SegClub/Diferencial/Diferencial2';
import FAQ from '../sections/SegClub/FAQ/FAQ';
import CTA from '../sections/SegClub/CTA/CTA';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SegClub() {
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const smoother = ScrollSmoother.create({
                smooth: 2,
                effects: true,
            });
            return () => smoother.kill();
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="page-segclub">
            <Header logo="logo" />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Hero />
                    <VidaReal />
                    <IdadeBiologica />
                    <Pilares />
                    <Planos />
                    <QEA />
                    <Checkup />
                    <Trial/>
                    <Diferencial2/>
                    <FAQ/>
                    <CTA/>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
