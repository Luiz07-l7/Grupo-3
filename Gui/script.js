const facts = document.querySelectorAll('.fact');
const randomBtn = document.getElementById('random-fact-btn');
const searchBar = document.getElementById('search-bar');
const factsContainer = document.getElementById('facts-container');

// Função para filtrar fatos com base na busca
function filterFacts() {
    const query = searchBar.value.toLowerCase();
    facts.forEach(fact => {
        const title = fact.querySelector('h2').textContent.toLowerCase();
        const description = fact.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            fact.classList.remove('hidden');
        } else {
            fact.classList.add('hidden');
        }
    });
}

// Função para mostrar fato aleatório
function showRandomFact() {
    // Oculta todos os fatos
    facts.forEach(fact => fact.style.display = 'none');
    
    // Seleciona um fato aleatório
    const randomIndex = Math.floor(Math.random() * facts.length);
    facts[randomIndex].style.display = 'block';
    
    // Adiciona um botão para voltar
    if (!document.getElementById('back-btn')) {
        const backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Mostrar Todos os Fatos';
        backBtn.style.cssText = 'display:block; margin:20px auto; padding:12px 25px; background:#28a745; color:white; border:none; border-radius:25px; cursor:pointer; transition: background-color 0.3s;';
        backBtn.addEventListener('click', showAllFacts);
        factsContainer.appendChild(backBtn);
    }
}

// Função para mostrar todos os fatos
function showAllFacts() {
    facts.forEach(fact => {
        fact.style.display = 'block';
        fact.classList.remove('hidden');
    });
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.remove();
    searchBar.value = ''; // Limpa a busca
}

// Eventos
searchBar.addEventListener('input', filterFacts);
randomBtn.addEventListener('click', showRandomFact);