const nomes = ["Ana", "Ju", "Leo","Paula"]

nomes.forEach(imprimeNomes)

function imprimeNomes(nome){
    console.log(nome)
}

//o método FOREACH só recebe funções dentro do parametro

//foreach pode receber funções que estejam em outra parte do código, por exemplo nesse
//ele consegue receber a função 'imprimeNomes' que recebeu um parametro nome que pegou as informações na array