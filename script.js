 /*
 let nome = prompt("Digite seu nome: ");
 let sobrenome = prompt("Digite seu sobrenome:")



 alert(`Olá ${nome} ${sobrenome},  vc ainda não pagou a digital college.`);
 

 let exemplo = [1,3,["Teste","Desse","Array"],[true,2,"Undefined"],5,["Pera","Uva","Maça"],[2,4,6,3]]

// Quero que retornem Teste
//Quero que retornem 5
//Quero que retornem Undefined e digam qual o tipo 
// Quero que retornem Maça
// Quero que retornem 6




console.log(exemplo[2][0]);
console.log(exemplo[4])
console.log(exemplo[3][2])
console.log(exemplo[5][2])
console.log(exemplo[6][2]);
*/




//Gostaria por obséquio que vossa senhorias utilizassem template string para
 //mostrar no console a seguinte frase : O carro de modelo ... e de ano ... está na oficina há 20 dias.


// Gostaria que declarassem um novo objeto de alunos com informações de
 //nome,email,matricula e curso. E mostrassem no console : "O Aluno de nome ... e  matricula ... está inadiplente"

//Gostaria que declarassem um novo objeto de compra com as chaves,
//de compraId,nomeObjeto,quantidade e valor. Mostrasse no console a seguinte frase: A compra do
 //nomeObjeto e quantidade ... não pode ser efetuada.

//Gostaria por obs


let carro = {
    modelo: "onix",
    ano: 2023,
    cor: "branco",
    chassi: "fr43638gdh6489"

}

let aluno = {
    nome: "francisco",
    email: "f.rodrigue@1234",
    matricula: 2222863,
    curso: "dev"

}

let compras = {
    ID: 123456,
    nomeDoObjeto: "Notbook lenovo",
    contidade: 6,
    valor: 3.500


}

console.log(`O modelo do carro: ${carro.modelo}, "e de ano" ${carro.ano}, "está na oficina há 20 dias"`)

console.log(`O Aluno de nome ${aluno.nome} e  matricula ${aluno.matricula} está inadiplente`)

console.log(`A compra do ${compras.nomeDoObjeto} e ${compras.contidade} não pode ser efetuada`)