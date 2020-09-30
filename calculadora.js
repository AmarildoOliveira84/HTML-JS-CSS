class Calculadora {

    verificar() {
        if (document.getElementById("n1").value == "" || document.getElementById("n2").value == "") {
            window.alert("necessário informar dados")
        }
    }
    somar() {

        this.verificar()


        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)


        let soma = n1 + n2



        document.getElementById("resultado").innerText = soma

        this.limpar()

    }
    subtrair() {
        this.verificar()

        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)

        let subtrair = n1 - n2
        document.getElementById("resultado").innerText = subtrair
        this.limpar()
    }
    dividir() {
        this.verificar()

        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)

        let dividir = n1 / n2
        document.getElementById("resultado").innerText = dividir
        this.limpar()
    }
    multiplicar() {
        this.verificar()

        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)

        let multiplicar = n1 * n2

        document.getElementById("resultado").innerText = multiplicar
        this.limpar()
    }
    porcentagem() {
        this.verificar()
        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)

        let porcentagem = (n1 * n2) / 100
        document.getElementById("resultado").innerText = porcentagem
        this.limpar()
    }
    limpar() {
        document.getElementById("n1").value = ""
        document.getElementById("n2").value = ""
    }

}

var calculadora = new Calculadora()