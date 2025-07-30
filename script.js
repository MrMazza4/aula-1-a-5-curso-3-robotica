const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                consequencia: "Você fica desconfiado e começa a se preocupar com os limites da tecnologia."
            },
            {
                texto: "Isso é maravilhoso!",
                consequencia: "Você se anima com as possibilidades e quer explorar mais."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                consequencia: "Você aprendeu com a IA e usou ela como aliada para entender melhor o conteúdo."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                consequencia: "Você preferiu se apoiar nas fontes tradicionais e interações humanas."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                consequencia: "Você acredita no potencial transformador da tecnologia."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                consequencia: "Você demonstra preocupação social e responsabilidade."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                consequencia: "Você quis expressar sua criatividade manualmente."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                consequencia: "Você usou a IA como ferramenta artística."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                consequencia: "Você vê o uso da IA como uma extensão da criatividade do grupo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                consequencia: "Você valoriza a colaboração humana junto à IA."
            }
        ]
    }
];

let atual = 0;

function mostraPergunta() {
    // Limpa alternativas e resultado
    caixaAlternativas.innerHTML = "";
    caixaResultado.style.display = "none";

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.classList.add("botao-alternativa");
        botao.addEventListener("click", () => mostraConsequencia(alternativa.consequencia));
        caixaAlternativas.appendChild(botao);
    });
}

function mostraConsequencia(texto) {
    caixaResultado.style.display = "block";
    textoResultado.textContent = texto;

    setTimeout(() => {
        atual++;
        if (atual < perguntas.length) {
            mostraPergunta();
        } else {
            mostraFinal();
        }
    }, 2000);
}

function mostraFinal() {
    caixaPerguntas.textContent = "Fim da narrativa";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "Parabéns! Você refletiu sobre os usos da IA e tomou decisões importantes.";
    caixaResultado.style.display = "block";
}

mostraPergunta();
