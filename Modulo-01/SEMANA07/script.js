class Produto {
    nome = 'maracujá';
    preco;
    quantidade = 10;

    constructor (nome, preco, quantidade){
        this.nome
        this.preco
        this.quantidade
    }

    vender(qtd_vendida){
        if (qtd_vendida < this.quantidade){
            console.log(this.quantidade - qtd_vendida)
            alert(`
                Venda concluída com sucesso!!, restou ${this.quantidade - qtd_vendida} unidades em estoque.
            `)

        } else {
            console.log('Estoque insuficiente')
            alert('Estoque insuficiente')

        }
    }

    repor(qtd_reposicao){
        qtd_reposicao = parseInt(prompt('Digite a quantidade a repor: '))
    
        this.quantidade += qtd_reposicao
        alert(`a quantidade do estoque agora é: ${this.quantidade}`)
    }


    MostrarEstoque(){
        alert(`O produto ${this.nome} possui ${this.quantidade} disponíveis.`)
    }


    AtualizarPreco(novoPreco){
        novoPreco =  parseFloat(prompt("Digite o novo valor deste produto: "))
        this.preco = novoPreco
        alert(`Preço atualizado com sucesso, novo valor: R$${this.preco}`)
    }

}




class Pessoa {
    nome = 'Fulano';
    idade = 31;
    profissao = 'Açougueiro';

    
    constructor(nome, idade, profissao){
        this.nome
        this.idade
        this.profissao
    }
}



class Cliente extends Pessoa {
     telefone = '4002-8922';
     email = 'cliente@gmail.com';
     clienteDesde = '2001/05/03';


     constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone
        this.email
        this.clienteDesde
     }


    inf_cliente(){
        alert(`Informações do cliente: \nNome: ${this.nome}, ${this.idade} anos, Ocupação: ${this.profissao}, \nEmail: ${this.email}, \nCliente desde: ${this.clienteDesde}`)
    }
}


let pureza = new Produto()
qtd_v = prompt("Digite a quantidade que deseja comprar: ")
pureza.vender(qtd_v)
pureza.repor()
pureza.MostrarEstoque()
pureza.AtualizarPreco()

let cliente1 = new Cliente()
cliente1.inf_cliente()
