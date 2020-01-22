document.getElementById('backspace').addEventListener('click',function(){
  alert(9);
});

let firstNo = [];
let AllnumbersArr = [];
let opArray = [];
let trigArray = [];

 AllnumbersArr = [first,second];

 


function createOp(){

  let targetOp = event.target.id;
  showNumber(document.getElementById(targetOp).value);
      opArray.push(document.getElementById(targetOp).value);

     

}

function createFirstno(){
  let target  = (event.target).id;

  showNumber(document.getElementById(target).value);
 
    firstNo.push(document.getElementById(target).value);

   realFirstNo = parseFloat(firstNo.join(""));
  
  

}

function createAllnumbersArr(){
  createOp();
   
   firstNo = [];
   AllnumbersArr.push(realFirstNo);
   

}

function showNumber(key){
  calculator.display.value += key;

}

function add(){
  
  AllnumbersArr[i]+ AllnumbersArr[i-1]
}

function evaluateAll(){
  firstNo = [];
  AllnumbersArr.push(realFirstNo);

  let sum  = 0;
  let i=0;
  for(i=0;i<opArray.length;i++){
    if(opArray[i]=="+"){
         AllnumbersArr[i+1] += AllnumbersArr[i];
         sum = AllnumbersArr[i+1];
    }else if(opArray[i]=="x"){
      AllnumbersArr[i+1] *= AllnumbersArr[i];
      sum = AllnumbersArr[i+1];
    }
    else if(opArray[i]=="-"){
      AllnumbersArr[i] -= AllnumbersArr[i+1];
      sum = AllnumbersArr[i];
    }else if(opArray[i]=="/"){
      AllnumbersArr[i] /= AllnumbersArr[i+1];
      sum = AllnumbersArr[i];
    }
  
  }
  
document.getElementById('display').value = sum;
}

  
function resetDisplay(){

  calculator.display.value = 0;
  
}

//SECOND DIV

function higherFunctions(){

  targetTrig = event.target.id;

trigArray.push(document.getElementById(targetTrig).value);

showNumber(document.getElementById(targetTrig).value);



}

function evaluateTrig(){
  firstNo = [];
  AllnumbersArr.push(realFirstNo);
  let angle = AllnumbersArr.pop();
  if(trigArray[0] == "sin"){
    
    trigAns = Math.sin(angle);
  

  
}else if(trigArray[0] == "cos"){
    
  trigAns = Math.cos(angle);



}else if(trigArray[0] == "tan"){
    
  trigAns = Math.tan(angle);

}else if(trigArray[0] == "log"){
    
  trigAns = Math.log(angle);

}else if(trigArray[0] == "ln"){
    
  trigAns = Math.ln(angle);
}

alert(trigAns);
}
