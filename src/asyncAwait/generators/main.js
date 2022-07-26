// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   var g = gen(); // "Generator { }"
//     console.log(g.next().value)


function* iterate(data){
    for (let i of data){
        yield i;
    }
}

const data = [1,2,'Hala']

const it = iterate(data)

console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
