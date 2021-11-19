console.log('Hello!');
let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic=1+i;
  document.getElementById("image").innerHTML = "<img src= 'Assets/" + pic + "' >";
}
