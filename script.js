const button = document.querySelector("button")
const salarioInput = document.getElementById("salario")
const novoSalarioInput = document.getElementById("novo-salario")
const resultado = document.getElementById("resultado")

button.onclick = calcularAumento

function calcularAumento() {
    const salario = salarioInput.valueAsNumber
    const novoSalario = novoSalarioInput.valueAsNumber

    if (
        salarioInput.value === "" ||
        novoSalarioInput.value === ""
    ) {
        alert("Preencha todos os campos.")
        return
    }

    let aumento = novoSalario - salario
    let porcentagem = ((novoSalario*100)/salario) - 100


    resultado.innerHTML = `Aumento = ${aumento.toFixed(2)} reais <br>
    Porcentagem = ${porcentagem}%`
}