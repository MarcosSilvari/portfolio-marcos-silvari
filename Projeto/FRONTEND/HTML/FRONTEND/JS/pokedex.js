const form = document.getElementById('form');
const input = document.getElementById('input');
const resultado = document.getElementById('resultado');
const nome = document.getElementById('nome');
const numero = document.getElementById('numero');
const tipo = document.getElementById('tipo');
const status = document.getElementById('status');
const img = document.getElementById('img');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const dropdown = document.querySelector('.dropdown');
const linkProjetos = dropdown.querySelector(':scope > a');

function abrirOuFecharMenu() {
  const aberto = navbar.classList.toggle('active');
  hamburger.classList.toggle('active', aberto);
  hamburger.setAttribute('aria-expanded', aberto);
  if (!aberto) {
    dropdown.classList.remove('open');
  }
}

hamburger.addEventListener('click', abrirOuFecharMenu);

// teclado: Enter ou Espaço também abrem o menu
hamburger.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    abrirOuFecharMenu();
  }
});

// "Projetos" tem href="#", então não deixa a página pular pro topo.
// No celular, o toque abre e fecha a lista de projetos.
linkProjetos.addEventListener('click', function (event) {
  event.preventDefault();
  if (window.matchMedia('(max-width: 820px)').matches) {
    dropdown.classList.toggle('open');
  }
});

// clicar fora do menu fecha tudo
document.addEventListener('click', function (event) {
  const clicouDentro = navbar.contains(event.target) || hamburger.contains(event.target);
  if (!clicouDentro && navbar.classList.contains('active')) {
    abrirOuFecharMenu();
  }
});

// voltando pra tela grande, limpa os estados do celular
window.addEventListener('resize', function () {
  if (!window.matchMedia('(max-width: 820px)').matches) {
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    dropdown.classList.remove('open');
  }
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pokemon = input.value.trim().toLowerCase();
    try {
        resultado.textContent = 'Buscando Pokémon...';
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!resposta.ok) {
            resultado.textContent = 'Pokémon não encontrado!';

            nome.textContent = '';
            numero.textContent = '';
            tipo.textContent = '';
            status.textContent = '';
            img.src = '';
            img.alt = '';
            return;
        }
        resultado.textContent = '';
        const dados = await resposta.json();
        nome.textContent = dados.name;
        numero.textContent = dados.id;
        tipo.textContent = dados.types.map(type => type.type.name).join(', ');
        status.innerHTML = dados.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join('<br>');

        img.src = dados.sprites.front_default;
        img.alt = dados.name;}
        catch (erro) {
        resultado.textContent = 'Erro ao buscar Pokémon!';
        console.error(erro);}



    });
