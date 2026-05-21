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
const criticos = [3, 7, 12, 16]; // índices dos descritores críticos (0-based)

function renderMatriz(campo) {
  const tabela = document.getElementById('matriz-tabela');
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

document.getElementById('tab-lp').addEventListener('click', () => {
  document.getElementById('tab-lp').classList.add('active');
  document.getElementById('tab-mat').classList.remove('active');
  renderMatriz('lp');
});

document.getElementById('tab-mat').addEventListener('click', () => {
  document.getElementById('tab-mat').classList.add('active');
  document.getElementById('tab-lp').classList.remove('active');
  renderMatriz('mat');
});

renderMatriz('lp');
