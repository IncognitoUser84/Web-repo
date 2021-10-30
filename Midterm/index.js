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

prevday = document.getElementByClassName("active")[0].id;
if(prevday != undefined){
  document.getElementsById(prevday).classList.toggle("active");
}


  if(e.target.tagName == "H2"){

    e.target.parentNode.classList.toggle("active");

  }else{

    e.target.classList.toggle("active");
  }

  day = document.getElementByClassName('active')[0].id;
  document.getElementById('image').innerHTML = "<img src='assets/" + day ".jpg' >";

}
