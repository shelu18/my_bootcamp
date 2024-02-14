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
/* let a =100;
{
    let a=10;
    console.log(a);
}
console.log(a);  */
//output is 10 100
//this is because let and const are block scoped and they are not hoisted
//so the inner a is a different variable from the outer a
// a of outer scope stored in another memory location that is not accessible to the inner scope that memory is called script scope 
//siliar concept with const

//shadowing in function
/*const c=100;
function x(){
    const c=10;
    console.log(c);

}
x();
console.log(c);*/


//illegal shadowing
/*let a=100;
{
    var a=20;
    console.log(a);
}*/
//output is error
//but vice versa is possible
 var a=100;
{
    let a=20;
    console.log(a);
}
console.log(a);
