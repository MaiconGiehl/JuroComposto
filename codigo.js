        let valorPrincipal = parseInt(prompt('Informe o valor principal'));
        let qtdMeses = parseInt(prompt('Informe a quantidade de meses'));
        let txJuroAnual = parseInt(prompt('Informe a taxa de juro anual'));

        
        function calcular () {
            // let valorPrincipal = document.getElementById("capital");
            // let qtdMeses = document.getElementById("meses");
            // let txJuroAnual = document.getElementById("juroAnual");]
            
            let txJuroMensal = txJuroAnual / 12;

            let juroAcc = 0;
            const armazena = []

            for (let mes = 0; mes < qtdMeses; mes++) {
                let juroMes = (valorPrincipal + juroAcc) * (txJuroMensal / 100);

                juroAcc = juroAcc + juroMes;
                
                let valorFinal = valorPrincipal + juroAcc;

                let text = armazena.push(`Capital: ${valorPrincipal} || Juro do Mês ${juroMes.toFixed(2)} || Juro Acumulado: ${juroAcc.toFixed(2)} || Montante: ${valorFinal.toFixed(2)} <br> `);
        
            }   
            document.querySelector("body").innerHTML = armazena
        }   