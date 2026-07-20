import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { site } from '@/data/site'
import './globals.css'

/**
 * Fontes carregadas pelo next/font: são baixadas no build e servidas pelo
 * próprio domínio. Sem requisição ao Google em runtime, sem "pulo" de texto
 * ao carregar (o Next reserva o espaço certo antes da fonte chegar).
 */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--fonte-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--fonte-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.titulo,
  description: site.seo.descricao,
  keywords: [
    'tratamento de estrias',
    'estrias Goiânia',
    'método regenerativo',
    'microderme',
    'micro labial natural',
    'hydra color',
    'estrias brancas',
  ],
  authors: [{ name: site.nome }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.seo.url,
    siteName: site.nome,
    title: site.seo.titulo,
    description: site.seo.descricao,
    images: [
      { url: '/images/keila-perfil-estudio.jpg', width: 900, height: 1600, alt: site.nome },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.titulo,
    description: site.seo.descricao,
    images: ['/images/keila-perfil-estudio.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#141211',
  width: 'device-width',
  initialScale: 1,
}

/**
 * Dados estruturados para o Google entender que é um negócio local de
 * Goiânia. Ajuda a aparecer em buscas do tipo "tratamento de estrias perto de mim".
 */
const dadosEstruturados = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: site.nome,
  description: site.seo.descricao,
  url: site.seo.url,
  image: `${site.seo.url}/images/keila-perfil-estudio.jpg`,
  telephone: `+${site.whatsapp}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.endereco.rua} - ${site.endereco.bairro}`,
    postalCode: site.endereco.cep,
    addressLocality: 'Goiânia',
    addressRegion: 'GO',
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'City', name: 'Goiânia' },
  sameAs: [site.instagramUrl],
  makesOffer: site.especialidades.map((nome) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: nome },
  })),
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#resultados" className="pularParaConteudo">
          Pular para os resultados
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  )
}
