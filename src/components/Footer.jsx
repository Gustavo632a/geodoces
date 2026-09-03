import { business } from '../data/business';
import { messages, whatsappUrl } from '../utils/whatsapp';
export default function Footer() {
  return <footer>
    <div><a className="logo" href="#inicio"><span>Geo</span> Doces</a><p>Doces feitos para momentos especiais.</p></div>
    <div><h3>Encontre a Geo</h3><a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram {business.instagram}</a><a href={whatsappUrl(messages.general)} target="_blank" rel="noreferrer">Falar no WhatsApp</a></div>
    <div><h3>Navegue</h3><a href="#cardapio">Cardápio</a><a href="#encomendas">Encomendas</a></div>
    <small>© 2026 Geo Doces. Todos os direitos reservados. <em>Desenvolvido por seu nome</em></small>
  </footer>;
}
