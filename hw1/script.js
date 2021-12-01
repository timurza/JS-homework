//1 задача

let x = 1,
      y = 2;
console.log(x,y);
[x, y] = [y, x];
console.log( x,y); 

//2 задача

let arr = [5,10,2,12,3,16,21,25,28,32];
let result = (arr[0]+arr[4]+arr[9])
 console.log(result);

//3 задача

function func() {
    let x = 1,
        y = 2;
    [x, y] = [y, x];
    let arr = [5, 10, 2, 12, 3, 16, 21, 25, 28, 32];
    let result = arr[0] + arr[4] + arr[9];
    return {x, y, result};
}
console.log(func());