import ImagemComFallback from '@/components/ImagemComFallback/ImagemComFallback'
import { site } from '@/data/site'
import { linkWhatsapp } from '@/lib/whatsapp'
import styles from './Hero.module.css'

/**
 * Primeira dobra: headline, promessa e o botão principal.
 *
 * Ordem no mobile: texto → botão → especialidades → foto.
 * O botão fica acima da foto de propósito: quem chega do Instagram precisa
 * ver o CTA sem rolar. No desktop vira duas colunas (texto | foto).
 */
export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.texto}>
          <p className={styles.sobrenome}>
            {site.nome} <span className={styles.separador} aria-hidden="true" /> {site.cidade}
          </p>

          <h1 className={styles.titulo}>
            Volte a vestir o que você ama.{' '}
            <em className={styles.enfase}>Sem pensar nas estrias.</em>
          </h1>

          <p className={styles.subtitulo}>
            Especialista em tratamento de estrias em Goiânia com o{' '}
            <strong>Método Regenerativo Microderme</strong>. Recupere a confiança na
            sua pele com um protocolo personalizado, desenvolvido para estimular a
            regeneração natural e suavizar estrias brancas, vermelhas e arroxeadas.
          </p>

          <a
            className={styles.botao}
            href={linkWhatsapp('Oi Keila! Vi seu site e quero agendar minha avaliação.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar minha avaliação
          </a>

          <p className={styles.provaRapida}>
            Atendimento individual • Avaliação sem compromisso
          </p>

          {/* Especialidades como tira discreta — não merecem seção própria. */}
          <ul className={styles.especialidades}>
            {site.especialidades.map((item) => (
              <li key={item} className={styles.especialidade}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.moldura}>
          {/*
            Moldura com borda dourada e brilho suave, como um LED quente de
            luz fraca ao redor do retrato de estúdio.
          */}
          <ImagemComFallback
            src="/images/keila-perfil-estudio.jpg"
            alt={`${site.nome}, especialista em tratamento de estrias em Goiânia`}
            width={900}
            height={1600}
            priority /* é o LCP: carrega primeiro, sem lazy loading */
            sizes="(max-width: 860px) 84vw, 460px"
            className={styles.foto}
          />
        </div>
      </div>

      {/* Seta discreta convidando a rolar até a prova. */}
      <a href="#resultados" className={styles.rolar} aria-label="Ver resultados">
        <span>Veja os resultados</span>
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" aria-hidden="true">
          <path
            d="M7 1v21M1 16l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </header>
  )
}
