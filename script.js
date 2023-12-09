let user = document.getElementById("name");
let score = 0;

function buttonWelcome() {
  document.getElementById("messageWelcome").innerHTML =
    "HOLA " + user.value.toUpperCase();

  document.getElementById("buttonStart").className = "button show";
}

function buttonStart() {
  document.getElementById("welcome").className = "hide";
  document.getElementById("first").className = "first card show";
}

function buttonQuestion(radio, index, answer, word, funct, button) {
  let radioButtons = document.getElementsByName(radio);
  if (radioButtons[index].checked) {
    score++;
    document.getElementById(answer).innerHTML =
      "Felicidades. Es correcto";
  } else {
    document.getElementById(answer).innerHTML =
      "La respuesta es incorrecta. La respuesta correcta es " + word;
  }
  
  document.getElementById(funct).className = "button hide";
  document.getElementById(button).className = "button show";
  
}

function buttonNext(sectionToHide, sectionToshow, fullClassName) {
  document.getElementById(sectionToHide).className = "hide";
  document.getElementById(sectionToshow).className = fullClassName;
  
  document.getElementById("finalScore").innerHTML =
    "¡¡ " + user.value.toUpperCase() + " !! <br/> Tu puntaje final es " + score;

    document.getElementById("buttonRestart").className = "button show";
}

function buttonRestart() {
    score = 0;
    resetUI()
    resetQuestions();
}

function resetUI() {
    document.getElementById("end").className = "end card hide";
    document.getElementById("welcome").className = "welcome card show";
    document.getElementById("buttonStart").className = "button hide";
    document.getElementById("name").value = "";
    document.getElementById("messageWelcome").innerHTML = "";
}


function clean(radioButtons, rightAnswer, buttonQuestion, buttonNext) {
  for (var i = 0; i < 3; i++) {
    radioButtons[i].checked = false;
  }
  document.getElementById(rightAnswer).innerHTML = "";
  document.getElementById(buttonQuestion).className = "button show";
  document.getElementById(buttonNext).className = "button hide";
}

function resetQuestions() {

  clean(document.getElementsByName("question1"), "rightAnswer1", "buttonQuestion1", "buttonNext1");
  clean(document.getElementsByName("question2"), "rightAnswer2", "buttonQuestion2", "buttonNext2");
  clean(document.getElementsByName("question3"), "rightAnswer3", "buttonQuestion3", "buttonNext3");
} 