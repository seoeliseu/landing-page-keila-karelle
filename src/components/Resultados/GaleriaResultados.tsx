'use client'

import { useRef, useState } from 'react'
import CardAntesDepois from '@/components/CardAntesDepois/CardAntesDepois'
import type { Resultado } from '@/data/resultados'
import gradeStyles from './Resultados.module.css'
import styles from './GaleriaResultados.module.css'

type Foto = { src: string; legenda: string }

/**
 * Achata os resultados numa lista única de fotos para o carrossel.
 * `offsets[i]` diz em que posição da lista começa o card `i` — é o que
 * permite abrir a galeria já na foto clicada.
 */
function montarFotos(resultados: Resultado[]): { fotos: Foto[]; offsets: number[] } {
  const fotos: Foto[] = []
  const offsets: number[] = []

  for (const resultado of resultados) {
    offsets.push(fotos.length)
    const contexto = [resultado.regiao, resultado.sessoes].filter(Boolean).join(' · ')
    const legenda = contexto ? `${contexto} — ${resultado.descricao}` : resultado.descricao

    if (resultado.formato === 'composta') {
      fotos.push({ src: resultado.imagem, legenda })
    } else {
      fotos.push({ src: resultado.antes, legenda: `Antes · ${legenda}` })
      fotos.push({ src: resultado.depois, legenda: `Depois · ${legenda}` })
    }
  }

  return { fotos, offsets }
}

/**
 * Grade de cards + galeria em tela cheia.
 *
 * Clicar em qualquer foto abre um <dialog> modal em modo carrossel: setas
 * (ou ← →) navegam por TODAS as fotos de resultado, com a legenda embaixo.
 * Fecha com Esc, clique fora da foto ou no botão ×.
 */
export default function GaleriaResultados({ resultados }: { resultados: Resultado[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [atual, setAtual] = useState(0)
  const { fotos, offsets } = montarFotos(resultados)

  const abrir = (indice: number) => {
    setAtual(indice)
    dialogRef.current?.showModal()
  }
  const fechar = () => dialogRef.current?.close()
  const anterior = () => setAtual((a) => (a - 1 + fotos.length) % fotos.length)
  const proxima = () => setAtual((a) => (a + 1) % fotos.length)

  const foto = fotos[atual]

  return (
    <>
      <div className={gradeStyles.grade}>
        {resultados.map((resultado, indice) => (
          <CardAntesDepois
            key={resultado.id}
            resultado={resultado}
            /* Só o primeiro sai do lazy loading, para não atrasar o LCP. */
            prioridade={indice === 0}
            onAmpliar={(deslocamento) => abrir(offsets[indice] + deslocamento)}
          />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.galeria}
        /* Clique no backdrop (o alvo é o próprio dialog) fecha; nos controles, não. */
        onClick={(evento) => {
          if (evento.target === dialogRef.current) fechar()
        }}
        onKeyDown={(evento) => {
          if (evento.key === 'ArrowLeft') anterior()
          if (evento.key === 'ArrowRight') proxima()
        }}
      >
        <figure className={styles.conteudo}>
          {/* eslint-disable-next-line @next/next/no-img-element -- tela cheia usa o arquivo original, sem otimização */}
          <img src={foto.src} alt={foto.legenda} className={styles.imagem} />
          <figcaption className={styles.legenda}>
            <span className={styles.contador}>
              {atual + 1} / {fotos.length}
            </span>
            {foto.legenda}
          </figcaption>
        </figure>

        {fotos.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.seta} ${styles.setaEsquerda}`}
              onClick={anterior}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.seta} ${styles.setaDireita}`}
              onClick={proxima}
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        )}

        <button
          type="button"
          className={styles.fechar}
          onClick={fechar}
          aria-label="Fechar galeria"
        >
          ×
        </button>
      </dialog>
    </>
  )
}
