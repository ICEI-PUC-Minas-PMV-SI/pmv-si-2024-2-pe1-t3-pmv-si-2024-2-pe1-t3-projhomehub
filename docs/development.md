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
|RF-001| A aplicação deve permitir o usuário administrador criar, excluir, alterar e atribuir cargos a usuários. | ALTA | index.html |
|RF-002| A aplicação deve permitir ao usuário gestor ou líder acompanhar o desenvolvimento das trarefas. | ALTA | login/index.html |
|RF-003| A aplicação deve permitir que o gestor cadastre skills a serem desenvolvidas por membros individuais da equipe. | ALTA | Cadastro/FormUsuario.html |
|RF-004| A aplicação deve permitir ao usuário líder ou gestor a criação, atualização e exclusão de projetos. | ALTA | wireframe7/index.html |
|RF-005| A aplicação deve permitir ao usuário líder ou gestor delegar tarefas e funções a usuários individuais. | ALTA | wireframe8/index.html |
|RF-006| A aplicação deve permitir a criação de relatórios diversos relacionados aos projetos, como status do andamento, estatísticas de participação individual e de percentual de conclusão etc. | MÉDIA | login/index.html |
|RF-007| A aplicação deve permitir a notificação diversas dos usuários, incluindo prazos, comentários de outros usuários colaboradores e feedbacks recebidos do usuário líder ou gestor. | MÉDIA | CriaçãodeCampanhas/index.html |
|RF-008| A aplicação deve permitir ao usuário líder ou gestor o registro de feedbacks relacionados a tarefas e/ou usuários colaboradores individuais | ALTA | CEP/cep.html |


## Descrição das estruturas:

## LOGIN HOME HUB
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome         | Texto             | Nome para acessar o portal e perfil da ONG                         | pessoasdobem                                   |
| Senha       | Texto             | Senha de acesso à conta da ONG                      | 123Abc!@#                            |

## CADASTRO HOME HUB
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da organizadora da ONG            | 0001                                              |
| Nome         | Texto             | Nome para acessar o portal e perfil da ONG                         | CampanhaLopes                                   |
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

