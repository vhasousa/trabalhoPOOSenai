class Moedas {
    dolar;
    real;

    constructor() {
        this.dolar = 5.11
    }

    converterRealDolar() {
        this.real = document.getElementById("real").value;
        console.log(this.real)

        const valorEmDolar = this.real / this.dolar;

        const valorConvertido = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoImc").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }
}

const moeda = new Moedas();