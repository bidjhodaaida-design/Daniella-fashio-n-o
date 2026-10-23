import { useState } from 'react';
import { ArrowDown, ArrowRight, Check, ChevronDown, Clock3, Heart, Menu, PawPrint, ShieldCheck, Smartphone, Sparkles, X } from 'lucide-react';

const WHATSAPP_NUMBER = '258XXXXXXXXX'; // Substituir pelo número real antes de publicar.
const PRICE_MZN = 350; // Preço ilustrativo: confirmar antes de vender.
const money = (value) => new Intl.NumberFormat('pt-MZ', { maximumFractionDigits: 0 }).format(value) + ' MZN';

const benefits = [
  { icon: Heart, title: 'Constrói confiança', text: 'Aprende a criar uma relação mais tranquila com o teu cão, com paciência e consistência.' },
  { icon: Clock3, title: 'Sessões curtas', text: 'Ideias práticas para encaixar pequenas sessões de treino na rotina de casa.' },
  { icon: PawPrint, title: 'Passos simples', text: 'Exercícios de base para começares a trabalhar atenção, chamada e bons hábitos.' },
];

const chapters = [
  ['01', 'Começar da forma certa', 'Preparar o ambiente, escolher recompensas e definir expectativas realistas.'],
  ['02', 'Comandos básicos', 'Introdução à atenção, ao “senta”, ao “fica” e à chamada, passo a passo.'],
  ['03', 'Rotina e higiene', 'Criar horários, reforçar bons hábitos e organizar o espaço do cão.'],
  ['04', 'Comportamentos difíceis', 'Como observar os gatilhos e responder sem gritos, castigos físicos ou intimidação.'],
  ['05', 'Plano prático de 7 dias', 'Uma rotina inicial para praticar um pouco de cada vez e acompanhar o progresso.'],
];

