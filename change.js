document.getElementById("change").addEventListener("click", Change);


function Change(){
  var bord_red = document.getElementById("bord_red").value;
  var bord_blue = document.getElementById("bord_blue").value;
  var bord_green = document.getElementById("bord_green").value;
  var bord_width = "" + document.getElementById("bord_width").value + "px";
  var bord_color = "#"+bord_red+bord_blue+bord_green;
  console.log(bord_color);
  document.getElementById("para").style.borderWidth = bord_width;
  document.getElementById("para").style.borderColor = ""+bord_color;

  var back_red = document.getElementById("back_red").value;
  var back_blue = document.getElementById("back_blue").value;
  var back_green = document.getElementById("back_green").value;
  var back_color = "#" + bord_red + bord_blue + bord_green;
  document.getElementById("para").style.backgroundColor = ""+ bord_color;


}
