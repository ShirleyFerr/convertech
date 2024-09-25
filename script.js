
// funções para aparecer a div da calculadora escolhida
function esconderDivPrincipal() {
    var elementos = document.querySelectorAll(".hidden");
    elementos.forEach(function (elemento) {
        elemento.style.display = "none";
    });
}

function converterBases() {
    esconderDivPrincipal();
    divConverterBases.style.display = "block";
}

function calculadoraBases() {
    esconderDivPrincipal();
    divCalculadoraBases.style.display = "block";

}

function converterDados() {
    esconderDivPrincipal();
    divConverterDados.style.display = "block";

}


// script conversor de bases

function btn_converterBases() {
    var numUser = Number(iptNumberConv.value);
    var baseUser = iptBaseUser.value;
    var baseConverte = iptBaseConv.value

    var decimal = '';
    var resposta = ``;

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
    // converter para a base escolhida 
    if (isNaN(decimal)) {
        if (baseUser == 'decimal') {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``
        } else if (baseUser == 'binario' && !/^[01]+$/.test(numUser)) {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``
        } else if (baseUser == 'octal' && !/^[0-7]+$/.test(numUser)) {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``
        } else if (baseUser == 'hexadecimal' && !/^[0-9A-Fa-f]+$/.test(numUser)) {
            alert(`Insira Valores Válidos!`);
            iptNumberConv.value = ``
        } else if (baseConverte == 'decimal') {
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
            resposta = `<br><span>${hexadecimal}</span>`;
        }
        resultadoConversaoBase.innerHTML = resposta;
    }
}

// script calculadora* de bases

function btn_calculadoraBases() {
    var num1 = Number(iptNumber1.value);
    var num2 = Number(iptNumber2.value);

    var base = iptBaseCalculo.value;
    var resultado = ``

if (base == 'decimal') {
        if (isNaN(num1) || isNaN(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
        }
    } else if (base == 'binario') {
        if (!/^[01]+$/.test(num1) || !/^[01]+$/.test(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
        }
    } else if (base == 'octal') {
        if (!/^[0-7]+$/.test(num1) || !/^[0-7]+$/.test(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
        }
    } else if (base == 'hexadecimal') {
        if (!/^[0-9A-Fa-f]+$/.test(num1) || !/^[0-9A-Fa-f]+$/.test(num2)) {
            alert(`Insira Valores Válidos!`);
            iptNumber1.value = ``;
            iptNumber2.value = ``;
        }
    }
    resulBaseCalc.innerHTML = resultado
}