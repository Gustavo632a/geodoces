import { business } from '../data/business';
import { messages, whatsappUrl } from '../utils/whatsapp';
export default function Hero() {
 return <section id="inicio" className="hero">
   <div className="hero__copy reveal"><p className="eyebrow">FEITO COM CARINHO <b>•</b> SABOR EM CADA DETALHE</p><h1>Doces feitos para transformar momentos simples em momentos especiais.</h1><p className="hero__text">Sabores preparados com cuidado, capricho e aquele toque especial que deixa qualquer ocasião ainda mais gostosa.</p>
   <div className="actions"><a className="button" href={whatsappUrl(messages.order)} target="_blank" rel="noreferrer">Fazer meu pedido <span>↗</span></a><a className="text-link" href="#cardapio">Ver cardápio <span>↓</span></a></div><small>Pedidos e encomendas pelo WhatsApp.</small></div>
   <figure className="hero__image"><img src={business.heroImage} alt="Foto ilustrativa de bolo confeitado" fetchPriority="high"/><figcaption>Imagem ilustrativa — em breve, doces da Geo.</figcaption><div className="hero__seal">feito<br/>à mão</div></figure>
 </section>;
}
