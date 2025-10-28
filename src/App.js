import React from "react";
import "./App.css";

export default function App() {
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
          <button className="hire-btn">Contrate-me</button>
          <div className="icon">
            <img className="icon-img" src="https://img.icons8.com/emoji/48/hot-beverage.png" alt="hot-beverage" />
          </div>

        </div>
      </header>

      <section className="intro-section">
        <div className="intro-text">
          <h1>Olá, meu nome é Geisy</h1>
          <h2>Transformo ideias em <span className="highlight">realidade digital.</span></h2>
          <p>
            Sou desenvolvedora web com experiência em HTML, CSS, Javascript e React. Tenho paixão por criar interfaces modernas,
            funcionais e acessíveis, sempre buscando desafios que me ajudem a evoluir profissionalmente.
          </p>
          <button className="contact-btn">Entre em contato</button>
        </div>

        <div className="intro-image">
          <img src="/eu.png" alt="Geisy" />
        </div>
      </section>

      <section id="sobre" className="sobre-section">
        <div className="sobre-container">
          <h2>Sobre Mim</h2>
          <p>
            Profissional em início de carreira, apaixonada por dados e tecnologia, com foco no desenvolvimento de habilidades em Salesforce e Ciência de Dados. Tenho conhecimentos iniciais em administração e desenvolvimento Salesforce e busco constantemente aprender mais para aplicar soluções que tragam valor estratégico.
          </p>
          <p>
            Motivada, dedicada e com grande vontade de evoluir, quero consolidar minha trajetória unindo dados e tecnologia para gerar insights e apoiar a transformação digital das organizações.
          </p>
          <p>
            Experiência com criação de relatórios, dashboards, SOQL, automações com Flow e desenvolvimento com Apex e Lightning Components. Bootcamp intensivo pela Sys4b com foco prático em Salesforce Platform, incluindo integração de dados, segurança, e construção de apps personalizados.
          </p>
          <p>
            Interesse contínuo em soluções orientadas a dados, CRM e crescimento em ambientes colaborativos e ágeis.
          </p>
        </div>
      </section>

      <section class="featured-projects">
        <div class="header">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/laptop--v1.png" alt="laptop--v1"/>
          <h2>Featured Projects</h2>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/laptop--v1.png" alt="laptop--v1"/>
        </div>

        <div class="projects-grid">
          <div class="project-card">
            <img src="site-jeje.png" alt="Vintage Records"/>
              <div class="tags">
                <span class="tag yellow">Blog</span>
                <span class="tag purple">Projeto Pessoal</span>
              </div>
              <h3>Site sobre o candomblé Jeje-Mahi</h3>
              <p>Site que visa reunir informações sobre a história da nação Jeje-Mahi no Brasil.</p>
              <a href="https://github.com/geisyv/site-sobre-jeje" target="_blank" class="btn">Ver Projeto →</a>
          </div>

          <div class="project-card">
            <img src="site1.jpg" alt="Growth Case Study"/>
              <div class="tags">
                <span class="tag yellow">Growth Design</span>
                <span class="tag purple">Mobile</span>
              </div>
              <h3>66M Users in a Year</h3>
              <p>Como ajudamos uma startup a escalar de 0 a 66 milhões de usuários em 1 ano.</p>
              <a href="https://github.com/seuusuario/projeto2" target="_blank" class="btn">Ver Projeto →</a>
          </div>

          <div class="project-card">
            <img src="site2.png" alt="RTL Website"/>
              <div class="tags">
                <span class="tag blue">Localization</span>
                <span class="tag green">Website</span>
              </div>
              <h3>Website RTL</h3>
              <p>Site multilíngue com suporte para idiomas da direita para a esquerda.</p>
              <a href="https://github.com/seuusuario/projeto3" target="_blank" class="btn">Ver Projeto →</a>
          </div>
        </div>
      </section>





      <main className="content">
        <p>Bem-vindo ao meu portfólio retrô!</p>
      </main>
    </div>
  );
}
