let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число або натисніть "Скасувати" для завершення:');

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Жодного числа не було введено.");
}
