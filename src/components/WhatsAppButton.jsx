import { useEffect, useState } from 'react';
import { messages, whatsappUrl } from '../utils/whatsapp';
export default function WhatsAppButton(){const [show,setShow]=useState(false);useEffect(()=>{const f=()=>setShow(scrollY>450);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);return <a className={`mobile-order ${show?'mobile-order--show':''}`} href={whatsappUrl(messages.order)} target="_blank" rel="noreferrer">Fazer pedido pelo WhatsApp <span>↗</span></a>}
