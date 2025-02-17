// Data do primeiro encontro: 26 de fevereiro de 2022 às 20:00
const primeiroEncontro = new Date(2022, 1, 26, 20, 0, 0); // Fevereiro = 1

// Atualiza o contador de tempo
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - primeiroEncontro;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor((diferenca / (1000 * 60 * 60 * 24)) % 365);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById('contador').innerHTML = 
        `${anos} anos, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();

// Transição da tela inicial
document.getElementById('entrar').addEventListener('click', () => {
    document.getElementById('capa').style.display = "none";
    document.getElementById('conteudo').classList.remove("hidden");
    iniciarRosas();
});

// Função para criar rosas caindo continuamente
function iniciarRosas() {
    setInterval(() => {
        const container = document.getElementById('rosas-container');
        const rosa = document.createElement('div');
        rosa.classList.add('rosa');

        rosa.style.left = Math.random() * 100 + 'vw'; // Posição aleatória
        rosa.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Tempo aleatório

        container.appendChild(rosa);

        // Remove a rosa após 5 segundos para não sobrecarregar a página
        setTimeout(() => rosa.remove(), 5000);
    }, 300); // Cria uma rosa a cada 300ms
}
