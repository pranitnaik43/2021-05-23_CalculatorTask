function createMyElement(tag, text="", attr="", attr_val="") {
  var element = document.createElement(tag);
  if(text!==""){
    element.innerText = text;
  }
  if(attr!==""){
    element.setAttribute(attr, attr_val);
  }
  return element;
}

function createCalculator() {
  var calculator = createMyElement('div', '', 'class', 'bg-secondary mx-auto mt-5');
  calculator.classList.add("border", "rounded");
  calculator.style.width = "245px";
  calculator.style.height = "365px";

  var myScreen = createMyElement('div', '');
  myScreen.classList.add('text-right', 'bg-white', 'border', 'rounded', 'p-1', 'm-2', 'my-4');
  myScreen.style.height = "60px";
  var myInput = createMyElement('div', '', 'id', 'myInput');
  myInput.classList.add("h-50");
  var myOutput = createMyElement('div', '', 'id', 'myOutput');
  myInput.classList.add("h-50");
  myScreen.append(myInput, myOutput);
  var calcBody = createButtons();

  calculator.append(myScreen, calcBody);
  container.append(calculator);
  document.body.append(container);
}

function handleClick(e) {
  value = e.target.innerText;
  console.log(value);
  var myInput = document.querySelector('#myInput');
  var myOutput = document.querySelector('#myOutput');
  if(value.toLowerCase()==='c'){
    expression="";
    myInput.innerText="";
    myOutput.innerText="";
  }
  else if(value==='='){
    try{
      if(expression===""){
        myOutput.innerText = 0;
      }
      else{
        var result = eval(expression);
        console.log('ans: '+result);
        myOutput.innerText = result;
      }
    }
    catch(e){
      myOutput.innerText = "invalid";
    }
  }
  else{
    expression+=value;
    myInput.innerText=expression;
  }
  console.log("expression: "+expression);
}

function createButtons() {
  var calcBody = createMyElement('div', '', 'class', 'pt-1');
  Object.keys(buttonAttr).forEach((key) => {
    var button = createMyElement('button', buttonAttr[key].value);
    button.classList.add("btn", buttonAttr[key].class, 'border', 'rounded', 'px-3','py-2', 'm-2');
    button.addEventListener('click', (e) => { handleClick(e); });
    button.style.height = "44px";
    button.style.width = "44px";
    calcBody.append(button);
  });
  return calcBody;
}

var container = createMyElement('div', '', 'class', 'container');
document.body.append(container);
// document.body.classList.add("bg-light");
var expression = "";

var buttonAttr = {
  '1': {value: '7', class: 'btn-dark'}, '2': {value: '8', class: 'btn-dark'}, '3': {value: '9', class: 'btn-dark'}, '4': {value: '+', class: 'btn-warning'}, '5': {value: '4', class: 'btn-dark'}, '6': {value: '5', class: 'btn-dark'}, '7': {value: '6', class: 'btn-dark'}, '8': {value: '-', class: 'btn-warning'}, '9': {value: '1', class: 'btn-dark'}, '10': {value: '2', class: 'btn-dark'}, '11': {value: '3', class: 'btn-dark'}, '12': {value: '*', class: 'btn-warning'}, '13': {value: 'C', class: 'btn-danger'}, '14': {value: '0', class: 'btn-dark'}, '15': {value: '=', class: 'btn-success'}, '16':{value: '/', class: 'btn-warning'}
}
createCalculator();
