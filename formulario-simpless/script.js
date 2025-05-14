document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('status');
  
    if (!name || !email || !message) {
      status.style.color = 'red';
      status.textContent = 'Por favor, preencha todos os campos.';
      return;
    }
  
    // Validação de e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.style.color = 'red';
      status.textContent = 'E-mail inválido.';
      return;
    }
  
    status.style.color = 'lightgreen';
    status.textContent = 'Mensagem enviada com sucesso!';
  
    // Limpar o formulário
    document.getElementById('contactForm').reset();
  });
  