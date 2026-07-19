/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  DADOS DO SITE — edite este arquivo primeiro                 ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Tudo que aparece como contato, nome e link da página sai daqui.
 * Não é preciso mexer em nenhum componente.
 */

export const site = {
  nome: 'Keila Karelle',
  titulo: 'Especialista em Tratamento de Estrias',
  cidade: 'Goiânia – GO',

  /**
   * Número do perfil da empresa no Google: (62) 98205-9327.
   * ⚠️ CONFIRME que é o WhatsApp de agendamento antes de publicar.
   * Formato: 55 (Brasil) + DDD + número, SÓ DÍGITOS.
   */
  whatsapp: '5562982059327',
  /** Mesmo número, formatado para exibição. */
  telefoneExibicao: '(62) 98205-9327',

  /** Mensagem que já vem digitada quando a cliente abre o WhatsApp. */
  mensagemWhatsapp: 'Oi Keila! Vi seu site e quero agendar minha avaliação.',

  instagram: '@keilakarelle',
  instagramUrl: 'https://instagram.com/keilakarelle',

  /**
   * Endereço do atendimento (perfil da empresa no Google).
   * Alimenta a seção "Onde nos encontrar" e os dados estruturados do Google.
   */
  endereco: {
    rua: 'R. CP-27, 19',
    bairro: 'Res. Celina Park',
    cidadeUf: 'Goiânia – GO',
    cep: '74020-045',
    /** Linha única, usada no link do mapa e nos dados estruturados. */
    completo: 'R. CP-27, 19 - Res. Celina Park, Goiânia - GO, 74020-045',
    /**
     * ⚠️ NÃO INVENTEI O HORÁRIO — o Google só mostrava "abre seg. às 09:00".
     * Troque pelo horário real, ex.: 'Seg a sex, 09h às 18h'.
     */
    horario: 'Atendimento com hora marcada',
  },

  /** Aparece como tira discreta abaixo do botão principal. */
  especialidades: [
    'Método Regenerativo',
    'Microderme',
    'Micro Labial Natural',
    'Hydra Collor',
  ],

  /** Usado no <title>, na descrição do Google e no card de compartilhamento. */
  seo: {
    titulo: 'Keila Karelle | Tratamento de Estrias em Goiânia',
    descricao:
      'Especialista em tratamento de estrias em Goiânia. Método Regenerativo e Microderme para atenuar estrias brancas e vermelhas. Veja resultados reais e agende sua avaliação.',
    /** ⚠️ TROCAR quando o domínio final estiver definido. */
    url: 'https://keilakarelle.com.br',
  },
} as const
