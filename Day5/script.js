//function display(){
    //alert("hello JS");
    //var x=12
  //  console.log("hello js",x);
//}
//display();
// let x=12.23;
// let y="hello"
// let z=true
// //console.log(typeof z);
// let obj={
//     'name':'Salil',
//     id : 12,
// }
// let arr=[12,2,3,4,5];
// let a;
// let b=null;
// console.log(obj.id);
function validate(){
    let un=document.getElementById('un').value;
    let pass=document.getElementById('pass').value;
    //we can check whether un and pass is fetching the value by using alert
    if(un== "admin" && pass =="admin"){
        document.getElementById("res").innerHTML="Login Success!";
    }
    else{
        document.getElementById("res").innerHTML="Login Failed!";
    }

}