let person = {
    name = 'Fulvia',
    age = 35,
    weight = 90
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}