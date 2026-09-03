import { useEffect, useState } from 'react';
import { business } from '../data/business';
import { messages, whatsappUrl } from '../utils/whatsapp';

const links = [['Início', '#inicio'], ['Sobre', '#sobre'], ['Cardápio', '#cardapio'], ['Encomendas', '#encomendas'], ['Galeria', '#galeria'], ['Contato', '#contato']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 10); addEventListener('scroll', f); return () => removeEventListener('scroll', f); }, []);
  return <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
    <a href="#inicio" className="logo" aria-label="Geo Doces - início"><span>Geo</span> Doces</a>
    <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
    <nav className={open ? 'nav nav--open' : 'nav'}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <a className="button button--small header-cta" href={whatsappUrl(messages.order)} target="_blank" rel="noreferrer">Fazer pedido</a>
  </header>;
}
