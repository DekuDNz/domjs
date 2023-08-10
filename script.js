var numberA = callElementtoID("a");
var numberB = callElementtoID("b");
var numberC = callElementtoID("c");
var btnClick = callElementtoID("btn");

function callElementtoID(id) {
  var domElement = document.getElementById(id);
  return domElement;
}

btnClick.addEventListener("click", showGiaTri);

function showGiaTri() {
  var giaTriA = Number(numberA.value);
  var giaTriB = Number(numberB.value);
  var giaTriC = Number(numberC.value);
  var sum = giaTriA + giaTriB + giaTriC;
  console.log(sum);
  return sum;
}
