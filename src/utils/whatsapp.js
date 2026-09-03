import { business } from '../data/business';
const base = 'https://wa.me/';
export const messages = {
  general: 'Olá! Vim pelo site da Geo Doces e gostaria de conhecer os produtos disponíveis.',
  order: 'Olá! Vim pelo site da Geo Doces e gostaria de fazer um pedido.',
  customOrder: 'Olá! Vim pelo site e gostaria de consultar uma encomenda.',
  product: (name) => `Olá! Vim pelo site da Geo Doces e gostaria de saber mais sobre ${name}.`,
};
export function whatsappUrl(message = messages.general) {
  return business.whatsapp ? `${base}${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}` : `https://www.instagram.com/${business.instagram.replace('@', '')}/`;
}
