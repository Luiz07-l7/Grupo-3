// Banco de dados sem imagens
const banco = {
    ford: {
        fiesta: [
            {
                nome: "Filtro de Ar",
                descricao: "Filtra impurezas antes do ar entrar no motor.",
                avaliacao: 5,
                reclamacoes: ["Troca recomendada a cada 10.000 km."]
            },
            {
                nome: "Pastilha de Freio",
                descricao: "Responsável pela frenagem eficiente.",
                avaliacao: 4,
                reclamacoes: ["Chiado leve relatado em frenagens longas."]
            },
            {
                nome: "Correia Dentada",
                descricao: "Mantém sincronismo do motor.",
                avaliacao: 5,
                reclamacoes: ["Risco de danos graves se não trocada no tempo."]
            }
        ]
    }
};

// Carregar modelos
document.getElementById("marca").addEventListener("change", function () {
    const marca = this.value;
    const modelo = document.getElementById("modelo");

    modelo.innerHTML = "<option value=''>Selecione...</option>";

    if (banco[marca]) {
        Object.keys(banco[marca]).forEach(m => {
            modelo.innerHTML += `<option value="${m}">${m.toUpperCase()}</option>`;
        });
    }
});

// Buscar peças
document.getElementById("buscar").addEventListener("click", function () {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (!banco[marca] || !banco[marca][modelo]) {
        resultado.innerHTML = "<p style='text-align:center;'>Nenhuma peça encontrada.</p>";
        return;
    }

    banco[marca][modelo].forEach((peca, index) => {
        resultado.innerHTML += `
            <div class="card-peca">
                <h3>${peca.nome}</h3>
                <p>${peca.descricao}</p>
                <div class="avaliacao">${"⭐".repeat(peca.avaliacao)}</div>
                
                <h4 style="color:#ff4d4d;">Reclamações:</h4>
                <div id="reclamacoes-${index}">
                    ${peca.reclamacoes.map(r => `<div class="reclamacao">⚠ ${r}</div>`).join("")}
                </div>
            </div>
        `;
    });
});

// Lista geral de reclamações
const listaReclamacoes = document.getElementById("listaReclamacoes");

// Enviar reclamação geral
document.getElementById("enviarReclamacao").addEventListener("click", function () {
    const texto = document.getElementById("reclamacaoTexto").value.trim();

    if (texto === "") {
        alert("Digite sua reclamação antes de enviar.");
        return;
    }

    listaReclamacoes.innerHTML += `
        <div class="item-reclamacao">📌 ${texto}</div>
    `;

    document.getElementById("reclamacaoTexto").value = "";
});
