function sayMyName( name = ''){
    if (name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('name')
}

try {
    sayMyName ('Fulvia Vaz')
}   catch(e) {
    console.log(e)

}
console.log('após ao try/catch')