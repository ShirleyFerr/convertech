
// funções para aparecer a div da calculadora escolhida
function esconderDivPrincipal() {
    var elementos = document.querySelectorAll(".hidden");
    elementos.forEach(function (elemento) {
        elemento.style.display = "none";
    });
}

function converterBases() {
    esconderDivPrincipal();
    divConverterBases.style.display = "flex"; 
}

function calculadoraBases() {
    esconderDivPrincipal();
    divCalculadoraBases.style.display = "flex"; 

}

function converterDados() {
    esconderDivPrincipal();
    divConverterDados.style.display = "flex"; 

}


// script conversor de bases

function btn_converterBases() {
    var numUser = Number(iptNumberConv.value);
    var baseUser = iptBaseUser.value;
    var baseConverte = iptBaseConv.value;

    var decimal = '';
    var resposta = ``;

    
    
    // validação dos valores inseridos 
    if (baseUser == 'decimal' && isNaN(numUser)) {
        if (baseUser == 'decimal') {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``;
            return;
        } else if (baseUser == 'binario' && !/^[01]+$/.test(numUser)) {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``;
            return;
        } else if (baseUser == 'octal' && !/^[0-7]+$/.test(numUser)) {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``;
            return;
        } else if (baseUser == 'hexadecimal' && !/^[0-9A-Fa-f]+$/.test(numUser)) {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``;
            return; 
        } 
    }
        
        //passar pra decimal
        if (baseUser == 'decimal') {
            decimal = parseInt(numUser, 10);
        } else if (baseUser == 'binario') {
            decimal = parseInt(numUser, 2);
        } else if (baseUser == 'octal') {
            decimal = parseInt(numUser, 8);
        } else if (baseUser == 'hexadecimal') {
            decimal = parseInt(numUser, 16);
        }
        
        //converter de decimal para a base escolhida
        if (baseConverte == 'decimal') {
            decimal = decimal;
            resposta = `<br><span> ${decimal}</span>`;
        } else if (baseConverte == 'binario') {
            var binario = decimal.toString(2)
            resposta = `<br><span>${binario}</span>`;
        } else if (baseConverte == 'octal') {
            var octal = decimal.toString(8);
            resposta = `<br><span>${octal}</span>`;
        } else if (baseConverte == 'hexadecimal') {
            var hexadecimal = decimal.toString(16);
            resposta = `<br><span>${hexadecimal.toUpperCase()}</span>`;
        }
        resultadoConversaoBase.innerHTML = resposta;
    }


// script calculadora* de bases

function btn_calculadoraBases() {
    var num1 = iptNumber1.value;
    var num2 = iptNumber2.value;

    var base = iptBaseCalculo.value;

    var soma = ``;
    var subtracao = ``;
    var divisao = ``;
    var multiplicacao = ``;


    // validação dos números com a base escolhida

    if (base == 'decimal') {
        if (isNaN(Number(num1)) || isNaN(Number(num2))) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
            return;
        }
    } else if (base == 'binario') {
        if (!/^[01]+$/.test(num1) || !/^[01]+$/.test(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
            return;
        }
    } else if (base == 'octal') {
        if (!/^[0-7]+$/.test(num1) || !/^[0-7]+$/.test(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
            return;
        }
    } else if (base == 'hexadecimal') {
        if (!/^[0-9A-Fa-f]+$/.test(num1) || !/^[0-9A-Fa-f]+$/.test(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
            return;
        }
    }

    if (base == "decimal") {
        soma = Number(num1) + Number(num2);
        subtracao = num1 - num2;
        divisao = num1 / num2;
        multiplicacao = num1 * num2;
    }

    if (base == "binario") {
        num1 = parseInt(num1, 2); 
        num2 = parseInt(num2, 2); 
        soma = num1 + num2;
        subtracao = num1 - num2;
        divisao = num1 / num2;
        multiplicacao = num1 * num2;
    }

    if (base == "octal") {
        num1 = parseInt(num1, 8); 
        num2 = parseInt(num2, 8);
        soma = num1 + num2;
        subtracao = num1 - num2;
        divisao = num1 / num2;
        multiplicacao = num1 * num2;
    }

    if (base == "hexadecimal") {
        num1 = parseInt(num1, 16); 
        num2 = parseInt(num2, 16);
        soma = (num1 + num2).toString(16).toUpperCase();
        subtracao = (num1 - num2).toString(16).toUpperCase();
        divisao = (num1 / num2).toString(16).toUpperCase();
        multiplicacao = (num1 * num2).toString(16).toUpperCase();
    }

    resulBaseCalc.innerHTML = `
    <span>Soma: ${soma}</span>
    <span>Subtração: ${subtracao}</span>
    <span>Divisão: ${divisao}</span>
    <span>Multiplicação: ${multiplicacao}</span> 
    `;

}

// script conversão de dados
function btn_converterDados() {
    var valor = parseFloat(document.querySelector('input[type="number"]').value);
    var unidadeOrigem = document.getElementById('iptUnidade').value;
    var unidadeDestino = document.getElementById('iptUnidadeConversao').value;

    
    // bit caminho da luz
    var conversaoBit = 1;
    var conversaoByte = 8;
    var conversaoKbyte = 8 * 1024;
    var conversaoMgbyte = 8 * 1024 * 1024;
    var conversaoGigabyte = 8 * 1024 * 1024 * 1024;
    var conversaoTerabyte = 8 * 1024 * 1024 * 1024 * 1024;

    var valorEmBits = ``;

    
    if (unidadeOrigem === 'bit') {
        valorEmBits = valor * conversaoBit;
    } else if (unidadeOrigem === 'byte') {
        valorEmBits = valor * conversaoByte;
    } else if (unidadeOrigem === 'kbyte') {
        valorEmBits = valor * conversaoKbyte;
    } else if (unidadeOrigem === 'mgbyte') {
        valorEmBits = valor * conversaoMgbyte;
    } else if (unidadeOrigem === 'gigabyte') {
        valorEmBits = valor * conversaoGigabyte;
    } else if (unidadeOrigem === 'terabyte') {
        valorEmBits = valor * conversaoTerabyte;
    } else {
        valorEmBits = 0;
    }

    // Converter os bits para a unidade de destino
    var valorConvertido;

    if (unidadeDestino === 'bit') {
        valorConvertido = valorEmBits / conversaoBit;
    } else if (unidadeDestino === 'byte') {
        valorConvertido = valorEmBits / conversaoByte;
    } else if (unidadeDestino === 'kbyte') {
        valorConvertido = valorEmBits / conversaoKbyte;
    } else if (unidadeDestino === 'mgbyte') {
        valorConvertido = valorEmBits / conversaoMgbyte;
    } else if (unidadeDestino === 'gigabyte') {
        valorConvertido = valorEmBits / conversaoGigabyte;
    } else if (unidadeDestino === 'terabyte') {
        valorConvertido = valorEmBits / conversaoTerabyte;
    } else {
        valorConvertido = 0;
    }

    resultadoDados.innerHTML = valorConvertido
}