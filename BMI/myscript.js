function changetoRead() {

  let x = Math.floor(Math.random() * 10);
  if (x % 2 == 0) {
    document.getElementById("my_top_h_1").style.color = "blue";
  } else {
    document.getElementById("my_top_h_1").style.color = "orange";
  }
}

function calculator() {
  let x = parseInt(document.getElementById("calculator_x").value);
  let y = parseInt(document.getElementById("calculator_y").value);

  result = x / y;

  document.getElementById("calculator_result").innerHTML = result;
}

function clear_result() {
  document.getElementById("calculator_result").innerHTML = "";
}

function repeat_change_text() {
  setInterval(() => {
    let track = document.getElementById("my_top_h_3").innerHTML;

    if (track == "Lien xinh") {
      document.getElementById("my_top_h_3").innerHTML = "Hi hi";
    } else {
      document.getElementById("my_top_h_3").innerHTML = "Lien xinh"
    }
    
    
    document.getElementById("my_top_h_3").innerHTML = "Lien xinh";
    
  }, 2000)
}