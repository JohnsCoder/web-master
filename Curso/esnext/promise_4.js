function NumberGenerator(min, max, tempo) {
     if (min > max) {
       [max, min] = [min, max];
     }
   
     return new Promise(resolve => {
          setTimeout(function() {
          const fator = (max - min + 1)
          const aleatoro = parseInt(Math.random() * fator) + min
          resolve(aleatoro)
          }, tempo)
     })
   }


   function gerarVariosNumeros() {
        return Promise.all([
          NumberGenerator(1, 60, 4000),
          NumberGenerator(1, 60, 1000),
          NumberGenerator(1, 60, 500),
          NumberGenerator(1, 60, 3000),
          NumberGenerator(1, 60, 100),
          NumberGenerator(1, 60, 1500),
        ])
   }

   gerarVariosNumeros().then(number => console.log(number))