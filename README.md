##  Autor
Pedro Tiago
## Demo
https://loan-64640.web.app

##  Visão Geral do Projeto
O objetivo deste desafio é desenvolver uma interface de usuário completa (Front-end) com uma lógica robusta de cálculo (Back-end) para simular empréstimos, processando datas, valor e taxa de juros, e apresentando um plano de pagamento detalhado.

O projeto visa aferir conhecimentos em **lógica de programação**, **arquitetura de software**, **desenvolvimento Front-end** (HTML, CSS, JavaScript/Frameworks) e **desenvolvimento Back-end** (Java/Spring Boot).

##  Requisitos Funcionais

A aplicação deve apresentar uma tela com os seguintes elementos:

### 1. Campos de Entrada (Obrigatórios)
| Campo | Tipo | Validação |
| :--- | :--- | :--- |
| **Data Inicial** | Data | Obrigatório |
| **Data Final** | Data | Obrigatório (Deve ser **maior** que a Data Inicial) |
| **Primeiro Pagamento** | Data | Obrigatório (Deve ser **maior** que a Data Inicial e **menor** que a Data Final) |
| **Valor do Empréstimo** | Numérico | Obrigatório |
| **Taxa de Juros** | Numérico | Obrigatório |

### 2. Botão de Ação
* Um botão "Calcular" que deve ser **habilitado** apenas após o preenchimento válido de todos os cinco campos.
* Ao clicar, a rotina de cálculo deve ser executada.

### 3. Grid de Exibição
* Uma tabela/grid para exibir o resultado do cálculo, mostrando as datas e seus respectivos valores calculados.


### Regras de Geração de Datas (Grid)
1.  A **Data Final** sempre será um pagamento de parcela.
2.  A grade deve listar a **Data Inicial**, a **Data Final** e **todas as datas de fim de mês** que caem entre a Data Inicial e a Data Final.
3.  **Parcelas:** Todos os meses entre a Data do Primeiro Pagamento e a Data Final deverão ter uma parcela no dia do primeiro pagamento.

> ** Observação Importante sobre Pagamentos:**
> Se a data do Primeiro Pagamento for o último dia do mês (ex: `31/01/2024`), o próximo pagamento deverá cair no **último dia do mês seguinte** (ex: `29/02/2024`). A lógica deve tratar corretamente os finais de mês (30, 31, e 28/29 de Fevereiro).

## Tecnologias Utilizadas

| Camada | Tecnologia/Framework | Versão/Justificativa |
| :--- | :--- | :--- |
| **Front-end** | **React** | 18.2.0 |
| | **JavaScript** | Linguagem principal |
| | **CSS** | Para estilização, semântica e acessibilidade |
| **Back-end** | **Java** | 17 |
| | **Spring Boot** | 7 |

## Como Rodar o Projeto

### Pré-requisitos
* **JDK** (Java Development Kit) 11 ou superior
* **Node.js** e **npm/yarn** (para a aplicação Front-end)
* IDE de sua preferência (IntelliJ, VSCode, Eclipse)
