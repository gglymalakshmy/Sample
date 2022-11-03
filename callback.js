const add=(a,b,callback)=>{
    let sum=a+b;
    console.log(sum);
    callback(sum);
}
const sub=(added)=>{
    let res=added-10;
    console.log(res);

}
add(55,5,sub);






// const add=(a,b)=>{
//     return a+b;
// }
// console.log(add(5,7));