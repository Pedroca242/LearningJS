function novaCoisa(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);  
  if (inputValue === '') {
      alert("Digite algo");
    } else {
      document.getElementById("myUl").appendChild(li);
    }

  var button = document.createElement("button");
  var txt = document.createTextNode("X")
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  var close = document.getElementsByClassName("close");
  var j;
  
  for(var i = 0; i < close.length; i++){
    close[i].onclick =function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
