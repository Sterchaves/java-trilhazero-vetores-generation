const arr = [2,5,1,3,4,9,7,8,10,6];
const newArr = [];

while (arr.length > 0) {
  let max = -Infinity;
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      n = i;
    }
  }

  newArr.push(max);
  arr.splice(n, 1);
}

console.log(newArr);


// consegui fazer com a ajuda do chatgpt, pois não tava conseguindo pensar que número comparar o elemento da array sem ser um número em especifico. Então, descobri o infinity!

// Esse foi mais difícil de fazer.
