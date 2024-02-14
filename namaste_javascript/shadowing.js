//shadow in js 
//shadowing is a concept in js where a variable is declared in a inner scope with the same name as a variable in the outer scope
//the inner variable shadows the outer variable

/*var a =100;
{
    var a=10;
    console.log(a);
}
console.log(a);*/


//but this not occours in the case of let and const
let a =100;
{
    let a=10;
    console.log(a);
}
console.log(a);