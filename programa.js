//const miTitulo = document.querySelector("h1");
//miTitulo.textContent = "¡Hola mundo!";

let nombreDeLaVariable = document.querySelector("h1");
let bob = "Bob";

//let helado = "chocolate";
//if (helado === "chocolate") {
//  alert("¡Sí, amo el helado de chocolate!");
//} else {
//  alert("Awwww, pero mi favorito es el de chocolate...");
//}

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
  }
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};

//function multiplica(num1, num2) {
//   return num1 * num2;
// }

//let res = multiplica(5, 8);
//alert("El resultado de multiplicar " + num1 + " y " + num2 + " es: " + res)

//document.querySelector("html").onclick = function () {
//    alert("¡Ouch! ¡Deja de pincharme!");
//  };
  
  let miImage = document.querySelector("img");
  miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "firefox.png") {
      miImage.setAttribute("src", "firefox_actual.png");
    } else {
      miImage.setAttribute("src", "firefox.png");
    }
  };
  
  
  
