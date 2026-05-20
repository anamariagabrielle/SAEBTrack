const tabTurma = document.getElementById("tab-turma");
const tabEscola = document.getElementById("tab-escola");

tabTurma.addEventListener("click", () => {
  tabTurma.classList.add("active");
  tabEscola.classList.remove("active");
  // dados da turma já estão no HTML (hardcoded)
});

tabEscola.addEventListener("click", () => {
  tabEscola.classList.add("active");
  tabTurma.classList.remove("active");
  // para o protótipo, manter os mesmos dados
  // em produção, faria fetch de dados da escola
});