const faqs = [
  ['Preciso de experiência com cães?', 'Não. O guia foi pensado para quem está a começar e precisa de orientações simples.'],
  ['Funciona com qualquer cão?', 'Cada cão tem idade, saúde, temperamento e histórico próprios. O guia aborda fundamentos gerais; os resultados variam e alguns casos exigem ajuda profissional.'],
  ['Como recebo o e-book?', 'O método de entrega deve ser confirmado antes da venda. Nesta demonstração, o botão abre uma conversa no WhatsApp para combinar os detalhes.'],
  ['Substitui um veterinário ou treinador?', 'Não. Não substitui avaliação veterinária nem apoio de um profissional qualificado, sobretudo em casos de agressividade, medo intenso ou mudanças súbitas de comportamento.'],
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notice, setNotice] = useState('');

  function orderNow() {
    if (WHATSAPP_NUMBER.includes('X')) {
      setNotice('Antes de publicar, configura o número de WhatsApp no ficheiro src/App.jsx.');
      return;
    }
    const message = encodeURIComponent('Olá! Tenho interesse no e-book “Cão Bem-Educado em Casa”. Podem confirmar o preço, o método de pagamento e como recebo o guia?');
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="page-shell">
      <div className="topline"><PawPrint size={15} /> EDUCAÇÃO COM PACIÊNCIA, RESPEITO E RECOMPENSAS</div>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Pata a Pata início"><span className="brand-mark"><PawPrint size={23} /></span><span>PATA<span className="brand-light"> A PATA</span><small>GUIAS PARA CÃES E FAMÍLIAS</small></span></a>
        <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Abrir menu">{mobileMenu ? <X /> : <Menu />}</button>
        <nav className={mobileMenu ? 'nav nav-open' : 'nav'}>
          <a href="#beneficios" onClick={() => setMobileMenu(false)}>Benefícios</a>
          <a href="#conteudo" onClick={() => setMobileMenu(false)}>O que vais aprender</a>
          <a href="#perguntas" onClick={() => setMobileMenu(false)}>Perguntas frequentes</a>
          <a className="nav-cta" href="#oferta" onClick={() => setMobileMenu(false)}>Ver o guia <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="pill"><Sparkles size={14} /> PARA QUEM ESTÁ A COMEÇAR</div>
            <h1>Um cão mais tranquilo começa com <em>pequenos passos.</em></h1>
            <p className="hero-lead">Aprende a criar uma rotina de treino em casa com orientações simples, consistentes e baseadas no reforço positivo — sem precisar de gritar ou recorrer a castigos físicos.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#oferta">QUERO CONHECER O GUIA <ArrowRight size={18} /></a><a className="text-cta" href="#conteudo">Ver o conteúdo <ArrowDown size={16} /></a></div>
            <div className="trust-row"><span><Check size={15} /> Linguagem simples</span><span><Check size={15} /> Para praticar em casa</span><span><Check size={15} /> Ao teu ritmo</span></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85" alt="Cão golden retriever sentado num jardim" />
            <div className="image-sticker"><PawPrint size={19} /><span>Mais vínculo.<br /><strong>Menos confusão.</strong></span></div>
            <div className="floating-note"><Heart size={17} fill="currentColor" /><span>Treino gentil<br /><strong>passo a passo</strong></span></div>
          </div>
          <div className="hero-bottom"><span>UM GUIA DIGITAL PARA A VIDA REAL</span><span>MOÇAMBIQUE · PREÇO EM MZN</span></div>
        </section>

        <section className="problem section" id="beneficios">
          <div className="section-kicker">A VIDA COM O TEU CÃO</div>
          <h2>Não precisas de saber tudo.<br /><em>Precisas de saber por onde começar.</em></h2>
          <p className="section-intro">Puxar a trela, ignorar a chamada ou ter dificuldade em manter uma rotina pode ser frustrante. A aprendizagem leva tempo — e começa com instruções claras, repetição e compreensão das necessidades do animal.</p>
          <div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><div className="benefit-icon"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="feature-band">
          <div className="feature-photo"><img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85" alt="Pessoa a passear com o seu cão" loading="lazy" /></div>
          <div className="feature-copy"><div className="section-kicker">A TUA NOVA ROTINA</div><h2>Mais ligação.<br /><em>Treino com propósito.</em></h2><p>Em vez de procurar soluções mágicas, aprende a dividir o treino em passos pequenos, observar a resposta do teu cão e recompensar os comportamentos que queres incentivar.</p><ul><li><Check size={17} /> Exercícios curtos e organizados</li><li><Check size={17} /> Orientação clara para iniciantes</li><li><Check size={17} /> Foco em segurança e bem-estar</li></ul><a className="text-cta dark" href="#conteudo">DESCOBRIR O CONTEÚDO <ArrowRight size={17} /></a></div>
        </section>

        <section className="contents section" id="conteudo">
          <div className="section-kicker">POR DENTRO DO E-BOOK</div>
          <h2>O que vais encontrar<br /><em>no guia.</em></h2>
          <p className="section-intro">Um ponto de partida organizado para treinar em casa, adaptar os exercícios à realidade da tua família e acompanhar a evolução sem pressa.</p>
          <div className="chapter-list">{chapters.map(([number, title, text]) => <article className="chapter" key={number}><span className="chapter-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><PawPrint className="chapter-paw" size={20} /></article>)}</div>
          <div className="contents-foot"><ShieldCheck size={19} /><span>Abordagem educativa centrada em reforço positivo, consistência e segurança.</span></div>
        </section>

        <section className="offer" id="oferta">
          <div className="offer-glow"></div>
          <div className="offer-card">
            <div className="offer-image"><img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85" alt="Cão feliz a olhar para a câmara" loading="lazy" /><span className="offer-tag">GUIA DIGITAL</span></div>
            <div className="offer-content"><div className="section-kicker">COMEÇA HOJE, AO TEU RITMO</div><h2>Cão Bem-Educado<br /><em>em Casa</em></h2><p className="offer-description">Um guia prático para dares os primeiros passos na educação do teu cão, com rotinas, comandos básicos e um plano inicial de prática.</p><div className="offer-includes"><span><Check size={16} /> E-book digital</span><span><Check size={16} /> Plano prático de 7 dias</span><span><Check size={16} /> Acesso para consultar no telemóvel</span></div><div className="price-line"><div><span className="price-caption">PREÇO DE DEMONSTRAÇÃO</span><div className="price">{money(PRICE_MZN)}</div></div><span className="price-note">Pagamento e entrega<br />a confirmar por WhatsApp</span></div><button className="btn btn-primary offer-button" onClick={orderNow}>QUERO O MEU GUIA <ArrowRight size={18} /></button><p className="offer-disclaimer">Preço, conteúdo final, pagamento e entrega devem ser confirmados antes da publicação. A compra não garante resultados específicos; cada cão aprende ao seu ritmo.</p></div>
          </div>
        </section>

        <section className="faq section" id="perguntas">
          <div className="section-kicker">AINDA TENS DÚVIDAS?</div><h2>Perguntas <em>frequentes.</em></h2>
          <div className="faq-list">{faqs.map(([question, answer], index) => <article className="faq-item" key={question}><button className="faq-question" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown className={openFaq === index ? 'chevron rotated' : 'chevron'} size={19} /></button>{openFaq === index && <p className="faq-answer">{answer}</p>}</article>)}</div>
        </section>

        <section className="final-cta"><div className="final-paw"><PawPrint size={27} /></div><p className="section-kicker">UMA RELAÇÃO MELHOR CONSTRÓI-SE TODOS OS DIAS</p><h2>Pequenos passos.<br /><em>Grandes momentos juntos.</em></h2><a href="#oferta" className="btn btn-light">VER O E-BOOK <ArrowRight size={17} /></a></section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><PawPrint size={21} /></span><span>PATA<span className="brand-light"> A PATA</span><small>GUIAS PARA CÃES E FAMÍLIAS</small></span></a><p>Conteúdo educativo para apoiar famílias e os seus cães.</p><div className="footer-bottom"><span>© 2026 PATA A PATA · PÁGINA DE DEMONSTRAÇÃO</span><span>MOÇAMBIQUE · MZN</span></div></footer>
      {notice && <div className="notice" role="status"><Smartphone size={18} /><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Fechar aviso"><X size={17} /></button></div>}
    </div>
  );
}

export default App;
