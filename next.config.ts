import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // AVIF/WebP reduzem muito o peso das fotos de resultado no mobile.
    formats: ['image/avif', 'image/webp'],
  },

  // ─────────────────────────────────────────────────────────────
  // HOSPEDAGEM FORA DA VERCEL (Hostinger, cPanel, GitHub Pages…)?
  // Descomente as 2 linhas abaixo para gerar site estático.
  // Atenção: desliga a otimização automática de imagem — comprima
  // as fotos antes de subir (recomendado: squoosh.app, largura 1200px).
  //
  // output: 'export',
  // images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
  // ─────────────────────────────────────────────────────────────
}

export default nextConfig
