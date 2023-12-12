console.log("carregou");

const nameElement = document.getElementById("name");
const sobrenomeElement = document.getElementById("sobrenome");

const emailElement = document.getElementById("email");
const senioridadeElement = document.getElementById("senioridade");
let checkBoxTechs = document.querySelectorAll("input[name=techs]:checked");

nameElement.addEventListener("keyup", function () {
  console.log("Digitou no campo nome");

  let name = nameElement.value;

  if (name.length < 3 || name.length > 50) {
    console.log("errado");
    exibirErro(nameElement.id, "O nome deve ter entre 3 e 50 caracteres");
    return false;
  } else {
    ocultarErro(nameElement.id);
  }
});

sobrenomeElement.addEventListener("keyup", function () {
  console.log("Digitou no campo nome");

  let sobrenome = sobrenomeElement.value;

  if (sobrenome.length < 3 || sobrenome.length > 50) {
    console.log("errado");
    exibirErro(sobrenomeElement.id, "O nome deve ter entre 3 e 50 caracteres");
    return false;
  } else {
    ocultarErro(sobrenomeElement.id);
  }
});

emailElement.addEventListener("keyup", function () {
  const email = emailElement.value;
  console.log("Digitou no campo email");
  if (!validarEmail(email)) {
    console.log("errado");
    exibirErro(emailElement.id, "Email inválido");
    return false;
  } else {
    ocultarErro(emailElement.id);
  }
});

senioridadeElement.addEventListener("change", function () {
  let senioridade = senioridadeElement.value;
  if (senioridade != "") {
    ocultarErro(senioridadeElement.id);
  }
});

document.querySelectorAll('input[name="techs"]').forEach((element) => {
  element.addEventListener("change", function () {
    if (checkBoxTechs.length > 0) {
      ocultarErro("error-techs");
    }
  });
});

function validarFormulario() {
  event.preventDefault();
  let campos = document.querySelectorAll("input[type=text]");
  let camposEmail = document.getElementById("email");
  let campoExperiencia = document.getElementById("experiencia");
  let campoSenioridade = document.getElementById("senioridade");
  let checkBoxTechs = document.querySelectorAll("input[name=techs]:checked");
  campos = [...campos, camposEmail, campoExperiencia, campoSenioridade];

  campos.forEach((element) => {
    if (element.value == "") {
      exibirErro(element.id, "Campo Requirido");
    } else {
      ocultarErro(element.id);
    }
  });

  if (checkBoxTechs.length == 0) {
    document.getElementById("error-techs").innerText = "Campo Requirido";
  }
}

function validarEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function exibirErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.style.border = "1px solid red";

  // Adiciona ou atualiza uma mensagem de erro
  let errorElement = document.getElementById(idElemento + "Error");
  if (!errorElement) {
    errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.id = idElemento + "Error";

    elemento.parentNode.appendChild(errorElement);
  }

  errorElement.innerText = mensagem;
}

function ocultarErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.style.border = "1px solid #ccc";

  let errorElement = document.getElementById(idElemento + "Error");
  if (errorElement) {
    errorElement.remove();
  }
}
