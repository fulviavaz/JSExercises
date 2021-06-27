function transformDegree(degree){
    const celsiusExists = degree.toUppercase().includes('C')
    const fahrenheitExists = degree.toUppercase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não Identificado')
    }
// fluxo ideal F => C
    let formula = (fahrenheit) => (fahrenheit - 32)* 5/9
}

try {

} catch (error){
    console.log(error.message)
}