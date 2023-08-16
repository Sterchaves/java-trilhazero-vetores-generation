const arr = [2,5,1,3,4,9,7,8,10,6];
let impar = [];
let par = [];
let soma = 0;

for(number of arr){
    if(number%2===0){
        par.push(number);
    }else{
        impar.push(number);
    }
}

for(let i=0; i<arr.length;i++){
    soma+=arr[i];
}

let media = soma/arr.length;

console.log(media)


// este foi tranquilo de fazer!