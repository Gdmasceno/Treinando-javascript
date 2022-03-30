function calcular() {
    var com_desconto_faculdade = txt_saldo.value - 1600;
    var com_desconto_computador = com_desconto_faculdade - 190;
    var investimento = com_desconto_computador * 0.5;
    var desconto_investimento = com_desconto_computador - investimento;
    
    dv_resultado.innerHTML = `<p>Pagar faculdade <span>(1600)</span> : Sobrou <b id="cdf">R$${com_desconto_faculdade.toFixed(2)}</b></p>
    <p>Pagar parcela computador <span>(190)</span> : Sobrou <b id="cdc">R$${com_desconto_computador.toFixed(2)}</b></p>
    <p>Investir 50% : Valor que vou investir : <b id="i">R$${investimento.toFixed(2)}</b></p>
    <p>Restante lazer e ajudar em casa : <b id="di">R$${desconto_investimento.toFixed(2)}</b></p>`;

    if (com_desconto_faculdade < 0) {
        cdf.style.color = "red";
    }

    else if (com_desconto_faculdade > 0) {
        cdf.style.color = "green";
    }

    else {
        cdf.style.color = "orange";
    }

    if (com_desconto_computador < 0){
        cdc.style.color = "red";
    }

    else if (com_desconto_computador > 0){
        cdc.style.color = "green";
    }

    else {
        cdc.style.color = "orange";
    }

    if (investimento < 0){
        i.style.color = "red";
    }

    else if (investimento > 0){
        i.style.color = "green";
    }

    else {
        i.style.color = "orange";
    }

    if (desconto_investimento < 0){
        di.style.color = "red";
    }

    else if (desconto_investimento > 0){
        di.style.color = "green";
    }

    else {
        di.style.color = "orange";
    }
}