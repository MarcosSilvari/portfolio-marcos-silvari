const pesquisar = document.getElementById('pesquisar');
const filtro = document.getElementById('filtro');
const ListaProdutos = document.getElementById('lista-produtos');
const carrinho = document.getElementById('carrinho');
const totalCompras = document.getElementById('total-compras');
const itensCarrinho = document.getElementById('itens-carrinho');
let produtosLista = [];
let carrinhoLista = [];
const carrinhoSalvo = localStorage.getItem('carrinho');
if (carrinhoSalvo) {
    carrinhoLista = JSON.parse(carrinhoSalvo);
}

function MostrarCategorias(lista) {
    const categorias = [...new Set(lista.map(produto => produto.category))];
    categorias.forEach(categoria => {
        filtro.innerHTML += `<option value="${categoria}">${categoria}</option>`;
    });
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinhoLista));
}

function MostrarProdutos(lista) {
    if (lista.length === 0) {
        ListaProdutos.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    let html = '';
    lista.forEach(produto => {
        html += `
      <div class="produto">
        <img src="${produto.thumbnail}" alt="${produto.title}">
        <h3>${produto.title}</h3>
        <p>${produto.description}</p>
        <p>Preço: $ ${produto.price}</p>
        <button onclick="adicionarAoCarrinho(${produto.id})"><i class="fa-solid fa-cart-shopping"></i>Adicionar ao Carrinho</button>
        
      </div>
    `;
    });

    ListaProdutos.innerHTML = html;
}


function MostrarCarrinho() {
    salvarCarrinho();

    if (carrinhoLista.length === 0) {
        itensCarrinho.innerHTML = '<li>O carrinho está vazio.</li>';
        totalCompras.textContent = '$0';
        return;
    }

    let html = '';
    let total = 0;
    carrinhoLista.forEach(produto => {
        html += `<li>${produto.title} - $ ${produto.price} (Quantidade: ${produto.quantidade})<button onclick="removerDoCarrinho(${produto.id})">Remover</button></li>
    `;
        total += produto.price * produto.quantidade;
    });
    itensCarrinho.innerHTML = html;
    totalCompras.textContent = `$${total.toFixed(2)}`;

    console.log('Carrinho atualizado:', carrinhoLista);
}

function adicionarAoCarrinho(produtoId) {
    const aoCarrinho = carrinhoLista.find(p => p.id === produtoId);
    if (aoCarrinho) {
        aoCarrinho.quantidade += 1;
    } else {
        const produto = produtosLista.find(p => p.id === produtoId);
        carrinhoLista.push({ ...produto, quantidade: 1 });
    }

    salvarCarrinho();
    MostrarCarrinho();
}

function removerDoCarrinho(produtoId) {
    const index = carrinhoLista.findIndex(p => p.id === produtoId);
    if (index !== -1) {
        if (carrinhoLista[index].quantidade > 1) {
            carrinhoLista[index].quantidade -= 1;
        } else {
            carrinhoLista.splice(index, 1);
        }
    }

    salvarCarrinho();
    MostrarCarrinho();
}

function aplicarFiltros() {
    const categoriaSelecionada = filtro.value;
    const textoPesquisa = pesquisar.value.trim().toLowerCase();

    const encontrados = produtosLista.filter(produto => {
        const tituloCombina = produto.title.toLowerCase().includes(textoPesquisa);
        const categoriaCombina = categoriaSelecionada === 'todos' || produto.category === categoriaSelecionada;
        return tituloCombina && categoriaCombina;
    });

    MostrarProdutos(encontrados);
}

pesquisar.addEventListener('input', aplicarFiltros);
filtro.addEventListener('change', aplicarFiltros);

async function fetchProdutos() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        produtosLista = data.products;
        MostrarProdutos(produtosLista);
        MostrarCategorias(produtosLista);
        MostrarCarrinho();
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

fetchProdutos();