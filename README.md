# Testes Automatizados com Playwright

Este projeto consiste em testes automatizados utilizando Playwright para verificar o comportamento do site [https://automationtest.shop/index.php](https://automationtest.shop/index.php).

## Como Usar

Siga estas instruções para baixar, instalar e executar os testes automatizados.

## Pré-requisitos

- Ter o Node.js instalado
- Editor de Codigo utilizado - Visual Studio Code
- Navegador Chrome, Firefox ou WebKit (instalado automaticamente pelo Playwright)

## Instalação

1. Navegue até o diretório onde deseja executar os testes e abra-o no seu editor de código de preferência
   
2. Abra o terminal de comando na raiz do projeto
   
3. Instale o Playwright

   ```bash
   npm init playwright@latest
   ```

## Executando os Testes

1.  A primeira etapa é definir o que você deseja automatizar.

2.  Em seguida, utilize as funções e métodos fornecidos pelo Playwright para interagir com elementos da página, como clicar em botões, preencher formulários, navegar entre páginas e validar textos. O passo a passo para realizar essas ações estão na documentação oficial do Playwright na seção de referências, que possui um link no final da página.


3. Execute o teste:

   Execute uma das abordagens abaixo no terminal de comando.

   - Para executar no modo UI, que permite explorar, executar e depurar testes através da interface do Playwright

   ```bash
   npx playwright test --ui
   ```

   - Para executar no modo debug, permitindo inspecionar cada estado da página 

   ```bash
   npx playwright test --debug
   ```

   - Para executar no modo headless, onde nenhum navegadir sera aberto.

   ```bash
   npx playwright test
   ```

   Isso iniciará a execução dos testes no navegador Chromium. Você pode substituir `chromium` por `firefox` ou `webkit` para executar os testes em outros navegadores.

## Referências

Para mais informações sobre o Playwright, consulte a [documentação oficial do Playwright](https://playwright.dev/).
