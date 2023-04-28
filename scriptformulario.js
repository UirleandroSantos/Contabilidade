let botao = document.querySelector('#botao');

botao.addEventListener('click', function(evt){evt.preventDefault()
    let nome = document.querySelector('#nomecompleto');
    let email = document.querySelector('#email');
    let telefone = document.querySelector('#telefone');
    if(nome.value === "" || email.value === "" || telefone.value === ""){
        alert('Dados incompletos!')
    }else{
        window.location.href = 'cadastrado.html'
    }
})