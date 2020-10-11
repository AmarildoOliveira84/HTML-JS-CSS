

function salvar() {
    const cliente = {
        nome: "",
        idade: 100,
        nascimento: "",
        mensagem: "",



    }
    this.cliente1 = Object.seal(cliente)

    if (document.getElementById("nome").value == "") {
        window.alert("Informe o nome")
    } else if (document.getElementById("idade").value == "" || document.getElementById("idade").value < 0 || document.getElementById("idade").value > 100) {
        window.alert("Informe o Idade")
    } else if (document.getElementById("data").value == "") {
        window.alert("Informe o Data de nascimento")
    } else if (document.getElementById("mensagem").value == "") {
        window.alert("Escreva uma mensagem")
    } else {


        this.cliente1.nome = document.getElementById("nome").value
        this.cliente1.idade = parseInt(document.getElementById("idade").value)
        this.cliente1.nascimento = document.getElementById("data").value
        this.cliente1.mensagem = document.getElementById("mensagem").value
      


        window.alert("Nome: "+this.cliente1.nome + '\n' +"Idade: "+this.cliente1.idade + '\n' +"Data de Nascimento: "+this.cliente1.nascimento + '\n' +"Mensagem: "+ this.cliente1.mensagem)
    }




}




