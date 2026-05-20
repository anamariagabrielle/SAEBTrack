const questoes = [
  {
    descritor: "Descritor D15 — LP",
    enunciado: "Leia o trecho a seguir: 'O sol se pôs devagar no horizonte, pintando o céu de laranja e rosa, como se despedisse do dia com um último suspiro colorido.' O efeito de sentido produzido pela expressão 'último suspiro colorido' é:",
    alternativas: [
      "Indicar que o sol estava cansado de iluminar a terra.",
      "Criar uma imagem poética da transição entre o dia e a noite.",
      "Sugerir que o fim do dia é sempre triste e melancólico.",
      "Afirmar que o sol emite sons ao se pôr."
    ],
    correta: 1
  },
  {
    descritor: "Descritor D05 — MAT",
    enunciado: "Um estudante precisa economizar R$480,00 para comprar um instrumento musical. Ele já tem R$135,00. Quanto dinheiro ainda falta para completar o valor necessário?",
    alternativas: ["R$315,00", "R$345,00", "R$365,00", "R$615,00"],
    correta: 1
  },
  {
    descritor: "Descritor D12 — LP",
    enunciado: "No texto: 'Apesar das dificuldades, o jovem não desistiu de seus sonhos. Pelo contrário, cada obstáculo tornou-o mais determinado.' A palavra 'apesar' indica uma relação de:",
    alternativas: ["Causa", "Consequência", "Concessão", "Finalidade"],
    correta: 2
  },
  {
    descritor: "Descritor D15 — LP",
    enunciado: "Uma turma realizou uma pesquisa sobre o número de horas de estudo diário dos alunos e obteve os seguintes dados: 1h (5 alunos), 2h (12 alunos), 3h (8 alunos), 4h (3 alunos). Com base nesses dados, qual é a moda da distribuição?",
    alternativas: ["1 hora", "4 horas", "2 horas", "3 horas"],
    correta: 2
  },
  {
    descritor: "Descritor D13 — LP",
    enunciado: "Observe a charge: um político aparece discursando com um microfone enorme enquanto seus bolsos transbordam de dinheiro. O humor e a crítica da charge são produzidos principalmente pelo recurso de:",
    alternativas: [
      "Exagero de elementos visuais para criticar a realidade",
      "Ironia verbal nas palavras do discurso",
      "Ambiguidade no texto escrito",
      "Eufemismo para suavizar a crítica"
    ],
    correta: 0
  }
];

let questaoAtual = 0;
let respondeu = false;
let timer;
let segundos = 0;

function iniciarTimer() {
  timer = setInterval(() => {
    segundos++;
    const min = Math.floor(segundos / 60).toString().padStart(2, "0");
    const sec = (segundos % 60).toString().padStart(2, "0");
    document.getElementById("timer-value").textContent = `${min}:${sec}`;
  }, 1000);
}

function renderQuestao() {
  const q = questoes[questaoAtual];
  const letras = ["A", "B", "C", "D"];
  const total = questoes.length;
  const progresso = ((questaoAtual + 1) / total) * 100;

  document.getElementById("counter").textContent =
    `Questão ${questaoAtual + 1} de ${total}`;
  document.getElementById("progress").style.width = `${progresso}%`;
  document.getElementById("descritor-badge").textContent = q.descritor;
  document.getElementById("enunciado").textContent = q.enunciado;
  document.getElementById("btn-proxima").style.display = "none";
  respondeu = false;

  const altContainer = document.getElementById("alternativas");
  altContainer.innerHTML = q.alternativas.map((alt, i) => `
    <button class="alternativa-btn" onclick="responder(${i})">
      <span class="alternativa-letra">${letras[i]}</span>
      <span>${alt}</span>
    </button>
  `).join("");
}

function responder(indice) {
  if (respondeu) return;
  respondeu = true;

  const q = questoes[questaoAtual];
  const botoes = document.querySelectorAll(".alternativa-btn");

  botoes.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correta) btn.classList.add("correta");
    else if (i === indice && indice !== q.correta) btn.classList.add("errada");
  });

  document.getElementById("btn-proxima").style.display = "block";
}

function proximaQuestao() {
  questaoAtual++;
  if (questaoAtual >= questoes.length) {
    clearInterval(timer);
    window.location.href = "gabarito.html";
  } else {
    renderQuestao();
  }
}

iniciarTimer();
renderQuestao();
