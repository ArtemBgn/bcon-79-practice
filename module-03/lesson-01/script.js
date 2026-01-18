// Task-1
const b1 = document.querySelector("button.b-1");
const out1 = document.querySelector("div.out-1");
const ar1 = ["strings", 1, 2, 3, true, false];
b1.onclick = fn1;

function fn1() {
    out1.textContent = `${ar1}`;
}

// Task-2
const b2 = document.querySelector("button.b-2");
const out2 = document.querySelector("div.out-2");
const ar2 = ["strings", 1, 2, 3, true, false];
b2.onclick = fn2;

function fn2() {
    for (let i = 0; i < ar2.length; i++) {
        out2.textContent += ar2[i] + ', ';
    }
}

// Task-3
const b3 = document.querySelector("button.b-3");
const out3 = document.querySelector("div.out-3");
const ar3 = ["strings", 2, 3, true, false];
b3.onclick = fn3;

function fn3() {
    out3.textContent = ar3.length;
}

// Task-4
const b4 = document.querySelector("button.b-4");
const out4 = document.querySelector("div.out-4");
const ar4 = ["strings", 1, 2, 3, true, false, "six", 7, "eight"];
b4.onclick = fn4;

function fn4() {
    out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}

// Task-5
const b5 = document.querySelector("button.b-5");
const out5 = document.querySelector("div.out-5");
const ar5 = [1, 2, 3, 4, 5, 6];
b5.onclick = fn5;

function fn5() {
    out5.textContent = (+ar5[0]) + (+ar5[2]) + (+ar5[3]);
}

// Task-6
const b6 = document.querySelector("button.b-6");
const out6 = document.querySelector("div.out-6");
const ar6 = ["Artem", "scorpio", 4, "november"];
b6.onclick = fn6;

function fn6() {
    out6.textContent = ar6.join(" ");
}

// Task-7
const b7 = document.querySelector("button.b-7");
const out7 = document.querySelector("div.out-7");
const ar7 = [];
b7.onclick = fn7;

function fn7() {
    ar7.length = 8;
    ar7[7] = "vietnam";
    ar7[6] = "turkey";
    ar7[5] = "italy";
    out7.textContent = ar7.join(" ");
}

// Task-8
const b8 = document.querySelector("button.b-8");
const out8 = document.querySelector("div.out-8");
const out8v1 = document.querySelector("div.out-8-1");
const ar8 = [];
b8.onclick = fn8;

function fn8() {
    ar8.length = 7;
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    out8.textContent = ar8.join("-");
    out8v1.textContent = ar8.length;
}

// Task-9
const b9 = document.querySelector("button.b-9");
const out9 = document.querySelector("div.out-9");
const ar9 = ["strings", 1, 2, 3, true, false, "six", 7, "eight"];
b9.onclick = fn9;

function fn9() {
    out9.textContent = ar9[ar9.length - 1];
}


const btn9 = document.querySelector(".b-9");
const ar9 = document.querySelector(".out-9");
const out9 = document.querySelector(".out-9");

// const arr8 = [];

