document.addEventListener('DOMContentLoaded', function() {
    var carrossel = document.getElementById('carouselExampleCaptions');

    carrossel.addEventListener('slide.bs.carousel', function () {
        var itens = carrossel.querySelectorAll('.carousel-item');
        itens.forEach(function(item) {
            var caption = item.querySelector('.carousel-caption');
            if (caption) {
                caption.style.opacity = 0;
            }
        });
    });

    carrossel.addEventListener('slid.bs.carousel', function () {
        var itemAtivo = carrossel.querySelector('.carousel-item.active');
        var captionAtiva = itemAtivo.querySelector('.carousel-caption');
        if (captionAtiva) {
            captionAtiva.style.opacity = 1;
        }
    });
});
// Função para verificar se a faixa está visível na tela
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'in-view' quando a faixa está visível na tela
function addInViewClass() {
    var faixas = document.querySelectorAll('.faixa');
    faixas.forEach(function(faixa) {
        if (isElementInViewport(faixa)) {
            faixa.classList.add('in-view');
        }
    });
}

// Adiciona a classe 'in-view' quando a página é carregada
window.addEventListener('load', addInViewClass);

// Adiciona a classe 'in-view' quando o usuário rola a página
window.addEventListener('scroll', addInViewClass);

