import { useRef, useState } from 'react'
import gsap from 'gsap'
import ArrowIcon from '../../../components/icons/faq/ArrowIcon'
import './faq.css'

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const answerRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const el = answerRef.current
    const icon = iconRef.current
    if (!el) return

    if (!isOpen) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: el.scrollHeight,
          opacity: 1,
          duration: 0.45,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(el, { height: 'auto' })
          },
        }
      )
      gsap.to(icon, { rotation: 180, duration: 0.35, ease: 'power2.inOut' })
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' })
      gsap.to(icon, { rotation: 90, duration: 0.35, ease: 'power2.inOut' })
    }

    setIsOpen((prev) => !prev)
  }

  return (
    <div className="faq-item-wrapper">
      <div className="faq-question" onClick={toggle}>
        <div className="faq-question-label">{title}</div>
        <div className="faq-arrow" ref={iconRef} style={{ transform: 'rotate(90deg)' }}>
          <ArrowIcon />
        </div>
      </div>
      <div className="faq-answer" ref={answerRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div className="margin-faq">{children}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const buttonFAQ = useRef(null);
  const textFAQ = useRef(null);

  const enter = () => {
    gsap.to(buttonFAQ.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
    gsap.to(textFAQ.current, {
      yPercent: 50,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const leave = () => {
    gsap.to(buttonFAQ.current, {
      yPercent: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: true,
    });
    gsap.to(textFAQ.current, {
      yPercent: 0,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
  };

  return (
    <section>
      <div className="padding-global">
        <div className="container-large padding-section-medium">
          <div className="faq-component">
            <div className="faq-header">
              <div className="text-base font-medium uppercase text-color-neutral-dark opacity-60">Sem Surpresas</div>
              <h2 className="heading-style-h3 text-color-neutral-dark">Perguntas Frequentes</h2>
              <div className="text-xl text-color-neutral-dark">Tire suas dúvidas antes de começar</div>
              <a href="#" className="button w-inline-block" onPointerEnter={enter} onPointerLeave={leave}>
                <span ref={textFAQ}>Entrar em Contato</span>
                <div className="button-transition-wrapper translate-y-full" ref={buttonFAQ}>
                  <div className="button-transition">
                    <div>Entrar em Contato</div>
                  </div>
                </div>
              </a>
            </div>

            <div id="faq-row-1" className="faq-group-row">
              <AccordionItem title="O que é o SegClub+?">
                <p className="faq-answer-p">
                  O SegClub+ é o primeiro ecossistema completo de bem-estar do Brasil que combina 4 apps de saúde
                  (SegScore, SegFisio, SegBrain, SegMenu,) + descontos exclusivos + experiências exclusivas em uma única
                  assinatura.
                </p>
              </AccordionItem>

              <AccordionItem title="Como funciona o SegScore?">
                <p className="faq-answer-p">
                  O SegScore é um check-up de longevidade 100% online que avalia sua saúde em 8 pilares científicos:
                  <br />
                  1. Saúde Metabólica (risco de diabetes, obesidade)
                  <br />
                  2. Condicionamento Físico (capacidade cardiovascular)
                  <br />
                  3. Nutrição (qualidade da dieta)
                  <br />
                  4. Sono e Recuperação (qualidade do sono)
                  <br />
                  5. Saúde Mental (estresse, ansiedade)
                  <br />
                  6. Função Cognitiva (memória, foco)
                  <br />
                  7. Genética (predisposições)
                  <br />
                  8. Ambiente e Estilo (hábitos diários)
                  <br />
                  <br />
                  Como funciona:
                  <br />• Responda as perguntas sobre sua rotina (leva 25 minutos)
                  <br />• Receba sua pontuação de 0 a 100
                  <br />• Descubra quantos anos você pode ganhar
                  <br />• Receba um plano personalizado com os 3 hábitos que mais impactam sua longevidade
                </p>
              </AccordionItem>

              <AccordionItem title="O que vem na SegBOX?">
                <p className="faq-answer-p">
                  A SegBOX é uma caixa surpresa com produtos físicos de bem-estar selecionados por especialistas, no
                  valor de R$ 300-500.
                  <br />
                  <br />
                  Exemplos de itens anteriores:
                  <br />• Suplementos premium (ômega-3, vitamina D, magnésio)
                  <br />• Livros de longevidade e saúde
                  <br />• Gadgets de saúde (smartband, massageador)
                  <br />• Snacks saudáveis e orgânicos
                  <br />• Produtos de autocuidado (óleos essenciais, chás)
                  <br />• Vouchers de desconto exclusivos
                  <br />
                  <br />
                  Disponível nos plano Elite.
                </p>
              </AccordionItem>

              <AccordionItem title="Quais são as experiências exclusivas?">
                <p className="faq-answer-p">
                  São eventos presenciais e online focados em bem-estar, longevidade e networking com pessoas que
                  compartilham os mesmos objetivos de saúde.
                  <br />
                  <br />
                  Exemplos de experiências:
                  <br />• Fale individualmente com seu treinador de Elite
                  <br />• Retiros de Bem-Estar (3 dias em resort com yoga, meditação, palestras)
                  <br />• Workshops com Especialistas (nutricionistas, médicos, psicólogos)
                  <br />• Aulas de Culinária Saudável (chef especializado em longevidade)
                  <br />• Trilhas e Caminhadas (natureza + mindfulness)
                  <br />• Eventos de Networking (jantares, happy hours saudáveis)
                  <br />• Masterclasses Online (sono, estresse, produtividade)
                  <br />
                  <br />
                  Vagas limitadas. Membros Elite somente.
                </p>
              </AccordionItem>

              <AccordionItem title="Posso cancelar a qualquer momento?">
                <p className="faq-answer-p">
                  Sim, sem burocracia.
                  <br />
                  <br />
                  Você pode cancelar sua assinatura a qualquer momento direto no app ou enviando um e-mail para{' '}
                  <a href="mailto:suporte@segclub.com.br?subject=Suporte%20SegClub%2B">suporte@segclub.com.br</a>.
                  <br />
                  <br />
                  Não há multa, não há período mínimo, não há taxa de cancelamento. Se você cancelar, terá acesso aos
                  apps até o final do período já pago.
                  <br />
                  <br />
                  Garantia de 7 dias: Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.
                </p>
              </AccordionItem>

              <AccordionItem title="Quanto eu economizo com os descontos do SegClub+?">
                <>
                  <p className="faq-answer-p">
                    Em média, R$ 3.600 por ano.
                    <br />
                    <br />
                    Exemplos de descontos:
                  </p>
                  <div className="faq_table">
                    <table className="faq-discount-table">
                      <thead>
                        <tr>
                          <th>Categoria</th>
                          <th>Desconto</th>
                          <th>Economia Anual</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Academias</th>
                          <td>30-50%</td>
                          <td>R$ 600-1.200</td>
                        </tr>
                        <tr>
                          <th>Suplementos</th>
                          <td>20-40%</td>
                          <td>R$ 400-800</td>
                        </tr>
                        <tr>
                          <th>Consultas</th>
                          <td>15-30%</td>
                          <td>R$ 300-600</td>
                        </tr>
                        <tr>
                          <th>Exames</th>
                          <td>20-40%</td>
                          <td>R$ 200-500</td>
                        </tr>
                        <tr>
                          <th>Restaurantes Saudáveis</th>
                          <td>10-25%</td>
                          <td>R$ 300-600</td>
                        </tr>
                        <tr>
                          <th>Produtos de Bem-Estar</th>
                          <td>15-35%</td>
                          <td>R$ 200-400</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="faq-discount-total">Total: R$ 2.000 - R$ 4.100 por ano</div>
                  </div>
                  <p className="faq-answer-p">
                    Ou seja: O plano Premium se paga sozinho só com os descontos e o Elite têm descontos ainda maiores.
                  </p>
                </>
              </AccordionItem>

              <AccordionItem title="Preciso ter seguro de saúde para usar o SegClub+?">
                <>
                  <p className="faq-answer-p">
                    Não.
                    <br />
                    <br />
                    O SegClub+ é complementar ao seu plano de saúde (ou independente, se você não tiver).
                  </p>
                  <div className="faq_table">
                    <table className="faq-discount-table">
                      <thead>
                        <tr>
                          <th>Plano de Saúde</th>
                          <th>SegClub+</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Foco em tratamento de doenças</td>
                          <td>Foco em prevenção e longevidade</td>
                        </tr>
                        <tr>
                          <td>Consultas quando você está doente</td>
                          <td>Apps diários para manter saúde</td>
                        </tr>
                        <tr>
                          <td>Caro (R$ 300-800/mês)</td>
                          <td>Acessível (R$ 97-497/mês)</td>
                        </tr>
                        <tr>
                          <td>Burocrático</td>
                          <td>Simples e digital</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="faq-answer-p">
                    Você pode ter os dois (recomendado) ou apenas o SegClub+ se preferir focar em prevenção.
                    <br />
                    <br />
                    Membros SegClub+ têm 20% menos consultas médicas (dados internos, 2024).
                  </p>
                </>
              </AccordionItem>

              <AccordionItem title="O SegClub+ é para qual idade?">
                <p className="faq-answer-p">
                  Para qualquer pessoa acima de 18 anos que quer viver mais e melhor.
                  <br />
                  <br />
                  Perfis de membros:
                  <br />• 20-35 anos: Foco em prevenção, performance e produtividade (SegBrain, SegFisio)
                  <br />• 35-50 anos: Foco em longevidade, equilíbrio e qualidade de vida (SegScore, SegMenu)
                  <br />• 50+ anos: Foco em saúde ativa, mobilidade e bem-estar (SegFisio, SegBrain)
                  <br />
                  <br />
                  Dados dos nossos membros:
                  <br />• 35% têm 25-35 anos
                  <br />• 45% têm 35-50 anos
                  <br />• 20% têm 50+ anos
                  <br />
                  <br />
                  Todos os conteúdos são adaptáveis ao seu nível, idade e objetivos.
                </p>
              </AccordionItem>

              <AccordionItem title="Tem garantia de resultados?">
                <p className="faq-answer-p">
                  Sim. Garantia tripla:
                  <br />
                  <br />
                  1. Garantia de 7 dias (Satisfação): Se você não gostar por qualquer motivo, devolvemos 100% do seu
                  dinheiro.
                  <br />
                  2. Garantia de 30 dias (Resultados Iniciais): Se você seguir o plano personalizado do SegScore por 30
                  dias e não sentir melhora em energia, sono ou bem-estar, devolvemos seu dinheiro.
                  <br />
                  3. Garantia de 90 dias (Resultados Mensuráveis): Se você seguir o plano por 90 dias e seu SegScore não
                  melhorar pelo menos 10 pontos, devolvemos seu dinheiro.
                  <br />
                  <br />
                  Condições: Você precisa fazer o check-up inicial, seguir as recomendações e registrar progresso no app.
                </p>
              </AccordionItem>

              <AccordionItem title="Como funciona a comunidade privada?">
                <p className="faq-answer-p">
                  A Comunidade SegClub+ é um espaço exclusivo para membros trocarem experiências, dicas e se apoiarem na
                  jornada de longevidade.
                  <br />
                  <br />
                  O que tem na comunidade:
                  <br />• Grupos por Interesse (nutrição, exercícios, meditação, sono)
                  <br />• Lives com Especialistas (nutricionistas, médicos, psicólogos)
                  <br />• Networking (conecte-se com pessoas com objetivos similares)
                  <br />• Suporte Peer-to-Peer (membros ajudando membros)
                  <br />
                  <br />
                  Disponível para:
                  <br />• Plano Premium: Comunidade geral
                  <br />• Plano Elite: Comunidade VIP (grupos menores, acesso a especialistas)
                </p>
              </AccordionItem>

              <AccordionItem title="O SegClub+ substitui meu personal trainer / nutricionista / psicólogo?">
                <p className="faq-answer-p">
                  Não substitui seu médicos, nutricionais etc.
                  <br />
                  <br />
                  O SegClub+ é ideal para:
                  <br />• ✅ Quem quer prevenção e manutenção de saúde
                  <br />• ✅ Quem busca autonomia e flexibilidade (treinar/comer/meditar quando quiser)
                  <br />• ✅ Quem quer custo-benefício (R$ 67/mês)
                  <br />
                  <br />
                  Profissionais 1:1 são melhores para:
                  <br />• ❌ Casos clínicos específicos (doenças, lesões graves)
                  <br />• ❌ Quem precisa de acompanhamento presencial intensivo
                  <br />• ❌ Atletas de alto rendimento
                  <br />
                  <br />
                  Solução híbrida (recomendada): Use o SegClub+ para rotina diária + consultas pontuais com
                  profissionais quando necessário.
                  <br />
                  <br />
                  Plano Elite já inclui acompanhamento e comunidade exclusiva além de consultoria 1:1 semestral com nosso
                  profissional de Elite, combinando o melhor dos dois mundos.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
