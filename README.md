# Landing Page — Keila Karelle

Landing page de resultados (antes e depois) para **Keila Karelle**, especialista em
tratamento de estrias em Goiânia – GO.

Next.js 16 (App Router) · TypeScript · CSS Modules · sem Tailwind, sem biblioteca de UI.

---

## Como rodar

Precisa do [Node.js](https://nodejs.org) 20 ou superior.

```bash
npm install     # só na primeira vez
npm run dev     # abre em http://localhost:3000
```

Outros comandos:

```bash
npm run build   # gera a versão de produção (usa para conferir se está tudo ok)
npm start       # roda a versão de produção localmente
```

---

## 📸 Como trocar ou adicionar fotos

### 1. Coloque o arquivo na pasta

```
public/images/resultados/     ← fotos de antes e depois
public/images/keila-perfil.jpg ← seu retrato do topo da página
```

### 2. Abra `src/data/resultados.ts` e adicione um bloco

O arquivo aceita **dois formatos**. Use o que combinar com a foto que você tem.

#### Formato A — imagem única (a mais comum)

Para as artes que você já monta pro Instagram, com o "Antes" e o "Depois"
escritos dentro da própria imagem:

```ts
{
  id: 'estrias-abdomen-01',
  formato: 'composta',
  imagem: '/images/resultados/estrias-abdomen-01.jpg',
  descricao: 'Estrias no abdômen com melhora de coloração e textura.',
  regiao: 'Abdômen',        // opcional — vira etiqueta dourada
  sessoes: '8 sessões',     // opcional
  categoria: 'estrias',     // opcional — 'estrias' ou 'labial'
  proporcao: '1080 / 1350', // opcional — veja abaixo
}
```

A página **não escreve rótulo por cima** nesse formato, porque a imagem já tem os dela.

#### Formato B — duas fotos separadas

```ts
{
  id: 'labial-01',
  formato: 'par',
  antes: '/images/resultados/labial-01-antes.jpg',
  depois: '/images/resultados/labial-01-depois.jpg',
  descricao: 'Micro labial natural: contorno definido e cor uniforme.',
  regiao: 'Lábios',
  categoria: 'labial',
}
```

Aqui a página monta o lado a lado e escreve **ANTES** e **DEPOIS** — o "depois"
ganha o selo dourado.

### 3. Sobre o campo `proporcao`

A foto **nunca é cortada**. Se a proporção informada não bater com a real, sobra
uma faixa creme nas laterais (funciona como passe-partout de quadro).

Para encaixar perfeito: clique com o botão direito na foto → Propriedades →
Detalhes → veja largura e altura em pixels. Depois escreva `'largura / altura'`.

Exemplo: foto de 1080 × 1350 → `proporcao: '1080 / 1350'`.

Se você omitir, a página usa `3 / 4` (padrão vertical do Instagram).

### 4. Se uma foto sumir

A página **não quebra**. Aparece automaticamente um placeholder discreto escrito
"Foto em breve" no lugar. Nada de imagem quebrada na frente da cliente.

---

## ⚙️ Onde trocar telefone, Instagram e textos

| O que | Arquivo |
|---|---|
| WhatsApp, Instagram, nome, cidade, **endereço, horário**, SEO | `src/data/site.ts` |
| Fotos de antes/depois | `src/data/resultados.ts` |
| Cores e fontes | `src/app/globals.css` (bloco `:root`) |
| Texto do topo (headline) | `src/components/Hero/Hero.tsx` |
| Texto da bio | `src/components/Sobre/Sobre.tsx` |
| Texto do fechamento | `src/components/CtaFinal/CtaFinal.tsx` |

### ⚠️ Duas conferências antes de publicar

Em `src/data/site.ts`:

**1. O WhatsApp.** Está preenchido com o número do perfil da empresa no Google —
`(62) 98205-9327`. Confirme que é mesmo o número de agendamento:

```ts
whatsapp: '5562982059327',
//         55 = Brasil, 62 = DDD, resto = número. SÓ DÍGITOS.
```

**2. O horário.** Não foi inventado — o Google só informava "abre seg. às 09:00",
então ficou genérico. Troque pelo horário real:

```ts
horario: 'Atendimento com hora marcada',
//    →  'Seg a sex, 09h às 18h'
```

O endereço e o link do mapa saem daí também. Mudou de endereço? Edite o bloco
`endereco` e o botão "Como chegar" acompanha sozinho.

---

## Estrutura do projeto

```
public/images/          fotos do site (estas vão pro Git)
├── resultados/         antes e depois
├── keila-perfil.jpg    retrato do topo
└── placeholder.svg     aparece se alguma foto faltar

src/
├── app/
│   ├── layout.tsx      fontes, SEO, dados do Google
│   ├── page.tsx        monta as seções na ordem
│   └── globals.css     ← CORES E FONTES
├── components/         um componente por pasta, com seu próprio CSS
├── data/               ← ARQUIVOS QUE VOCÊ EDITA
└── lib/whatsapp.ts     monta o link do WhatsApp

references/             material de origem — NÃO vai pro Git
```

---

## Publicar

### Vercel (recomendado)

1. Suba o projeto pro GitHub
2. Entre em [vercel.com](https://vercel.com), clique em **Add New → Project**
3. Escolha o repositório e clique em **Deploy**

A Vercel detecta o Next.js sozinho. A otimização automática de imagens
(que deixa o site leve no celular) só funciona nesse modo.

### Outro serviço de hospedagem

Abra `next.config.ts` e descomente o bloco indicado no final do arquivo.
Depois rode `npm run build` — os arquivos prontos ficam na pasta `out/`.

Nesse modo a otimização automática de imagem é desligada, então **comprima as
fotos antes de subir** (sugestão: [squoosh.app](https://squoosh.app), largura de
1200px, qualidade 80).

---

## Notas importantes

**Resolução das fotos.** Para ficarem nítidas em celular moderno, exporte as
fotos de resultado com pelo menos **1200px de largura**. A foto atual
(`estrias-braco-01.jpg`) tem 514px e fica um pouco suave na tela.

**Autorização de imagem.** Guarde autorização por escrito de cada cliente cujas
fotos aparecem no site.

**Publicidade.** Os textos evitam de propósito palavras como "elimina", "cura" e
"100%", usando "atenuar" e "melhora visível". Confirme as regras de publicidade
com o conselho profissional da área antes de publicar.
