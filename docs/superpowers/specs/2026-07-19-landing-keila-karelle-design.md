# Landing page de resultados — Keila Karelle

**Data:** 2026-07-19
**Status:** aprovado e implementado

## Objetivo

Página única que gera credibilidade por prova visual (antes e depois) e converte
visitante vindo do Instagram em contato por WhatsApp.

## Contexto da profissional

- Keila Karelle — especialista em tratamento de estrias, Goiânia – GO
- Serviços: Método Regenerativo, Microderme, Micro Labial Natural, Hydra Collor
- Instagram: @keilakarelle
- Tráfego majoritariamente mobile, vindo do Instagram

## Decisões

### Escopo

| Decisão | Escolha | Motivo |
|---|---|---|
| Comparativo | Lado a lado, sem slider | Fotos não têm enquadramento consistente entre antes e depois; slider ficaria quebrado |
| Depoimentos escritos | Fora | Antes/depois já é a prova mais forte; página curta converte mais no mobile |
| Contato | Só WhatsApp (`wa.me`) | Zero backend, zero atrito; formulário adicionaria fricção sem ganho |
| Headline | Opção A, aspiracional | "Sua pele, livre pra ser mostrada." |
| Deploy | Vercel | Otimização nativa de imagem; alternativa estática documentada em `next.config.ts` |

### Identidade visual

Extraída do retrato profissional dela (não de prints do Instagram, que não foram
fornecidos): fundo carvão, blazer preto, dourado das joias, nude da maquiagem.

Paleta: `--preto #141211`, `--carvao #1c1a18`, `--dourado #c8a96a`,
`--nude #c99a8a`, `--claro #f5f0ec`.

Tipografia: Cormorant Garamond (títulos, peso 300) + Inter (texto), via `next/font`.

Ritmo de fundo escuro → claro → escuro. A quebra clara na seção de resultados
existe porque foto de pele tem muito mais leitura sobre creme do que sobre preto.

O retrato tem fundo carvão igual ao do hero, então recebe uma máscara radial e
"flutua" no fundo sem precisar de recorte.

### Arquitetura

Modelo de dados com união discriminada, porque o material real dela é de dois tipos:

```ts
type Resultado = ResultadoBase & (
  | { formato: 'composta'; imagem: string }
  | { formato: 'par'; antes: string; depois: string }
)
```

`composta` cobre as artes já montadas do Instagram (antes e depois dentro da mesma
imagem, com rótulo embutido) — a página não sobrepõe rótulo nesse caso. `par` cobre
fotos separadas. O TypeScript impede misturar os campos.

**Imagens por caminho string, não import estático.** Import estático daria
`blurDataURL` e dimensões automáticas, mas quebra o build se o arquivo sumir —
conflito direto com o requisito de placeholder para foto faltante. O layout shift
é resolvido com `aspect-ratio` no container.

**`object-fit: contain` sempre.** Cortar foto de resultado pode esconder justamente
a área tratada.

**Um único componente client** (`ImagemComFallback`, precisa de `onError`). Todo o
resto renderiza no servidor.

### Seções

1. `Hero` — headline, promessa, CTA, tira de especialidades, retrato
2. `Resultados` — galeria (o coração da página)
3. `Sobre` — bio curta + três pilares de diferencial
4. `CtaFinal` — fechamento com WhatsApp
5. `Footer` — Instagram, WhatsApp, aviso legal
6. `BotaoWhatsapp` — flutuante fixo

CTA acima da dobra no mobile: o botão vem antes do retrato de propósito.

### Conformidade

Copy evita "elimina", "cura", "100%". Usa "atenuar" e "melhora visível". Página
inclui aviso de que resultados variam e de que as imagens são publicadas com
autorização. Regras de publicidade do conselho profissional devem ser confirmadas
antes de publicar.

## Verificação realizada

- `npm run build` passa; página prerenderizada como estática
- Mobile 375px e desktop 1280px: sem overflow horizontal
- CTA principal acima da dobra nos dois tamanhos
- Fontes carregam (Cormorant Garamond, Inter); imagens servidas via `/_next/image`
- Alvos de toque ≥ 44px (corrigido nos links do rodapé)
- `aspect-ratio` aplicado bate com a proporção real da foto (0.598)
- Contraste do texto secundário sobre fundo escuro ≈ 7,1:1 (AAA)

## Limitação conhecida

A foto de resultado de origem tem 514×859 px. Em tela retina o espaço pede ~666px
de largura, então a imagem sofre leve upscale. Não é falha de código (o `srcset`
pede corretamente o candidato de 750px) — é limitação do arquivo. Exportar as
fotos com pelo menos 1200px de largura resolve.
