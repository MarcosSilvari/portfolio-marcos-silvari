const form = document.getElementById('form');
const input = document.getElementById('input');
const resultado = document.getElementById('resultado');
const nome = document.getElementById('nome');
const numero = document.getElementById('numero');
const tipo = document.getElementById('tipo');
const status = document.getElementById('status');
const img = document.getElementById('img');

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
