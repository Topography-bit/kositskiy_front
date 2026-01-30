const num1: = document.getElementById("num1") as HTMLInputElement
const num2: HTMLInputElement | null = document.getElementById("num2") as HTMLInputElement
const plus: HTMLButtonElement = document.getElementById("plus") as HTMLButtonElement
const minus = document.getElementById("minus") as HTMLButtonElement
const multiply = document.getElementById("multiply") as HTMLButtonElement
const div = document.getElementById("div") as HTMLButtonElement
const calc = document.getElementById("calc") as HTMLButtonElement
const res = document.getElementById("res") as HTMLInputElement

let operator: string | null = null

plus.addEventListener("click", function() {
    operator = "+"
})
minus.addEventListener("click", function() {
    operator = "+"
})
multiply.addEventListener("click", function() {
    operator = "+"
})
div.addEventListener("click", function() {
    operator = "+"
})

calc.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
        res.value = "Введите два числа"
        return
    }
    let ans: number | string
    const a = Number(num1.value)
    const b = Number(num2.value)

    if (operator === null) {
        res.value = "Выберите операцию";
        return;
    }

    if (operator === "+") ans = a + b
    else if (operator === "-") ans = a - b
    else if (operator === "*") ans = a * b
    else if (operator === "/" && b !== 0) ans = a / b
    else ans = "Ошибка"

    res.value = String(ans)
})