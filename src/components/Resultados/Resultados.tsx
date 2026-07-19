import CardAntesDepois from '@/components/CardAntesDepois/CardAntesDepois'
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
            Cada pele responde no seu tempo. Estes são registros de clientes que
            seguiram o protocolo até o fim — sem filtro e sem edição.
          </p>
        </div>

        {resultados.length > 0 ? (
          <div className={styles.grade}>
            {resultados.map((resultado, indice) => (
              <CardAntesDepois
                key={resultado.id}
                resultado={resultado}
                /* Só o primeiro sai do lazy loading, para não atrasar o LCP. */
                prioridade={indice === 0}
              />
            ))}
          </div>
        ) : (
          /* Estado vazio: a página nunca fica quebrada, mesmo sem fotos. */
          <p className={styles.vazio}>
            Novos resultados estão sendo preparados. Acompanhe no Instagram.
          </p>
        )}

        <p className={styles.aviso}>
          Imagens publicadas com autorização das clientes. Os resultados variam
          conforme o tipo de estria, o tempo de surgimento e a resposta individual
          de cada pele.
        </p>
      </div>
    </section>
  )
}
