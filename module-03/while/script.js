// Task 1
const b1 = document.querySelector('button.b-1');
const out1 = document.querySelector('div.out-1');
b1.onclick = f1;

function f1() {
  //     let j = 1;
  //     let q = 11;
  //   for (let i = 0; i < 5; i++) {
  //     for (j; j < q; j++) {
  //         out1.innerHTML += (j < 10 ? "0" : "") + j + "_";
  //     }
  //     q += 10;
  //     out1.innerHTML += "<br/>";
  //   }
  let i = 1;
  while (i < 51) {
    out1.innerHTML += i + '_';
    i++;
  }
}

// Task 2
const b2 = document.querySelector('button.b-2');
const out2 = document.querySelector('div.out-2');
b2.onclick = f2;

function f2() {
  let i = 2;
  while (i < 47) {
    out2.innerHTML += i + '_';
    i += 2;
  }
}

// Task 3
const b3 = document.querySelector('button.b-3');
const out3 = document.querySelector('div.out-3');
b3.onclick = f3;

function f3() {
  let i = 25;
  while (i > 6) {
    out3.innerHTML += i + '_';
    i--; //= 2;
  }
}

// Task 4
const b4 = document.querySelector('button.b-4');
const out4 = document.querySelector('div.out-4');
b4.onclick = f4;

function f4() {
  let i = 77;
  while (i > 34) {
    out4.innerHTML += i + '_';
    i -= 3;
  }
}

// Task 5
const b5 = document.querySelector('button.b-5');
const out5 = document.querySelector('div.out-5');
b5.onclick = f5;

function f5() {
  let i = 1;
  while (i < 18) {
    out5.innerHTML += i + '_*' + (i % 2 != 0 ? '' : '*');
    i++;
  }
}

// Task 6
const b6 = document.querySelector('button.b-6');
const out6 = document.querySelector('div.out-6');
// const inp6 = document.querySelector("input.i-6");
b6.onclick = f6;

function f6() {
  // const j = inp6.value;
  const j = 3;
  let i = 0;
  while (i < j) {
    out6.innerHTML += '******<br/>';
    i++;
  }
}

// Task 7
const b7 = document.querySelector('button.b-7');
const out7 = document.querySelector('div.out-7');
const inp7 = document.querySelector('input.i-7');
b7.onclick = f7;

function f7() {
  out7.textContent = '';
  let j = +inp7.value;
  while (j >= 0) {
    out7.innerHTML += j + '_';
    j--;
  }
}

// Task 8
const b8 = document.querySelector('button.b-8');
const out8 = document.querySelector('div.out-8');
const inp8v1 = document.querySelector('input.i-81');
const inp8v2 = document.querySelector('input.i-82');
b8.onclick = f8;

function f8() {
  out8.textContent = '';
  const j = +inp8v2.value;
  let i = +inp8v1.value;
  while (i <= j) {
    out8.innerHTML += i + '_';
    i++;
  }
}

// Task 9
const b9 = document.querySelector('button.b-9');
const out9 = document.querySelector('div.out-9');
const inp9v1 = document.querySelector('input.i-91');
const inp9v2 = document.querySelector('input.i-92');
b9.onclick = f9;

/*
    const it1 = +inp9v1.value;
    const it2 = +inp9v2.value;
    let beginArr = +inp9v2.value;
    let endArr = +inp9v2.value;
    it1 < it2 ? beginArr = it1 : endArr = it1;
*/

function f9() {
  out9.textContent = '';
  let tmp = +inp9v1.value;

  let smaller = +inp9v2.value;
  let larger = +inp9v2.value;

  tmp < smaller ? (smaller = tmp) : (larger = tmp);

  const j = larger;
  let i = smaller;

  while (i <= j) {
    out9.innerHTML += i + '_';
    i++;
  }
}

// Task 10
const b10 = document.querySelector('button.b-10');
const out10 = document.querySelector('div.out-10');
b10.onclick = f10;

function f10() {
  out10.textContent = '';

  const j = 1966;
  let i = 1950;

  while (i <= j) {
    out10.innerHTML += i + '_';
    i += 2;
  }
}

// Task 11
const b11 = document.querySelector('button.b-11');
const out11 = document.querySelector('div.out-11');
const div11 = document.querySelectorAll('div.div-11');
b11.onclick = f11;

function f11() {
  out11.textContent = '';
  let i = 0;
  while (i < div11.length) {
    out11.innerHTML += div11[i].textContent + '_';
    i++;
  }
}

// Task 12
const b12 = document.querySelector('button.b-12');
const out12 = document.querySelector('div.out-12');
const div12 = document.querySelectorAll('div.div-12');
b12.onclick = f12;

function f12() {
  out12.textContent = '';
  let i = 0;
  while (i < div12.length) {
    div12[i].style.background = 'orange';
    i++;
  }
}

// Task 13
const b13 = document.querySelector('button.b-13');
const out13 = document.querySelector('div.out-13');
const inp13 = document.querySelectorAll('input.i-13');
b13.onclick = f13;

function f13() {
  out13.textContent = '';
  let i = 1;
  while (i <= inp13.length) {
    inp13[i - 1].value = i;
    i++;
  }
}

// Task 14
const b14 = document.querySelector('button.b-14');
const out14 = document.querySelector('div.out-14');
const inp14 = document.querySelectorAll('input.i-14');
b14.onclick = f14;

function f14() {
  out14.textContent = '';
  let i = 0;
  while (i < inp14.length) {
    if (inp14[i].checked) {
      out14.textContent = inp14[i].value;
      break;
    }
    i++;
  }
}

// Task 15
const b15 = document.querySelector('button.b-15');
const out15 = document.querySelector('div.out-15');
b15.onclick = f15;

function f15() {
  out15.textContent = '';
  let i = 77;
  let j = 0;
  let count = 0;
  while (i < 100 && count < 3) {
    out15.textContent += i + '_';
    i += 11;
    j++;
    if (j === 3) {
      i = 77;
      j = 0;
      count++;
    }
  }
}
