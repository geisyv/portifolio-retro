import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "5511964371888";

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(`Olá, meu nome é ${name}. ${message}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setName("");
    setMessage("");
  };

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <header className="retro-header">
        <div className="logo">Geisielly Vasques</div>

        <div className="menu-container">
          <button className="menu-toggle" onClick={() => {
            const nav = document.querySelector(".nav-menu");
            nav.classList.toggle("open");
          }}>
            ☰
          </button>

          <nav className="nav-menu">
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre Mim</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>


        <div className="hire-container">
          <div className="icon">
            <img className="icon-img" src="https://img.icons8.com/emoji/48/hot-beverage.png" alt="hot-beverage" />
          </div>

        </div>
      </header>

      <section id="inicio" className="intro-section">
        <div className="intro-text">
          <h1>Olá, meu nome é Geisy</h1>
          <h2>Transformo ideias em <span className="highlight">realidade digital.</span></h2>
          <p>
            Sou desenvolvedora web com experiência em HTML, CSS, Javascript e React. Tenho paixão por criar interfaces modernas,
            funcionais e acessíveis, sempre buscando desafios que me ajudem a evoluir profissionalmente.
          </p>
        </div>

        <div className="intro-image">
          <img src="/eu.png" alt="Geisy" />
        </div>
      </section>

      <section id="sobre" className="sobre-section">
        <div class="header">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/about-me.png" alt="about-me" />
          <h2>Sobre mim</h2>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/about-me.png" alt="about-me" />
        </div>
        <div className="sobre-container">
          <p>Sou apaixonada por tecnologia, aprendizado contínuo e soluções que geram impacto. </p>
          <p>Com formação em Geografia pela USP e experiência como Analista de Sistemas, venho construindo uma trajetória que une raciocínio analítico e criatividade.</p>
          <p>Participei de bootcamps e formações práticas que me deram uma visão full stack, desenvolvendo projetos com HTML, CSS, JavaScript, React, APIs e Node.</p>
          <p>Gosto de explorar como o design, o código e os dados se conectam para criar experiências mais humanas e funcionais.</p>
        </div>
      </section>

      <section id="projetos" class="featured-projects">
        <div class="header">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/laptop--v1.png" alt="laptop--v1" />
          <h2>Meus projetos</h2>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/laptop--v1.png" alt="laptop--v1" />
        </div>

        <div class="projects-grid">
          <div class="project-card">
            <img src="site-jeje.png" alt="Site sobre a nacao Jeje-Mahi" />
            <div class="tags">
              <span class="tag yellow">Blog</span>
              <span class="tag purple">Projeto Pessoal</span>
            </div>
            <h3>Site informativo sobre a nação Jeje-Mahi</h3>
            <p>Este projeto tem como objetivo reunir e divulgar informações sobre a história da nação Jeje-Mahi no Brasil. 
              Onde visitantes possam aprender mais sobre os fundamentos, tradições e trajetórias do povo Jeje-Mahi.</p>
            <a href="https://github.com/geisyv/site-sobre-jeje" target="_blank" rel="noopener noreferrer" class="btn">Ver Projeto →</a>
          </div>

          <div class="project-card">
            <img src="site2.png" alt="Previsão do tempo global" />
            <div class="tags">
              <span class="tag yellow">React</span>
              <span class="tag purple">API REST</span>
            </div>
            <h3>Previsão do Tempo Global</h3>
            <p>Esta aplicação permite consultar a previsão do tempo em qualquer lugar do mundo, de forma rápida e intuitiva.</p>
            <a href="https://github.com/geisyv/react-previsao" target="_blank" rel="noopener noreferrer" class="btn">Ver Projeto →</a>
          </div>

          <div class="project-card">
            <img src="site3.png" alt="Meu primeiro portifólio" />
            <div class="tags">
              <span class="tag blue">Portifólio</span>
              <span class="tag green">API REST</span>
            </div>
            <h3>Meu Primeiro Portfólio</h3>
            <p>Este projeto marca o início da minha jornada como desenvolvedora web. Trata-se do meu primeiro portfólio pessoal, criado com o objetivo de apresentar minhas habilidades, projetos e trajetória profissional.</p>
            <a href="https://github.com/geisyv/meu-portifolio" target="_blank" rel="noopener noreferrer" class="btn">Ver Projeto →</a>
          </div>
        </div>
      </section>

      <main id="contato" className="contact-section">

        <div className="header">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/connected-people.png" alt="connected-people" />
          <h2>Entre em contato</h2>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/connected-people.png" alt="connected-people" />
        </div>

        <div className="contact-left">
          <div className="social-item">
            <img src="https://img.icons8.com/ios-filled/30/github.png" alt="GitHub" />
            <a href="https://github.com/geisyv" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          <div className="social-item">
            <img src="https://img.icons8.com/ios-filled/30/linkedin.png" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/geisielly-vasques/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="contact-right">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </main>


      {showArrow && (
        <a href="#inicio" className="scroll-to-top" title="Voltar ao topo">↑</a>
      )}

    </div>
  );
}
