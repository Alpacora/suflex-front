# Densenvolvido por Kaê Teixeira Benning Leal - Suflex

- Esclarecimentos
- Como rodar o projeto
- Estrutura do projeto & tomadas de decisão
- Features finalizadas

# Esclarecimentos
Gostaria de agradecer a atenção da equipe Suflex pela entrevista e agora por este desafio.
<br>
Não consegui finalizar o front-end 100%, devido a falta de tempo mesmo, recebi o desafio no final da tarde da sexta-feira (09) quando eu estava saindo do estado do Ceará à caminho da minha casa em Pernambuco, só comecei a executar o desafio de fato mesmo, no domingo. O desafio foi simples, bem formulado, porém longo.

# Como rodar o projeto
- Clone o projeto em sua máquina
- Rode yarn ou npm install para instalar as dependências
- por último rode yarn dev
- Verifique o arquivo src/service/apolloClient.tsx e veja se as urls estão de acordo para rodar em sua máquina local 
<br><strong>OBS: Não fiz configurações de ENV para deixar mais simples, já que não ia dar tempo de publicar o projeto, todo o projeto, tanto o front quando o back rodam localmente</strong> 

# Estrutura do projeto & tomadas de decisão
Decidi criar o projeto com o VITE já que atualmente vem ganhando grande espaço no mercado devido ao ES Build, e realmente,  é incrível. Como era um desafio me desafiei também a sair da zona de conforto do Styled Components e estilizar utilizando Tailwind já que é uma ferramenta utilizada dentro da Suflex. Entretanto o projeto comporta uma estrutura básica de pastas e componentes bem conhecida no mercado, de fácil entendimento e manutenção. Gostria de ter implementando um esquema de temas para deixar de utilizar hex code ou rgba, acabei dando prioridade a outras features.

# Features finalizada
- Login (Com Contexto)
- Cadastro
- Todo o sistema de filtro 
- Favoritos Local (apenas local, faltou integrar com o back)
