// Написати програму де користувач вводить 3 числа, після вводу всіх
//               трьох чисел йому на екрані показується найбільше з них. Додатково
//               перевіряти чи це взагалі числа

let input1 = +(prompt('введіть перше число'));
if (isNaN(input1)) {
    alert(`потрібно ввести число!`)};
let input2 = +(prompt('введіть друге число'));
if (isNaN(input2)) {
    alert(`потрібно ввести число!`)};
let input3 = +(prompt('введіть третє число'));
if (isNaN(input3)) {
    alert(`потрібно ввести число!`)};
 let result = Math.max(input1 , input2, input3)
alert(`найбільшим числом буде ${result}`)
let inputCheck = input1
inputCheck.isNaN()
alert(inputCheck)