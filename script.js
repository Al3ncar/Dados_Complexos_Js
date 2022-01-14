 
 let isweekend = false

 if (isweekend){
     console.log(`Olá, mundo!!!`)
 } else {
    console.log('Estudar JavaScript!!!')
  }



let age = 25

if (age < 15){
    console.log(`Aprovado`)
} else{
    console.log(`reprovado`)
}

// >   Maior que
// <   Menor que
// >=  Maior ou igual que
// <=  Menor ou igual que
// ==  Igual á
// === Igual e mesmo tipo de dado
// !== Diferente de

let old = 25

// Apenas números maiores que 18 vão tornar a condição verdadeira

if (age > 18) {
  console.log('Você pode aprender a dirigir');
}



let yeard = 25

// Apenas números menores a 16 vão tornar a condição verdadeira
if (age < 16) {
  console.log('Você não pode votar!!!');
}



var n1 = 5;
var n2 = "5";

// Essa condição é verdadeira pois os valores das variáveis são iguais

if (n1 == n2) {
  console.log('Valores iguais!');
}

// Essa condição é falsa pois os valores são iguais mas os tipos de dados são diferentes

if (n1 === n2) {
  console.log('Valor igual e tipo diferente!');
}

/* ---------------Arrays,objjects------------ */

let items = ["teclado gamer", "mouse gamer", "processador i9"];

//Os arrays usam colchetes ([]) e cada item dentro do array é separado por vírgula (,).

let name = [] /* exemplo de arrays vazio */


/* Todo item dentro de um array pode ser acessado através do seu índice (posição). O índice é simplesmente um número que representa a ordem do item dentro do array, a primeira posição de um array é sempre 0 (zero). */

//Para acessar o item escrevemos da seguinte forma:

// array[indice]

let fruits = ["apples", "strawberries", "oranges", "blueberries", "peaches"];

console.log(fruits[0]) // -> "apples"
console.log(fruits[1]) // -> "strawberries"
console.log(fruits[2]) // -> "oranges"
console.log(fruits[3]) // -> "blueberries"
console.log(fruits[4]) // -> "peaches"

console.log(fruits[-1]) // -> undefined
console.log(fruits[5]) // -> undefined




let roupas = ["blusa preta","blusa roxa","blusa amarela"]

console.log(roupas)


// Manipulando arrays

/*

1-push

2-pop

3-shift

4-unshift

5-slice


*/



//---------PUSH-------//

//O método push adiciona um ou mais elementos no final do array:


let game = ["apples", "strawberries", "oranges", "blueberries", "peaches"]

items.push("water cooler")

console.log(items) // -> ["teclado gamer", "mouse gamer", "processador i9", "water cooler"]



//---------------UNSHIFT-----------//


// O método unshift adiciona um ou mais elementos no início do array:

let control = ["teclado gamer", "mouse gamer", "processador i9"];

control.unshift("water cooler");

console.log(control) // -> ["water cooler", "teclado gamer", "mouse gamer", "processador i9"]


//------POP------//


// O método pop remove o último elemento do array:

let itemsControl = ["teclado gamer", "mouse gamer", "processador i9"];

itemsControl.pop();

console.log(itemsControl) // -> ["teclado gamer", "mouse gamer"]


//------SHIFT------//


// O método shift remove o primeiro elemento do array:

let gameControl = ["teclado gamer", "mouse gamer", "processador i9"];

gameControl.shift();

console.log(gameControl) // -> ["mouse gamer", "processador i9"]


//--------------SLICE------------//


// Com o método slice podemos cortar um array. Vamos ver um exemplo:

let note = ["teclado gamer", "mouse gamer", "processador i9", "ssd 256gb", "ram ddr4"];

let myItems = note.slice(1, 4);

console.log(myItems) // -> ["mouse gamer", "processador i9", "ssd 256gb"];

// No exemplo acima especificamos a posição inicial e final e um novo array será criado a partir do array original. O slice retorna um novo array sem alterar o original.


//------------OBJECT----------//

/* 

Os objetos são o coração do JavaScript, com ele podemos criar e organizar uma vasta quantidade de informações de forma clara e concisa.

*/

// Para criar um objeto nós usamos uma par de chaves e atribuímos essas chaves a uma variável dessa forma:


let pessoa = {};

let dog = {};

let car = {};


// ---------------CHAVE/VALOR------------- //


let people = {
    chave: "valor"
};

//Os objetos trabalham usando um modelo de chave e valor. A chave é o nome usado para acessar o dado que chamamos de valor, notem que existem dois pontos separando a chave do valor:


dog = {
    name: "Falcão"
};

//Quando falamos de objetos em JavaScript os termos chave e propriedade são sinônimos :)

/* 

Para acessar uma informação do object utilizamos o nome do object seguido de um (.) e o nome da chave. Quando fazemos isso o JavaScript retornará o valor correspondente à chave informada:

*/

let pessoasFisicas = {

  name: "Luan",
  idade: 17,
  amigos: ["Kelvin", "Kraken", "Cícero"]

}

console.log(pessoasFisicas.name) // -> Luan

console.log(pessoasFisicas.amigos[1])


// Adicionando informações//


// Do mesmo modo que acessamos uma informação também podemos criar novas propriedades (chave) dentro de um objeto:

pessoa.telefone = 123456789; // -> Como a propriedade telefone não existe no objeto ela será criada com o valor passado após o sinal de atribuição

pessoa.cidade = "Rio de Janeiro"; // -> Como a propriedade cidade não existe no objeto ela será criada com o valor passado após o sinal de atribuição



delete pessoasFisicas.idade;
console.log(pessoasFisicas)

