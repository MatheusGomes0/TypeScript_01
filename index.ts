
import PromptSync from "prompt-sync"


//Interface com os atributos
interface Aluno {
    nome: String
    notas: number[]
    media: number
    situacao: String
}

//Iniciando o prompt-sync e perguntando o seu nome
const prompt = PromptSync()
const nome = prompt('Digite o nome do aluno: ')
let notas: number[] = [3]

console.log(`Olá ${nome}`)



for (let i = 0; i <= 3; i++) {
    const nota: number = prompt('Digite sua ${i} nota (0 a 10): ')

    if (nota < 0 || nota > 10) {
        console.log('Digite uma nota válida entre 0 e 10')
    }

    //adicionando as notas no array
    notas.push(nota)
}

//função para ler o array e calcular a média das notas
function calcularMedia(notas: number[]): number {
    // metodo reduce() usado para ler todos os elementos do array
    //notasTotal = o valor onde vai ser acumulado, nota os valores a serem lidos e o 0 é p valor inicial para o acumulador (notasTotal)
    const total = notas.reduce((notasTotal, nota) => notasTotal + nota, 0)
    return total / notas.length
}

const media = calcularMedia(notas)



// função para verificar se o aluno foi reprovado ou aprovado
function verificarSituacao(situ: number): string {
    let sit;
    if (situ >= 6) {
        sit = 'Aprovado'
    } else {
        sit = 'Reprovado'
    }

    return sit
}

const situacao = verificarSituacao(media)

// Criar o objeto Aluno
const aluno: Aluno = {
    nome,
    notas,
    media,
    situacao
}



