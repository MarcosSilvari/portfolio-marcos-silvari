const form = document.getElementById('Form');
const cepInput = document.getElementById('cep');
const resultadoSpan = document.getElementById('resultado');
const ruaSpan = document.getElementById('rua');
const bairroSpan = document.getElementById('bairro');
const cidadeSpan = document.getElementById('cidade');
const ufSpan = document.getElementById('uf');
function limparProduto() {
    nomeSpan.textContent = '';
    precoSpan.textContent = '';
    estoqueSpan.textContent = '';
}
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
    const cep = cepInput.value.replace(/\D/g, '');
    if (cep.length !== 8) {
        resultadoSpan.textContent = 'CEP inválido. Por favor, insira um CEP válido.';
        limparProduto();
        return;
    }
    try {
        resultadoSpan.textContent = 'Carregando...';
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();
        if (dados.erro) {
            resultadoSpan.textContent = 'CEP não encontrado.';
            ruaSpan.textContent = '';
            bairroSpan.textContent = '';
            cidadeSpan.textContent = '';
            ufSpan.textContent = '';
            return;
        }
        resultadoSpan.textContent = '';

        ruaSpan.textContent = dados.logradouro;
        bairroSpan.textContent = dados.bairro;
        cidadeSpan.textContent = dados.localidade;
        ufSpan.textContent = dados.uf;
    }
    catch (erro) {
        resultadoSpan.textContent = 'Erro ao buscar o CEP. Por favor, tente novamente.';
        ruaSpan.textContent = '';
            bairroSpan.textContent = '';
            cidadeSpan.textContent = '';
            ufSpan.textContent = '';
        console.error(erro);
    }
});