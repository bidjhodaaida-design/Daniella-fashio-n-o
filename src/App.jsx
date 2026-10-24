import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Bookmark, Check, ChevronLeft, ChevronRight, Clock3, Compass, Heart, LibraryBig, ListFilter, Moon, Search, Settings2, Sun, X } from 'lucide-react';

const stories = [
  {
    id: 'farol-azul', title: 'O Mistério do Farol Azul', category: 'Mistério', author: 'Adventure Reader Studio', language: 'Português', minutes: 8, color: 'blue',
    description: 'Numa aldeia costeira, uma luz inesperada começa a piscar no velho farol abandonado. Três amigos decidem descobrir o que está por trás do sinal.',
    chapters: [
      { title: 'Uma luz no nevoeiro', text: 'O nevoeiro cobria a baía quando Lina viu a luz azul pela primeira vez. O farol estava fechado havia quase vinte anos, desde que a última tempestade destruíra a ponte de acesso.\n\n— Deve ser um reflexo — disse Tomás, tentando parecer tranquilo.\n\nMas a luz piscou três vezes, parou e voltou a brilhar. Lina anotou a hora no seu caderno. O avô sempre dizia que os sinais importantes se repetiam.\n\nNa manhã seguinte, os três amigos levaram uma lanterna, água e um mapa antigo até ao caminho da falésia. Não queriam entrar no farol sem cuidado; queriam primeiro perceber de onde vinha a luz.' },
      { title: 'O mapa escondido', text: 'Perto da entrada encontraram uma pequena caixa de metal protegida por uma pedra solta. Dentro havia um mapa desenhado à mão e uma frase: “Procurem onde o mar guarda a memória”.\n\nTomás reconheceu o desenho: era a enseada das conchas, a zona onde os pescadores encontravam objectos trazidos pelas correntes. Os amigos decidiram voltar durante o dia e pedir ajuda à senhora Amélia, a antiga guardiã do farol.\n\nEla ouviu a história em silêncio. Depois sorriu: talvez o farol não estivesse a chamar alguém, mas a proteger algo que a aldeia tinha esquecido.' }
    ]
  },
  {
    id: 'ilha-perdida', title: 'A Expedição à Ilha Perdida', category: 'Exploração', author: 'Adventure Reader Studio', language: 'Português', minutes: 10, color: 'green',
    description: 'Uma carta encontrada numa biblioteca leva uma pequena equipa a uma ilha que não aparece nos mapas modernos.',
    chapters: [
      { title: 'A carta antiga', text: 'A carta estava entre as páginas de um atlas gasto, numa biblioteca que cheirava a papel e madeira. O desenho mostrava uma ilha em forma de meia-lua e uma árvore enorme no centro.\n\nMara chamou o seu amigo Joel, que adorava mapas. Juntos compararam a carta com as correntes marítimas e perceberam que a ilha poderia estar escondida atrás de um recife.\n\nNão procuravam tesouros de ouro. Queriam descobrir por que motivo alguém apagaria uma ilha inteira dos mapas.' },
      { title: 'Terra à vista', text: 'Ao nascer do sol, uma faixa verde surgiu no horizonte. A equipa reduziu a velocidade e aproximou-se com cautela. A praia estava coberta de conchas e marcas de aves, mas não havia edifícios nem sinais de visitantes recentes.\n\nNo interior, encontraram pedras dispostas em círculo e uma inscrição quase apagada. Mara fotografou os símbolos e decidiu que não tocariam em nada até compreenderem a história daquele lugar.' }
    ]
  },
  {
    id: 'comboio-noturno', title: 'O Segredo do Comboio Noturno', category: 'Investigação', author: 'Adventure Reader Studio', language: 'Português', minutes: 7, color: 'purple',
    description: 'Durante uma viagem de madrugada, um bilhete misterioso muda o rumo de uma investigação.',
    chapters: [
      { title: 'O bilhete no assento', text: 'O comboio partiu às 23h40. Rui escolheu um lugar junto à janela e encontrou um envelope preso entre o assento e a parede. Não tinha nome, apenas uma hora e o desenho de uma chave.\n\nA revisora explicou que o comboio faria três paragens antes do amanhecer. Rui guardou o envelope e observou os passageiros sem tirar conclusões precipitadas.\n\nQuando abriu o bilhete sob a luz do corredor, leu: “A resposta está na última estação. Não confies no relógio da plataforma”.' },
      { title: 'A última estação', text: 'Na última estação, todos os relógios marcavam horas diferentes. Rui percebeu que a pista não era sobre tempo, mas sobre perspectiva: um relógio antigo estava virado para o lado de dentro da sala de espera.\n\nAtrás dele havia um pequeno compartimento com uma carta destinada à directora do museu ferroviário. O mistério era afinal um pedido de ajuda para preservar os registos históricos da linha. Rui entregou a carta e a viagem terminou com uma nova pergunta: quem a tinha deixado no comboio?' }
    ]
  },
  {
    id: 'mapa-esquecido', title: 'O Mapa da Cidade Esquecida', category: 'Viagens', author: 'Adventure Reader Studio', language: 'Português', minutes: 9, color: 'amber',
    description: 'Um mapa incompleto revela ruas antigas debaixo de uma cidade movimentada.',
    chapters: [{ title: 'As ruas debaixo das ruas', text: 'Durante obras na praça central, apareceu uma placa de pedra com nomes de ruas que já não existiam. A estudante Inês copiou os nomes e procurou-os nos arquivos municipais.\n\nO mapa apontava para um antigo mercado coberto por construções mais recentes. Com a ajuda de uma arquivista, Inês descobriu que aquelas ruas eram parte do primeiro bairro da cidade.\n\nA descoberta não levou a uma câmara secreta, mas a algo mais valioso: histórias de famílias, ofícios e encontros que tinham moldado a cidade.' }]
  },
  {
    id: 'montanha-dourada', title: 'O Enigma da Montanha Dourada', category: 'Aventura', author: 'Adventure Reader Studio', language: 'Português', minutes: 11, color: 'gold',
    description: 'Dois irmãos seguem pistas geológicas para compreender o brilho estranho de uma montanha ao pôr do sol.',
    chapters: [{ title: 'O brilho ao entardecer', text: 'A montanha parecia feita de ouro quando o sol tocava a encosta, mas o brilho desaparecia assim que a luz mudava. Sara e Dário levaram um caderno de campo e binóculos para observar o fenómeno.\n\nCom a orientação de uma geóloga, descobriram que certos minerais reflectiam a luz de uma forma invulgar. A pista verdadeira estava nas camadas de rocha, não numa lenda sobre riquezas escondidas.\n\nOs irmãos regressaram com fotografias e notas, orgulhosos por terem resolvido o enigma através da observação e da curiosidade.' }]
  }
];

