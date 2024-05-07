
document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const answers = {
    q1: 'Brasília',
    q2: 'Miguel de Cervantes',
    q3: 'Júpiter'
  };
  let score = 0;

  // Percorre cada pergunta e verifica se a resposta está correta
  for (let i = 1; i <= 3; i++) {
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
    const questionDiv = document.querySelector(`#question${i}`);
    if (selectedAnswer && selectedAnswer.value === answers[`q${i}`]) {
      // Se a resposta estiver correta, define a cor verde para toda a questão
      questionDiv.classList.add('correct-answer');
      score++;
    } else if (selectedAnswer) {
      // Se a resposta estiver errada, define a cor vermelha para toda a questão
      questionDiv.classList.add('wrong-answer');
    }
  }

  // Exibe o número de respostas corretas e incorretas
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>Respostas corretas: <span class="${score > 0 ? 'correct-answer' : ''}">${score}</span></p>
    <p>Respostas erradas: <span class="${score < 3 ? 'wrong-answer' : ''}">${3 - score}</span></p>
  `;
});
