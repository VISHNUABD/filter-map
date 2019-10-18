<!DOCTYPE html>
<html>
<body>

<p>Click the button to get the square root of each element in the array.</p>
<p>[4, 2, 16, 25]</p>

<button onclick="myFunction()">Map</button>
<button onclick="myFunction0()">Map1</button>
<button onclick="myFunction1()">Filter</button>
<button onclick="myFunction2()">Filter1</button>

<p id="demo"></p>

<script>
var numbers = [4, 2, 16, 25];

function myFunction() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(n=>n==2?10:n)
}
function myFunction0() { 
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(n=>n==2)
}
function myFunction1() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.filter(n=>n==2?false:true)
}
function myFunction2() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.filter(n=>n==2)//filter(n=>n==2?true:false)
}
</script>

</body>
</html>
