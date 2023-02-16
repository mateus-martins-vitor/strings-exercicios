function nomeComida (nome,comid1,comid2,comid3) {
    const frase = `Estas são as comidas favoritas de ${nome}:
    ${comid1}
    ${comid2}
    ${comid3}`

    console.log(frase)
}

    const nome = prompt(`Qual é seu nome ?`)
    const comida1 = prompt(`Primeira comida favorita?`)
    const comida2 = prompt(`Segunda comida favorita?`)
    const comida3 = prompt(`Terceira comida favorita?`)

    
    nomeComida(nome,comida1,comida2,comida3)