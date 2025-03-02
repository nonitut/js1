document.addEventListener("DOMContentLoaded", function() {

    // alert( 2+3 )
    // alert('Привет');
    // alert('Мир');

    let x = 5;
    let y = 6;
    console.log( x + y )
    console.log( 1 / 0 );  // вот это деление на 0 
    console.log( "не число" / 2 );
    console.log( "22" + 2 + 2 );
    console.log( 2 + 2 +  "22");

    let str = "Привет";
    let str2 = 'Одинарные кавычки тоже подойдут';
    let ph = `Обратные кавычки позволяют встраивать переменные ${str}`;

    // console.log(ph)
    // console.log(" некий текст " + str2 )
    console.log( `результат: ${1 + 2}` );

    let sun = 6 > 8;
    console.log(sun);

    let moon = 6 < 8;
    console.log(moon);

    let ha = true;
    let is = false;

    let can = ha && is;
    console.log(can);  //  && - значение "и"

    let te = 25;
    let isH = te > 30 ? "Горячо" : "Не горячо";
    console.log(isH); 

    let num = 41;
    let re = num % 2 === 0 ? "Четное" : "Нечетное";
    console.log(re);

    let nu = 42;
    let r = nu % 2 === 0 ? "Четное" : "Нечетное";
    console.log(r);

    let am = -15;
    let pos = am > 0 ? "+" : "- || 0";
    console.log(pos);


    let iiii 
    console.log(iiii);

    // alert - всплывающее окно с функцией ответить "ок"
    // prompt - запрос с возможностью ввести ответ
    // confirm - запрос с 2 вариантами ответа true || false 

    let age = prompt('Сколько тебе лет?', 20);
    console.log(`Тебе ${age} лет!`);

    let user = prompt("Введите ваш возраст:", 30);
    let ageN = parseInt(user) + 1;
    console.log("В следующем году вам будет " + ageN + " лет.");

    if (userA === null) {
        console.log("Операция отменена");
    } else if (userA.trim().toLowerCase() === "да") {
        console.log("Спасибо за согласие!");
    } else if (userA.trim().toLowerCase() === "нет") {
        console.log("Вы отказались от условий использования.");
    } else {
        console.log("Некорректный ответ.");
    }
    
});