const form = document.getElementById('form');
const weight = document.getElementById('weight');
const idade = document.getElementById('idade');
const alto = document.getElementById('alto');
const span = document.getElementById('values');
const descricaoTexto = document.getElementById('descricao-texto');
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

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const weightValue = Number(weight.value);
    const idadeValue = Number(idade.value);
    const altoValue = Number(alto.value);
    if (idadeValue < 20) {
        alert('Idade deve ser maior que 20 anos');
        return;
    }
    const imc = weightValue / (altoValue * altoValue);
    span.textContent = imc.toFixed(1);

    let descricao = '';
    if (idadeValue >= 60) {
        if (imc < 22) {
            descricao = 'Baixo peso';
        } else if (imc <= 27) {
            descricao = 'Peso adequado';
        } else {
            descricao = 'Sobrepeso';
        }
        descricaoTexto.textContent = descricao;
        return;
    }
    if (imc < 18.5) {
        descricao = 'Abaixo do peso';
    } else if (imc < 25) {
        descricao = 'Peso normal';
    } else if (imc < 30) {
        descricao = 'Sobrepeso';
    }
    else if (imc < 35) {
        descricao = 'Obesidade grau 1';
    }
    else if (imc < 40) {
        descricao = 'Obesidade grau 2';
    }
    else {
        descricao = 'Obesidade grau 3';
    }
    descricaoTexto.textContent = descricao;
});