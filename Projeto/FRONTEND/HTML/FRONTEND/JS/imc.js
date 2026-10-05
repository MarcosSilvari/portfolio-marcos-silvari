const form = document.getElementById('form');
const weight = document.getElementById('weight');
const idade = document.getElementById('idade');
const alto = document.getElementById('alto');
const span = document.getElementById('values');
const descricaoTexto = document.getElementById('descricao-texto');

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