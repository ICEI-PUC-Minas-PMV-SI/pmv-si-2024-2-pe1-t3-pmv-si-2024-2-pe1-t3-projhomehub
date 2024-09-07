# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Diagrama de Persona

## Mariana: Líder de equipe

Mariana é uma gerente de projetos de 32 anos com uma sólida experiência em liderança. Ela acumula 5 anos de experiência em gestão de equipe, dos quais 2 anos foram dedicados especificamente à gestão de equipes híbridas.

Objetivos:
Mariana busca implementar estratégias para melhorar o desempenho individual e coletivo de sua equipe.

Desafios:
Seus principais desafios incluem gerenciar a comunicação entre membros remotos e presenciais, além de manter o engajamento da equipe.

Necessidades:
Para superar seus desafios, Mariana necessita de ferramentas que permitam monitorar o desempenho da equipe e facilitem a comunicação e a gestão de tarefas.

## Luiz: Colaborador Híbrido

Luiz é um desenvolvedor de software de 27 anos, representando o perfil do colaborador que trabalha em um modelo híbrido. Ele possui 4 anos de experiência como desenvolvedor, sendo o último ano em ambientes híbridos.

Objetivos:
Luiz está focado em melhorar suas habilidades profissionais e realizar suas tarefas de forma eficiente.

Desafios:
Os principais desafios de Luiz incluem gerenciar seu tempo de trabalho e sentir-se parte integrante da equipe, mesmo trabalhando remotamente em parte do tempo.

Necessidades:
Para enfrentar seus desafios, Luiz necessita de sistemas eficientes para gerenciamento de tarefas e ferramentas que promovam uma comunicação eficaz com a equipe.

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

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----|
|RF-001| A APLICAÇÃO DEVE PERMITIR O USUÁRIO CRIAR, EXCLUIR, ATRIBUIR CARGOS A USUÁRIOS |  ALTA |
|RF-002| A APLICAÇÃO DEVE PERMITIR O ACOMPANHAMENTO DO DESENVOLVIMENTO DAS TRAREFAS  |  ALTA |
|RF-003| A APLICAÇÃO DEVE PERMITIR A ORGANIZAÇÃO E CAPACITAÇÃO DA EQUIPE PARA UMA INTEGRAÇÃO ENTRE USUÁRIOS |  ALTA |
|RF-004| A APLICAÇÃO DEVE PERMITIR A CRIAÇÃO E ALTERAÇÃO DE PROJETOS |  ALTA |
|RF-005| A APLICAÇÃO DEVE PERMITIR A CAPACIDADE DE DELEGAR TAREFAS E FUNÇÕES A USUÁRIOS DEFINIDOS |  ALTA |
|RF-006| A APLICAÇÃO DEVE PERMITIR CRIAR E COMENTAR RELATÓRIOS RELACIONADOS DIRETAMENTE AOS PROJETOS | MÉDIA | 
|RF-007| A APLICAÇÃO DEVE PERMITIR A NOTIFICAÇÃO DOS USUÁRIOS  | MÉDIA |
|RF-008| A APLICAÇÃO DEVE PERMITIR O DIRECIONAMENTO DE FEEDBACKS DIRETOS OU INDIRETOS PARA TAREFAS E/OU USUÁRIOS  |  ALTA |
|RF-009| A APLICAÇÃO DEVE OPERAR DIRETAMENTE COM OUTROS SISTEMAS E PLATAFORMAS | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ter uma interface responsiva que funcione corretamente em diferentes dispositivos e tamanhos de  tela. | ALTA | 
|RNF-002| A aplicação deve ser capaz de detectar e bloquear automaticamente qualquer atividade suspeito.  |  ALTA | 

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
|02| O projeto deverá ser etapas por semana, com reuniões todas Quintas=Feiras |
|03| Devem ser utilizadas linguagens WEB pro projeto |
|04| O projeto deve apresentar linguagem Bootstrap |
|05| Os artefatos do projeto não podem ser produzidos a partir de geradores de código |
|06| Todas atividade devem possuir escopos, para que seja visualizado oque será incluído na atividade. |
|07| Toda atualização feita deve ser incrementada onde esta o acompanhamento do projeto. Exemplo: KANBAN |
|08| Todo recurso que for pensado pro projeto devera se consultado antes a opinião da equipe. |





Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
