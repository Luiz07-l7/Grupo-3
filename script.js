// Alternar menu mobile
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Alternar modo escuro
const toggleDarkMode = document.getElementById("dark-mode-toggle");
toggleDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = toggleDarkMode.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Carregar páginas dinamicamente
const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.page;

    switch (page) {
      case "jogadores":
        content.innerHTML = `
        <h1>🏆 Jogadores em Destaque</h1>
        <div class="cards">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg" alt="Messi">
            <h3>Lionel Messi</h3>
            <p>Ídolo argentino, campeão mundial em 2022 e lenda do Barcelona e PSG.</p>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Cristiano_Ronaldo_2018.jpg" alt="Cristiano Ronaldo">
            <h3>Cristiano Ronaldo</h3>
            <p>Craque português, artilheiro histórico e símbolo de disciplina e vitória.</p>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Neymar_2018.jpg" alt="Neymar Jr">
            <h3>Neymar Jr</h3>
            <p>Atacante brasileiro com dribles e gols mágicos. Um dos maiores talentos da nova geração.</p>
          </div>
        </div>`;
        break;

      case "transferencias":
        content.innerHTML = `
        <h1>🔄 Transferências Recentes</h1>
        <div class="cards">
          <div class="card">
            <img src="https://cdn.pixabay.com/photo/2017/08/06/22/01/soccer-2594968_1280.jpg" alt="Mbappé">
            <h3>Mbappé no Real Madrid</h3>
            <p>O francês finalmente veste branco e promete dominar a La Liga!</p>
          </div>
          <div class="card">
            <img src="https://cdn.pixabay.com/photo/2015/09/14/19/15/soccer-939240_1280.jpg" alt="Haaland">
            <h3>Haaland permanece no City</h3>
            <p>O robô norueguês fica! Haaland quer mais títulos e recordes em Manchester.</p>
          </div>
        </div>`;
        break;

      case "noticias":
        content.innerHTML = `
        <h1>📰 Notícias do Futebol</h1>
        <div class="cards">
          <div class="card">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/14/02/soccer-1837123_1280.jpg" alt="Brasil vence">
            <h3>Brasil vence amistoso</h3>
            <p>A Seleção Brasileira venceu o México por 3x1 em um jogo de muita emoção.</p>
          </div>
          <div class="card">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/01/22/soccer-159045_1280.png" alt="Champions">
            <h3>Champions League começa!</h3>
            <p>Os maiores clubes da Europa retornam à batalha pela glória continental.</p>
          </div>
        </div>`;
        break;

      case "partidas":
        content.innerHTML = `
        <h1>📅 Próximas Partidas</h1>
        <div class="cards">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid" style="width:80px;margin-top:10px;">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona" style="width:80px;margin-top:10px;">
            <h3>Barcelona vs Real Madrid</h3>
            <p>O clássico espanhol acontece neste domingo às 17h, no Camp Nou.</p>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" alt="Man City" style="width:80px;margin-top:10px;">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" alt="PSG" style="width:80px;margin-top:10px;">
            <h3>Manchester City vs PSG</h3>
            <p>Confronto de gigantes pela Champions League. Haaland contra Mbappé!</p>
          </div>
        </div>`;
        break;

      case "historias":
        content.innerHTML = `
        <h1>📖 História dos Times</h1>
        <div class="cards">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Escudo Real Madrid" style="width:120px;margin:20px auto;">
            <h3>Real Madrid</h3>
            <p>Fundado em 1902, o Real Madrid é o clube mais vitorioso da Champions League, com 14 títulos.</p>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Escudo Barcelona" style="width:120px;margin:20px auto;">
            <h3>Barcelona</h3>
            <p>Conhecido por seu estilo tiki-taka, o Barça brilhou na era Messi, conquistando múltiplos títulos.</p>
          </div>
        </div>`;
        break;

      case "campeonatos":
        content.innerHTML = `
        <h1>🏆 Campeonatos em Andamento</h1>
        <div class="cards">
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg" alt="Champions League" style="width:150px;margin-top:20px;">
            <h3>UEFA Champions League</h3>
            <p>O torneio de clubes mais prestigiado do planeta, com os maiores craques em campo!</p>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Copa_Libertadores_logo.svg" alt="Libertadores" style="width:150px;margin-top:20px;">
            <h3>Copa Libertadores</h3>
            <p>O torneio mais emocionante da América do Sul, onde paixão e rivalidade se encontram!</p>
          </div>
        </div>`;
        break;

      default:
        content.innerHTML = `
        <section class="welcome">
          <h1>⚽ Bem-vindo ao Mundo do Futebol!</h1>
          <p>Confira notícias, jogadores e campeonatos com apenas um clique.</p>
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/football-311170_1280.png" alt="Bola de futebol" style="width:200px;margin-top:20px;">
        </section>`;
    }

    navMenu.classList.remove("active");
  });
});
