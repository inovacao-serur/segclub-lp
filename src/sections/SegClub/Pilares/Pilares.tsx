import IconSaudeMetabolica from "../../../components/icons/Pilares/IconSaudeMetabolica";
import IconCondicionamentoFisico from "../../../components/icons/Pilares/IconCondicionamentoFisico";
import IconNutricao from "../../../components/icons/Pilares/IconNutricao";
import IconSonoRecuperacao from "../../../components/icons/Pilares/IconSonoRecuperacao";
import IconSaudeMental from "../../../components/icons/Pilares/IconSaudeMental";
import IconHabitosEstiloVida from "../../../components/icons/Pilares/IconHabitosEstiloVida";
import IconSaudePreventiva from "../../../components/icons/Pilares/IconSaudePreventiva";
import IconLongevidadeFuncional from "../../../components/icons/Pilares/IconLongevidadeFuncional";
import "./pilares.css"

export default function Pilares() {
  return (
    <div className="bg-primary-violet overflow-hidden">
      <div className="padding-global">
        <div className="container-large padding-section-large">
          <div className="component_pillars">
            <div className="pillars_header">
              <div className="comparison_header">
                <div className="text-[1rem] uppercase text-neutral-light opacity-60">
                  Metodologia
                </div>
                <h2 className="heading-style-h3 text-neutral-light">
                  Os 8 pilares da Longevidade
                </h2>
              </div>
              <div className="max-w-[36rem] text-center">
                <div className="text-[1.25rem] text-neutral-light">
                  Avaliamos sua saúde de forma holística através de oito
                  dimensões fundamentais
                </div>
              </div>
            </div>
            <div className="pillars_grid">
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconSaudeMetabolica />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Saúde Metabólica
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Avalia a eficiência do seu corpo em processar energia e
                    prevenir doenças crônicas.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconCondicionamentoFisico />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Condicionamento Físico
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Mede sua capacidade cardiovascular, força e níveis de
                    atividade física.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconNutricao />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Nutrição
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Analisa a qualidade da sua dieta e seus padrões alimentares
                    saudáveis.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconSonoRecuperacao />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Sono e Recuperação
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Monitora a qualidade e quantidade do sono, essenciais para
                    recuperação.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconSaudeMental />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Saúde Mental
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Avalia níveis de estresse, foco, equilíbrio emocional e
                    bem-estar psicológico.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconHabitosEstiloVida />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Hábitos e Estilo de Vida
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Analisa rotinas diárias, consistência de hábitos e
                    comportamentos de risco.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconSaudePreventiva />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Saúde Preventiva
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Avalia a eficiência do seu corpo em processar energia e
                    prevenir doenças crônicas.
                  </div>
                </div>
              </div>
              <div className="pillar_card">
                <div className="pillar_icon">
                  <div className="image-full w-embed">
                    <IconLongevidadeFuncional />
                  </div>
                </div>
                <div className="pillar_card-content">
                  <div className="text-[1.125rem] font-semibold text-neutral-dark">
                    Longevidade Funcional
                  </div>
                  <div className="text-[.875rem] text-neutral-800">
                    Identifica riscos futuros e oportunidades de prevenção
                    precoce.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
