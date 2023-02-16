const formRegistro = document.getElementById("formRegistro");

//control formulario válido, todos los campos son correctos.
let formValidoNombre;
let formValidoEmail;
let formValidoClave;
let formValidoClaveConfirm;

//input
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const claveConfirm = document.getElementById("claveConfirm");

//imagen error
const imagenErrorNombre = document.getElementById("imagenErrorNombre");
const imagenErrorEmail = document.getElementById("imagenErrorEmail");
const imagenErrorClave = document.getElementById("imagenErrorClave");
const imagenErrorClaveConfirm = document.getElementById(
  "imagenErrorClaveConfirm"
);

//imagen valid
const imagenValidNombre = document.getElementById("imagenValidNombre");
const imagenValidEmail = document.getElementById("imagenValidEmail");
const imagenValidClave = document.getElementById("imagenValidClave");
const imagenValidClaveConfirm = document.getElementById(
  "imagenValidClaveConfirm"
);

//mensaje rellenar
const mensajeNombre = document.getElementById("mensajeNombre");
const mensajeEmail = document.getElementById("mensajeEmail");
const mensajeClave = document.getElementById("mensajeClave");
const mensajeClaveConfirm = document.getElementById("mensajeClaveConfirm");

//mensaje inválido
const mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
const mensajeErrorEmail = document.getElementById("mensajeErrorEmail");
const mensajeErrorClave = document.getElementById("mensajeErrorClave");
const mensajeErrorClaveConfirm = document.getElementById(
  "mensajeErrorClaveConfirm"
);

const expresiones = {
  nombre: /^([^0-9]*)$/, //nombre no contiene numeros --> (true)
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

//Validar campo nombre

const validateName = () => {
  //Campo nombre vacio
  if (nombre.value === "") {
    formValidoNombre = false;
    nombre.classList.add("error-input");
    nombre.classList.remove("valid-input");
    imagenErrorNombre.classList.remove("hidden");
    imagenValidNombre.classList.add("hidden");
    mensajeNombre.classList.remove("hidden");
    mensajeErrorNombre.classList.add("hidden");
    //campo nombre inválido
  } else if (!expresiones.nombre.test(nombre.value)) {
    formValidoNombre = false;
    nombre.classList.add("error-input");
    nombre.classList.remove("valid-input");
    imagenErrorNombre.classList.remove("hidden");
    imagenValidNombre.classList.add("hidden");
    mensajeErrorNombre.classList.remove("hidden");
    mensajeNombre.classList.add("hidden");
    //campo nombre correcto
  } else {
    formValidoNombre = true;
    nombre.classList.add("valid-input");
    nombre.classList.remove("error-input");
    imagenErrorNombre.classList.add("hidden");
    imagenValidNombre.classList.remove("hidden");
    mensajeErrorNombre.classList.add("hidden");
    mensajeNombre.classList.add("hidden");
  }
};

//Validar campo email

const validateEmail = () => {
  //Campo email vacio
  if (email.value === "") {
    formValidoEmail = false;
    email.classList.add("error-input");
    email.classList.remove("valid-input");
    imagenErrorEmail.classList.remove("hidden");
    imagenValidEmail.classList.add("hidden");
    mensajeEmail.classList.remove("hidden");
    mensajeErrorEmail.classList.add("hidden");

    //campo email inválido
  } else if (!expresiones.email.test(email.value)) {
    formValidoEmail = false;
    email.classList.add("error-input");
    email.classList.remove("valid-input");
    imagenErrorEmail.classList.remove("hidden");
    imagenValidEmail.classList.add("hidden");
    mensajeErrorEmail.classList.remove("hidden");
    mensajeEmail.classList.add("hidden");
    //campo nombre correcto
  } else {
    formValidoEmail = true;
    email.classList.add("valid-input");
    email.classList.remove("error-input");
    imagenErrorEmail.classList.add("hidden");
    imagenValidEmail.classList.remove("hidden");
    mensajeErrorEmail.classList.add("hidden");
    mensajeEmail.classList.add("hidden");
  }
};

//Validar campo clave

const validateClave = () => {
  //Campo clave vacio
  if (clave.value === "") {
    formValidoClave = false;
    clave.classList.add("error-input");
    clave.classList.remove("valid-input");
    imagenErrorClave.classList.remove("hidden");
    imagenValidClave.classList.add("hidden");
    mensajeClave.classList.remove("hidden");
    mensajeErrorClave.classList.add("hidden");

    //Campo Clave inválido
  } else if (clave.value.length < 8) {
    formValidoClave = false;
    console.log(clave.value);
    clave.classList.add("error-input");
    clave.classList.remove("valid-input");
    imagenErrorClave.classList.remove("hidden");
    imagenValidClave.classList.add("hidden");
    mensajeErrorClave.classList.remove("hidden");
    mensajeClave.classList.add("hidden");
    //campo Clave correcto
  } else {
    formValidoClave = true;
    clave.classList.add("valid-input");
    clave.classList.remove("error-input");
    imagenErrorClave.classList.add("hidden");
    imagenValidClave.classList.remove("hidden");
    mensajeErrorClave.classList.add("hidden");
    mensajeClave.classList.add("hidden");
  }
};

//Validar campo clave

const validateClaveConfirm = () => {
  //Campo claveConfirm vacio
  if (claveConfirm.value === "") {
    formValidoClaveConfirm = false;
    claveConfirm.classList.add("error-input");
    claveConfirm.classList.remove("valid-input");
    imagenErrorClaveConfirm.classList.remove("hidden");
    imagenValidClaveConfirm.classList.add("hidden");
    mensajeClaveConfirm.classList.remove("hidden");
    mensajeErrorClaveConfirm.classList.add("hidden");

    //Campo claveConfirm inválido.
    //También se hace la validación para cuando el input sea de longitud menor a 8 carcateres, de esta forma el aviso de error tambien aparece cuando claveConfirm.value sea de length < 8 e igual a clave.value
  } else if (clave.value.length < 8 || claveConfirm.value != clave.value) {
    formValidoClaveConfirm = false;
    claveConfirm.classList.add("error-input");
    claveConfirm.classList.remove("valid-input");
    imagenErrorClaveConfirm.classList.remove("hidden");
    imagenValidClaveConfirm.classList.add("hidden");
    mensajeErrorClaveConfirm.classList.remove("hidden");
    mensajeClaveConfirm.classList.add("hidden");

    //campo claveConfirm correcto
  } else {
    formValidoClaveConfirm = true;
    claveConfirm.classList.add("valid-input");
    claveConfirm.classList.remove("error-input");
    imagenErrorClaveConfirm.classList.add("hidden");
    imagenValidClaveConfirm.classList.remove("hidden");
    mensajeErrorClaveConfirm.classList.add("hidden");
    mensajeClaveConfirm.classList.add("hidden");
  }
};

//Se valida cada vez cuando se presiona ENVIAR
formRegistro.addEventListener("submit", (e) => {
  e.preventDefault(); //evita que el formulario entregue la informacion sin antes validarla.
  validateName();
  validateEmail();
  validateClave();
  validateClaveConfirm();

  //aparece el alert solo si están todos los campos correctos
  if (
    formValidoNombre &&
    formValidoEmail &&
    formValidoClave &&
    formValidoClaveConfirm
  ) {
    alert("Cuenta creada correctamente");
  }
});
