import { useRef, useState } from "react";
import gsap from "gsap";
import FaqIcon from "../../../components/icons/Q&A/Q&AIcon";
import "./q&a.css";

const faqItems = [
  {
    id: "2394afab-2cc1-5283-9c88-ef1087182271",
    title: "Proteção da Saúde",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "48a372be-6c43-72b1-3058-b995aeda9f11",
    title: "Proteção Financeira",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "1a846884-00d3-5f77-7ba2-0dbed4d74215",
    title: "Impacto Social",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "36c0782f-25ca-0721-8de2-e0a9979d251c",
    title: "Experiências Exclusivas",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "1a2b86ce-7f9a-33af-2db9-fa5e9b47f5dd",
    title: "Atendimento",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

function AccordionItem({ id, title, content }: { id: string; title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = answerRef.current;
    const icon = iconRef.current;
    if (!el) return;

    if (!isOpen) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: el.scrollHeight, opacity: 1, duration: 0.45, ease: "power2.inOut", onComplete: () => { gsap.set(el, { height: "auto" }); } }
      );
      gsap.to(icon, { rotation: 180, duration: 0.35, ease: "power2.inOut" });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
      gsap.to(icon, { rotation: 0, duration: 0.35, ease: "power2.inOut" });
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <div className="faq_accordion">
      <div
        js-faq-collapse="true"
        data-w-id={id}
        className="faq_question"
        onClick={toggle}
      >
        <div className="text-[1.25rem] font-semibold text-neutral-dark">
          {title}
        </div>
        <div className="faq_icon-wrapper" ref={iconRef}>
          <div className="icon-embed-faq w-embed">
            <FaqIcon />
          </div>
        </div>
      </div>
      <div className="faq_answer" ref={answerRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <div className="margin-bottom margin-small">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function QEA() {
  return (
    <div className="section">
      <div className="padding-global">
        <div className="container-large">
          <div className="faq_component-price">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
