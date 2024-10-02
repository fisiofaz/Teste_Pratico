/* Passo a Passo:
Nomeação dos interruptores: Para facilitar, vamos nomear os interruptores de A, B e C.

Primeira Ação (Primeira ida):

Ligue o interruptor A e deixe ligado por um tempo suficiente para que a lâmpada aqueça (digamos 5 minutos).
Após o tempo passar, desligue o interruptor A.
Ligue o interruptor B e vá até a sala das lâmpadas.
Primeira Observação (na sala das lâmpadas):

Haverá três possibilidades:
A lâmpada que está acesa: Essa lâmpada corresponde ao interruptor B, porque você o deixou ligado antes de ir à sala.
A lâmpada que está apagada, mas quente: Essa lâmpada corresponde ao interruptor A, porque você a deixou ligada por um tempo, mas a desligou antes de sair.
A lâmpada que está apagada e fria: Essa lâmpada corresponde ao interruptor C, que você nunca ligou.
Com essa abordagem, você descobre qual interruptor controla cada lâmpada em apenas uma ida à sala das lâmpadas. */

function discoverLamps() {
    // Situação inicial: todas as lâmpadas estão desligadas
    let lampA = { state: "off", hot: false }; // Controlada pelo interruptor A
    let lampB = { state: "off", hot: false }; // Controlada pelo interruptor B
    let lampC = { state: "off", hot: false }; // Controlada pelo interruptor C

    // Primeira ação: ligue o interruptor A e espere (a lâmpada A aquece)
    lampA.state = "on";
    lampA.hot = true; // Após 5 minutos, a lâmpada está quente

    // Desligue o interruptor A
    lampA.state = "off";

    // Ligue o interruptor B e vá para a sala das lâmpadas
    lampB.state = "on";

    // Checando o estado das lâmpadas
    if (lampB.state === "on") {
        console.log("Lâmpada acesa: controlada pelo interruptor B");
    }
    if (lampA.hot && lampA.state === "off") {
        console.log("Lâmpada apagada, mas quente: controlada pelo interruptor A");
    }
    if (lampC.state === "off" && !lampC.hot) {
        console.log("Lâmpada apagada e fria: controlada pelo interruptor C");
    }
}

// Executa a simulação
discoverLamps();
