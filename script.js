// Dados Mock (simulando API) com imagens focadas em futebol
const data = {
    jogadores: [
        { nome: "Lionel Messi", posicao: "Atacante", clube: "Inter Miami", idade: 36, imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" },
        { nome: "Cristiano Ronaldo", posicao: "Atacante", clube: "Al-Nassr", idade: 38, imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg" },
        { nome: "Neymar", posicao: "Atacante", clube: "Al-Hilal", idade: 31, imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/220px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg" },
        // Adicione mais...
    ],
    transferencias: [
        { jogador: "Neymar", de: "PSG", para: "Barcelona", valor: "50M€", imagem: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // Bola de futebol
        // Adicione mais...
    ],
    noticias: [
        { titulo: "Brasil vence Argentina na Copa América", data: "2023-07-10", resumo: "Golaço de Neymar...", imagem: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // Campo de futebol
        // Adicione mais...
    ],
    partidas: [
        { casa: "Real Madrid", fora: "Barcelona", resultado: "3-1", data: "2023-10-01", imagem: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // Estádio de futebol
        // Adicione mais...
    ],
    historias: [
        { time: "Manchester United", fundacao: "1878", titulos: "20 Ligas Inglesas", imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/220px-Manchester_United_FC_crest.svg.png" },
        { time: "Barcelona", fundacao: "1899", titulos: "26 Ligas Espanholas", imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/220px-FC_Barcelona_%28crest%29.svg.png" },
        // Adicione mais...
    ],
    campeonatos: [
        { pais: "Brasil", liga: "Campeonato Brasileiro", times: ["Flamengo", "Palmeiras"], imagem: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // Campo brasileiro
        { pais: "Espanha", liga: "La Liga", times: ["Real Madrid", "Barcelona"], imagem: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // Estádio espanhol
        // Adicione mais...
    ]
};

// Elementos DOM
const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav ul li a');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Função para renderizar página
function renderPage(page) {
    let html = '';
    switch (page) {
        case 'home':
            html = `
                <div class="page active" id="home">
                    <h1>Bem-vindo ao Mundo do Futebol</h1>
                    <p>Explore jogadores, transferências e muito mais!</p>
                    <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Campo de Futebol" style="width:100%; border-radius:10px;">
                </div>
            `;
            break;
        case 'jogadores':
            html = `
                <div class="page active" id="jogadores">
                    <h1>Jogadores</h1>
                    <input type="text" class="search-bar" placeholder="Buscar jogador...">
                    <div class="grid" id="jogadores-list">
                        ${data.jogadores.map(j => `
                            <div class="card" data-nome="${j.nome}">
                                <img src="${j.imagem}" alt="${j.nome}">
                                <h3>${j.nome}</h3>
                                <p>Posição: ${j.posicao}</p>
                                <button class="btn-modal" data-jogador='${JSON.stringify(j)}'>Ver Detalhes</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case 'transferencias':
            html = `
                <div class="page active" id="transferencias">
                    <h1>Transferências</h1>
                    <div class="grid">
                        ${data.transferencias.map(t => `
                            <div class="card">
                                <img src="${t.imagem}" alt="${t.jogador}">
                                <h3>${t.jogador}</h3>
                                <p>De: ${t.de} → Para: ${t.para}</p>
                                <p>Valor: ${t.valor}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case 'noticias':
            html = `
                <div class="page active" id="noticias">
                    <h1>Notícias</h1>
                    <div class="grid">
                        ${data.noticias.map(n => `
                            <div class="card">
                                <img src="${n.imagem}" alt="${n.titulo}">
                                <h3>${n.titulo}</h3>
                                <p>${n.data}</p>
                                <p>${n.resumo}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case 'partidas':
            html = `
                <div class="page active" id="partidas">
                    <h1>Partidas</h1>
                    <div class="grid">
                        ${data.partidas.map(p => `
                            <div class="card">
                                <img src="${p.imagem}" alt="${p.casa} vs ${p.fora}">
                                <h3>${p.casa} vs ${p.fora}</h3>
                                <p>Resultado: ${p.resultado}</p>
                                <p>Data: ${p.data}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case 'historias':
            html = `
                <div class="page active" id="historias">
                    <h1>História dos Times</h1>
                    <div class="grid">
                        ${data.historias.map(h => `
                            <div class="card">
                                <img src="${h.imagem}" alt="${h.time}">
                                <h3>${h.time}</h3>
                                <p>Fundação: ${h.fundacao}</p>
                                <p>Títulos: ${h.titulos}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case 'campeonatos':
            html = `
                <div class="page active" id="campeonatos">
                    <h1>Campeonatos por País</h1>
                    <div class="filter">
                        <select id="pais-filter">
                            <option value="">Todos os Países</option>
                            ${[...new Set(data.campeonatos.map(c => c.pais))].map(p => `<option value="${p}">${p}</option>`).join('')}
                        </select>
                    </div>
                    <div class="grid" id="campeonatos-list">
                        ${data.campeonatos.map(c => `
                            <div class="card" data-pais="${c.pais}">
                                <img src="${c.imagem}" alt="${c.liga}">
                                <h3>${c.liga} (${c.pais})</h3>
                                <p>Times: ${c.times.join(', ')}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
    }
    content.innerHTML = html;

    // Adicionar modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><div id="modal-body"></div></div>';
    document.body.appendChild(modal);

    // Eventos pós-render
    attachEvents(page);
}

// Anexar eventos
function attachEvents(page) {
    // Navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            renderPage(page);
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Busca em jogadores
    if (page === 'jogadores') {
        const searchBar = document.querySelector('.search-bar');
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('#jogadores-list .card').forEach(card => {
                card.style.display = card.dataset.nome.toLowerCase().includes(query) ? 'block' : 'none';
            });
        });
    }

    // Filtro em campeonatos
    if (page === 'campeonatos') {
        const filter = document.getElementById('pais-filter');
        filter.addEventListener('change', (e) => {
            const pais = e.target.value;
            document.querySelectorAll('#campeonatos-list .card').forEach(card => {
                card.style.display = !pais || card.dataset.pais === pais ? 'block' : 'none';
            });
        });
    }

    // Modais
    document.querySelectorAll('.btn-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jogador = JSON.parse(e.target.dataset.jogador);
            document.getElementById('modal-body').innerHTML = `
                <img src="${jogador.imagem}" alt="${jogador.nome}">
                <h2>${jogador.nome}</h2>
                <p>Posição: ${jogador.posicao}</p>
                <p>Clube: ${jogador.clube}</p>
                <p>Idade: ${jogador.idade}</p>
            `;
            document.querySelector('.modal').style.display = 'flex';
        });
    });

    // Fechar modal
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
    });
}

// Inicializar
renderPage('home');