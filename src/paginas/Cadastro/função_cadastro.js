function coletarDados() {
     // Obtem o formulário pelo ID
     const form = document.getElementById('cadastroForm');
     
     // Coleta os valores dos campos
     const nome = form.nome.value;
     const email = form.email.value;
     const senha = form.senha.value;
     
     // Cria um objeto com os dados
     const dados = {
       nome: nome,
       email: email,
       senha: senha
     };
     
     // Exibe os dados no console (ou pode enviar a um servidor)
     console.log('Dados coletados:', dados);
   
     // Retorna os dados para possível uso
     return dados;
   }
   