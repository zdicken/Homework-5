var arr = ["red", "green", "blue"];
var objects = {};

for(var i = 0; i < arr.length; i++) {
  objects[i] = new box(arr[i]);
}

function box(color) {
  var that = this;
  this.number = 0;
  var div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "200px";
  div.style.borderRadius = "10px";
  div.style.backgroundColor = color;
  this.p = document.createElement("p");
  this.p.style.fontSize = "18px";
  this.p.style.textAlign = "center";
  this.p.style.color = "white";
  this.p.style.margin = 0;
  this.p.style.paddingTop = "40px";
  this.p.innerHTML = this.number;
  div.appendChild(this.p);
  div.addEventListener("click", function() {
    that.goUp();
    console.log("A");
  });
  document.body.appendChild(div);
}

box.prototype.goUp = function() {
  this.number += 1;
  this.p.innerHTML = this.number;
  console.log(this.number);
}