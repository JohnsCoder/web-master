function salvar(req, res) {
     console.log('Usuário > Salvar')
     res.send('Usuário > Salvar')
}

function obter(req,res) {
     res.send('Usuario > Obter')
}

module.exports ={salvar, obter}