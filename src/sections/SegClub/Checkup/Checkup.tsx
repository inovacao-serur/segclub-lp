import VectorBgTop from "../../../components/icons/Checkup/VectorBgTop";
import VectorBgBottom from "../../../components/icons/Checkup/VectorBgBottom";
import "./checkup.css"
const journeyItems = [
  {
    number: 1,
    title: "Responda 12 perguntas",
    description: "Sem exames. Sem médico. 100% online. Leva apenas 2 minutos.",
  },
  {
    number: 2,
    title: "Veja seu resultado",
    description:
      "Descubra quantos anos você pode ganhar e compare com pessoas da sua idade.",
  },
  {
    number: 3,
    title: "Receba seu plano",
    description:
      "Os 3 hábitos que mais impactam sua longevidade, personalizados para você.",
  },
  {
    number: 4,
    title: "Acompanhe sua evolução",
    description:
      "Histórico completo da sua saúde e recomendações ao longo do tempo.",
  },
];

export default function Checkup() {
  return (
    <div className="section overflow-hidden">
      <div className="padding-global">
        <div className="container-large padding-section-large">
          <div className="component_journey">

            <div className="vector-bg_top hide-mobile-landscape">
              <div className="w-embed">
                <VectorBgTop />
              </div>
            </div>

            <div className="vector-bg_bottom hide-mobile-landscape">
              <div className="w-embed">
                <VectorBgBottom />
              </div>
            </div>

            <div className="journey_header">
              <div className="text-[1rem] font-medium uppercase text-primary-violet">
                Check-up online gratuito
              </div>
              <h2 className="heading-style-h3 text-primary-violet">
                Descubra seus riscos de saúde em 2 minutos
              </h2>
            </div>

            <div className="journey_list is-2">
              {journeyItems.map((item) => (
                <div key={item.number} className="journey_item is-2">
                  <div className="journey_icon is-number">
                    <div>{item.number}</div>
                  </div>
                  <div className="text-[1.25rem] font-medium text-neutral-dark">
                    {item.title}
                  </div>
                  <div className="text-[1rem] text-neutral-dark">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
