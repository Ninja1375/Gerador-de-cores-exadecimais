function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColors() {
  const palette = document.getElementById('palette');
  palette.innerHTML = ''; // Limpar paleta anterior

  for (let i = 0; i < 14; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

    // Copiar automaticamente ao clicar
    colorBox.onclick = () => {
      navigator.clipboard.writeText(color).then(() => {
        alert(`Cor ${color} copiada para a área de transferência!`);
      }).catch(() => {
        alert('Erro ao copiar a cor!');
      });
    };

    palette.appendChild(colorBox);
  }
}

// Gerar cores ao carregar a página
generateColors();
