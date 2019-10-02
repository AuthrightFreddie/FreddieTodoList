// AUTO COMPLETE
var taskmemory = [];
var autoComplete = (value) => {
  document.getElementById('datalist').innerHTML = '';
  l = value.length;
  for (let i=0; i<taskmemory.length; i++) {
    if(((taskmemory[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) { 
      const node = document.createElement("option"); 
      const val = document.createTextNode(taskmemory[i]); 
      node.appendChild(val); 
      document.getElementById("datalist").appendChild(node); 
    } 
  }
}