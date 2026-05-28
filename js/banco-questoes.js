const letras = ['A', 'B', 'C', 'D'];

let questoesCadastradas = [
  {
    disciplina: 'LP',
    descritor: 'D06',
    dificuldade: 'Médio',
    enunciado: 'Qual é a função da vírgula na frase: "Maria, venha cá agora!"?',
    alternativas: [
      'Separar orações',
      'Indicar pausa longa',
      'Substituir ponto final',
      'Enfatizar o verbo',
    ],
    correta: 0,
  },
  {
    disciplina: 'MAT',
    descritor: 'D16',
    dificuldade: 'Médio',
    enunciado: 'Calcule a área de um triângulo com base 8cm e altura 5cm.',
    alternativas: ['20cm²', '13cm²', '40cm²', '26cm²'],
    correta: 0,
  },
];

function atualizarSelecaoAlternativa() {
  const radios = document.querySelectorAll('.alt-radio');
  const rows = document.querySelectorAll('.alternativa-form-row');

  rows.forEach((row, i) => {
    row.classList.toggle('selecionada', radios[i].checked);
  });
}

document.querySelectorAll('.alt-radio').forEach((radio) => {
  radio.addEventListener('change', atualizarSelecaoAlternativa);
});

function renderQuestoes() {
  const lista = document.getElementById('lista-questoes');
  const countEl = document.getElementById('questoes-count');

  countEl.textContent = String(questoesCadastradas.length);

  lista.innerHTML = questoesCadastradas
    .map((q) => {
      const discClass = q.disciplina === 'LP' ? 'lp' : 'mat';
      const opcoes = q.alternativas
        .map(
          (texto, i) => `
        <div class="questao-opcao ${i === q.correta ? 'correta' : ''}">
          <span class="questao-opcao-letra">${letras[i]}</span>
          <span>${texto}</span>
        </div>
      `
        )
        .join('');

      return `
        <article class="questao-card">
          <div class="questao-card-header">
            <span class="badge-disciplina ${discClass}">${q.disciplina}</span>
            <span class="badge-descritor">${q.descritor}</span>
            <span class="badge-dificuldade">${q.dificuldade}</span>
          </div>
          <p class="questao-enunciado">${q.enunciado}</p>
          <div class="questao-opcoes-grid">${opcoes}</div>
        </article>
      `;
    })
    .join('');
}

document.getElementById('form-questao').addEventListener('submit', (e) => {
  e.preventDefault();

  const disciplina = document.getElementById('disciplina').value;
  const dificuldade = document.getElementById('dificuldade').value;
  const descritor = document.getElementById('descritor').value;
  const enunciado = document.getElementById('enunciado').value.trim();
  const correta = Number(document.querySelector('input[name="correta"]:checked').value);
  const alternativas = [0, 1, 2, 3].map((i) =>
    document.querySelector(`input[name="alt${i}"]`).value.trim()
  );

  if (!descritor || !enunciado || alternativas.some((a) => !a)) return;

  questoesCadastradas.unshift({
    disciplina,
    descritor,
    dificuldade,
    enunciado,
    alternativas,
    correta,
  });

  e.target.reset();
  document.getElementById('dificuldade').value = 'Médio';
  document.querySelector('input[name="correta"][value="0"]').checked = true;
  atualizarSelecaoAlternativa();
  renderQuestoes();
});

atualizarSelecaoAlternativa();
renderQuestoes();

(function aplicarDisciplinaProfessorNoForm() {
  const select = document.getElementById('disciplina');
  if (!select || typeof window.getProfessorDisciplina !== 'function') return;
  select.value = window.getProfessorDisciplina() === 'mat' ? 'MAT' : 'LP';
})();
