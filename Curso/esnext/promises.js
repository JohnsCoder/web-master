function falarDepoisDe(segundos, frase, err) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
} 
//pode se usar qualquer palavra no lugar de frase
falarDepoisDe(3, 'Que Legal!')
.then(frase => frase.concat('?!?'))
.then(outrafrase => console.log(outrafrase))


function tratandoErro (delay, err) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(err)
        }, delay * 1000)
    })
}

tratandoErro(1, 'ERROR!')
.catch(err => console.log(err))

// .then quando resolve e .catch quando reject