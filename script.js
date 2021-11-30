const handleClick = document.querySelector("#submit_form");
handleClick.addEventListener("click", translate);

//function to handle submit event when clicking on enter
async function translate() {
  console.log("it got called");
  event.preventDefault();
  const inputvalue = document.querySelector("#userInput").value;

  const text = inputvalue.trim();
  console.log(text);

  var outputDiv = document.querySelector("#textArea");

  await fetch(
    `https://api.funtranslations.com/translate/yoda.json?text=${text}`
  )
    //Promises chaining
    .then((response) => response.json())
    .then((data) => {
      var translatedMessage = data.contents.translated;
      console.log("did you saw translated msg", translatedMessage);
      outputDiv.innerText = translatedMessage;
    })
    .catch(
      alert(
        "api calls exceeded more then 5 in a minute, please try after 1 hour"
      )
    );
}