// btn8.onclick = fn8;

 function fn9() {
const last
// }
// Task-10
const b10 = document.querySelector("button.b-10");
const out10 = document.querySelector("div.out-10");
const ar10 = [1, 2, 3, 4, 5, 6, 7, 8];
b10.onclick = fn10;

function fn10() {
    out10.textContent = ar10[1] + ar10[ar10.length - 1];
}



function f10() {
  const lastI = ar10.length - 1;
  const out11 = document.querySelector
}
// Task-11
const b11 = document.querySelector("button.b-11");
const out11 = document.querySelector("div.out-11");
const ar11 = [2, 3, 4, 5, 6, 7];
b11.onclick = fn11;

function fn11() {
    let tmp = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = tmp;
    out11.textContent = ar11.join(" ");
}

const ar11 = [2, 3, 4, 5, 6, 7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn12.onclick = f11;


function f11() {
  
}
// Task-12
const b12 = document.querySelector("button.b-12");
const out12 = document.querySelector("div.out-12");
const ar12 = ['test', 'west', 'list', 'class', 'best'];
b12.onclick = fn12;

function fn12() {
    let tmp = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = tmp;
    out12.textContent = ar12.join(" ");
}

const ar12 = ["test", "west", "list", "class", "best"];
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = f12;


function f12() {

let result = "";

const firstEl = ar12.at(0);
const lastEl = ar12.at(-1);
ar12[0] = lastEl;
ar12[ar12.length - 1] = firstEl;




// const a1 = ar12[0];
// const lastI = ar12.length - 1;
// ar12[0] = lastI;
// ar12[lastI] = a1;

for (let i = 0; i < ar12.length; i++) {
  result += ar12[i] + " ";
  
}
out12.textContent = result;
}

// Task-13
const b13 = document.querySelector("button.b13-");
const out13 = document.querySelector("div.out-13");
const ar13 = ['test', 'west', 'list', 'class', 'best'];
b13.onclick = fn13;

function fn13() {
    for (let i = 0; i < ar13.length; i++) {
        out13.textContent += `${i} ${ar13[i]} `;
    }
}

// Task-14
const b14 = document.querySelector("button.b-14");
const out14 = document.querySelector("div.out-14");
const ar14 = [1, 2, 3, 'hello', 66];
b14.onclick = fn14;

function fn14() {
    for (let i = ar14.length - 1; i >= 0; i--) {
        out14.textContent += ar14[i] + " ";
    }
}

const ar14 = ["test", "west", "list", "class", "best"];
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = f14;

function f14() {

  let result = "";
  for (let i = ar14.length - 1; i >= 0; i--) {
    result += ar14[i] + " ";

    
  }

out14.textContent = result;
}


// Task-15
const b15 = document.querySelector("button.b-15");
const out15 = document.querySelector("div.out-15");
const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
b15.onclick = fn15;

function fn15() {
    for (let i = 0; i < ar15.length; i++) {
        out15.textContent += ar15[i] > 0 ? ar15[i] + " " : "";
    }
}

const ar15 = ["test", "west", "list", "class", "best"];
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn14.onclick = f15;

function f15() {

  let result = "";
  for (let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
      result += ar15[i] + " ";
    }
  }

out15.textContent = result;
}

// Task-16
const b16 = document.querySelector("button.b-16");
const out16 = document.querySelector("div.out-16");
const out16odd = document.querySelector("div.out-16-odd");
const out16even = document.querySelector("div.out-16-even");
const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const ar16_odd = [];
const ar16_even = [];
b16.onclick = fn16;

function fn16() {
    for (let i = 0; i < ar16.length; i++) {
        ar16[i] % 2 === 0 ? ar16_even.push(ar16[i]) : ar16_odd.push(ar16[i]);
    }
    out16odd.textContent = ar16_odd.join(" ");
    out16even.textContent = ar16_even.join(" ");
}

const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn16 = document.querySelector(".b-16");
const out161 = document.querySelector(".out-16-odd");
const out162 = document.querySelector(".out-16-even");

btn16.onclick = f16;

function f16() {
  let ar16_odd = [];
  let ar16_even = [];

// ar16_even[3] = 222 reminde
let oddCounter = 0;
let evenCounter = 0;

  for (let i = 0; i < ar16.length; i++) {

    if (ar16[i] % 2 === 0) {
      ar16_even[evenCounter] = ar16[i];
      evenCounter += 1; //++
    //2 ------   ar16_even.push(ar16[i]);
    } else {
      ar16_odd[oddCounter] = ar16[i];
      oddCounter += 1;
    // 2------  ar16_odd.push(ar16[i]);
    // }
   
  }

// 2-----out161.textContent = ar16_even;
// 2------out162.textContent = ar16_odd;
}

// Task-17
const b17 = document.querySelector("button.b-17");
const out17 = document.querySelector("div.out-17");
const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
b17.onclick = fn17;

function fn17() {
    let count = 0;
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            ++count;
        }
    }
    out17.textContent = count;
}

const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0]];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = f17;

function f17() {

  // 2 -------  let counter = 0;
  let filteredar17 = [];
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      // counter++ 
      filteredar17.push(ar17[i]);
    }
  }

// out17.textContent = counter;
out17.textContent = filteredar17.length;
}
// 3     17.filter(n => n > 3).length

// Task-18
const b18 = document.querySelector("button.b-18");
const out18 = document.querySelector("div.out-18");
const ar18 = [15,24,13,78,21,4,45,67];
b18.onclick = fn18;

function fn18() {
    let max = ar18[0];
    for (let i = 1; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    out18.textContent = max;
}

// Task-19
const b19 = document.querySelector("button.b-19");
const out19 = document.querySelector("div.out-19");
const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
b19.onclick = fn19;

function fn19() {
    let min = ar19[0];
    let minIndex = 0;
    for (let i = 1; i < ar19.length; i++) {
        if (ar19[i] < min) {
            min = ar19[i];
            minIndex = i;
        }
    }
    out19.textContent = minIndex;
}

// Task-20
const b20 = document.querySelector("button.b-20");
const out20 = document.querySelector("div.out-20");
const ar20 = [4, 5, 6, 7, 8, 9, 10];
b20.onclick = fn20;

function fn20() {
    let sum = 0;
    for (let i = 0; i < ar20.length; i++) {
        sum += ar20[i];
    }
    out20.textContent = sum;
}
