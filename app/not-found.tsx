import Link from "next/link";

export default function NotFound() {
  return <main className="inner-page press-page"><header className="press-page-header"><p className="kicker">ERRO 404</p><h1>Página não encontrada.</h1><p>O endereço informado não existe ou foi movido.</p><Link className="button button-gold" href="/">Voltar ao início</Link></header></main>;
}
