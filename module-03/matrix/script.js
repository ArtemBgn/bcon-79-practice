// Task 1
const b1 = document.querySelector("button.b-1");
const out1 = document.querySelector("div.out-1");
b1.onclick = f1;

function f1() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        out1.textContent += "*";
    }
    out1.textContent += "_";
  }
}

// Task 2
const b2 = document.querySelector("button.b-2");
const out2 = document.querySelector("div.out-2");
b2.onclick = f2;

function f2() {
  for (let i = 0; i < 3; i++) {
    out2.innerHTML += i + 1 + "<br/>";
    for (let j = 0; j < 3; j++) {
        out2.innerHTML += "*_";
    }
    out2.innerHTML += "<br/>";
  }
}

// Task 3
const b3 = document.querySelector("button.b-3");
const out3 = document.querySelector("div.out-3");
b3.onclick = f3;

function f3() {
  for (let i = 0; i < 4; i++) {
    // out3.innerHTML += i + 1 + "<br/>";
    for (let j = 0; j < 3; j++) {
        out3.innerHTML += "*_";
    }
    out3.innerHTML += "<br/>";
  }
}

// Task 4
const b4 = document.querySelector("button.b-4");
const out4 = document.querySelector("div.out-4");
b4.onclick = f4;

function f4() {
  for (let i = 0; i < 3; i++) {
    out4.innerHTML += i + 1 + "_ ";
    for (let j = 0; j < 5; j++) {
        out4.innerHTML += j + 1 + "*";
    }
    out4.innerHTML += " ";
  }
}

// Task 5
const b5 = document.querySelector("button.b-5");
const out5 = document.querySelector("div.out-5");
b5.onclick = f5;

function f5() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        out5.innerHTML += j % 2 != 0 ? 0 : 1;
    }
    out5.innerHTML += "<br/>";
  }
}

// Task 6
const b6 = document.querySelector("button.b-6");
const out6 = document.querySelector("div.out-6");
b6.onclick = f6;

function f6() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        if (j === 2 || j === 5) {
            out6.innerHTML += "x";
        } else {
            out6.innerHTML += j % 2 != 0 ? 0 : 1;
        }
    }
    out6.innerHTML += "<br/>";
  }
}

// Task 7
const b7 = document.querySelector("button.b-7");
const out7 = document.querySelector("div.out-7");
b7.onclick = f7;

function f7() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        out7.innerHTML += "*";
        if (j === i) {
            break;
        }
    }
    out7.innerHTML += "<br/>";
  }
}

// Task 8
const b8 = document.querySelector("button.b-8");
const out8 = document.querySelector("div.out-8");
b8.onclick = f8;

function f8() {
  for (let i = 5; i > 0; i--) {
    for (let j = 1; j < 6; j++) {
        out8.innerHTML += "*";
        if (j === i) {
            break;
        }
    }
    out8.innerHTML += "<br/>";
  }
}

// Task 9
const b9 = document.querySelector("button.b-9");
const out9 = document.querySelector("div.out-9");
b9.onclick = f9;

function f9() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        out9.innerHTML += j + 1 + "_";
        if (j === i) {
            break;
        }
    }
    out9.innerHTML += "<br/>";
  }
}

// Task 10
const b10 = document.querySelector("button.b-10");
const out10 = document.querySelector("div.out-10");
b10.onclick = f10;

function f10() {
    let j = 1;
    let q = 11;
  for (let i = 0; i < 5; i++) {    
    for (j; j < q; j++) {
        out10.innerHTML += (j < 10 ? "0" : "") + j + "_";
    }
    q += 10;
    out10.innerHTML += "<br/>";
  }
}
