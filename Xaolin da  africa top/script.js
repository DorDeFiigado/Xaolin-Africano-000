const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você chega ao velho templo onde seu mestre costumava meditar. O lugar está silencioso, mas você sente uma presença ameaçadora. Diante de você há duas entradas principais no templo: uma leva ao jardim central, onde você pode procurar pistas, e a outra leva diretamente ao salão principal, onde você pode confrontar diretamente seu mestre. Qual escolha você faz?",
        alternativas: [
            {
                texto: "Ir ao jardim central para procurar pistas.",
                afirmacao: "Você decide explorar o jardim central. Entre as plantas e os antigos pergaminhos espalhados, você encontra uma mensagem escondida embaixo de uma pedra. A mensagem é um enigma que sugere um segredo profundo sobre a traição do mestre. No entanto, você ouve ruídos vindo do salão principal."
            },
            {
                texto: "Ir diretamente ao salão principal para confrontar seu mestre.",
                afirmacao: "Você entra no salão principal, e lá está seu mestre, o polvo. Ele está em uma posição de meditação, mas percebe sua chegada e se levanta calmamente. Há uma tensão no ar. O polvo parece preparado para uma batalha ou uma conversa."
            }
        ]
    },
    {
        enunciado: "No jardim central, você encontra uma mensagem enigmática sobre a traição do seu mestre. Você ouve ruídos vindo do salão principal. O que você faz?",
        alternativas: [
            {
                texto: "Decifrar a mensagem para entender melhor a traição.",
                afirmacao: "Você decifra a mensagem e descobre que seu mestre havia sido forçado a trair você devido a uma ameaça maior, um inimigo antigo que ele não podia enfrentar sozinho. Essa nova informação revela um dilema: continuar sua busca por vingança ou tentar unir forças para enfrentar um perigo maior."
            },
            {
                texto: "Seguir para o salão principal imediatamente, agora com uma possível vantagem.",
                afirmacao: "Você corre para o salão principal, determinado a enfrentar seu mestre com as novas informações. O polvo percebe sua determinação e se prepara para o confronto."
            }
        ]
    },
    {
        enunciado: "Você entra no salão principal e vê seu mestre, o polvo, em uma posição de meditação. Ele percebe sua chegada e se levanta calmamente. Como você se posiciona?",
        alternativas: [
            {
                texto: "Desafiar o mestre para um combate imediato.",
                afirmacao: "Você desafia seu mestre para uma luta. Ele aceita, e uma batalha épica se desenrola. Durante a luta, o polvo revela a verdade sobre sua traição e a razão pela qual fez o que fez. Ele implora por uma chance de explicar e se redimir."
            },
            {
                texto: "Tentar conversar e descobrir as razões por trás da traição.",
                afirmacao: "Você tenta conversar com seu mestre para entender as razões por trás da traição. Ele revela uma verdade dolorosa, e você percebe que o caminho da redenção é mais complexo do que a simples vingança."
            }
        ]
    },
    {
        enunciado: "Você descobre que seu mestre foi forçado a trair você devido a uma ameaça maior. Qual será sua próxima ação?",
        alternativas: [
            {
                texto: "Ir atrás do inimigo mencionado na mensagem para proteger seu mestre e vingar a traição.",
                afirmacao: "Você decide enfrentar o inimigo maior mencionado na mensagem. Junto com seu mestre, você batalha contra essa nova ameaça, salvando o templo e revelando uma conspiração maior. Seu mestre lhe agradece e se redime por suas ações passadas."
            },
            {
                texto: "Continuar sua busca pessoal por vingança, ignorando a nova ameaça.",
                afirmacao: "Você ignora a nova ameaça e continua sua busca por vingança. A batalha com seu mestre se torna mais intensa, mas a vingança cega o leva a questionar se a justiça foi realmente feita."
            }
        ]
    },
    {
        enunciado: "Após uma intensa batalha ou uma conversa reveladora, você se depara com uma decisão crítica sobre o futuro do seu mestre e o seu próprio futuro. O que você escolhe?",
        alternativas: [
            {
                texto: "Aceitar a explicação e dar uma chance para a redenção.",
                afirmacao: "Você dá a seu mestre a oportunidade de explicar a traição. Ele revela uma verdade dolorosa, e você decide se reconciliar ou seguir um novo caminho. A vingança pode ter sido deixada de lado, mas a justiça foi feita e novas alianças foram formadas."
            },
            {
                texto: "Continuar o combate até o fim, sem dar ouvidos às explicações.",
                afirmacao: "Você continua o combate até o fim, ignorando as explicações. A luta é feroz, mas ao final, você percebe que a vingança pode ter um custo maior do que imaginava."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 1855...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
