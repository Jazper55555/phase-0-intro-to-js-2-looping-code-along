function writeCards(cards, event) {
    let messages = []
    for (let c = 0; c < cards.length; c++) {
        let message = `Thank you, ${cards[c]}, for the wonderful ${event} gift!`
        messages.push(message)
    }
    return messages
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    let g = 0
    while (g < gifts.length) {
        console.log(`Wrapped ${gifts[g]} and added a bow!`)
        g++
    }
    return gifts
}

wrapGifts(gifts)

function countDown(integer) {
    for (let i = integer; i >= 0; i--) {
        console.log(i)
    }
}
countDown(4)