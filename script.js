const handleClick = document.querySelector("#submit_form");

function errorHandler(error) {
  console.log("an error occured", error);
  alert("api calls exceeded, please try after 1 hour ");
}

//function to handle submit event when clicking on enter
function translate() {
  const inputvalue = document.querySelector("#userInput").value;

  const text = inputvalue.trim();
  console.log(text);

  var outputDiv = document.querySelector("#textArea");

  fetch(`https://api.funtranslations.com/translate/yoda.json?text=${text}`)
    //Promises chaining
    .then((response) => response.json())
    .then((data) => {
      var translatedMessage = data.contents.translated;
      outputDiv.innerText = translatedMessage;
    })
    .catch(errorHandler);
}

handleClick.addEventListener("click", translate);
