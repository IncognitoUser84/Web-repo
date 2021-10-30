let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let images = ["Mon.jpg","Tue.jpg","Wed.jpg","Thu.jpg","Fri.jpg","Sat.jpg","Sun.jpg"];
let prevday;

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("day")[i].addEventListener('click', setActive,false);
  document.getElementsByClassName("day")[i].id = days[i];
}

document.getElementById('Mon').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src= 'Assets/" + images[0] + "' >";

function setActive(e){

prevday = document.getElementsByClassName("active")[0].id;
if(prevday != undefined){
  document.getElementById(prevday).classList.toggle("active");
  //document.getElementById(prevday + "menu").style.display = "none";
}


  if(e.target.tagName == "H2"){

    e.target.parentNode.classList.toggle("active");

  }else{

    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log(day);
  document.getElementById('image').innerHTML = "<img src='Assets/" + day + ".jpg' >";
  document.getElementById(day +"menu").style.display = "block";
}
