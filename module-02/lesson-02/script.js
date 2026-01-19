//  Task 1
// Кнопка .b-1 запускає функцію fn1. Функція повинна виводити в .out-1 рядок вигляду:
//1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
//.out-1 рядок вигляду
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const b1 = document.querySelector('button.b-1');
const out1 = document.querySelector('div.out-1');
b1.onclick = fn1;

function fn1() {
  for (let i = 1; i < 17; i++) {
    out1.textContent += i + '_';
  }
}

//  Task 2
// Кнопка .b-2 запускає функцію fn2. Функція повинна виводити в .out-2 рядок вигляду:
//     12_14_16_18_20_22_24_26_28_30_32_34_36_38_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const b2 = document.querySelector('button.b-2');
const out2 = document.querySelector('div.out-2');
b2.onclick = fn2;

function fn2() {
  for (let i = 12; i < 39; i += 2) {
    out2.textContent += i + '_';
  }
}

//  Task 3
// Кнопка .b-3 запускає функцію fn3. Функція повинна виводити в .out-3 рядок вигляду:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const b3 = document.querySelector('button.b-3');
const out3 = document.querySelector('div.out-3');
b3.onclick = fn3;

function fn3() {
  for (let i = 25; i > 6; i--) {
    out3.textContent += i + '_';
  }
}

//  Task 4
// Кнопка .b-4 запускає функцію fn4. Функція повинна виводити в .out-4 рядок вигляду:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// від 77 до 35 з кроком 3. Роздільник - знак підкреслення. Завдання вирішується за допомогою циклу.
const b4 = document.querySelector('button.b-4');
const out4 = document.querySelector('div.out-4');
b4.onclick = fn4;

function fn4() {
  for (let i = 77; i > 34; i -= 3) {
    out4.textContent += i + '_';
  }
}

//  Task 5
// Кнопка .b-5 запускає функцію fn5. Функція повинна виводити в .out-5 рядок вигляду:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// від 1 до 17 з кроком 1. Роздільник - знак підкреслення та зірочка (якщо число непарне, і дві зірочки, якщо парне). Завдання вирішується за допомогою циклу.
const b5 = document.querySelector('button.b-5');
const out5 = document.querySelector('div.out-5');
b5.onclick = fn5;

function fn5() {
  for (let i = 1; i < 18; i++) {
    out5.textContent += i + (i % 2 != 0 ? '_*' : '_**');
  }
}

//  Task 6
// Кнопка .b-6 запускає функцію fn6. Функція повинна виводити в .out-6 рядок вигляду:
//
// ******<br>
// ******<br>
// ******<br>
//
// Завдання вирішується за допомогою циклу. В кожній ітерації цикл виводить 6 зірочок. Перенесення рядка - br. Кількість рядків (ітерацій, повторень) циклу вводить користувач в i-6.
//
const b6 = document.querySelector('button.b-6');
const inp6 = document.querySelector('input.i-6');
const out6 = document.querySelector('div.out-6');
b6.onclick = fn6;

function fn6() {
  out6.textContent = '';
  const it = +inp6.value;
  for (let i = 0; i < it; i++) {
    out6.innerHTML += '******<br>';
  }
}

//  Task 7
// Є input .i-7, куди користувач може ввести число більше нуля (перевірок не робимо, приймаємо як факт).
// Після натискання кнопки .b-7 повинна запускатися функція fn7, яка виводить в .out-7 числа від введеного користувачем до нуля включно.
// Роздільник - знак підкреслення. Якщо користувач ввів 4 і натиснув кнопку, ми отримаємо:
// 4_3_2_1_0_
// Завдання вирішується за допомогою циклу.
const b7 = document.querySelector('button.b-7');
const inp7 = document.querySelector('input.i-7');
const out7 = document.querySelector('div.out-7');
b7.onclick = fn7;

function fn7() {
  out7.textContent = '';
  const it = +inp7.value;
  for (let i = it; i > -1; i--) {
    out7.textContent += i + '_';
  }
}

//  Task 8
// Є input .i-81 та .i-82, куди користувач може ввести числа більше нуля (перевірок не робимо, приймаємо як факт).
// Вважаємо, що друге число завжди більше першого.
// Після натискання кнопки .b-8 повинна запускатися функція fn8, яка виводить в .out-8 числа від першого введеного до другого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
//  4_5_6_7_8_
// Завдання вирішується за допомогою циклу.
const b8 = document.querySelector('button.b-8');
const inp8v1 = document.querySelector('input.i-81');
const inp8v2 = document.querySelector('input.i-82');
const out8 = document.querySelector('div.out-8');
b8.onclick = fn8;

function fn8() {
  out8.textContent = '';
  const it1 = +inp8v1.value;
  const it2 = +inp8v2.value;
  for (let i = it1; i <= it2; i++) {
    out8.textContent += i + '_';
  }
}

