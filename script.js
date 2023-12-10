let user = document.getElementById("name");
let score = 0;

function buttonWelcome() {
  document.getElementById("messageWelcome").innerHTML =
    "HOLA " + user.value.toUpperCase() + "<br/>¿Qué jugaremos hoy?";
  document.getElementById("welcome").className = "hide";
  document.getElementById("categories").className = "categories card show";
}

function buttonAnimals() {
  document.getElementById("categories").className = "hide";
  document.getElementById("first").className = "first card show";
}

function buttonPlants() {
  document.getElementById("categories").className = "hide";
  document.getElementById("firstPlant").className = "first plant card show";
}

/*
function showCategories(categoria,sectionToshow,fullClassName){
    document.getElementById("categories").className = "hide";
    document.getElementById(sectionToshow).className = fullClassName;
}

function buttonCategories() {
  document.getElementById("welcome").className = "hide";
  document.getElementById("categories").className = "categories card show";
}*/

/*function buttonStart() {
  document.getElementById("categories").className = "hide";
  document.getElementById("first").className = "first card show";
}*/

function buttonQuestion(radio, index, answer, word, funct, button, silhouette, plant) {
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
  
 document.getElementById(silhouette).className = "hide";
  document.getElementById(plant).className = "show";
  
}

function buttonNext(sectionToHide, sectionToShow, fullClassName) {
  document.getElementById(sectionToHide).className = "hide";
  document.getElementById(sectionToShow).className = fullClassName;
  
  document.getElementById("finalScoreAnimals").innerHTML = "¡¡ " + user.value.toUpperCase() + " !! <br/> Tu puntaje final es " + score;
  document.getElementById("buttonRestartAnimals").className = "button show";
  document.getElementById("finalScorePlants").innerHTML = "¡¡ " + user.value.toUpperCase() + " !! <br/> Tu puntaje final es " + score;
  document.getElementById("buttonRestartPlants").className = "button show";
}









function buttonRestartAnimals() {
    score = 0;
    resetUIAnimals()
    resetQuestionsAnimals();
}

function resetUIAnimals() {
    document.getElementById("endAnimals").className = "end animals card hide";
    document.getElementById("welcome").className = "welcome card show";
    document.getElementById("buttonStart").className = "button hide";
    document.getElementById("name").value = "";
    document.getElementById("messageWelcome").innerHTML = "";
}


function cleanAnimals(radioButtons, rightAnswer, buttonQuestion, buttonNext) {
  for (var i = 0; i < 3; i++) {
    radioButtons[i].checked = false;
  }
  console.log(radioButtons);
  document.getElementById(rightAnswer).innerHTML = "";
  document.getElementById(buttonQuestion).className = "button show";
  document.getElementById(buttonNext).className = "button hide";
}

function resetQuestionsAnimals() {
  
  //animales
  cleanAnimals(document.getElementsByName("question1"), "rightAnswer1", "buttonQuestion1", "buttonNext1");
  cleanAnimals(document.getElementsByName("question2"), "rightAnswer2", "buttonQuestion2", "buttonNext2");
  cleanAnimals(document.getElementsByName("question3"), "rightAnswer3", "buttonQuestion3", "buttonNext3");
}





function buttonRestartPlants() {
    score = 0;
    resetUIPlants()
    resetQuestionsPlants();
}

function resetUIPlants() {
    document.getElementById("endPlants").className = "end plants card hide";
    document.getElementById("welcome").className = "welcome card show";
    document.getElementById("buttonStart").className = "button hide";
    document.getElementById("name").value = "";
    document.getElementById("messageWelcome").innerHTML = "";
}


function cleanPlants(radioButtons, rightAnswer, buttonQuestion, buttonNext, silhouette, plant) {
  for (var i = 0; i < 3; i++) {
    radioButtons[i].checked = false;
  }
  console.log(radioButtons);
  document.getElementById(rightAnswer).innerHTML = "";
  document.getElementById(buttonQuestion).className = "button show";
  document.getElementById(buttonNext).className = "button hide";
  document.getElementById(silhouette).className = "show";
  document.getElementById(plant).className = "hide";
}

function resetQuestionsPlants() {
  //plantas
  cleanPlants(document.getElementsByName("plantQuestion1"), "rightPlantAnswer1", "buttonPlantQuestion1", "buttonNextPlant1", "silhouette1", "plantImage1");
  cleanPlants(document.getElementsByName("plantQuestion2"), "rightPlantAnswer2", "buttonPlantQuestion2", "buttonNextPlant2", "silhouette2", "plantImage2");
  cleanPlants(document.getElementsByName("plantQuestion3"), "rightPlantAnswer3", "buttonPlantQuestion3", "buttonNext3Plant3", "silhouette3", "plantImage3");
}  
