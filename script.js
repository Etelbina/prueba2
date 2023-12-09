let puntaje = 0;

function botonRespuesta() {
  let radioButtons = document.getElementsByName("pregunta1");
  if (radioButtons[1].checked) {
    puntaje++;
    document.getElementById("respuestacorrecta1").innerHTML =
      "Felicidades. Es correcto";
  } else {
    document.getElementById("respuestacorrecta1").innerHTML =
      "La respuesta es incorrecta. La respuesta correcta es Murciélago";
  }
}

function botonRespuesta2() {
  let radioButtons = document.getElementsByName("pregunta2");
  if (radioButtons[2].checked) {
    puntaje++;
    document.getElementById("respuestacorrecta2").innerHTML =
      "Felicidades. Es correcto";
  } else {
    document.getElementById("respuestacorrecta2").innerHTML =
      "La respuesta es incorrecta. La respuesta correcta es Rana";
  }
}

function limpiar(radioButtons, respuestacorrecta) {
  for (var i = 0; i < 3; i++) {
    radioButtons[i].checked = false;
  }

  document.getElementById(respuestacorrecta).innerHTML = "";
}

function puntajeFinal() {
  document.getElementById("puntajeFinal").innerHTML =
    "Tu puntaje final es " + puntaje;

  let radios = document.getElementsByName("pregunta2");
  puntaje = 0;

  limpiar(document.getElementsByName("pregunta1"), "respuestacorrecta1");
  limpiar(document.getElementsByName("pregunta2"), "respuestacorrecta2");
}
