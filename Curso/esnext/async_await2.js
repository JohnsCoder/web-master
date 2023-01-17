function NumberGenerator(min, max, notThisNumbers) {
     if (min > max) {
       [max, min] = [min, max];
     }
   
     return new Promise((resolve, reject)=> {
          const fator = (max - min + 1)
          const aleatorio = parseInt(Math.random() * fator) + min
          if(notThisNumbers.includes(aleatorio)) {
               reject('numero repetido!')
          } else {
               resolve(aleatorio)
          }
     })
   }

   async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
        try {
             const numeros = []
             for(let _ of Array(qtdeNumeros).fill()) {
               numeros.push(await NumberGenerator(1, 60, numeros))
        }
        return numeros
   } catch(e) {
        if (tentativas > 100) {
             throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)

        }
   }
}

gerarMegaSena(25)
.then(console.log)
.catch(console.log)
