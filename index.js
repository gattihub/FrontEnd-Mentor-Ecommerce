const adicionar = document.querySelector(".btn-sum");
const diminuir = document.querySelector(".btn-sub");
const quantidade = document.querySelector(".btn-qtd");
const cart = document.querySelector(".counter");
const buttonCart = document.querySelector(".button-cart");

function somar() {

    quantidade.innerHTML = `${++quantidade.value}`;
    console.log(quantidade)

};

function subtrair() {
    if (quantidade.value > 0) {
        quantidade.innerHTML = `${--quantidade.value}`;
        
    }
}

adicionar.onmousedown = somar;
diminuir.onmouseup = subtrair;

function addToCart() {
    if (quantidade.value > 0) {
    cart.classList.add("showCounter");
    cart.innerHTML = `${quantidade.value}`;
} 
}

buttonCart.onmouseup = addToCart;

