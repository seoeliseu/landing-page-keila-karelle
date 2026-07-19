import type { CSSProperties } from 'react'
import ImagemComFallback from '@/components/ImagemComFallback/ImagemComFallback'
import type { Resultado } from '@/data/resultados'
import styles from './CardAntesDepois.module.css'

/** Proporção usada quando o resultado não informa a dele (vertical do Instagram). */
const PROPORCAO_PADRAO = '3 / 4'

type Props = {
  resultado: Resultado
  /** O primeiro card da galeria carrega sem lazy — melhora o LCP da seção. */
  prioridade?: boolean
}

/**
 * Card de antes e depois. Aceita os dois formatos de material:
 *
 * • 'composta' → uma imagem só, com antes/depois já montados dentro dela.
 *   Não escreve rótulo nenhum por cima, porque a imagem já traz os dela.
 *
 * • 'par' → duas fotos separadas. Monta lado a lado e escreve ANTES e DEPOIS.
 *
 * Em nenhum dos casos a foto é cortada (`object-fit: contain`): cortar uma
 * foto de resultado pode esconder justamente a parte tratada.
 */
export default function CardAntesDepois({ resultado, prioridade = false }: Props) {
  const { descricao, regiao, sessoes } = resultado
  const moldura: CSSProperties = {
    aspectRatio: resultado.proporcao ?? PROPORCAO_PADRAO,
  }

  return (
    <figure className={styles.card}>
      {resultado.formato === 'composta' ? (
        <div className={styles.moldura} style={moldura}>
          <ImagemComFallback
            src={resultado.imagem}
            alt={`Antes e depois do tratamento de estrias. ${descricao}`}
            fill
            sizes="(max-width: 720px) 92vw, (max-width: 1140px) 46vw, 520px"
            className={styles.imagem}
            priority={prioridade}
          />
        </div>
      ) : (
        <div className={styles.par}>
          <Painel
            rotulo="Antes"
            src={resultado.antes}
            alt={`Antes do tratamento. ${descricao}`}
            estilo={moldura}
            prioridade={prioridade}
          />
          <Painel
            rotulo="Depois"
            src={resultado.depois}
            alt={`Depois do tratamento. ${descricao}`}
            estilo={moldura}
            prioridade={prioridade}
            destaque
          />
        </div>
      )}

      <figcaption className={styles.legenda}>
        {(regiao || sessoes) && (
          <p className={styles.etiquetas}>
            {regiao && <span className={styles.etiqueta}>{regiao}</span>}
            {sessoes && <span className={styles.etiqueta}>{sessoes}</span>}
          </p>
        )}
        <p className={styles.descricao}>{descricao}</p>
      </figcaption>
    </figure>
  )
}

/** Um lado do comparativo — usado só no formato 'par'. */
function Painel({
  rotulo,
  src,
  alt,
  estilo,
  prioridade,
  destaque = false,
}: {
  rotulo: string
  src: string
  alt: string
  estilo: CSSProperties
  prioridade: boolean
  destaque?: boolean
}) {
  return (
    <div className={styles.painel}>
      <span className={`${styles.rotulo} ${destaque ? styles.rotuloDestaque : ''}`}>
        {rotulo}
      </span>
      <div className={styles.moldura} style={estilo}>
        <ImagemComFallback
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 720px) 46vw, (max-width: 1140px) 23vw, 260px"
          className={styles.imagem}
          priority={prioridade}
        />
      </div>
    </div>
  )
}
