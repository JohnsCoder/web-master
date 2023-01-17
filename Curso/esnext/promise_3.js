function NumberGenerator(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
       const fator = (max - min + 1)
       const aleatoro = parseInt(Math.random() * fator) + min
       resolve(aleatoro)
  })
}

NumberGenerator(1, 10)
.then(num => num * 10)
.then(numX10 => `The Number generated is ${numX10}`)
.then(console.log)