/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  DEPOIMENTOS — adicione as mensagens aqui                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Mensagens recebidas no WhatsApp, transcritas (só o texto, sem print).
 * Para adicionar uma nova: copie um bloco, troque o id e a mensagem.
 * A seção se monta sozinha.
 */

export type Depoimento = {
  /** Identificador único. Qualquer texto curto sem espaço serve. */
  id: string
  /** A mensagem da cliente, transcrita do WhatsApp. */
  mensagem: string
  /** Opcional. Contexto curto exibido abaixo, ex.: 'Após a 1ª sessão'. */
  contexto?: string
}

export const depoimentos: Depoimento[] = [
  {
    id: 'depoimento-01',
    mensagem:
      'Passando pra dizer que estou muito feliz com o resultado da minha primeira sessão. Já percebi uma grande melhora na aparência das minhas estrias e fiquei muito feliz com o resultado inicial. Estou animada para continuar o tratamento! Ouvi tanto falarem que estria não tinha solução — e olha que as minhas, a maioria, é de adolescência. Obrigada pelo seu atendimento e profissionalismo.',
    contexto: 'Após a primeira sessão',
  },
  {
    id: 'depoimento-02',
    mensagem:
      'Está ótimo e eu já consigo ver muita diferença: as estrias estão mais rasas e algumas muito menores. Estou ansiosa para a próxima sessão.',
    contexto: 'Durante o tratamento',
  },
  {
    id: 'depoimento-03',
    mensagem:
      'Oie Keila, só vim aqui dizer que estou amando o resultado do procedimento de estrias. Na segunda sessão já não vejo quase nada de estrias.',
    contexto: 'Após a segunda sessão',
  },
  {
    id: 'depoimento-04',
    mensagem:
      'Keila, eu estou gostando muito do tratamento para as estrias na panturrilha. Foram duas sessões que realmente fizeram a diferença. Obrigada pelo profissionalismo.',
    contexto: 'Estrias na panturrilha · 2 sessões',
  },
]
