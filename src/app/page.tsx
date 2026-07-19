import BotaoWhatsapp from '@/components/BotaoWhatsapp/BotaoWhatsapp'
import CtaFinal from '@/components/CtaFinal/CtaFinal'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Localizacao from '@/components/Localizacao/Localizacao'
import Resultados from '@/components/Resultados/Resultados'
import Sobre from '@/components/Sobre/Sobre'

/**
 * Landing page única.
 *
 * Ordem pensada para tráfego de Instagram: promessa → PROVA → quem entrega →
 * chamada final. A prova vem cedo porque quem chega do Insta é cético e
 * decide em segundos.
 *
 * Ritmo de fundo: escuro → claro → escuro → escuro. A quebra clara na seção
 * de resultados faz as fotos de pele respirarem.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Resultados />
        <Sobre />
        {/* Endereço antes do fechamento: ter local físico gera confiança,
            e a confiança é o que faz o CTA seguinte funcionar. */}
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <BotaoWhatsapp />
    </>
  )
}
