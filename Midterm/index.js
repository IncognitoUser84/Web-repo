
days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
for(i=0; i<document.getElementsByClassName("day").length; i++){
  console.log(days[i]);
  document.getElementsByClassName("day")[i].innerHTML = days[i];
  document.getElementsByClassName("day")[i].addEventListener('click', setActive,false);
  document.getElementsByClassName("day")[i].id = days[i];
}

function setActive(e){
  console.log('clicked');
  e.target.classList.toggle('active');
  console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");

  }else{
    console.log("div clicked");
    e.target.classList.toggle("active");
  }

}
