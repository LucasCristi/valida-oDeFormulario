import ehUmCpf from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", verificaCampo(campo));
});

function verificaCampo() {
  if (campo.nome == "cpf " && campo.value.length >= 11) {
    ehUmCpf(campo);
  }
}
