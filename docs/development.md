# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais
|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve conter uma página de cadastro para que o usuário possa criar sua conta no sistema, utilizando e-mail e senha. | ALTA | Cadastro.html |
|RF-002| A aplicação deve permitir ao usuário  acompanhar o desenvolvimento das trarefas. | ALTA | Main.html |
|RF-003| A aplicação deve incluir uma página inicial com conteúdo explicativo sobre o projeto, além de botões como 'Assine Agora', 'Acesse', 'Cadastre-se', entre outros. | ALTA | Sobre.html |
|RF-004| A aplicação deve permitir ao usuário acompanhar o progresso das suas tarefas e permitir a visualização de suas tarefas favoritas. | ALTA | Main.html |
|RF-005| A aplicação deve permitir ao usuário líder ou gestor delegar tarefas e funções a usuários individuais. | ALTA | Main.html |
|RF-006| A aplicação deve permitir a notificação diversas dos usuários, incluindo prazos, comentários de outros usuários colaboradores e feedbacks recebidos do usuário líder ou gestor. | MÉDIA | Main.html |
|RF-007| A aplicação deve permitir ao usuário líder ou gestor o registro de feedbacks relacionados a tarefas e/ou usuários colaboradores individuais | ALTA | Main.html |


## Descrição das estruturas:

## LOGIN HOME HUB
|  **Nome**      | **Tipo**          | **Descrição**                                    | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------------   ------------------------------------------------|                                          |
| Nome         | Texto             | Nome para acessar o portal e perfil da Homehub         | user                                |
| Senha       | Texto             | Senha de acesso à conta da HomeHub                     | 123                            |

## CADASTRO HOME HUB
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome         | Texto             | Nome para acessar o portal e perfil da HomeHub                         | Empresa Silva                                   |
| CNPJ       | Numero (Inteiro)             | Número de CNPJ da ONG                       | 65948129000167                            |
| CEP       | Numero (Inteiro)             | Código de Endereçamento Postal (CEP)                       | 30285560                            |
| Logradouro       | Texto             | Endereço de onde está localizado a ONG                       | Rua Sergipe                            |
| Camplemento       | Numero (Inteiro)             | Número da rua da ONG                       | 836                            |
| Bairro       | Texto             | Bairro da ONG                       | Funcionários                            |
| Cidade       | Texto             | Cidade situada da ONG                       | Belo Horizonte                            |
| Estado       | Seletor             | Seletor do Estado                       | Minas Gerais                             |
| E-mail       | Texto             | e-mail da ONG                       | doare@gmail.com                            |
| Telefone       | Texto             | Número de contado da ONG                       | (31) 983937546                            |
| Facebook       | Texto             | Facebook da ONG                       | @doare.oficial                            |
| Instagram       | Texto             | Instagram da ONG                       | @doeaqui                            |

## VERIFICAR
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome da Campanha    | Texto             | Nome de campanha                         | CampanhaLopes                                   |
| Causa(s) apoiada(s)       | Texto             | Causa que a campanha apoia                      | Meio ambiente                          |
| Vigência       | Seletor             | Seletor de vigencia                       | Continua                           | 
| Itens a serem arrecadados       | Texto             | Itens a serem arrecadados                        | Items de limpeza                             |       |

