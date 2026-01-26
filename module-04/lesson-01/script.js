// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

const b1 = document.querySelector('button.b-1');
const out1 = document.querySelector('div.out-1');
b1.onclick = fn1;
function fn1() {
  out1.innerHTML = obj1.two;
}

// Task 2
const obj2 = {
  one: 'hello',
  two: 'mahai',
  five: 'hi',
};

const b2 = document.querySelector('button.b-2');
const out2 = document.querySelector('div.out-2');
b2.onclick = fn2;
function fn2() {
  out2.innerHTML = obj2['five'];
}

// Task 3
const obj3 = {
  one: 'hello',
  two: 'mahai',
  five: 'hi',
  test: 21,
  odd: 'hi',
  mix: 'mix',
};

const b3 = document.querySelector('button.b-3');
const out3 = document.querySelector('div.out-3');
b3.onclick = fn3;
function fn3() {
  for (const key in obj3) {
    obj3[key] === 'hi' ? (out3.innerHTML += obj3[key] + ' ') : out3.innerHTML;
  }
}

// Task 4
const obj4 = {
  one: 'hello',
  two: 'mahai',
  five: 'hi',
  test: 21,
  odd: 'hi',
  mix: 'mix',
};

const b4 = document.querySelector('button.b-4');
const out4 = document.querySelector('div.out-4');
b4.onclick = fn4;
function fn4() {
  let counter = 0;
  let str = '';
  for (const key in obj4) {
    //setTimeout(() => {
    str += `${key} ${obj3[key]} <br/>`;
    // }, counter * 1000);
    // counter++;
  }
  out4.innerHTML = str;
}

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const b5 = document.querySelector('button.b-5');
const out5 = document.querySelector('div.out-5');
b5.onclick = function () {
  fn5(obj5, out5);
};

function fn5(object, selector) {
  let str = '';
  for (const key in object) {
    str += `${key} ${object[key]} <br/>`;
  }
  selector.innerHTML = str;
}

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

const b6 = document.querySelector('button.b-6');
const out6 = document.querySelector('div.out-6');
const inp6v1 = document.querySelector('input.i-61');
const inp6v2 = document.querySelector('input.i-62');
b6.onclick = function () {
  fn6(obj6, out6);
};

function fn6(object, selector) {
  object[inp6v1.value] = inp6v2.value;
  inp6v1.value = '';
  inp6v2.value = '';
  fn5(object, selector);
}

// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

const b7 = document.querySelector('button.b-7');
const out7 = document.querySelector('div.out-7');
const inp7 = document.querySelector('input.i-7');
b7.onclick = fn7;

function fn7() {
  out7.innerHTML = +Object.keys(obj7).includes(inp7.value);
}

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

const b8 = document.querySelector('button.b-8');
const out8 = document.querySelector('div.out-8');
const inp8 = document.querySelector('input.i-8');
b8.onclick = fn8;

function fn8() {
  const key = inp8.value;
  Object.keys(obj8).includes(key)
    ? (out8.innerHTML = obj8[key])
    : (out8.innerHTML = 0);
}

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const b9 = document.querySelector('button.b-9');
const out9 = document.querySelector('div.out-9');
const inp9 = document.querySelector('input.i-9');
b9.onclick = fn9;

function fn9() {
  const variable = inp9.value;
  let str = '';
  for (const key of Object.keys(obj9)) {
    if (obj9[key] === +variable) {
      str += key + ' ';
    }
  }
  out9.innerHTML = str;
}

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

// Task 13
const obj13 = {
  prim: 'hello',
  one: 4,
  testt: 'vodolii',
  mango: '6',
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: 'Ivan',
    age: 27,
  },
  iiss7j: {
    name: 'Petr',
    age: 26,
  },
  s3s8sj: {
    name: 'Serg',
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: 'Mango',
    age: 37,
  },
  iiss7j: {
    name: 'Poly',
    age: 26,
  },
  s3s8sj: {
    name: 'Ajax',
    age: 47,
  },
};

const b17 = document.querySelector('button.b-17');
const out17 = document.querySelector('div.out-17');
b17.onclick = fn17;

function fn17() {
  let str = '';
  for (const key in obj17) {
    for (const innerKey in obj17[key]) {
      // innerKey;
      // console.log('🚀 ~ fn17 ~ innerKey:', obj17[key][innerKey]);
      if (obj17[key][innerKey] > 30) {
        console.log(obj17[key].name);
        str += `${obj17[key].name} `;
      }
    }
  }
  out17.innerHTML = str;
}

// Task 18
const obj18 = {
  red: ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
  blue: ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
  green: ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi'],
};

const b18 = document.querySelector('button.b-18');
const out18 = document.querySelector('div.out-18');
const inp18 = document.querySelector('input.i-18');
b18.onclick = fn18;

function fn18() {
  const station = inp18.value;
  out18.innerHTML = obj18[station]?.join(' ') || '';
}

// Task 19
const obj19 = {
  red: ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
  blue: ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
  green: ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi'],
};

const b19 = document.querySelector('button.b-19');
const out19 = document.querySelector('div.out-19');
const inp19 = document.querySelector('input.i-19');
b19.onclick = fn19;

function fn19() {
  const station = inp19.value.toLowerCase();
  for (const key in obj19) {
    console.log('🚀 ~ fn19 ~ obj19:', obj19[key]);
    const line = obj19[key].map(stationName => stationName.toLowerCase());
    if (line.includes(station)) {
      out19.innerHTML = `${key}`;
      return 0;
    }
  }
  out19.innerHTML = '';
}

// Task 20
const obj20 = {
  red: [
    ['Akademmistechko', 1],
    ['Nyvky', 0],
    ['Universytet', 3],
    ['Lisova', 1],
  ],
  blue: [
    ['Minska', 1],
    ['Obolon', 0],
    ['Pochaina', 2],
    ['Holosiivska', 0],
  ],
  green: [
    ['Syrets', 1],
    ['Zoloti Vorota', 2],
    ['Klovska', 0],
    ['Vidubichi', 1],
  ],
};

const b20 = document.querySelector('button.b-20');
const out20 = document.querySelector('div.out-20');
b20.onclick = fn20;

function fn20() {
  let str = '';
  for (const key in obj20) {
    for (const item of obj20[key]) {
      if (item[1] === 2) {
        str += item[0] + ' ';
      }
    }
  }
  out20.innerHTML = str;
}

// for (const obj in obj19) {
//     const normalizeInput =
//       i19.value[0].toUpperCase() + i19.value.slice(1).toLowerCase();
//     if (obj19[obj].includes(normalizeInput)) {
//       out19.textContent = obj;
//       return;
//     }
//     out19.textContent = "";
//   }
