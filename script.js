function armazenarValores() {
  const formulario = document.getElementById("meuFormulario");
  const valores = [];
  const respostas = [
    "strength",
    "washin'",
    "squeeze",
    "ass",
    "homie",
    "link up",
    "lie",
    "apple",
    "dine",
    "grind",
  ];

  for (let i = 1; i <= 10; i++) {
    const input = formulario["input" + i];
    valores.push(input.value);
  }

  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i].toLowerCase().trim() === respostas[i].toLowerCase().trim()) {
      total++;
    }
  }

  Toastify({
    text: `Você acertou ${total} palavras`,
    duration: -1,
    gravity: "top",
    close: true,
    position: "center",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}
