let club = [1, 2, 3, 4, 5]
let people = +prompt('How many people are here?').trim()

if (club.length + people <= 10 ) {
    alert('Welcom')
} else {
    alert('We do not have much space!')
}