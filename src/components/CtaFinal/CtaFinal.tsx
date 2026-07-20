import { linkWhatsapp } from '@/lib/whatsapp'
import styles from './CtaFinal.module.css'

/**
 * Fechamento da página. Quem chegou até aqui já viu a prova e já sabe quem
 * é a profissional — aqui a única função é remover o atrito do último passo.
 *
 * A mensagem do WhatsApp é diferente da do topo, para dar pra saber de qual
 * botão veio o contato.
 */
export default function CtaFinal() {
  return (
    <section id="contato" className={styles.secao}>
      <div className={styles.container}>
        <p className={styles.rotulo}>Próximo passo</p>

        <h2 className={styles.titulo}>
          A sua nova relação com a sua pele pode começar{' '}
          <em className={styles.enfase}>hoje</em>.
        </h2>

        <p className={styles.subtitulo}>
          Se você convive com estrias e deseja entender quais resultados são
          possíveis para o seu caso, fale comigo pelo WhatsApp. Vou avaliar sua
          pele, explicar como funciona o protocolo, estimar a quantidade de sessões
          e tirar todas as suas dúvidas, sem compromisso.
        </p>

        <a
          className={styles.botao}
          href={linkWhatsapp(
            'Oi Keila! Cheguei até o final do seu site e quero agendar minha avaliação.',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconeWhatsapp />
          Quero conversar pelo WhatsApp
        </a>

        <p className={styles.detalhe}>Resposta no horário comercial · Goiânia – GO</p>
      </div>
    </section>
  )
}

function IconeWhatsapp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 015.82 2.41 8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
    </svg>
  )
}
