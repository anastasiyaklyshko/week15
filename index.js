function show() {
   switch (document.getElementById ("backgroundchange").value)
{
    case "dark":
    document.body.style.background = 'grey'; break;
    
    case "white":
    document.body.style.background = 'pink'; break;
   
    case "bright":
    document.body.style.background = 'green'; break;
}
}

function calcDiv () 
{
    let a = prompt ('Первое число:');
    let b = prompt ('Второе число:');
    (b==0) ? alert ("На ноль делить нельзя!") : alert (Number(a)/Number(b));
    }

function check() {
let result1 = document.getElementById("name").value;
let result2 = document.getElementById("lastname").value;
let result3 = document.getElementById("birthday").value;
//let result4 = document.getElementById("female").value;
//let result5 = document.getElementById("male").value;
let result6 = document.getElementById("box").value;
let result7 = document.getElementById("code").value;
let result8 = document.getElementById("phone").value;


if (result1 =='') {
    alert ("Нужно заполнить Имя");
} else if (result2=='') {
    alert ("Нужно заполнить Фамилию");
} else if (result3=='') {
    alert ("Нужно заполнить Дату Рождения");
}  else if (result6=='') {
    alert ("Нужно придумать Имя ящика");
}  else if (result7 =='') {
    alert ("Нужно придумать пароль");
}  else if (result8 =='') {
    alert("Нужно заполнить номер телефона")
} else {
alert ("Добро пожаловать, " + result1 +" "+ result2 + "!");
}
}