const descritoresLP = [
  { codigo: "D01", nome: "Localizar informações explícitas", status: "dominado" },
  { codigo: "D02", nome: "Inferir sentido de palavra", status: "desenvolvimento" },
  { codigo: "D03", nome: "Inferir informação implícita", status: "critico" },
  { codigo: "D04", nome: "Identificar tema de texto", status: "nao-avaliado" },
  { codigo: "D05", nome: "Distinguir fato de opinião", status: "dominado" },
  { codigo: "D06", nome: "Identificar relações lógicas", status: "desenvolvimento" },
  { codigo: "D07", nome: "Identificar gênero textual", status: "critico" },
  { codigo: "D08", nome: "Identificar finalidade textual", status: "nao-avaliado" },
  { codigo: "D09", nome: "Interpretar textos argumentativos", status: "dominado" },
  { codigo: "D10", nome: "Identificar relações intertextuais", status: "dominado" },
  { codigo: "D11", nome: "Reconhecer posição do autor", status: "desenvolvimento" },
  { codigo: "D12", nome: "Identificar conectivos", status: "critico" },
  { codigo: "D13", nome: "Inferência em piadas e tirinhas", status: "nao-avaliado" },
  { codigo: "D14", nome: "Interpretar linguagem verbal e não verbal", status: "dominado" },
  { codigo: "D15", nome: "Reconhecer recursos estilísticos", status: "desenvolvimento" },
  { codigo: "D16", nome: "Analisar funções da linguagem", status: "critico" },
  { codigo: "D17", nome: "Relacionar textos do mesmo tema", status: "nao-avaliado" },
  { codigo: "D18", nome: "Substituição de palavras no texto", status: "dominado" },
  { codigo: "D19", nome: "Identificar recursos de persuasão", status: "desenvolvimento" },
  { codigo: "D20", nome: "Estrutura da narrativa", status: "desenvolvimento" },
];

const descritoresMAT = [
  { codigo: "D01", nome: "Reconhecer e usar características do sistema de numeração", status: "dominado" },
  { codigo: "D02", nome: "Identificar frações equivalentes", status: "critico" },
  { codigo: "D03", nome: "Resolver problemas com números racionais", status: "desenvolvimento" },
  { codigo: "D04", nome: "Calcular porcentagem", status: "nao-avaliado" },
  { codigo: "D05", nome: "Resolver problemas com proporcionalidade", status: "dominado" },
  { codigo: "D06", nome: "Resolver equações de 1º grau", status: "desenvolvimento" },
  { codigo: "D07", nome: "Resolver inequações", status: "critico" },
  { codigo: "D08", nome: "Calcular área de figuras planas", status: "nao-avaliado" },
  { codigo: "D09", nome: "Resolver problemas com perímetro", status: "dominado" },
  { codigo: "D10", nome: "Calcular volume de sólidos", status: "desenvolvimento" },
  { codigo: "D11", nome: "Reconhecer ângulos", status: "dominado" },
  { codigo: "D12", nome: "Usar relações entre figuras semelhantes", status: "critico" },
  { codigo: "D13", nome: "Interpretar gráficos e tabelas", status: "desenvolvimento" },
  { codigo: "D14", nome: "Calcular média aritmética", status: "dominado" },
  { codigo: "D15", nome: "Resolver problemas com probabilidade", status: "nao-avaliado" },
  { codigo: "D16", nome: "Identificar padrões em sequências numéricas", status: "critico" },
  { codigo: "D17", nome: "Usar o Teorema de Pitágoras", status: "nao-avaliado" },
  { codigo: "D18", nome: "Resolver sistemas de equações", status: "desenvolvimento" },
  { codigo: "D19", nome: "Interpretar funções do 1º grau", status: "dominado" },
  { codigo: "D20", nome: "Interpretar funções do 2º grau", status: "desenvolvimento" },
];

const statusLabel = {
  dominado: "Dominado",
  desenvolvimento: "Em desenvolvimento",
  critico: "Dificuldade crítica",
  "nao-avaliado": "Não avaliado",
};

function renderDescritores(lista) {
  const container = document.getElementById("descritores-container");
  container.innerHTML = lista.map(d => `
    <div class="descritor-card ${d.status}">
      <div class="descritor-header">
        <span class="descritor-codigo">${d.codigo}</span>
        <span class="descritor-dot ${d.status}"></span>
      </div>
      <p class="descritor-nome">${d.nome}</p>
      <span class="descritor-status ${d.status}">${statusLabel[d.status]}</span>
    </div>
  `).join("");
}

document.getElementById("tab-lp").addEventListener("click", () => {
  document.getElementById("tab-lp").classList.add("active");
  document.getElementById("tab-mat").classList.remove("active");
  renderDescritores(descritoresLP);
});

document.getElementById("tab-mat").addEventListener("click", () => {
  document.getElementById("tab-mat").classList.add("active");
  document.getElementById("tab-lp").classList.remove("active");
  renderDescritores(descritoresMAT);
});

renderDescritores(descritoresLP);
