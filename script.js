// Função para rolagem suave ao clicar no botão do banner
function scrollParaPilares() {
    const secaoPilares = document.getElementById('pilares');
    secaoPilares.scrollIntoView({ behavior: 'smooth' });
}

// Efeito simples de mudança de transparência do menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
    } else {
        header.style.backgroundColor = '#111111';
    }
});
