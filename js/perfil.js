const conquistas = [
  { icone: "star", classe: "", nome: "Primeira", desc: "Respondeu sua primeira questão", desbloqueada: true },
  { icone: "flame", classe: "icon-flame", nome: "Sequência de", desc: "3 dias seguidos de estudo", desbloqueada: true },
  { icone: "crown", classe: "icon-crown", nome: "Mestre do D15", desc: "Dominou o descritor D15", desbloqueada: true },
  { icone: "book-open", classe: "", nome: "10 Simulados", desc: "Completou 10 simulados", desbloqueada: false },
  { icone: "trophy", classe: "", nome: "Expert SAEB", desc: "Atingiu 1000 XP", desbloqueada: false },
  { icone: "zap", classe: "", nome: "Velocidade", desc: "Respondeu 20 questões sem errar", desbloqueada: false },
];

const grid = document.getElementById("conquistas-grid");
grid.innerHTML = conquistas.map((c) => `
  <div class="conquista-item ${c.desbloqueada ? "" : "bloqueada"}">
    <div class="conquista-icon-wrap">
      <i data-lucide="${c.icone}" class="icon conquista-icon-perfil ${c.classe}" aria-hidden="true"></i>
      ${!c.desbloqueada ? '<i data-lucide="lock" class="icon cadeado" aria-hidden="true"></i>' : ""}
    </div>
    <span class="conquista-nome">${c.nome}</span>
    <span class="conquista-desc">${c.desc}</span>
  </div>
`).join("");

window.initLucideIcons();
