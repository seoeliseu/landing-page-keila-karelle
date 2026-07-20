'use client'

import ImagemComFallback from '@/components/ImagemComFallback/ImagemComFallback'
import type { Resultado } from '@/data/resultados'
import styles from './CardAntesDepois.module.css'

type Props = {
  resultado: Resultado
  /** O primeiro card da galeria carrega sem lazy — melhora o LCP da seção. */
  prioridade?: boolean
  /**
   * Chamado ao clicar na foto. O deslocamento identifica qual foto do card:
   * 0 = imagem composta (ou "antes"), 1 = "depois" no formato par.
   */
  onAmpliar: (deslocamento: number) => void
}

/**
 * Card de antes e depois. Aceita os dois formatos de material:
 *
 * • 'composta' → uma imagem só, com antes/depois já montados dentro dela.
 * • 'par' → duas fotos separadas. Monta lado a lado e escreve ANTES e DEPOIS.
 *
 * A moldura é sempre quadrada, para todos os cards terem o mesmo tamanho na
 * grade. A foto aparece inteira dentro dela (`object-fit: contain`) — cortar
 * uma foto de resultado pode esconder justamente a parte tratada. O clique
 * abre a galeria em tela cheia (controlada pelo componente pai).
 */
export default function CardAntesDepois({
  resultado,
  prioridade = false,
  onAmpliar,
}: Props) {
  const { descricao, regiao, sessoes } = resultado

  return (
    <figure className={styles.card}>
      {resultado.formato === 'composta' ? (
        <button
          type="button"
          className={styles.botaoFoto}
          onClick={() => onAmpliar(0)}
          aria-label="Ampliar foto do resultado"
        >
          <div className={styles.moldura}>
            <ImagemComFallback
              src={resultado.imagem}
              alt={`Antes e depois do tratamento de estrias. ${descricao}`}
              fill
              sizes="(max-width: 720px) 92vw, (max-width: 1140px) 46vw, 520px"
              className={styles.imagem}
              priority={prioridade}
            />
          </div>
        </button>
      ) : (
        <div className={styles.par}>
          <Painel
            rotulo="Antes"
            src={resultado.antes}
            alt={`Antes do tratamento. ${descricao}`}
            prioridade={prioridade}
            onAmpliar={() => onAmpliar(0)}
          />
          <Painel
            rotulo="Depois"
            src={resultado.depois}
            alt={`Depois do tratamento. ${descricao}`}
            prioridade={prioridade}
            onAmpliar={() => onAmpliar(1)}
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
  prioridade,
  onAmpliar,
  destaque = false,
}: {
  rotulo: string
  src: string
  alt: string
  prioridade: boolean
  onAmpliar: () => void
  destaque?: boolean
}) {
  return (
    <div className={styles.painel}>
      <span className={`${styles.rotulo} ${destaque ? styles.rotuloDestaque : ''}`}>
        {rotulo}
      </span>
      <button
        type="button"
        className={styles.botaoFoto}
        onClick={onAmpliar}
        aria-label={`Ampliar foto: ${rotulo.toLowerCase()} do tratamento`}
      >
        <div className={styles.moldura}>
          <ImagemComFallback
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 720px) 46vw, (max-width: 1140px) 23vw, 260px"
            className={styles.imagem}
            priority={prioridade}
          />
        </div>
      </button>
    </div>
  )
}
