const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7,4,8,7]

const reprovados = alunos.filter( (aluno, indice) => notas[indice]<5)
                                //aluno é referente ao primeiro parametro da array1(alunos), indice, 
                                // é o valor que ele vai retirar para mostrar no console.
console.log(`reprovados: ${reprovados}`)