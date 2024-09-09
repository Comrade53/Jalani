console.log("hello");

function fun1() {
  document.querySelector(".box").setAttribute("style", "display: none");
  document.querySelector(".box1").setAttribute("style", "display: block");
}

document.getElementById("next").addEventListener("click", () => {
  fun1();
});

function fun2() {
  document.querySelector(".box1").setAttribute("style", "display: none");
  document.querySelector(".box2").setAttribute("style", "display: block");
}

document.getElementById("forgot").addEventListener("click", () => {
  fun2();
});




//Pass Togle Visiblity

const showPass = document.querySelector("#hid");
const passField = document.querySelector("#pass");

showPass.addEventListener("click", function (){
  this.classList.toggle("fa-eye");
  const type = passField.getAttribute("type") === "password" ? "text" : "password";
  passField.setAttribute("type", type);
});



//confirm


const entpass = document.querySelector("#pass");
const conf = document.querySelector("#cpass");
const msg = document.querySelector("#spn");

const bt = document.querySelector("#btn");

bt.addEventListener("click", function (){
  if (entpass.value != conf.value){
    msg.setAttribute("style", "display: block");
  }else{
    msg.setAttribute("style", "display: none");

  }
});