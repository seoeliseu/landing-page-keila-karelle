/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  RESULTADOS (ANTES E DEPOIS) — adicione as fotos aqui        ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * COMO ADICIONAR UM RESULTADO NOVO
 * ─────────────────────────────────
 * 1. Jogue a foto em  public/images/resultados/
 * 2. Copie um bloco abaixo, cole no fim da lista e troque os dados.
 * 3. Pronto. A galeria se monta sozinha.
 *
 * DOIS FORMATOS ACEITOS
 * ─────────────────────
 * • formato: 'composta'  → UMA imagem só, com antes e depois já montados
 *                          dentro dela (é o formato dos seus posts do
 *                          Instagram). A página NÃO escreve rótulo por cima,
 *                          porque a imagem já tem os dela.
 *
 * • formato: 'par'       → DUAS imagens separadas. A página monta lado a lado
 *                          e escreve os rótulos ANTES e DEPOIS.
 *
 * O TypeScript avisa se você misturar os campos errados — se não compilar,
 * é porque falta algum campo do formato escolhido.
 */

/** Campos comuns aos dois formatos. */
type ResultadoBase = {
  /** Identificador único. Qualquer texto curto sem espaço serve. */
  id: string
  /** Legenda abaixo da foto. Descreva a transformação, não a técnica. */
  descricao: string
  /** Opcional. Ex.: 'Braço', 'Abdômen', 'Glúteo'. Vira etiqueta dourada. */
  regiao?: string
  /** Opcional. Ex.: '6 sessões'. Reforça credibilidade. */
  sessoes?: string
  /** Opcional. Permite separar resultados de estrias e de lábios no futuro. */
  categoria?: 'estrias' | 'labial'
  /**
   * Opcional e SEM EFEITO hoje: a moldura do card é sempre quadrada, para
   * todos os cards terem o mesmo tamanho. A foto aparece inteira dentro dela
   * (sobra faixa creme quando a proporção não é quadrada — passe-partout).
   * O campo fica registrado como documentação das dimensões reais do arquivo.
   */
  proporcao?: string
}

export type Resultado = ResultadoBase &
  (
    | {
        formato: 'composta'
        /** Caminho a partir de /public. Ex.: '/images/resultados/foo.jpg' */
        imagem: string
      }
    | {
        formato: 'par'
        antes: string
        depois: string
      }
  )

export const resultados: Resultado[] = [
  {
    id: 'estrias-braco-01',
    formato: 'composta',
    imagem: '/images/resultados/estrias-braco-01.jpg',
    descricao:
      'Estrias brancas na região superior do braço com melhora visível da textura, uniformidade da pele e suavização das marcas.',
    regiao: 'Braço',
    categoria: 'estrias',
    proporcao: '514 / 859', // dimensões reais desta foto
  },
  {
    id: 'estrias-perna-01',
    formato: 'composta',
    imagem: '/images/resultados/estrias-perna-01.jpg',
    descricao:
      'Estrias brancas na perna com pele mais uniforme e marcas bem menos aparentes. Antes à esquerda, depois à direita.',
    regiao: 'Perna',
    categoria: 'estrias',
    proporcao: '1320 / 1108', // dimensões reais desta foto
  },
  {
    id: 'estrias-perna-02',
    formato: 'composta',
    imagem: '/images/resultados/estrias-perna-02.jpg',
    descricao:
      'Estrias e marcas na lateral da perna visivelmente mais suaves após o protocolo. Antes acima, depois abaixo.',
    regiao: 'Perna',
    categoria: 'estrias',
    proporcao: '965 / 1106', // dimensões reais desta foto
  },

  // ─────────────────────────────────────────────────────────────────
  // MODELO 1 — imagem única já montada (igual aos posts do Instagram).
  // Descomente, troque o caminho e a descrição.
  //
  // {
  //   id: 'estrias-abdomen-01',
  //   formato: 'composta',
  //   imagem: '/images/resultados/estrias-abdomen-01.jpg',
  //   descricao: 'Estrias no abdômen com melhora de coloração e textura.',
  //   regiao: 'Abdômen',
  //   sessoes: '8 sessões',
  //   categoria: 'estrias',
  // },
  // ─────────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────
  // MODELO 2 — duas fotos separadas (a página monta o lado a lado).
  //
  // {
  //   id: 'labial-01',
  //   formato: 'par',
  //   antes: '/images/resultados/labial-01-antes.jpg',
  //   depois: '/images/resultados/labial-01-depois.jpg',
  //   descricao: 'Micro labial natural: contorno definido e cor uniforme.',
  //   regiao: 'Lábios',
  //   categoria: 'labial',
  // },
  // ─────────────────────────────────────────────────────────────────
]
