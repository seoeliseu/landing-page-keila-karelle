import { site } from '@/data/site'

/**
 * Monta o link do WhatsApp com a mensagem já digitada.
 *
 * Usa o domínio wa.me, que funciona tanto no app do celular quanto no
 * WhatsApp Web — sem precisar de backend nem biblioteca.
 *
 * @param mensagem Texto opcional. Serve para saber de qual botão veio o
 *                 contato (ex.: "vim do topo" vs "vim do final da página").
 */
export function linkWhatsapp(mensagem: string = site.mensagemWhatsapp): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`
}
