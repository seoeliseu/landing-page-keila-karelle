import { site } from '@/data/site'
import styles from './Sobre.module.css'

/**
 * Bio curta. Vem DEPOIS dos resultados de propósito: quem chega do Instagram
 * quer ver prova primeiro e só então se interessa por quem entregou.
 *
 * ⚠️ Formação, tempo de atuação e número de atendimentos NÃO foram inventados.
 * Se a Keila quiser incluir, é só acrescentar no texto abaixo.
 */

const PILARES = [
  {
    titulo: 'Avaliação individual',
    texto:
      'Antes de qualquer procedimento, uma conversa: histórico, tipo de estria e expectativa real.',
  },
  {
    titulo: 'Protocolo personalizado',
    texto:
      'Estria branca e estria vermelha pedem caminhos diferentes. Nada de pacote de prateleira.',
  },
  {
    titulo: 'Acompanhamento próximo',
    texto:
      'Registro da evolução sessão a sessão, para você enxergar o progresso mesmo quando ele é gradual.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className={styles.secao}>
      <div className={styles.container}>
        <div className={styles.texto}>
          <p className={styles.rotulo}>Quem cuida de você</p>

          <h2 className={styles.titulo}>
            Estria não é questão de vaidade. É a sua relação com o{' '}
            <em className={styles.enfase}>próprio corpo</em>.
          </h2>

          <div className={styles.corpo}>
            <p>
              Sou {site.nome}, especialista em tratamento de estrias em Goiânia. Me
              aprofundei nesse tema ao perceber quantas mulheres deixavam de usar o
              que queriam, de ir à praia, de se olhar no espelho sem procurar defeito.
            </p>
            <p>
              Trabalho com <strong>Método Regenerativo</strong> e{' '}
              <strong>Microderme</strong>: protocolos que estimulam a pele a se
              reconstruir, atenuando estrias brancas e vermelhas de forma progressiva
              e segura. Também atendo <strong>Micro Labial Natural</strong> e{' '}
              <strong>Hydra Collor</strong>.
            </p>
            <p>
              Cada atendimento começa por uma avaliação. Eu olho a sua pele, entendo o
              seu histórico e monto o caminho para o seu caso — com honestidade sobre
              o que dá para alcançar.
            </p>
          </div>
        </div>

        <ul className={styles.pilares}>
          {PILARES.map((pilar) => (
            <li key={pilar.titulo} className={styles.pilar}>
              <h3 className={styles.pilarTitulo}>{pilar.titulo}</h3>
              <p className={styles.pilarTexto}>{pilar.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
