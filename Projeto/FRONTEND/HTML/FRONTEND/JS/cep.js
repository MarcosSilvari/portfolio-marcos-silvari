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