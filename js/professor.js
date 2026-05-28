const alertasPorDisciplina = {
  lp: [
    { code: 'D03', nome: 'Inferir informação implícita', sub: '2 alunos em nível crítico' },
    { code: 'D07', nome: 'Identificar gênero textual', sub: '2 alunos em nível crítico' },
    { code: 'D12', nome: 'Identificar conectivos', sub: '2 alunos em nível crítico' },
    { code: 'D16', nome: 'Analisar funções da linguagem', sub: '2 alunos em nível crítico' },
  ],
  mat: [
    { code: 'D01', nome: 'Resolver problemas com números naturais', sub: '3 alunos em nível crítico' },
    { code: 'D05', nome: 'Interpretar gráficos e tabelas', sub: '2 alunos em nível crítico' },
    { code: 'D09', nome: 'Calcular perímetro e área', sub: '2 alunos em nível crítico' },
    { code: 'D14', nome: 'Resolver equações do 1º grau', sub: '2 alunos em nível crítico' },
  ],
};

const alunos = [
  {
    nome: 'Ana Maria',
    lp: ['D', 'A', 'C', '_', 'D', 'A', 'C', '_', 'D', 'D', 'A', 'C', '_', 'D', 'A', 'C', '_', 'D', 'A', 'A'],
    mat: ['D', 'C', 'A', '_', 'D', 'A', 'C', '_', 'A', 'D', 'D', 'C', 'A', 'A', '_', 'C', '_', 'A', 'D', 'A'],
  },
  {
    nome: 'Ana Luiza',
    lp: ['_', 'D', 'A', '_', 'D', 'A', 'D', '_', 'A', 'D', 'C', 'A', '_', 'D', 'D', 'A', 'C', '_', 'D', 'A'],
    mat: ['A', 'D', 'D', '_', 'A', 'D', 'C', '_', 'A', 'A', 'C', 'A', '_', 'D', 'D', 'A', 'C', '_', 'D', 'A'],
  },
  {
    nome: 'Mayra Vitória',
    lp: ['C', '_', 'D', 'A', 'C', '_', 'C', '_', 'A', 'D', 'D', 'C', 'A', 'A', 'D', 'A', 'C', '_', 'A', 'D'],
    mat: ['D', 'A', 'C', 'A', 'C', '_', 'D', '_', 'A', 'D', 'D', 'C', 'A', 'D', '_', 'C', '_', 'A', 'D', 'A'],
  },
  {
    nome: 'Gisely Silva',
    lp: ['A', 'C', '_', 'D', 'D', 'D', 'A', 'C', 'D', 'C', 'A', 'D', 'D', 'D', 'C', 'A', 'D', 'A', 'C', 'A'],
    mat: ['D', 'A', '_', 'D', 'D', 'D', 'A', 'C', 'D', 'A', 'A', 'D', '_', 'D', 'C', 'A', 'D', 'A', 'C', 'A'],
  },
  {
    nome: 'Stephany',
    lp: ['D', 'A', 'C', '_', 'A', 'D', 'D', 'A', 'D', 'A', 'C', 'A', 'D', 'D', 'A', 'D', 'A', 'C', '_', 'D'],
    mat: ['D', 'A', 'A', '_', 'D', 'A', 'D', 'A', 'D', 'A', 'C', 'A', 'D', 'D', '_', 'D', 'A', 'C', '_', 'D'],
  },
];

// D=dominado, A=desenvolvimento, C=critico, _=nao-avaliado
const statusMap = { D: 'dominado', A: 'desenvolvimento', C: 'critico', _: 'nao-avaliado' };
const criticos = [3, 7, 12, 16];

function renderAlertas(disciplina) {
  const grid = document.getElementById('alertas-grid');
  if (!grid) return;

  grid.innerHTML = alertasPorDisciplina[disciplina]
    .map(
      (a) => `
    <div class="alerta-card">
      <div class="alerta-info">
        <span class="alerta-desc-code">${a.code}</span>
        <span class="alerta-nome">${a.nome}</span>
        <p class="alerta-sub">${a.sub}</p>
      </div>
      <button type="button" class="btn-revisar">Revisar</button>
    </div>
  `
    )
    .join('');
}

function renderMatriz(campo) {
  const tabela = document.getElementById('matriz-tabela');
  if (!tabela) return;

  const headers = Array.from({ length: 20 }, (_, i) =>
    `<th class="${criticos.includes(i) ? 'critico' : ''}">${String(i + 1).padStart(2, '0')}</th>`
  ).join('');

  const linhas = alunos
    .map((a) => {
      const dados = a[campo];
      const cells = dados
        .map((v) => `<td><span class="bolinha ${statusMap[v]}"></span></td>`)
        .join('');
      return `<tr><td class="col-aluno">${a.nome}</td>${cells}</tr>`;
    })
    .join('');

  tabela.innerHTML = `
    <thead>
      <tr>
        <th class="col-aluno">ALUNO</th>
        ${headers}
      </tr>
    </thead>
    <tbody>${linhas}</tbody>
  `;
}

function initPainelProfessor() {
  const disciplina = window.applyProfessorDisciplinaUI
    ? window.applyProfessorDisciplinaUI()
    : getProfessorDisciplina();

  const nomeSalvo = sessionStorage.getItem('professorNome');
  if (nomeSalvo) {
    document.querySelectorAll('.navbar-user-name').forEach((el) => {
      el.textContent = nomeSalvo;
    });
  }

  const turmaSalva = sessionStorage.getItem('professorTurma');
  const turmaSelect = document.querySelector('.turma-select');
  if (turmaSalva && turmaSelect) {
    let encontrou = false;
    for (const opt of turmaSelect.options) {
      if (opt.text === turmaSalva) {
        opt.selected = true;
        encontrou = true;
        break;
      }
    }
    if (!encontrou) {
      turmaSelect.add(new Option(turmaSalva, turmaSalva, true, true));
    }
  }

  renderAlertas(disciplina);
  renderMatriz(disciplina);
}

if (document.getElementById('matriz-tabela')) {
  initPainelProfessor();
}