const categories = ['Todas', 'Mistério', 'Exploração', 'Viagens', 'Investigação', 'Aventura'];
const coverClass = { blue: 'cover-blue', green: 'cover-green', purple: 'cover-purple', amber: 'cover-amber', gold: 'cover-gold' };

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas');
  const [activeStory, setActiveStory] = useState(null);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('ar-favorites') || '[]'));
  const [progress, setProgress] = useState(() => JSON.parse(localStorage.getItem('ar-progress') || '{}'));
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('ar-bookmarks') || '{}'));
  const [theme, setTheme] = useState(() => localStorage.getItem('ar-theme') || 'light');
  const [fontSize, setFontSize] = useState(18);
  const [showSettings, setShowSettings] = useState(false);
  const [view, setView] = useState('home');

  useEffect(() => { localStorage.setItem('ar-favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('ar-progress', JSON.stringify(progress)); }, [progress]);
  useEffect(() => { localStorage.setItem('ar-bookmarks', JSON.stringify(bookmarks)); }, [bookmarks]);
  useEffect(() => { localStorage.setItem('ar-theme', theme); }, [theme]);

  const filtered = useMemo(() => stories.filter(s =>
    (category === 'Todas' || s.category === category) &&
    (s.title + ' ' + s.description + ' ' + s.category).toLowerCase().includes(query.toLowerCase())
  ), [query, category]);

  const openStory = (story, resume = false) => {
    setActiveStory(story);
    setChapterIndex(resume ? (progress[story.id]?.chapter || 0) : 0);
    setView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFavorite = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const currentChapter = activeStory?.chapters[chapterIndex];
  const saveProgress = (id, chapter) => setProgress(prev => ({ ...prev, [id]: { chapter, percent: Math.round(((chapter + 1) / activeStory.chapters.length) * 100), updated: Date.now() } }));
  const toggleBookmark = () => setBookmarks(prev => {
    const current = prev[activeStory.id] || [];
    const key = String(chapterIndex);
    return { ...prev, [activeStory.id]: current.includes(key) ? current.filter(x => x !== key) : [...current, key] };
  });

  return <div className={`app-shell ${theme === 'dark' ? 'dark-mode' : ''}`}>
    <header className="topbar">
      <button className="brand" onClick={() => { setView('home'); setActiveStory(null); }} aria-label="Ir para início">
        <span className="brand-mark"><BookOpen size={22}/></span><span><strong>Adventure</strong><small>READER</small></span>
      </button>
      <nav className="desktop-nav">
        <button className={view === 'home' ? 'nav-active' : ''} onClick={() => { setView('home'); setActiveStory(null); }}>Início</button>
        <button className={view === 'library' ? 'nav-active' : ''} onClick={() => { setView('library'); setActiveStory(null); }}>Biblioteca</button>
        <button className={view === 'favorites' ? 'nav-active' : ''} onClick={() => { setView('favorites'); setActiveStory(null); }}>Favoritos</button>
      </nav>
      <div className="top-actions">
        <button className="icon-btn" title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <button className="icon-btn" title="Definições de leitura" onClick={() => setShowSettings(v => !v)}><Settings2 size={19}/></button>
      </div>
    </header>

    {showSettings && <div className="settings-popover">
      <div className="settings-head"><strong>Definições de leitura</strong><button className="icon-btn" onClick={() => setShowSettings(false)}><X size={16}/></button></div>
      <label>Tamanho do texto <b>{fontSize}px</b></label>
      <input type="range" min="15" max="25" value={fontSize} onChange={e => setFontSize(Number(e.target.value))}/>
      <p>As tuas preferências ficam guardadas neste dispositivo.</p>
    </div>}

    {view === 'reader' && activeStory ? <main className="reader-page">
      <button className="back-link" onClick={() => { setView('library'); setActiveStory(null); }}><ChevronLeft size={18}/> Voltar à biblioteca</button>
      <div className="reader-toolbar">
        <div><span className="eyebrow">{activeStory.category} · {activeStory.minutes} min de leitura</span><h1>{activeStory.title}</h1></div>
        <button className={favorites.includes(activeStory.id) ? 'favorite-btn selected' : 'favorite-btn'} onClick={() => toggleFavorite(activeStory.id)}><Heart size={18} fill={favorites.includes(activeStory.id) ? 'currentColor' : 'none'}/>{favorites.includes(activeStory.id) ? 'Guardado' : 'Favoritar'}</button>
      </div>
      <div className="progress-track"><span style={{width: `${Math.round(((chapterIndex + 1) / activeStory.chapters.length) * 100)}%`}}/></div>
      <div className="reader-layout">
        <aside className="chapter-list"><strong>Capítulos</strong>{activeStory.chapters.map((ch, i) => <button key={ch.title} className={i === chapterIndex ? 'chapter-active' : ''} onClick={() => { setChapterIndex(i); saveProgress(activeStory.id, i); }}>{String(i + 1).padStart(2, '0')} <span>{ch.title}</span>{(bookmarks[activeStory.id] || []).includes(String(i)) && <Bookmark size={14} fill="currentColor"/>}</button>)}</aside>
        <article className="reading-paper">
          <div className="reading-meta">CAPÍTULO {String(chapterIndex + 1).padStart(2, '0')} DE {String(activeStory.chapters.length).padStart(2, '0')}</div>
          <h2>{currentChapter.title}</h2>
          <div className="story-text" style={{fontSize: `${fontSize}px`}}>{currentChapter.text.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className="reader-bottom">
            <button className="secondary-btn" disabled={chapterIndex === 0} onClick={() => { const n = chapterIndex - 1; setChapterIndex(n); saveProgress(activeStory.id, n); }}><ChevronLeft size={17}/> Anterior</button>
            <button className={((bookmarks[activeStory.id] || []).includes(String(chapterIndex))) ? 'bookmark-btn active' : 'bookmark-btn'} onClick={toggleBookmark}><Bookmark size={17}/> {((bookmarks[activeStory.id] || []).includes(String(chapterIndex))) ? 'Remover marcador' : 'Marcar capítulo'}</button>
            <button className="primary-btn" disabled={chapterIndex === activeStory.chapters.length - 1} onClick={() => { const n = chapterIndex + 1; setChapterIndex(n); saveProgress(activeStory.id, n); }} >Próximo <ChevronRight size={17}/></button>
          </div>
          {chapterIndex === activeStory.chapters.length - 1 && <div className="finished-note"><Check size={18}/> Chegaste ao último capítulo desta história de demonstração.</div>}
        </article>
      </div>
    </main> : <main>
      {view === 'home' && <section className="hero">
        <div className="hero-copy"><span className="eyebrow"><Compass size={15}/> UM MUNDO DE DESCOBERTAS</span><h1>Grandes aventuras.<br/><em>Novos mundos.</em></h1><p>Descobre histórias de mistério, exploração e coragem. Lê ao teu ritmo e continua sempre de onde paraste.</p>
          <button className="primary-btn hero-button" onClick={() => setView('library')}>Explorar biblioteca <ChevronRight size={18}/></button>
          <div className="hero-stats"><span><strong>{stories.length}</strong> histórias de demonstração</span><span><strong>100%</strong> originais</span></div>
        </div>
        <div className="hero-art"><div className="sun-disc"/><div className="mountain mountain-back"/><div className="mountain mountain-front"/><div className="hero-book"><BookOpen size={45}/><span>ABRE A<br/>PRÓXIMA<br/>AVENTURA</span></div><span className="floating-star star-one">✦</span><span className="floating-star star-two">✧</span></div>
      </section>}

      {view === 'home' && <section className="resume-section">
        <div className="section-heading"><div><span className="eyebrow">A TUA JORNADA</span><h2>Continuar a ler</h2></div><button className="text-link" onClick={() => setView('library')}>Ver biblioteca <ChevronRight size={16}/></button></div>
        {Object.keys(progress).length ? <div className="resume-row">{stories.filter(s => progress[s.id]).map(s => <button className="resume-card" key={s.id} onClick={() => openStory(s, true)}><span className={`mini-cover ${coverClass[s.color]}`}><BookOpen size={24}/></span><span className="resume-info"><strong>{s.title}</strong><small>Capítulo {(progress[s.id].chapter || 0) + 1} · {progress[s.id].percent || 0}% lido</small><span className="mini-progress"><i style={{width: `${progress[s.id].percent || 0}%`}}/></span></span><ChevronRight size={18}/></button>)}</div> : <div className="empty-resume"><span className="empty-icon"><BookOpen size={22}/></span><div><strong>A tua próxima aventura começa aqui</strong><p>Abre uma história e o teu progresso aparecerá nesta área.</p></div><button className="text-link" onClick={() => setView('library')}>Escolher história <ChevronRight size={16}/></button></div>}
      </section>}

      <section className="library-section">
        <div className="section-heading"><div><span className="eyebrow">{view === 'favorites' ? 'A TUA COLEÇÃO' : 'ESCOLHE O TEU PRÓXIMO DESTINO'}</span><h2>{view === 'favorites' ? 'As tuas favoritas' : view === 'library' ? 'Biblioteca de aventuras' : 'Histórias para descobrir'}</h2></div><span className="story-count">{(view === 'favorites' ? filtered.filter(s => favorites.includes(s.id)) : filtered).length} histórias</span></div>
        <div className="search-row"><div className="search-box"><Search size={19}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Pesquisar por título, tema ou palavra..."/>{query && <button className="icon-btn" onClick={() => setQuery('')}><X size={16}/></button>}</div><span className="filter-label"><ListFilter size={16}/> Filtrar por</span></div>
        <div className="category-pills">{categories.map(c => <button key={c} className={category === c ? 'pill-active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div>
        <div className="story-grid">{(view === 'favorites' ? filtered.filter(s => favorites.includes(s.id)) : filtered).map((story, i) => <article className="story-card" key={story.id}>
          <button className={favorites.includes(story.id) ? 'heart-float is-favorite' : 'heart-float'} aria-label="Adicionar aos favoritos" onClick={() => toggleFavorite(story.id)}><Heart size={18} fill={favorites.includes(story.id) ? 'currentColor' : 'none'}/></button>
          <button className={`story-cover ${coverClass[story.color]}`} onClick={() => openStory(story)} aria-label={`Ler ${story.title}`}><span className="cover-number">AVENTURA Nº {String(i + 1).padStart(2, '0')}</span><span className="cover-symbol">{story.color === 'blue' ? '✦' : story.color === 'green' ? '⌁' : story.color === 'purple' ? '◈' : story.color === 'amber' ? '⌖' : '✧'}</span><strong>{story.title}</strong><span className="cover-footer">ADVENTURE READER · HISTÓRIA ORIGINAL</span></button>
          <div className="story-card-body"><div className="story-meta"><span>{story.category}</span><span><Clock3 size={13}/>{story.minutes} min</span></div><h3>{story.title}</h3><p>{story.description}</p><button className="read-link" onClick={() => openStory(story)}><BookOpen size={16}/> Começar a ler <ChevronRight size={16}/></button></div>
        </article>)}</div>
        {((view === 'favorites' && !filtered.some(s => favorites.includes(s.id))) || (view !== 'favorites' && !filtered.length)) && <div className="no-results"><Search size={28}/><strong>Não encontrámos histórias</strong><p>Tenta outra palavra ou escolhe uma categoria diferente.</p><button className="secondary-btn" onClick={() => { setQuery(''); setCategory('Todas'); }}>Limpar filtros</button></div>}
      </section>
    </main>}

    <footer className="footer"><div className="footer-brand"><span className="brand-mark"><BookOpen size={20}/></span><strong>Adventure Reader</strong></div><p>Um lugar tranquilo para ler, imaginar e descobrir.</p><small>Conteúdo de demonstração original. Esta aplicação não é afiliada nem patrocinada pelos titulares de Tintin.</small></footer>
    <nav className="mobile-nav"><button className={view === 'home' ? 'mobile-active' : ''} onClick={() => { setView('home'); setActiveStory(null); }}><Compass size={19}/>Início</button><button className={view === 'library' || view === 'reader' ? 'mobile-active' : ''} onClick={() => { setView('library'); setActiveStory(null); }}><LibraryBig size={19}/>Biblioteca</button><button className={view === 'favorites' ? 'mobile-active' : ''} onClick={() => { setView('favorites'); setActiveStory(null); }}><Heart size={19}/>Favoritos</button></nav>
  </div>;
}
