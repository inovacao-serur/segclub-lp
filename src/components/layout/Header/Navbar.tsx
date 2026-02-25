import "./layout.css"
import Logo from "../../icons/Header/Logo"
import LogoSegAI from "../../icons/Header/LogoSegAI"
import DownIcon from "../../icons/Header/DownIcon"
import { useState, useRef, useEffect } from "react"
import gsap from "gsap/all"

export type LogoVariant = "logo" | "segai"

interface NavbarProps {
  logo?: LogoVariant
}

export default function Navbar({ logo = "logo" }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const navMenu = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(max-width: 991px)", () => {
            gsap.set(navMenu.current, { yPercent: -100, opacity: 0 });
        });
        return () => mm.revert();
    }, []);

    const toggleOpen = () => {
        const willOpen = !open;
        setOpen(willOpen);

        if (willOpen) {
            gsap.to(navMenu.current, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out", overwrite: true })
            gsap.to(line1.current, { rotation: 45, y: 6, duration: 0.4, ease: "power2.out" })
            gsap.to(line2.current, { opacity: 0, duration: 0.2 })
            gsap.to(line3.current, { rotation: -45, y: -6, duration: 0.4, ease: "power2.out" })
        } else {
            gsap.to(navMenu.current, { yPercent: -100, opacity: 0, duration: 0.4, ease: "power2.in", overwrite: true })
            gsap.to(line1.current, { rotation: 0, y: 0, duration: 0.4, ease: "power2.out" })
            gsap.to(line2.current, { opacity: 1, duration: 0.2, delay: 0.1 })
            gsap.to(line3.current, { rotation: 0, y: 0, duration: 0.4, ease: "power2.out" })
        }
    }
    return (
        <div className="padding-global">
            <div className="container-large">

                <div className="nav-component">

                    <a href="/segclub" aria-current="page" className="nav-logo inline-block w--current">
                        {logo === "segai" ? <LogoSegAI /> : <Logo />}
                    </a>

                    <div ref={navMenu} className="nav-menu group/nav">
                        <a href="/" className="nav_link group-hover/nav:text-gray-400! hover:text-black! transition-all duration-500">Início</a>
                        <a href="#" className="nav_link group-hover/nav:text-gray-400! hover:text-black! transition-all duration-500">Sua Longevidade</a>
                        <div className="group/seguros cursor-pointer">
                            <div className="dropdownlink-container">
                                <div className="nav_link group-hover/nav:text-gray-400! group-hover/seguros:text-black! hover:text-black! transition-all duration-500">Seguros</div>
                                <div className="down">
                                    <div className="image-full is-center w-embed group-hover/seguros:rotate-180 transition-transform duration-300">
                                        <DownIcon />
                                    </div>
                                </div>
                            </div>
                            <div className='dropdowncontainer w-[109.3px] grid grid-rows-[0fr] group-hover/seguros:grid-rows-[1fr] transition-all duration-500'>
                                <div className="dropdown-innerlist group/navlink">
                                    <a href="#" className="nav_link sub group-hover/navlink:text-gray-400! hover:text-black! transition-all duration-500">Seguros</a>
                                    <a href="#" className="nav_link sub group-hover/navlink:text-gray-400! hover:text-black! transition-all duration-500">Seguros</a>
                                    <a href="#" className="nav_link sub group-hover/navlink:text-gray-400! hover:text-black! transition-all duration-500">Seguros</a>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="nav_link group-hover/nav:text-gray-400! hover:text-black! transition-all duration-500">Contato</a>
                    </div>

                    <div className="burger-btn-wrapper" onClick={toggleOpen}>
                        <div ref={line1} className="burger-line" />
                        <div ref={line2} className="burger-line" />
                        <div ref={line3} className="burger-line" />
                    </div>
                </div>
            </div>
        </div>
    )
}
