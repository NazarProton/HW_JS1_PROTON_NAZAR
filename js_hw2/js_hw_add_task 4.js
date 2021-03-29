// Написати програму яка буде переводити температуру з цельсія в
//               фаренгейти, або навпаки з фаренгейта в цельсії

let temperature = parseInt(prompt('введіть температуру'));
let typeOfTemperature = prompt('оберіть тип температури 1.Цельсій 2.Фаренгейт');
let convertToFarenheit = temperature * 33.8;
let convertToCelsium = temperature / 33.8;
if (typeOfTemperature == "1"){ 
    alert(`${temperature}° по Цельсій = ${convertToFarenheit}° по Фарингейту`)
}
else if (typeOfTemperature == "2"){ 
    alert(`${temperature}° по Фаренгейту = ${convertToCelsium}° по Цельсію`)
}