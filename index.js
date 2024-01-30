var elementosduvida = document.querySelectorAll(".duvida")

elementosduvida.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.add('fundo-verde')
        })

})
