function login() {
     // Obtem o formulário pelo ID
     const form = document.getElementById('loginForm');
     
     // Coleta os valores dos campos
     const email = form.email.value;
     const senha = form.senha.value;
   
     // Verifica se os campos estão preenchidos
     if (!email || !senha) {
       alert('Por favor, preencha todos os campos!');
       return;
     }
   
     // Cria um objeto com os dados de login
     const dadosLogin = {
       email: email,
       senha: senha
     };
   
     // Exibe os dados no console (apenas para debug)
     console.log('Tentativa de login com:', dadosLogin);
   
     // Exemplo de envio dos dados para um servidor (AJAX)
     fetch('https://seu-servidor.com/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(dadosLogin)
     })
       .then(response => {
         if (!response.ok) {
           throw new Error('Erro no login: ' + response.statusText);
         }
         return response.json();
       })
       .then(data => {
         // Lida com a resposta do servidor
         console.log('Login bem-sucedido:', data);
         alert('Bem-vindo, ' + data.nome);
         // Redireciona ou realiza outras ações
         window.location.href = '/dashboard';
       })
       .catch(error => {
         // Trata erros de login
         console.error('Erro ao fazer login:', error);
         alert('Falha no login. Verifique suas credenciais.');
       });
   }
   