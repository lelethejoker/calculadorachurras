function calcularValor() {
// <Pegar os número de pessoa dos inputs>
            const numeroH = document.getElementById('numeroHomens').value;
                const convertidoH = parseFloat(numeroH);
            const numeroM = document.getElementById('numeroMulheres').value;
                const convertidoM = parseFloat(numeroM);
            const numeroC = document.getElementById('numeroCrianca').value;
                const convertidoC = parseFloat(numeroC);
// </Pegar o número de pessoa dos inputs>

// <Prevenção de erros>
    if(isNaN(convertidoH)) {
        alert("Favor inserir um número válido de Homens")
        return;
    } else if(isNaN(convertidoM)) {
        alert("Favor inserir um número válido de Mulheres")
        return;
    } else if(isNaN(convertidoC)) {
        alert("Favor inserir um número válido de Crianças")
        return;
    }
// </Prevenção de erros>
    
// <Calcular o quanto de carne será preciso>
            const carneH = convertidoH * 500
            const carneM = convertidoM * 300
            const carneC = convertidoC * 200
                const carneResultado = carneH + carneM + carneC
// </Calcular o quanto de carne será preciso>
    
// <Calcular o quanto de frango será preciso>
            const frangoH = convertidoH * 200
            const frangoM = convertidoM * 200
            const frangoC = convertidoC * 100
                const frangoResultado = frangoH + frangoM + frangoC
// </Calcular o quanto de carne será preciso> 
    
// <Calcular o quanto de linguiça será preciso>
            const lingH = convertidoH * 200
            const lingM = convertidoM * 200
            const lingC = convertidoC * 200
                const lingResultado = lingH + lingM + lingC
// </Calcular o quanto de linguiça será preciso>
    
// <Calcular o quanto de refrigerante será preciso>
            const refriH = convertidoH * 300
            const refriM = convertidoM * 400
            const refriC = convertidoC * 200
                const refriResultado = refriH + refriM + refriC
// </Calcular o quanto de refrigerante será preciso>
    
// <Calcular o quanto de cerveja será preciso>
            const cervaH = convertidoH * 800
            const cervaM = convertidoM * 500
                const cervaResultado = cervaH + cervaM
// </Calcular o quanto de cerveja será preciso>

// <Enviar o resultado para o HTML>
    document.getElementById('carne').innerText = `${carneResultado / 1000} Quilos de carne`
    document.getElementById('frango').innerText = `${frangoResultado / 1000} Quilos de frango`
    document.getElementById('ling').innerText = `${lingResultado / 1000} Quilos de linguiça`
    document.getElementById('refri').innerText = `${refriResultado / 1000} Litros de refrigerante`
    document.getElementById('cerva').innerText = `${cervaResultado / 1000} Litros de cerveja`
// </Enviar o resultado para o HTML>
}