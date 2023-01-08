"use strict";

let answer = prompt("Введите число для определения права доступа (0-7):");

switch (answer) {
  case "0":
    console.log("Права доступа: ---");
    break;
  case "1":
    console.log("Права доступа: --x");
    break;
  case "2":
    console.log("Права доступа: -w-");
    break;
  case "3":
    console.log("Права доступа: -wx");
    break;
  case "4":
    console.log("Права доступа: r--");
    break;
  case "5":
    console.log("Права доступа: r-x");
    break;
  case "6":
    console.log("Права доступа: rw-");
    break;
  case "7":
    console.log("Права доступа: rwx");
    break;
  default:
    console.log("Не корректное значение. Значения кода доступа от 0 до 7.");
}

// Другой способ, мне кажется интереснее, но это позже...
const ACCESSCODES = {
  0: "---",
  1: "--x",
  2: "-w-",
  3: "-wx",
  4: "r--",
  5: "r-x",
  6: "rw-",
  7: "rwx",
};

console.log(
  ACCESSCODES[answer]
    ? "Права доступа: " + ACCESSCODES[answer]
    : "Не корректное значение. Значения кода доступа от 0 до 7."
);
