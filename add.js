function add () {
  
  var a = parseInt(document.getElementById("vara").value);
  var b = parseInt(document.getElementById("varb").value);

  
  console.log(typeof a); 
  console.log(typeof b); 
  var result = a + b;
  
  
  document.getElementById("varResult").value = result;
  return false; 
}