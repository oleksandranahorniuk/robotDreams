const array = [4, 4, 8, 3, 3, 3, 2, 4, 4];

// 1 task
for (let i = 0;  i <= array.length; i++) {
    console.log(array[i]);
}

// 2 task
for (let i = 0; i < 3; i++) {
    console.log(array[i]);
}

// 3 task
let sum = 0;

for (let i = 0;  i <= array.length; i++) {
  sum += array[i];
  return sum;
}

// 4 task
let sum2 = 0
for (let i = 0;  i <= array.length; i++) {
    if (array[i] != 4) {
        sum2 += array[i];
    }
    return sum2;
}