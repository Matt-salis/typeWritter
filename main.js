window.addEventListener('keydown', (event) => {
  var key = event.key.toLowerCase();
  console.log(key)

  

  var string = document.getElementById('textBox').innerHTML;



  if (key === "backspace") {
    document.getElementById('backspace').classList.toggle("light");
    string = string.substring(0, string.length - 1);
  }
  else if (key === " "){
    string = string += ' '; 
    document.getElementById(' ').classList.toggle("light");
  }
  
  else {
    var l = document.getElementById(key);
    if (l === null) {
      l = " ";
      return l;
    }

    l.classList.toggle("light");

    document.getElementById('letter').innerHTML = key;
    string = string += key;
    console.log(string);
  }

  document.getElementById('textBox').innerHTML = string;

  key = "";
});

//////////////////////////////////////////////


window.addEventListener('keyup', (event) => {
  var key = event.key.toLowerCase();

  if (key === 'backspace') {
    document.getElementById('backspace').classList.remove("light");
  } else {

    var l = document.getElementById(key);
    if (l === null) {
      l = "";
      return l;
    }
    l.classList.remove("light");

  } 

});