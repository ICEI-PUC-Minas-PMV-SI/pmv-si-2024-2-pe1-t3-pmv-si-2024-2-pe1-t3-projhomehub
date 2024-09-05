# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

Fiz o diagrama de personas com base em nosso projeto, qualquer dúvida estou á disposição. 

[Diagrama de personas.pdf](https://github.com/user-attachments/files/16880450/Diagrama.de.personas.pdf)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Líder de equipe     | Notificações automáticas enviadas em prazos de entregas se aproximando| Não perder o prazo limite de entrega  | 
|Líder de equipe     | Acompanhar o progresso de cada membro da equipe de forma clara e em tempo real  | Manter o controle dos processos  | 
|Usuários do sistema | As tarefas organizadas de maneira visível e de fácil acesso para todos os colaboradores   | Facilitar o desempenho da equipe em conjuto  |   

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Exemplo | Prioridade | 
|------|-----------------------------------------|----|----|
|RF-01|GERENCIAMENTO DE USUARIOS| A aplicação deve permitir que o usuário gerencie suas tarefas | CRIAÇÃO DE USUÁRIO E SENHA |  ALTA |
|RF-02| ACOMPANHAMENTO DE TAREFAS| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | BOARD COM INDICATIVOS MOSTRANDO O QUE FOI FINALIZADO NA TAREFA |  ALTA |
|RF-03| CENTRALIZAÇÃO DA COMUNICAÇÃO| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | CHAT INTEGRADO COM TODA A EQUIPE|  ALTA |
|RF-04| GESTÃO DE PROJETOS| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | PÁGINA DEDICADA A CRIAÇÃO DE PROJETOS COM DESCRIÇÃO E FUNÇÕES|  ALTA |
|RF-04.1| ATRIBUIÇÃO DE TAREFAS| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | HUD INTEGRADO COM AS TAREFAS E OS USUÁRIOS|  ALTA |
|RF-04.2| RELATÓRIOS DE PROJETOS| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   |HUD INTEGRADO COM A EQUIPE PARA RELATÓRIOS DIARIOS/SEMANAIS OU MENSAIS| MÉDIA | 
|RF-05| NOTIFICAÇÕES AUTOMATICAS| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   |POP-UPS SOBRE MODIFICAÇÕES OU ALERTAS DE TAREFAS|  MÉDIA |
|RF-06| FEEDBACKS| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | ESPAÇO PARA A CRIAÇÃO, VISUALIZAÇÃO E INTERAÇÃO COM FEEDBACKS DIRETOS OU PARTICIONADOS A EQUIPES|  ALTA |
|RF-07| INTEGRABILIDADE| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | INTEGRAÇÃO COM FERAMENTAS OFFICE|  MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Os artefatos do projeto não podem ser produzidos a partir de geradores de código |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
