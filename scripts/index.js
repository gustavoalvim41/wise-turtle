const urlAdvice = "https://api.adviceslip.com/advice";

function get(urlAdvice){
  let Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", urlAdvice, false);
  Httpreq.send();
  return Httpreq.responseText;          
}

function advice() {
    let resp = JSON.parse(get(urlAdvice));
    const advice = document.getElementById('advice');
    advice.textContent = '"' + resp.slip.advice + '"';
}

const urlDog = "https://dog.ceo/api/breeds/image/random";

function getImgDog(urlDog){
  let Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", urlDog , false);
  Httpreq.send();
  return Httpreq.responseText;          
}

function imgDog() {
    let response = JSON.parse(getImgDog(urlDog));
    document.getElementById('imgDog').src = response.message;
}

function cite() {
    const cite = ["- Turtle", "- Wise Turtle", "- God Turtle", "- Master Turtle"]
    const number = Math.floor(Math.random() * 4); /* 0 a 3 */
    document.getElementById('citeTurtle').textContent = cite[number];
}

advice()
cite()
imgDog()