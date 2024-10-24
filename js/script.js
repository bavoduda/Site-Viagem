
// muda a cor da navbar quando estiver sobre a div//

window.addEventListener('scroll', alterarCorNavbar);

function alterarCorNavbar(){
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.booking');
    const bookingRect = booking.getBoundingClientRect();

    if(bookingRect.top < 50){
        navbar.classList.add('navbar-solida');

    }else{
        navbar.classList.remove('navbar-solida')
    }
}


// Carrossel na parte de avaliações //
const clientes = document.querySelectorAll('.cliente');
let clienteAtual = 0;

function monstrarSlide(index){
    clientes.forEach((cliente, i)=> {
        if (i === index) {
            cliente.style.display = 'block';
        }else{
            cliente.style.display ='none';
        }
});

}

function proximo() {
    clienteAtual = (clienteAtual + 1) % clientes.length;
    monstrarSlide(clienteAtual);
}

function anterior() {
    clienteAtual = (clienteAtual -1 + clientes.length) % clientes.length;
    monstrarSlide(clienteAtual);
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.proximo').addEventListener('click', proximo);

// Mostra o primeiro cliente ao carregar a página //

monstrarSlide(clienteAtual);