# Garoa - Ambient sound

[Garoa - Ambient sound](https://devmeinerz.github.io/garoa)

Página com sons naturais, legal para deixar como fundo para estudo, leitura, etc.
Intuito de praticar HTML, CSS e JS.

Alguns pontos a observar:
- havina feito uma responsividade para mobile apenas (comecei pelo desktop, mesmo sabendo que já é uma boa prática iniciar pelo mobile) e testei algumas uniades de medida, testei vh e rem, provavelmente não ficará legal em todos dispositivos, continuo praticando até chegar num consenso ideal.

- o título da página era, originalmente, feito com h1 e h2. Como o h2 precisava de uma margin negativa para ficar mais "colado" ao h1, isso acarretava problemas em dispositivos menores. Depois de tentar várias soluções acabei trocando os títulos de texto por uma imagem fixa.

- os arquivos de som são nativos. Queria fazer alguma opção que carregasse os audios somente quando o play for acionado, ou que a página toda fosse carregada completamente após o download dos arquivos. Creio que envolva alguma função onload no HTML, mas ainda não sei como aplicar.

- os áudios, por serem curtos, são reproduzidos em looping. O looping nativo do HTML possui um gap entre cada reprodução. Coloquei uma função que calcula os tempos de execução e subtrai uma fração desse tempo (até que deu certo).

- também estou praticando mais os comandos do git.

- para qualquer dica ou sujestão, será um prazer conversar, tendo em vista que comecei há pouco tempo.

[Meu linkedin](https://www.linkedin.com/in/raul-meinerz/)

![](https://github.com/devmeinerz/garoa/blob/main/assets/add/garoa.png)
