

var colors = ["red", "blue", "green", "yellow", "white"];
  var index = 0;

  function changeColor() {
    document.getElementById("h2o-hero").style.color = colors[index];
    index = (index + 1) % colors.length;
    setTimeout(changeColor, 1500);
  }

  changeColor(); 


 