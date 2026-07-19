import { site } from '@/data/site'
import styles from './Localizacao.module.css'

/**
 * Endereço do atendimento.
 *
 * De propósito NÃO usa iframe do Google Maps: o embed pesa centenas de KB,
 * derruba o Lighthouse e instala cookie de terceiro antes de qualquer consentimento.
 * Um link que abre o app de mapas do celular resolve melhor e custa zero.
 */
export default function Localizacao() {
  const { endereco } = site

  // Monta o link a partir do endereço — se o endereço mudar, o mapa acompanha.
  const linkMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.nome} ${endereco.completo}`,
  )}`

  return (
    <section id="localizacao" className={styles.secao}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.rotulo}>Onde nos encontrar</p>

          <h2 className={styles.titulo}>
            Atendimento em <em className={styles.enfase}>Goiânia</em>
          </h2>

          <address className={styles.endereco}>
            <span className={styles.rua}>{endereco.rua}</span>
            <span>{endereco.bairro}</span>
            <span>
              {endereco.cidadeUf} · CEP {endereco.cep}
            </span>
          </address>

          <dl className={styles.detalhes}>
            <div className={styles.detalhe}>
              <dt>Horário</dt>
              <dd>{endereco.horario}</dd>
            </div>
            <div className={styles.detalhe}>
              <dt>Telefone</dt>
              <dd>
                <a href={`tel:+${site.whatsapp}`} className={styles.telefone}>
                  {site.telefoneExibicao}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <a
          className={styles.botaoMapa}
          href={linkMapa}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          Como chegar
        </a>
      </div>
    </section>
  )
}
