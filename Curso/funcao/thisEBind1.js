const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar1 = pessoa.falar
falar1() // conflito entre paradigmas: funcional e OO

const falar = pessoa.falar.bind(pessoa)
falar()