// Написати гру камінь ножиці папір. Де компютер загадує своє
//               значення потім користувач вводить свій варіант і далі ми бачимо
//               результат на екрані хто виграв

let arr = ['камінь','ножниці','папір'];
let mashinesValue = arr[Math.floor(Math.random() * Math.floor(3))];
let userValue = prompt('зробіть свій вибір: камінь , ножниці , папір')
userValue = userValue.toLowerCase(userValue)

if(((userValue == 'камінь')&&(mashinesValue == 'папір')) || ((userValue == 'ножниці')&&(mashinesValue == 'камінь')) || ((userValue == 'папір')&&(mashinesValue == 'ножниці'))){
     alert(`Ты програв,компютер вибрав ${mashinesValue}, а ти ${userValue}`);
} else if(((userValue == 'папір')&&(mashinesValue == 'камінь')) || ((userValue == 'камінь')&&(mashinesValue == 'ножниці')) || ((userValue == 'ножниці')&&(mashinesValue == 'папір'))){
     alert(`Ты выиграв,компютер вибрав ${mashinesValue}, а ти ${userValue}`);
}else if(userValue!=('камінь'||'папір'||'ножниці')){
     alert('Введений неправельний варіант');
 }
