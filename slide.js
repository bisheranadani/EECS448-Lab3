document.getElementById("next").addEventListener("click", slidenext);
document.getElementById("prev").addEventListener("click", slideprev);

var slider = 0;
var pics = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

function slidenext(){
  slider = (slider+1)%5;
  document.getElementById('slide').src = pics[slider];
  console.log(slider);
  var temp = slider+1;
  document.getElementById('caption').innerHTML = "Image " + temp;
}

function slideprev(){
  if (slider==0){
    slider = 4;
  }
  else{
    slider = Math.abs((slider-1)%5);

  }
  document.getElementById('slide').src = pics[slider];
  var temp = slider+1;
  document.getElementById('caption').innerHTML = "Image " + temp;
  console.log(slider);
}

console.log(slider);
