let temperature = 36.5

if (temperature >= 37) {
    console.log('Febre')
} else {
    console.log('Saudável')
}

if(temperature >= 37.5){
    console.log('Febre alta')
}else if(temperature < 35.7 && temperature >= 37){
    console.log('Febre Moderada')
}else{
    console.log('Saudável')
}