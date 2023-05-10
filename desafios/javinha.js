
// trabalho de Sérgio e Yohanni

let inicioSemana ={
    celular:150,
    foneOuvidos:55,
    pendrive:37,
    caixaAudio:28,
    tablet:32,
    carregadorPortátil:29,
};

let vendas ={
    celular:38,
    foneOuvidos:10,
    pendrive:17,
    caixaAudio:8,
    tablet:5,
    carregadorPortátil:15,
};


function calcularEstoque(inicioSemana,vendas){
let estoqueFinal = {};
for (let produto in inicioSemana){
    let unidadeinicial =  inicioSemana[produto];
    let unidadesVendidas =  vendas[produto];
    let unidadesRestantes = unidadeinicial-unidadesVendidas;
    estoqueFinal[produto] = unidadesRestantes;
}
return estoqueFinal;
}

let estoqueFinal = calcularEstoque(inicioSemana,vendas);
console.log("estoque final:");
console.log(estoqueFinal);