
    function enviarMensagem() {
      // Obtém o formulário e os valores dos campos
      const form = document.getElementById('faleConoscoForm');
      const nome = form.nome.value;
      const email = form.email.value;
      const mensagem = form.mensagem.value;

      // Valida os campos
      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      // Cria o objeto com os dados do formulário
      const dados = {
        nome: nome,
        email: email,
        mensagem: mensagem
      };

      // Exibe os dados no console (para testes)
      console.log('Dados enviados:', dados);

      // Envia os dados para o servidor (exemplo com fetch)
      fetch('https://seu-servidor.com/api/fale-conosco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao enviar mensagem: ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
          form.reset(); // Limpa o formulário
        })
        .catch(error => {
          console.error('Erro ao enviar mensagem:', error);
          alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
        });
    }

    