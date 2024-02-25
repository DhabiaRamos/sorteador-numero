const sectionResul = document.querySelector("#section-drawn-number")
const pNumSorteado = document.querySelector(".numSorteado")



function sortearNum() {
    const inputMin = document.querySelector(".input-numeroInicial")
    const inputMax = document.querySelector(".input-numeroFinal")

    let min = parseInt(inputMin.value)
    let max = parseInt(inputMax.value)

    let gerarNum = Math.floor(Math.random() * (max - min + 1) + min)

    sectionResul.style.display = "block"
    pNumSorteado.textContent = `${gerarNum}`
}
