let counterNumero = document.getElementById("numero");
let btnMeno = document.getElementById("meno");
let btnPiu = document.getElementById("piu");

let numeri = 0;

btnMeno.addEventListener("click",()=>{
      numeri--;
      aggiungiNumero()
});


btnPiu.addEventListener("click",()=>{
    numeri++;
    aggiungiNumero()
}) ;


function aggiungiNumero() {
  counterNumero.innerHTML = numeri;
}
