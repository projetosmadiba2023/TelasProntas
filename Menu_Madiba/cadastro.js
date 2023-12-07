function somenteLetras(event) {
  var tecla = event.which || event.keyCode;
  var char = String.fromCharCode(tecla);
  var regex = /[0-9]/; // Expressão regular para verificar se é um número

  if (regex.test(char)) {
    event.preventDefault();
    return false;
  }
}

//Formata numero de telefone
$(document).ready(function () {
  $('#telefoneCelular',).mask('(00) 00000-0000');
  $('#telefoneResidencial',).mask('(00) 0000-0000');
});

// Adicionar listeners para validar email e verificar a compatibilidade das senhas
document.getElementById('email').addEventListener('blur', emailValidate);
document.getElementById('senha').addEventListener('input', passwordMatch);
document.getElementById('confirmaSenha').addEventListener('input', passwordMatch);

//Função validar email
function emailValidate() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim(); // Remove espaços em branco no início e no final

  if (emailValue === '') {
    // Se o campo estiver vazio, não faz nada
    return;
  }
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (!regex.test(emailValue)) {
    emailInput.classList.add('error');
    document.getElementById('emalerro').style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    document.getElementById('emalerro').style.display = 'none';
  }
}

//Verifica se as senhas estão correstas
function passwordMatch() {
  const senhaInput = document.getElementById('senha');
  const confirmaSenhaInput = document.getElementById('confirmaSenha');
  const senhaValue = senhaInput.value;
  const confirmaSenhaValue = confirmaSenhaInput.value;
  const senhaMismatch = document.getElementById('senhaMismatch');

  if (senhaValue === '' && confirmaSenhaValue === '') {
    // Se ambos os campos de senha estiverem vazios, não faz nada
    return;
  }

  if (senhaValue !== confirmaSenhaValue) {
    senhaInput.classList.add('error');
    confirmaSenhaInput.classList.add('error');
    senhaMismatch.style.display = 'block';
  } else {
    senhaInput.classList.remove('error');
    confirmaSenhaInput.classList.remove('error');
    senhaMismatch.style.display = 'none';
  }
}
//Icons de mostrar senha
function mostrasenhaicons(){
  var inputPass1 = document.getElementById('senha');
  var iconsShowPass1 = document.getElementById('icons_senha1')

  if (inputPass1.type === 'password'){
    inputPass1.setAttribute('type', 'text')
    iconsShowPass1.classList.replace('bi-eye-slash-fill','bi-eye-fill')

  }else{
    inputPass1.setAttribute('type','password')
    iconsShowPass1.classList.replace ('bi-eye-fill','bi-eye-slash-fill')
  }
}

function mostraconfirmesenhaicons(){
  var inputPass2 = document.getElementById('confirmaSenha');
  var iconsShowPass2 = document.getElementById('icons_senha2')

  if (inputPass2.type === 'password'){
    inputPass2.setAttribute('type', 'text')
    iconsShowPass2.classList.replace('bi-eye-slash-fill','bi-eye-fill')

  }else{
    inputPass2.setAttribute('type','password')
    iconsShowPass2.classList.replace ('bi-eye-fill','bi-eye-slash-fill')
  }
}


//Função de exibir campos de acorodo com a idade
const idadeInput = document.getElementById('idade');
const maiorIdadeDiv = document.getElementById('maiorIdade');
const menorIdadeDiv = document.getElementById('menorIdade');

idadeInput.addEventListener('change', function () {
  if (this.value >= 17) {
    maiorIdadeDiv.style.display = 'block';
    menorIdadeDiv.style.display = 'none';
  } else {
    maiorIdadeDiv.style.display = 'none';
    menorIdadeDiv.style.display = 'block';
  }
});

//Função de exibir campo de documento de comprovação de casamento
const selectEstadoCivil = document.getElementById('estadoCivil');
const casadoDiv = document.getElementById('casado');

selectEstadoCivil.addEventListener('change', function () {
  if (this.value === 'casado') {
    casadoDiv.style.display = 'block';
  } else {
    casadoDiv.style.display = 'none';
  }
});

//Função de exibir campos caso tenha teminado ou não os estudos
const selectEstudos = document.getElementById('escolaridade');
const EFCompletoDiv = document.getElementById('EFCompleto');
const EFIncompletoDiv = document.getElementById('EFIncompleto');
const EMCompletoDiv = document.getElementById('EMCompleto');
const EMIncompletoDiv = document.getElementById('EMIncompleto');

