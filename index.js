const adicionar = document.querySelector(".btn-sum");
const diminuir = document.querySelector(".btn-sub");
const quantidade = document.querySelector(".btn-qtd");

function somar() {

    quantidade.innerHTML = `${++quantidade.value}`;
    console.log(quantidade)

};

function subtrair() {
    if (quantidade.value > 0) {
        quantidade.innerHTML = `${--quantidade.value}`;
        console.log(quantidade)
    }
}

adicionar.onmousedown = somar;
diminuir.onmouseup = subtrair;
