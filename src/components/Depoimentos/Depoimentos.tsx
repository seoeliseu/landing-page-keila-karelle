import { depoimentos } from '@/data/depoimentos'
import styles from './Depoimentos.module.css'

/**
 * Depoimentos de clientes, transcritos do WhatsApp — só o texto, sem print.
 * Vem logo depois dos resultados: primeiro a prova visual, depois a prova
 * social, e só então a apresentação da profissional.
 */
export default function Depoimentos() {
  return (
    <section id="depoimentos" className={styles.secao}>
      <div className={styles.container}>
        <div className={styles.cabecalho}>
          <p className={styles.rotulo}>Depoimentos</p>
          <h2 className={styles.titulo}>
            Quem já vive essa <em className={styles.enfase}>transformação</em>
          </h2>
          <p className={styles.subtitulo}>
            Mensagens reais recebidas no WhatsApp, compartilhadas com autorização
            das clientes.
          </p>
        </div>

        <ul className={styles.grade}>
          {depoimentos.map((depoimento) => (
            <li key={depoimento.id} className={styles.card}>
              <blockquote className={styles.mensagem}>
                “{depoimento.mensagem}”
              </blockquote>
              <p className={styles.rodape}>
                <span className={styles.cliente}>Cliente · via WhatsApp</span>
                {depoimento.contexto && (
                  <span className={styles.contexto}>{depoimento.contexto}</span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
