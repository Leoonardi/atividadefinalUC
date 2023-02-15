let lanches = prompt("qual lanche voce deseja:/n 1-xsalada /n 2-xtudo /n 3-xovo /n 4-hotdog /n 5-mistoquente");
let bebidas = prompt("qual bebida voce deseja:/n 1-pepsi /n 2-cocacola /n 3-sprite /n 4-caldodecana /n 5-suco");
let doces = prompt("qual sobremesa voce deseja:/n 1-pudim /n 2-bolo /n 3-mariaenfeitada /n 4-docedeleite /n 5-sonho");
let salgados = prompt("qual salgado voce deseja:/n 1-coxinha /n 2-pastel /n 3-kibe /n 4-risole /n 5-bolinhodequeijo");
let sabor_do_pastel = prompt("qual sabor do pastel: /n 1-carne /n 2-pizza /n 3-frango /n 4-queijo /n 5-camarao");
let soma

const lanche = ["xsalada", "xtudo", "xovo", "hotdog", "mistoquente"];
const bebida = ["pepsi", "cocacola", "sprite", "caldodecana", "suco"];
const doce = ["pudim", "bolo", "mariaenfeitada", "docedeleite", "sonho"];
const salgado = ["coxinha", "pastel", "kibe", "risole", "bolinhodequeijo"];
const receio = ["carne", "pizza", "frango", "queijo", "camarao"];


let opcaol = "";
let opcaob = "";
let opcaod = "";
let opcaos = "";
let opcaor = "";


switch (lanches) {
    case "1":
        opcaol += lanche[0];

        break;

    case "2":
        opcaol += lanche[1];

        break;

    case "3":
        opcaol += lanche[2];

        break;

    case "4":
        opcaol += lanche[3];

        break;

    case "5":
        opcaol += lanche[4];

        break;

    default:
        opcaol += "indisponivel"

        break;



}

switch (bebidas) {

    case "1":
        opcaob += bebida[0];

        break;

    case "2":
        opcaob += bebida[1];

        break;

    case "3":
        opcaob += bebida[2];

        break;

    case "4":
        opcaob += bebida[3];

        break;

    case "5":
        opcaob += bebida[4];

        break;

    default:
        opcaob += "indisponivel"
        break;
}

switch (doces) {

    case "1":
        opcaod += doce[0];
        break;

    case "2":
        opcaod += doce[1];
        break;

    case "3":
        opcaod += doce[2];
        break;

    case "4":
        opcaod += doce[3];
        break;

    case "5":
        opcaod += doce[4];

    default:
        opcaod += "indisponivel"
        break;


}
switch (salgados) {

    case "1":
        opcaos += salgado[0];
        break;

    case "2":
        opcaos += salgado[1];
        break;

    case "3":
        opcaos += salgado[2];
        break;

    case "4":
        opcaos += salgado[3];
        break;

    case "5":
        opcaos += salgado[4];
        break;

    default:
        opcaos += "indisponivel"
        break;
}
switch (receio) {
    case "1":
        opcaor += opcaos += receio[0];
        break;

    case "2":
        opcaor += opcaos += receio[1];
        break;

    case "3":
        opcaor += opcaos += receio[2];
        break;

    case "4":
        opcaor += opcaos += receio[3];
        break;

    case "5":
        opcaor += opcaos += receio[4];

    case "6":
        opcaor += opcaos += receio[5];

    default:
        opcaor += opcaos += "indisponivel"
        break;

}
 if(opcaol =="1"){
    opcaol+=opcaob=""+""
    opcaod+=opcaos++;

 }
 else (opcaod=="2") 
   opcaol+=opcaob=""+"" 
    opcaos+=opcaor++;
 

 function calcular(){

    let opcaol =12;
    let opcaob =6;
    let opcaod =8;
    let opcaos =4;
    

    let soma = (opcaol+opcaob+opcaod+opcaos);

 }
  for (let i = 0; i < opcaor.length; i++) {
    frase += opcaol+= opcaob+= opcaod += opcaos + resultado[i];
}




document.getElementById("soma").innerHTML = soma;
document.getElementById("opcaol").innerHTML = opcaol;
document.getElementById("opcaob").innerHTML = opcaob;
document.getElementById("opcaod").innerHTML = opcaod;
document.getElementById("opcaos").innerHTML = opcaos;
document.getElementById("opcaor").innerHTML = opcaor;
document.getElementById("resultado").innerHTML = resultado;