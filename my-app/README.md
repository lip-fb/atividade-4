# Lista de Tarefas em React

Este é um projeto simples de **lista de tarefas** desenvolvido em React. Ele permite adicionar, editar, marcar como completa e excluir tarefas. O projeto foi desenvolvido com uma arquitetura modular, dividindo a aplicação em vários componentes reutilizáveis.

## Funcionalidades

- Adicionar novas tarefas com descrição, responsável, prazo e prioridade.
- Exibir as tarefas em uma lista organizada.
- Marcar tarefas como completas ou pendentes.
- Excluir ou editar tarefas existentes.
- Design responsivo e visual simples.

## Componentes

- **App.js**: Componente principal que gerencia o estado da aplicação e a lógica das tarefas.
- **FormularioTarefa.js**: Formulário para criar ou editar tarefas.
- **ListaTarefas.js**: Lista todas as tarefas.
- **Tarefa.js**: Exibe os detalhes de uma tarefa individual.
- **Card.js**: Componente genérico de layout que usa o atributo children para exibir o conteúdo das tarefas.

## Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados em sua máquina.

### Passos para Rodar Localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/lista-de-tarefas-react.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd lista-de-tarefas-react
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

5. Abra o navegador e acesse:
    ```plaintext
    http://localhost:3000
    ```

## Tecnologias Utilizadas

- React.js
- HTML5 e CSS3
- JavaScript (ES6+)

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
