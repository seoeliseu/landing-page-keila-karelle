import { site } from '@/data/site'
import { linkWhatsapp } from '@/lib/whatsapp'
import styles from './Footer.module.css'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.marca}>
          <p className={styles.nome}>{site.nome}</p>
          <p className={styles.cargo}>
            {site.titulo} · {site.cidade}
          </p>
        </div>

        <nav className={styles.links} aria-label="Contato e redes sociais">
          <a
            className={styles.link}
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="5.2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" />
            </svg>
            {site.instagram}
          </a>

          <a
            className={styles.link}
            href={linkWhatsapp('Oi Keila! Vim pelo site.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 015.82 2.41 8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
            </svg>
            WhatsApp
          </a>
        </nav>
      </div>

      <div className={styles.base}>
        <p>
          © {ano} {site.nome}. Todos os direitos reservados.
        </p>
        <p className={styles.aviso}>
          Este site tem caráter informativo e não substitui avaliação profissional
          presencial. Resultados variam de pessoa para pessoa.
        </p>
      </div>
    </footer>
  )
}
