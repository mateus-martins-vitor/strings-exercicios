const jorge = () => { 
    const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

    console.log(frase)

//B

const newFrase = frase.replace("verde", "rosa").replace("azul","laranja")

console.log(newFrase)

//C
const verInclusaoVerde = newFrase.includes("verde")
const verInclusaoLaranja = newFrase.includes("laranja")

console.log(`A nova string possui verde: ${verInclusaoVerde}`)
console.log(`A nova string possui laranja: ${verInclusaoLaranja}`)

//EXTRA
const maiusculo = newFrase.replace(`mas não deixe o gato sair`,
 `MAS NÃO DEIXE O GATO SAIR` )

console.log(maiusculo)

}

jorge()