//  Task 9
// Є input .i-91 та .i-92, куди користувач може ввести числа.
// Після натискання кнопки .b-9 повинна запускатися функція fn9, яка виводить в .out-9 числа від меншого введеного до більшого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
// 4_5_6_7_8_
// якщо ввів 8 і 6, то отримаємо
// 6_7_8_
// Завдання вирішується за допомогою циклу. Підказка - спочатку робимо перевірку, а потім запускаємо цикл.
// цикл - один
const b9 = document.querySelector('button.b-9');
const inp9v1 = document.querySelector('input.i-91');
const inp9v2 = document.querySelector('input.i-92');
const out9 = document.querySelector('div.out-9');
b9.onclick = fn9;

function fn9() {
  out9.textContent = '';
  const it1 = +inp9v1.value;
  const it2 = +inp9v2.value;
  let beginArr = +inp9v2.value;
  let endArr = +inp9v2.value;
  it1 < it2 ? (beginArr = it1) : (endArr = it1);
  for (let i = beginArr; i <= endArr; i++) {
    out9.textContent += i + '_';
  }
}

function fn9() {
  const input1 = Number(document.querySelector('.i-91').value);
  const input2 = Number(document.querySelector('.i-92').value);
  let output = '';

  if (input1 > input2) {
    for (let i = input2; i <= input1; i++) {
      output += `${i}_`;
    }
  } else {
    for (let i = input1; i <= input2; i++) {
      output += `${i}_`;
    }
  }
  //  document.querySelector(".out-9").textContent = output;
  //  }
  //  document.querySelector(".b-9").onclick = fn9;

  //2 sposib ternar

  function fn9() {
    const input1 = Number(document.querySelector('.i-91').value);
    const input2 = Number(document.querySelector('.i-92').value);
    let output = '';

    const min = input1 > input2 ? input2 : input1;

    for (let i = min; i < max; i++) {
      output += `${i}_`;
    }
  }

  //  Task 10    photo screen 15.01.26
  // Кнопка .b-10 запускає функцію fn10. Функція повинна виводити в .out-10 парні роки від 1950 до 1970 включно.
  // Роздільник - знак підкреслення. Завдання вирішується через цикл, а парність - через крок (рівний 2).
  const b10 = document.querySelector('button.b-10');
  const out10 = document.querySelector('div.out-10');
  b10.onclick = fn10;

  function fn10() {
    for (let i = 1950; i <= 1970; i += 2) {
      out10.textContent += i + '_';
    }
  }

  //  Task 11
  // Кнопка .b-11 запускає функцію fn11. Функція повинна:
  // - отримати всі div.div-11 у змінну divs11
  // - перебрати їх за допомогою циклу. Звернення до div виглядає так: divs[i].innerHTML
  // - вивести в .out-11 вміст кожного блоку. Роздільник - знак підкреслення.
  // В результаті повинно вийти так:
  //     one_3_4_two_
  const b11 = document.querySelector('button.b-11');
  const out11 = document.querySelector('div.out-11');
  b11.onclick = fn11;

  function fn11() {
    const divs11 = document.querySelectorAll('div.div-11');
    for (let i = 0; i < divs11.length; i++) {
      out11.textContent += divs11[i].textContent + '_';
    }
  }

  //  Task 12
  // Кнопка .b-12 запускає функцію fn12. Функція повинна:
  // - отримати всі div.div-12
  // - перебрати їх за допомогою циклу. Звернення до div виглядає так: elem[i]
  // - застосувати до кожного elem[i].style.background = ‘orange’
  const b12 = document.querySelector('button.b-12');
  const out12 = document.querySelector('div.out-12');
  b12.onclick = fn12;

  function fn12() {
    const divs12 = document.querySelectorAll('div.div-12');
    for (let i = 0; i < divs12.length; i++) {
      divs12[i].style.background = 'orange';
    }
  }

  for (let i = 0; i < elems.length; i++) {
    elems[i].style.background = 'orange';
  }
}
//  Task 13
// За допомогою циклу привласніть всім input .i-13 value рівне:
// - для першого  1
// - для другого  2
// - для третього 3
const b13 = document.querySelector('button.b-13');
b13.onclick = fn13;

function fn13() {
  const inputs13 = document.querySelectorAll('input.i-13');
  for (let i = 0; i < inputs13.length; i++) {
    inputs13[i].value = i + 1;
  }
}

//  Task 14
// Кнопка .b-14 запускає функцію fn14. Функція повинна:
// - отримати всі input.i-14
// - перебрати їх за допомогою циклу. Звернення до елемента виглядає так: elem[i]
// - вивести в .out-14 value вибраного input
// Перевірити, чи вибраний елемент, можна за допомогою elem[i].checked.
const b14 = document.querySelector('button.b-14');
const out14 = document.querySelector('div.out-14');
b14.onclick = fn14;

function fn14() {
  const inputs14 = document.querySelectorAll('input.i-14');
  for (let i = 0; i < inputs14.length; i++) {
    if (inputs14[i].checked) {
      out14.textContent = inputs14[i].value;
    }
  }
}

//  Task 15
// Кнопка .b-15 запускає функцію fn15. Функція повинна виводити наступну послідовність в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Підказка (10 - i) + '_' + i + '_'
const b15 = document.querySelector('button.b-15');
const out15 = document.querySelector('div.out-15');
b15.onclick = fn15;

function fn15() {
  for (let i = 0; i <= 10; i++) {
    out15.textContent += 10 - i + '_' + i + '_';
  }
}
