let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
/* 
for(let elem of users){
    
    if(elem.name.startsWith ('and')){
        console.log(elem.status);
    }
}
 */
// - статус Максима
/* 
console.log(users[4].name+ ' - ' +users[4].status);
 */
// - ім'я передостаннього об'єкту
/* 
console.log(users[users.length-2].name);
 */
// - ім'я третього об'єкта

/* console.log(users[2].name);
 */
// - вік Олега
/* 
for(let elem of users){
    
    if(elem.name.startsWith ('ole')){
        console.log(elem.age);
    }
} */
// - вік Олі
/* for(let elem of users){
    
    if(elem.name.startsWith ('olya')){
        console.log(elem.age);
    }
} */
// - вік + ім'я 5го об'єкта
/* 
for(let key in users[4]){
    console.log(users[4][key]);
} */
// - вік + сатус Анни
/* console.log(users[5].age + ' age - ' + users[5].status)
 */
// ---------------------------------------------------------------
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
/* 
let content_p = document.getElementById('content');
console.log(content_p.innerHTML);
 */
// - отримує текст з блоку з id "rules"
/* 
let rules_div = document.querySelector('#rules');
console.log(rules_div.innerHTML);
 */
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
/* 
let str_cheng = rules_div.innerHTML;
rules_div.innerHTML = content_p.innerHTML;
content_p.innerHTML = str_cheng;
 */
// - змініть кожному елементу колір фону на червоний
/* 
content_p.style.background = 'red';
rules_div.style.background = 'red';
 */
// - змініть кожному елементу колір тексту на синій
/* 
content_p.style.color = 'blue';
rules_div.style.color = 'blue';
 */
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
/* 
let class_rules = document.getElementById('rules');
console.log(class_rules.classList);
 */
// - отримати всі елементи з класом fc_rules
/* 
let fc_rules_class = document.getElementsByClassName('fc_rules');
for (let elem of fc_rules_class)
    console.log(elem);
 */
// - поміняти колір тексту у всіх елементів fc_rules на червоний
/* 
    for (let elem of fc_rules_class) {
    elem.style.color = 'red';
}
 */
// 
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :

// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_header_color = document.getElementById('main_header');
main_header_color.style.color = 'red';
// -- робить шириниу елементу ul 400 пікселів

let ul_element = document.getElementsByTagName('ul');
console.log(ul_element);
for (let elem of ul_element) {
    elem.style.width = '400px';
    elem.style.border = '1px solid black';
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let elem_link_list = document.getElementsByClassName('linkList');
for (let elem of elem_link_list) {
    elem.style.width = '50%';
    elem.style.border = '1px solid red';
}
// -- отримує текст який зберігається в елементі з класом 
let text_listElement2 = document.getElementsByClassName('listElement2');
for (let elem of text_listElement2) {
    console.log(elem.innerText);
}
// -- отримує всі елементи li та змінює ім колір фону на сірий
let oll_li = document.getElementsByTagName('li');
for (let elem_li of oll_li) {
    elem_li.style.background = 'silver';
}
// -- отримує всі елементи 'a' та додає їм клас anchor
let oll_a = document.getElementsByTagName('a');
for (let elem_a of oll_a) {
    elem_a.classList.add('anchor');
}
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let elem_a of oll_a) {
    if (elem_a.innerText == 'link3') {
        elem_a.style.fontSize = '40px';
    }
}
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let elem_a of oll_a) {
    elem_a.classList.add('element_' + elem_a.innerText);
}
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/* 
let oll_sub_header = document.getElementsByClassName('sub-header');
let col_el = prompt('Enter color');
for (let elem of oll_sub_header) {
    elem.style.background = col_el;
}
 */
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

/* 
let oll_sub_header = document.getElementsByClassName('sub-header');
let col_el = prompt('Enter color');
for (let elem of oll_sub_header) {
    if(elem.innerText == 'content 2 segment'){
        elem.style.color = col_el;
    }
}
 */
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/* let elem_content_1 = document.getElementsByClassName('content_1');
for (let elem of elem_content_1) {
    console.log(elem_content_1)
    elem_content_1.innerText = prompt('enter some text');
    console.log(elem_content_1)
}
 */
// -- отримати елементи p та змінити їм paddin на довільне значення
let p_oll_elem = document.getElementsByTagName('p');
for(let elem_p of p_oll_elem){
    elem_p.style.padding = '20px';
}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення 
let elem_text2 = document.getElementsByClassName('text2');
for(let elem of elem_text2){
    elem.innerText = '22222222222222222222222';
}


