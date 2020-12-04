
var btnTranslate = document.querySelector('#btn-translate');

var txtInput = document.querySelector('#txt-input');

var outputDiv = document.querySelector('#output');


var serverurl = "https://api.funtranslations.com/translate/minion.json";


// 


function getTranslationUrl(input)  {

return serverurl + '?' + 'text=' + input


}


function errorHandler(error) {

    console.log('error', error);
    alert('something with server ! try again some time')
}


function clickHandler() {


// console.log ('click')
// console.log ('txtinput',txtInput.value)
  
// outputDiv.innerText= "shshshshsh" + txtInput.value;


var inputText = txtInput.value

fetch (getTranslationUrl(inputText)) 

  .then(response => response.json())
  .then(json => { 
      
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;

  })
.catch(errorHandler)

};

btnTranslate.addEventListener('click',clickHandler)