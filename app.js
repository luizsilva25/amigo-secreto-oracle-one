// GLOBAL VARIABLES
let nomes = [];

// DOM ELEMENTS
const inputEl = document.getElementById("amigo");
const listaAmigosEl = document.getElementById("listaAmigos");
const resultadoEl = document.getElementById("resultado");

// FUNCTIONS
function adicionarAmigo() {
    // validar se o nome
    if (inputEl.value === "") {
        alert("Insira um nome válido");
    } else {
        // adicionar o nome no array  de nomes
        nomes.push(inputEl.value);
        // adicionar o nome na lista no html
        renderList();
        inputEl.value = "";
    }
    
}

function renderList() {
    listaAmigosEl.innerHTML = "";
    for (let i = 0; i < nomes.length; i++) {
        listaAmigosEl.innerHTML += `<li>${nomes[i]}</li>`;
    }
}

function sortearAmigo() {
    // criar um número aleatório entre 0 e nomes length-1
    let numeroAmigos = nomes.length;
    let numeroAleatorio = parseInt((Math.random()*numeroAmigos));
    // imprimir na tela o nomes[numero aleatório]
    resultadoEl.innerHTML = `<li>O amigo secreto sorteado é: ${nomes[numeroAleatorio]}</li>`

    
}

// PROCEDURES
