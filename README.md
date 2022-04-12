# PasqualeMilone
                                                               ALURA GEEK - Front-End Challenge 3
                                    Este é um projeto de construção de um site e-commerce, proposto pela escola de tecnologia Alura.
                                          Em 6 semanas, devemos construir um site de e-commerce responsivo, que seja funcional.

##
3ª e 4ª Semanas - Implementações feitas e mudanças:

- Criação das páginas de cadastro de produtos para o administrador;
- Implementação de script para cadastro, edição e exclusão de produtos;
- Database usando o JSon Server

##
2ª Semana - Implementações feitas:

- Criação de uma página de produtos;
- Criação de uma página de Login;
- Criação de uma página de edição de produtos, para o administrador;
- Revisão total das regras de CSS nas páginas: agora as regras seguem o design orientado para mobile-first; as medidas foram alteradas para serem calculadas em REM;
    - as regras do cabeçalho; rodapé, formulário e autoria foram devidamente separadas em cada arquivo, tornando a leitura mais fácil e organizada; melhoras do padrão
    - BEM nas classes de CSS;
    
##

1ª Semana - Implementações feitas:

- Criação da Home-page;
- Implementação de um cabeçalho com: logo, busca de produtos e um botão de login para usuários;
- Implementação de um banner: Imagem ao fundo com uma caixa de textos e um botão de ação, para visitar a página dos produtos;
- Implementação de uma galeria de produtos: Uma divisória de 3 seções, com uma categoria, contendo uma linha com 6 produtos, seus nomes, preços e links;
-   As seções implementadas foram: Star Wars, Consoles e Diversos;
- Implementação de um Rodapé: contém logo, uma área de links para contato com a empresa do site, e um formulário de contato com nome e mensagem;
- Implementação de uma seção de autoria;

Pontos importantes:
- Não foi adicionado features com scripts nesta semana;
- Responsividade aplicada na home page;

##
3 e 4ª Semanas - Problemas e Revisões:

- Implementar scripts de validação de formulários e login;
- estilizar corretamente os botões de input type:file
- Resolver: fetch do da rota de cada produto pelo id da url;
    - Template String com {id} no final de "http://url/${id}" por alguma razão não funciona; DELETE method não funciona
    - Consequência: Não é possível deletar os produtos pelo database via o método DELETE;
- new ReadFile e readFileAsURL devolvem a imagem upada como objeto vazio ao invez de uma string;

##
2ª- Problemas e revisões.
A responsividade das páginas continua a ser um problema que precisa ser resolvido. O redimensionamento precisa ficar mais natural e fluído conforme a mudança de tamanho da página.

Regras de HTML e CSS - Potenciais melhoras:
- Revisar regras de HTML e CSS para deixar o código mais limpo.
- Rever se existem estilizações sem efeito e sem sentido.
- Alguma framework que facilite a responsividade?
- Atualizar dimensões da galeria de produtos na Página do Admin.
- Adicionar icones de edição e deletar em cada imagem na Página do Admin.
- Melhorar o posicionamento dos elementos do cabeçalho, quando este estiver na tela mobile
- Melhorar a barra de busca do cabeçalho para ficar mais próxima ao design proprosto.

##
1ª- Problemas e revisões.
A primeira dificuldade que precisa ser resolvida, é criar a responsividade da página. O uso de media queries foi utilizado para isso, porém existem pontos de 
quebra cegos que precisam ser resolvidos. Além disso, houveram situações em que regras de media query, para dimensões de tablet e desktop, pareciam sobrescrever e negar as regras das dimensões de mobile.

Regras de HTML e CSS - Potenciais melhoras:
- Revisar regras de HTML e CSS para deixar o código mais limpo.
