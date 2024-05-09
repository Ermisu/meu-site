document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const answers = {
    q1: 'Cirrose',
    q2: 'Diabetes',
    q3: 'Período neolítico'
  };
  let score = 0;
  let allCorrect = true; // Variável para verificar se todas as respostas estão corretas

  // Verifica respostas
  for (let i = 1; i <= 3; i++) {
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
    const questionDiv = document.querySelector(`#question${i}`);
    if (selectedAnswer && selectedAnswer.value === answers[`q${i}`]) {
      questionDiv.classList.add('correct-answer');
      score++;
    } else if (selectedAnswer) {
      questionDiv.classList.add('wrong-answer');
      allCorrect = false; // Se uma resposta estiver errada, define como false
    } else {
      allCorrect = false; // Se não houver resposta, define como false
    }
  }

  // Exibe resultados
  const resultDiv = document.querySelector('.result');
  resultDiv.innerHTML = `
    <p>Respostas corretas: <span class="${score > 0 ? 'correct-answer' : ''}">${score}</span></p>
    <p>Respostas erradas: <span class="${score < 3 ? 'wrong-answer' : ''}">${3 - score}</span></p>
  `;

  // Exibe botão "Tentar Novamente"
  const tryAgainBtn = document.getElementById('try-again');
  tryAgainBtn.style.display = 'block';

  // Verifica se todas as respostas estão corretas e exibe a mensagem de parabéns com confetes
  if (allCorrect && score === 3) {
    resultDiv.innerHTML += `<div class="parabens">Parabéns! Você acertou todas as perguntas!</div>`;
    showCongratulationsPopup();
    createConfetti();
  } else if (score === 0) { // Se todas as respostas estiverem erradas
    showErrorPopup(); // Exibe o pop-up de erro
    document.body.classList.add('shake'); // Adiciona a classe de shake para sacudir a tela
    setTimeout(() => {
      document.body.classList.remove('shake'); // Remove a classe de shake após algum tempo
    }, 1000);
  }
});

// Função para mostrar pop-up de parabéns
function showCongratulationsPopup() {
  alert('Parabéns! Você acertou todas as perguntas!');
}

// Função para criar confetes
function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 2}s`; // Adiciona um atraso aleatório para cada confete
    confettiContainer.appendChild(confetti);
  }
  document.body.appendChild(confettiContainer);
}

// Função para mostrar pop-up de erro
function showErrorPopup() {
  alert('Você errou todas as perguntas. Tente novamente!');
}

// Ouvinte de evento para botão "Tentar Novamente"
document.getElementById('try-again').addEventListener('click', function() {
  // Reiniciar o quiz
  document.getElementById('quiz-form').reset();

  // Limpar resultados
  const resultDiv = document.querySelector('.result');
  resultDiv.innerHTML = '';

  // Esconder botão "Tentar Novamente"
  this.style.display = 'none';

  // Remover classes de estilo das respostas anteriores
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
    question.classList.remove('correct-answer', 'wrong-answer');
  });

  // Remover confetes, se existirem
  const confettiContainer = document.querySelector('.confetti-container');
  if (confettiContainer) {
    confettiContainer.parentNode.removeChild(confettiContainer);
  }
});

document.getElementById('btnCompartilhar').addEventListener('click', function() {
  var popover = document.getElementById('popoverCompartilhar');
  if (popover.style.display === 'none') {
      popover.style.display = 'block';
  } else {
      popover.style.display = 'none';
  }
});
