import GaleriaResultados from './GaleriaResultados'
import { resultados } from '@/data/resultados'
import styles from './Resultados.module.css'

/**
 * O coração da página. Monta a galeria a partir de data/resultados.ts —
 * adicionar uma foto lá aparece aqui sozinho, sem tocar em componente.
 *
 * Fundo claro de propósito: foto de pele tem muito mais leitura sobre creme
 * do que sobre preto, e quebra o ritmo escuro do hero.
 */
export default function Resultados() {
  return (
    <section id="resultados" className={styles.secao}>
      <div className={styles.container}>
        <div className={styles.cabecalho}>
          <p className={styles.rotulo}>Resultados reais</p>
          <h2 className={styles.titulo}>
            A transformação que <em className={styles.enfase}>fala por si</em>
          </h2>
          <p className={styles.subtitulo}>
            Cada pele tem seu próprio tempo de resposta. Os resultados abaixo são de
            clientes que seguiram o protocolo completo — sem filtros, sem edição e
            com autorização para divulgação.
          </p>
        </div>

        {resultados.length > 0 ? (
          <GaleriaResultados resultados={resultados} />
        ) : (
          /* Estado vazio: a página nunca fica quebrada, mesmo sem fotos. */
          <p className={styles.vazio}>
            Novos resultados estão sendo preparados. Acompanhe no Instagram.
          </p>
        )}

        <p className={styles.aviso}>
          Os resultados variam de acordo com o tipo de estria, o tempo de
          surgimento e a resposta individual da pele.
        </p>
      </div>
    </section>
  )
}
