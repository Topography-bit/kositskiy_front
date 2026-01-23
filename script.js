const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const div = document.getElementById("div")
const calc = document.getElementById("calc")
const res = document.getElementById("res")

let operator = null

plus.onclick = function() {
    operator = "+"
}
minus.onclick = function() {
    operator = "-"
}
multiply.onclick = function() {
    operator = "*"
}
div.onclick = function() {
    operator = "/"
}

calc.onclick = function () {
    if (num1.value === "" || num2.value === "") {
        res.value = "Введите два числа"
        return
    }
    let ans
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

    res.value = ans
}