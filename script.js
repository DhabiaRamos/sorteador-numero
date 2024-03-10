const sectionResul = document.querySelector("#section-drawn-number")
const pNumSorteado = document.querySelector(".numSorteado")



function sortearNum() {
    const inputMin = document.querySelector(".input-numeroInicial")
    const inputMax = document.querySelector(".input-numeroFinal")

    //Transformando para valores númericos

    let min = parseInt(inputMin.value)
    let max = parseInt(inputMax.value)

    // Verificando se o input está vazio

    if (inputMin.value.length == 0 || inputMax.value.length == 0) {
        alert("Preencha os campos com números")

    } else if (min > max) {
        alert("O primeiro valor tem que ser menor que o último valor!")

    } else {

        let gerarNum = Math.floor(Math.random() * (max - min + 1) + min)

        sectionResul.style.display = "block"
        pNumSorteado.textContent = `${gerarNum}`
    }

}
