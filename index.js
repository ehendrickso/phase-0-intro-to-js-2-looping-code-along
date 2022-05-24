const names = ['Guadalupe', 'Ollie', 'Aki']
const event = "surprise"

function writeCards(names, event) {
    let result = []
    for (let i = 0; i < names.length; i++) {
      result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return result
}


function countDown() {
    for (let num = 10; num >= 0; num--) 
        console.log(num); 
}