let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let images = [];
let prevday;

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("day")[i].addEventListener('click', setActive,false);
  document.getElementsByClassName("day")[i].id = days[i];
}

document.getElementById("image").innerHTML = "<img src= 'Assets/" + images[0] + "' >"

function setActive(e){

prevday = document.getElementByClassName("active")[0].id;
if(prevday != underfined){
  document.getElementsById(prevday).classList.toggle("active");
}

  console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");

  }else{
    console.log("div clicked");
    e.target.classList.toggle("active");
  }

}
