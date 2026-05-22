const revisao = [
  {
    nome: "Questão 1",
    descritor: "D15",
    trecho:
      "Leia o trecho a seguir: 'O sol se pôs devagar no horizonte, pintando o céu de laranja...",
  },
  {
    nome: "Questão 2",
    descritor: "D05",
    trecho:
      "Um estudante precisa economizar R$480,00 para comprar um instrumento musical. Ele já tem R$1...",
  },
  {
    nome: "Questão 3",
    descritor: "D12",
    trecho:
      "No texto: 'Apesar das dificuldades, o jovem não desistiu de seus sonhos. Pelo contrário, cada obstá...",
  },
  {
    nome: "Questão 4",
    descritor: "D15",
    trecho:
      "Uma turma realizou uma pesquisa sobre o número de horas de estudo diário dos alunos. Os dados t...",
  },
  {
    nome: "Questão 5",
    descritor: "D13",
    trecho:
      "Observe a charge: um político aparece discursando com um microfone enorme enquanto seus bolso...",
  },
];

const totalQuestoes = revisao.length;
const acertos = 0;
const precisao = Math.round((acertos / totalQuestoes) * 100);
const xpGanho = acertos * 20;

document.getElementById("placar-numero").textContent = String(acertos);
document.getElementById("metrica-precisao").textContent = `${precisao}%`;
document.getElementById("metrica-xp").textContent = `+${xpGanho} XP`;

const lista = document.getElementById("revisao-lista");
lista.innerHTML = revisao
  .map(
    (q) => `
  <div class="revisao-item">
    <div class="revisao-icone" aria-hidden="true">
      <i data-lucide="x" class="icon" aria-hidden="true"></i>
    </div>
    <div class="revisao-info">
      <div class="revisao-header">
        <span class="revisao-nome">${q.nome}</span>
        <span class="revisao-desc-badge">${q.descritor}</span>
      </div>
      <p class="revisao-trecho">${q.trecho}</p>
    </div>
  </div>
`
  )
  .join("");

window.initLucideIcons();
