        function calcular () {
            let valorInicial = parseInt(document.getElementById("capital").value);
            let tempo = parseInt(document.getElementById("tempo").value);
            let txJuroMensal = parseInt(document.getElementById("taxaMensal").value);

            console.log(valorInicial)

            let juroAcc = 0;
            let valorFinal = 0;

            for (let mes = 0; mes < tempo; mes++) {
                let juroMes = (valorInicial + juroAcc) * (txJuroMensal / 100);

                juroAcc = juroAcc + juroMes;
                
                let montante = valorInicial + juroAcc;
                valorFinal = montante;

                let texto = `Capital: ${valorInicial} || Juro do Mês ${juroMes.toFixed(2)} || Juro Acumulado: ${juroAcc.toFixed(2)} || Montante: ${montante.toFixed(2)};`
                console.log(texto)
                
            }   
            document.getElementById("span").textContent = "R$" + valorFinal.toFixed(2);
        }   