let dataAtual = 10 
const numeroMaximo = 100
const idadeMinima = 18

let data = 10 // data hipotética
let idade = 31
let participantes = 0;


// o ideal seria haver um input para o usuário informar data e idade, porém não é o escopo da atividade
if (data >= dataAtual){
    console.log("Evento criado com sucesso! Agora, adicione os participantes.")
    if (idade >= idadeMinima) {
        if (participantes <= numeroMaximo){
            console.log("Participante adicionado, até aqui " + participantes + " participantes já foram adicionados.")
        }
        else {
            console.log("Número de participantes excedido")
        }
    }
    else {
        console.log("Idade Inválida")
    }
}
else {
    console.log("Data Inválida")
}
