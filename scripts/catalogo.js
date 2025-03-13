const catalogo = document.getElementById('catalogo');

// Lista de produtos (pode ser substituída por um JSON externo)
const produtos = [
    {
        imagem: 'imagens/duplamedios.jpg',
        nome: 'Dupla de Nichos Médios',
        descricao: 'R$ 100,00'
    },
    {
        imagem: 'imagens/triodenichos.jpg',
        nome: 'Trio de Nichos',
        descricao: 'R$ 70,00'
    },
    {
        imagem: 'imagens/prattripledouble.jpg',
        nome: 'Prateleiras Triple-Double',
        descricao: 'R$ 120,00'
    }
];

// Função para gerar o catálogo
function gerarCatalogo() {
    produtos.forEach(produto => {
        const item = document.createElement('div');
        item.classList.add('produto');

        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <button class="botao" data-nome="${produto.nome}" data-descricao="${produto.descricao}">Adicionar ao Carrinho</button>
        `;

        catalogo.appendChild(item);
    });

    // Adiciona evento de clique aos botões
    const botoes = document.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const nomeProduto = botao.getAttribute('data-nome');
            const descricaoProduto = botao.getAttribute('data-descricao');
            const mensagem = `Olá, gostaria de comprar o produto: ${nomeProduto} - ${descricaoProduto}`;
            const linkWhatsApp = `https://wa.me/seu-numero?text=${encodeURIComponent(mensagem)}`;
            window.open(linkWhatsApp, '_blank'); // Abre o WhatsApp em uma nova aba
        });
    });
}

// Gerar o catálogo ao carregar a página
gerarCatalogo();