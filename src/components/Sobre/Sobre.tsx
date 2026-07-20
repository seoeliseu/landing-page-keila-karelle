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
      'Antes de qualquer procedimento, conversamos sobre seu histórico, analisamos sua pele e entendemos suas expectativas para indicar o melhor caminho.',
  },
  {
    titulo: 'Protocolo personalizado',
    texto:
      'Cada tipo de estria exige uma estratégia diferente. Por isso, seu tratamento é desenvolvido exclusivamente para as necessidades da sua pele.',
  },
  {
    titulo: 'Acompanhamento da evolução',
    texto:
      'Registramos sua evolução ao longo das sessões para que você acompanhe cada etapa da transformação com segurança.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className={styles.secao}>
      <div className={styles.container}>
        <div className={styles.texto}>
          <p className={styles.rotulo}>Quem cuida de você</p>

          <h2 className={styles.titulo}>
            Mais do que tratar estrias, devolver a confiança de mostrar a{' '}
            <em className={styles.enfase}>própria pele</em>.
          </h2>

          <div className={styles.corpo}>
            <p>
              Sou {site.nome}, especialista em tratamento de estrias em Goiânia.
            </p>
            <p>
              Ao longo da minha trajetória, percebi que as estrias raramente
              incomodam apenas pela aparência. Elas fazem muitas mulheres deixarem de
              usar uma roupa, evitarem uma foto, um momento na praia ou até mesmo um
              olhar mais gentil para o próprio corpo.
            </p>
            <p>Foi por isso que escolhi me especializar na regeneração da pele.</p>
            <p>
              Trabalho com o <strong>Método Regenerativo Microderme</strong>, um
              protocolo que estimula a recuperação natural da pele de forma
              progressiva, respeitando as características e o tempo de cada
              organismo.
            </p>
            <p>
              Além do tratamento de estrias, também atuo com{' '}
              <strong>Micro Labial Natural</strong>, <strong>Hydra Color</strong> e{' '}
              <strong>reconstrução de fios naturais</strong>.
            </p>
            <p>
              Aqui, cada atendimento começa com uma avaliação detalhada. Meu
              compromisso é entender sua pele, explicar o que realmente pode ser
              alcançado e construir um plano personalizado para o seu caso, sempre
              com transparência e honestidade.
            </p>
          </div>
        </div>

        <div>
          <p className={styles.rotulo}>Como funciona seu atendimento</p>
          <ul className={styles.pilares}>
            {PILARES.map((pilar) => (
              <li key={pilar.titulo} className={styles.pilar}>
                <h3 className={styles.pilarTitulo}>{pilar.titulo}</h3>
                <p className={styles.pilarTexto}>{pilar.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
