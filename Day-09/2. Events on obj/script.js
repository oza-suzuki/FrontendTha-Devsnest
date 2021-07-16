document.getElementById("myText1").addEventListener("select", myFunction1);

function myFunction1() {
  document.getElementById("demo1").innerHTML = "You selected some text!";
}
/*      */

document.getElementById("fname").addEventListener("focus", myFunction2);

function myFunction2() {
  document.getElementById("fname").style.backgroundColor = "orange";
}
/*      */


/*      */
document.getElementById("myInput3").addEventListener("copy", myFunction4);

function myFunction4() {
  alert("You copied text!");
}