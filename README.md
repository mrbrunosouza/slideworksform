# Projeto de formulário para criação de cartões em listas do Trello

Projeto desenvolvido para criação de cartões em um quadro público do Trello.

## Clone do projeto

Para clonar o projeto, clique em 'Code' no github, e depois copie a url via HTPPS, SSH ou GitHub CLI.

### `yarn`

Após clonar o projeto em sua máquina, execute o comando `yarn` para instalar todas as dependências.

### Key, Token e idBoard

Acesse o Trello desenvolvedores e solicite sua key e token.

Crie um novo arquivo `.env.local`, copie os dados do arquivo `.env.example` e insira sua key e token nos campos descritos.

Insira também o id do board que serão incluídos os cards.


### Funcionalidades desenvolvidas

Name: Campo onde será inserido o nome do card a ser criado.
E-mail: Campo de e-mail que ficará junto com a descrição do card.
TextArea: Informar a descrição do card.

Checkbox: Campos que criarão checklists no card, que caso selecionados, será marcados como executados no card.

Listas: Colunas criadas no board, que ao selecionar, o card será criado na coluna selecionada.

Tags: Botões de seleção que definirá labels no card, sendo separados por cores e nomes.

Enviar: Botão de submit do formulário.

## Use a ferramenta

Acesse o board do Trello: [Teste Slideworks](https://trello.com/b/u3Kyq6AR/teste-slideworks).
Acesse o formulário: [Formulário de cards]()
