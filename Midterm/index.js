
days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
for(i=0; i<document.getElementsByClassName("day").length; i++){
  console.log(days[i]);
  document.getElementsByClassName("day")[i].innerHTML = days[i];

}
