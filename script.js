function appendChar(char) {
  document.getElementById("display").value += char;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteChar() {
  var exp = document.getElementById("display").value;
  document.getElementById("display").value = exp.substring(0, exp.length - 1);
}

function calculate() {
  var exp= document.getElementById("display").value;
  document.getElementById("display").value = eval(exp);
}

function toggleSign() {
  var exp = document.getElementById("display").value;
  if (exp.charAt(0) == "-") {
    document.getElementById("display").value = exp.substring(1);
  } else {
    document.getElementById("display").value = "-" + exp;
  }
}