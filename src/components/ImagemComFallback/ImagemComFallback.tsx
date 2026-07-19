'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

const PLACEHOLDER = '/images/placeholder.svg'

type Props = Omit<ImageProps, 'src'> & { src: string }

/**
 * next/image com rede de segurança.
 *
 * Se o arquivo não existir (nome digitado errado no data file, foto ainda não
 * enviada, upload falhou), troca sozinho pelo placeholder em vez de deixar um
 * buraco quebrado na página.
 *
 * É o ÚNICO componente com 'use client' do projeto — `onError` é um evento de
 * navegador e exige JavaScript no cliente. Todo o resto é renderizado no
 * servidor, então o site chega quase sem JS.
 */
export default function ImagemComFallback({ src, alt, ...rest }: Props) {
  const [falhou, setFalhou] = useState(false)

  return (
    <Image
      {...rest}
      src={falhou ? PLACEHOLDER : src}
      alt={alt}
      onError={() => setFalhou(true)}
    />
  )
}
