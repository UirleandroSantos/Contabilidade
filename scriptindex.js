let botaoMenu = document.querySelector('#botao-menu');
let links = document.querySelector('#links');
let corpo = document.querySelector('#corpo');
let formulario = document.querySelector('#formulario');


botaoMenu.addEventListener('click', function(){
    if(!links.classList.contains('mostrar')){
        links.classList.add('mostrar')
        links.classList.remove('ocultar')
        corpo.style.opacity = '0.5';
        corpo.style.margin = '150px 0px';
    }
    else {
        links.classList.add('ocultar');
        links.classList.remove('mostrar');
        corpo.style.opacity = '1';
        corpo.style.margin = '0';
    }
});


