// Написати програму яка буде знаходити суму, різницю, добуток,
// частрку двох чисел Користувач вводить 2 числа потім вводить знак
//  операції і отримує результат в форматі "Сума чисел a i b =
// результат" (такий шаблон для кожної відповіді)

let firstNum = parseInt(prompt('введіть перше число'));
let secondNum = parseInt(prompt('введіть друге число'));
let operator = prompt('введіть оператор')
if (operator == "+"){
    let a = firstNum + secondNum
    alert(`Сума чисел a i b = ${a}`)
}
else if (operator == "-"){
let b = firstNum - secondNum
alert(`Різниця чисел a i b = ${b}`)}

else if (operator == "/"){
    let c = firstNum / secondNum
    alert(`Частка чисел a i b = ${c}`)}
    else if(operator == "*"){
        let d = firstNum * secondNum
        alert(`Добуток чисел a i b = ${d}`)
    }
