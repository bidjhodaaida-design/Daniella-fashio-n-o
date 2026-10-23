import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowRight, Check, Menu, Minus, Plus, ShoppingBag, Sparkles, X } from 'lucide-react';

const WHATSAPP_NUMBER = '258XXXXXXXXX'; // Substituir pelo número real da loja: indicativo 258 + número, sem +.
const categories = ['Todos', 'Mulher', 'Homem', 'Conjuntos', 'Acessórios'];

const initialProducts = [
  { id: 1, name: 'Blazer Essential', category: 'Mulher', price: 1850, label: 'MAIS VENDIDO', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85', tone: 'Preto' },
  { id: 2, name: 'Street Oversized', category: 'Homem', price: 1250, label: 'NOVO', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85', tone: 'Branco' },
  { id: 3, name: 'Everyday Set', category: 'Conjuntos', price: 2200, label: '', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85', tone: 'Neutro' },
  { id: 4, name: 'Classic Jacket', category: 'Homem', price: 1950, label: 'ESCOLHA DA EQUIPA', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85', tone: 'Castanho' },
  { id: 5, name: 'Soft Knit', category: 'Mulher', price: 1450, label: '', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85', tone: 'Creme' },
  { id: 6, name: 'Weekend Look', category: 'Conjuntos', price: 2600, label: 'LIMITADO', image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=85', tone: 'Casual' },
  { id: 7, name: 'Minimal Tee', category: 'Homem', price: 850, label: '', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85', tone: 'Branco' },
  { id: 8, name: 'City Bag', category: 'Acessórios', price: 1100, label: 'NOVO', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', tone: 'Preto' }
];

const money = (value) => new Intl.NumberFormat('pt-MZ', { maximumFractionDigits: 0 }).format(value) + ' MZN';

function App() {
  const [products] = useState(initialProducts);
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notice, setNotice] = useState('');

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, products, search]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      return found
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1, size: 'A confirmar' }];
    });
    setNotice(product.name + ' adicionado ao saco');
    window.setTimeout(() => setNotice(''), 2200);
  }

  function changeQuantity(id, amount) {
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0));
  }

  function checkoutWhatsApp() {
    if (!cart.length) return;
    if (WHATSAPP_NUMBER.includes('X')) {
      setNotice('Configura primeiro o número de WhatsApp da loja no ficheiro src/App.jsx');
      window.setTimeout(() => setNotice(''), 3500);
      return;
    }
    const lines = cart.map((item) => `• ${item.name} x${item.quantity} — ${money(item.price * item.quantity)}`);
    const message = encodeURIComponent('Olá, DANIELLA FASHION! Gostaria de confirmar esta encomenda:\n\n' + lines.join('\n') + `\n\nSubtotal: ${money(total)}\n\nPodem confirmar disponibilidade, tamanhos e entrega?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="site-shell">
      <div className="announcement">ESTILO QUE FALA POR TI <span>✦</span> ENCOMENDAS PELO WHATSAPP</div>
      <header className="header">
        <button className="icon-button mobile-toggle" aria-label="Abrir menu" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X size={22} /> : <Menu size={22} />}</button>
        <a href="#inicio" className="wordmark" aria-label="Daniella Fashion início">DANIELLA<span>FASHION</span></a>
        <nav className={mobileMenu ? 'nav nav-open' : 'nav'}>
          <a href="#inicio" onClick={() => setMobileMenu(false)}>Início</a>
          <a href="#colecao" onClick={() => setMobileMenu(false)}>Coleção</a>
          <a href="#historia" onClick={() => setMobileMenu(false)}>A nossa essência</a>
          <a href="#contacto" onClick={() => setMobileMenu(false)}>Contacto</a>
        </nav>
        <button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Abrir saco, ${cartCount} artigos`}>
          <ShoppingBag size={19} /><span className="cart-label">O teu saco</span><span className="cart-count">{cartCount}</span>
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img className="hero-image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=90" alt="Inspiração de moda urbana e contemporânea" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light"><Sparkles size={14} /> A TUA NOVA FORMA DE EXPRESSAR</p>
            <h1>Veste a tua<br /><em>essência.</em></h1>
            <p className="hero-copy">Peças escolhidas para quem cria o próprio caminho. O teu estilo, as tuas regras.</p>
            <a href="#colecao" className="button button-light">EXPLORAR COLEÇÃO <ArrowDownRight size={17} /></a>
            <div className="hero-note"><span className="note-line" /> COLEÇÃO DE ESTREIA · 2026</div>
          </div>
          <div className="hero-index">01 / 03</div>
        </section>

        <section className="intro-strip" id="historia">
          <p>MENOS RUÍDO. <span>MAIS IDENTIDADE.</span></p>
          <p className="intro-small">Moda para o teu dia a dia, com atitude e intenção.</p>
        </section>

        <section className="collection section-wrap" id="colecao">
          <div className="section-heading">
            <div><p className="eyebrow">ESCOLHE O TEU LOOK</p><h2>Feito para <em>destacar.</em></h2></div>
            <p className="section-aside">Descobre essenciais que combinam contigo — do casual ao inesquecível.</p>
          </div>
          <div className="collection-tools">
            <div className="filters" aria-label="Filtrar por categoria">
              {categories.map((item) => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
            <input className="search-input" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Procurar peça..." aria-label="Procurar produto" />
          </div>
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.label && <span className="product-label">{product.label}</span>}
                  <button className="quick-add" onClick={() => addToCart(product)} aria-label={`Adicionar ${product.name} ao saco`}><Plus size={19} /></button>
                </div>
                <div className="product-meta"><span>{product.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="product-bottom"><div><h3>{product.name}</h3><p className="product-tone">{product.tone}</p></div><strong>{money(product.price)}</strong></div>
              </article>
            ))}
            {!filteredProducts.length && <p className="empty-state">Não encontrámos produtos com esses critérios.</p>}
          </div>
          <p className="demo-note">Os artigos, preços e imagens apresentados são exemplos de demonstração e devem ser confirmados antes da publicação.</p>
        </section>

        <section className="editorial">
          <div className="editorial-image"><img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85" alt="Detalhe editorial de moda" loading="lazy" /></div>
          <div className="editorial-copy"><p className="eyebrow">A NOSSA ESSÊNCIA</p><h2>Não sigas o estilo.<br /><em>Define-o.</em></h2><p>A DANIELLA FASHION nasce para celebrar a individualidade. Escolhe peças que acompanham o teu ritmo e contam a tua história.</p><a href="#colecao" className="text-link">ENCONTRA O TEU LOOK <ArrowRight size={17} /></a></div>
        </section>

        <section className="values section-wrap">
          <div><span>01</span><h3>Estilo com intenção</h3><p>Escolhas versáteis para combinares à tua maneira.</p></div>
          <div><span>02</span><h3>Compra simples</h3><p>Envia a tua seleção e confirma a encomenda pelo WhatsApp.</p></div>
          <div><span>03</span><h3>Feito para ti</h3><p>Contacta-nos para confirmar tamanhos, disponibilidade e entrega.</p></div>
        </section>
      </main>

      <footer className="footer" id="contacto">
        <div className="footer-top"><a href="#inicio" className="wordmark footer-mark">DANIELLA<span>FASHION</span></a><p>O teu estilo. A tua identidade.</p><a className="footer-link" href="#colecao">COMPRAR A COLEÇÃO <ArrowRight size={15} /></a></div>
        <div className="footer-bottom"><span>© 2026 DANIELLA FASHION</span><span>MOÇAMBIQUE · PREÇOS EM MZN</span><span>FEITO COM IDENTIDADE.</span></div>
      </footer>

      {notice && <div className="toast" role="status"><Check size={17} />{notice}</div>}

      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
        <aside className="cart-drawer" onClick={(event) => event.stopPropagation()} aria-label="O teu saco">
          <div className="drawer-header"><div><p className="eyebrow">A TUA SELEÇÃO</p><h2>O teu saco <span>({cartCount})</span></h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Fechar saco"><X /></button></div>
          {!cart.length ? <div className="cart-empty"><ShoppingBag size={35} /><h3>Ainda está vazio.</h3><p>Descobre as peças que combinam contigo.</p><button className="button button-dark" onClick={() => { setCartOpen(false); document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' }); }}>EXPLORAR COLEÇÃO</button></div> :
            <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div className="cart-item-info"><h3>{item.name}</h3><p>{money(item.price)}</p><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)} aria-label="Diminuir quantidade"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} aria-label="Aumentar quantidade"><Plus size={14} /></button></div></div><strong>{money(item.price * item.quantity)}</strong></div>)}</div><div className="drawer-total"><div><span>Subtotal</span><strong>{money(total)}</strong></div><p>Entrega e disponibilidade serão confirmadas pela loja.</p><button className="button button-dark checkout-button" onClick={checkoutWhatsApp}>ENCOMENDAR PELO WHATSAPP <ArrowRight size={17} /></button></div></>}
        </aside>
      </div>}
    </div>
  );
}

export default App;