selectEstudos.addEventListener('change', function () {
  switch (selectEstudos.value) {
    case 'EFCompleto':
      EFCompletoDiv.style.display = 'block';
      EFIncompletoDiv.style.display = 'none';
      EMCompletoDiv.style.display = 'none';
      EMIncompletoDiv.style.display = 'none';
      break;
    case 'EFIncompleto':
      EFCompletoDiv.style.display = 'none';
      EFIncompletoDiv.style.display = 'block';
      EMCompletoDiv.style.display = 'none';
      EMIncompletoDiv.style.display = 'none';
      break;
    case 'EMCompleto':
      EFCompletoDiv.style.display = 'none';
      EFIncompletoDiv.style.display = 'none';
      EMCompletoDiv.style.display = 'block';
      EMIncompletoDiv.style.display = 'none';
      break;
    case 'EMIncompleto':
      EFCompletoDiv.style.display = 'none';
      EFIncompletoDiv.style.display = 'none';
      EMCompletoDiv.style.display = 'none';
      EMIncompletoDiv.style.display = 'block';
      break;
  }
});

//Funções para validação de CPF
function formatarCPF1() {
  let cpf = document.getElementById("cpf1").value;
  cpf = cpf.replace(/\D/g, ""); // remove caracteres não-numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // insere o primeiro ponto
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // insere o segundo ponto
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // insere o traço
  document.getElementById("cpf1").value = cpf;
}
function validarCPF1() {
  src = "https://unpkg.com/cpf-cnpj-validator";
  let cpf = document.getElementById("cpf1").value;
  cpf = cpf.replace(/\D/g, ""); // remove caracteres não-numéricos
  if (cpf.isValid(cpf)) {
    alert("CPF válido!");
  } else {
    alert("CPF inválido!");
  }
}
function formatarCPF2() {
  let cpf = document.getElementById("cpf2").value;
  cpf = cpf.replace(/\D/g, ""); // remove caracteres não-numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // insere o primeiro ponto
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // insere o segundo ponto
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // insere o traço
  document.getElementById("cpf2").value = cpf;
}

function validarCPF2() {
  src = "https://unpkg.com/cpf-cnpj-validator";
  let cpf = document.getElementById("cpf2").value;
  cpf = cpf.replace(/\D/g, ""); // remove caracteres não-numéricos
  if (cpf.isValid(cpf)) {
    alert("CPF válido!");
  } else {
    alert("CPF inválido!");
  }
}

// Função para exibir o campo de Projeto
const selectprojeto = document.getElementById('projeto');
const projetoEstudantilDiv = document.getElementById('projetoEstudantil');

selectprojeto.addEventListener('change', function () {
  if (this.value == 'sim') {
    projetoEstudantilDiv.style.display = 'block';
  } else {
    projetoEstudantilDiv.style.display = 'none';
  }
})

//Função para exibir o campo de Programa Social
const selectprogramaSocial = document.getElementById("programaSocial");
const nomeProgramaSocialDiv = document.getElementById('nomeProgramaSocial');

selectprogramaSocial.addEventListener('change', function () {
  if (this.value == 'programaSocialSim') {
    nomeProgramaSocialDiv.style.display = 'block';
  } else {
    nomeProgramaSocialDiv.style.display = 'none';
  }
})

//Função para exibir campo de Qual Dificuldade móvel ou financeira
const selectdificuldadeFinanceira = document.getElementById('dificuldadeFinanceira');
const nomeDificuldadeDiv = document.getElementById('nomeDificuldade');

selectdificuldadeFinanceira.addEventListener('change', function () {
  if (this.value == 'dificuldaFinanceiraSim') {
    nomeDificuldadeDiv.style.display = 'block';
  } else {
    nomeDificuldadeDiv.style.display = 'none';
  }
})

// Função para exibir o campo de Cursos
const selectprojetomadiba = document.getElementById('projetomadiba');
const UniversidadeDiv = document.getElementById('Universidade');

selectprojetomadiba.addEventListener('change', function () {
  if (this.value == 'Universidade') {
    UniversidadeDiv.style.display = 'block';
  } else {
    UniversidadeDiv.style.display = 'none';
  }
});

//Forms Etapas
let currentStep = 1;
const form = document.getElementById("form");
const formSteps = form.getElementsByClassName("form-step");

function showStep(n) {
  for (let i = 0; i < formSteps.length; i++) {
    formSteps[i].classList.remove("active");
  }
  formSteps[n - 1].classList.add("active");
  currentStep = n;
  if (currentStep === 1) {
    document.getElementById("prev-btn").style.display = "none";
  } else {
    document.getElementById("prev-btn").style.display = "inline";
  }
  if (currentStep === formSteps.length) {
    document.getElementById("next-btn").style.display = "none";
  } else {
    document.getElementById("next-btn").style.display = "inline";
  }
}

function nextStep(n) {
  if (currentStep < formSteps.length) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}

showStep(currentStep);