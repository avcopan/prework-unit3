let hand = ['Q', '3', 'J', '9', '6', 'K', 'A'];

// for (let i=0; i<hand.length; i++) {
//     console.log('for loop', hand[i]);
//     if (hand[i] === '9') {
//         console.log('match!!');
//     }
// }
// 
// console.log('for in loop');
// for (i in hand) {
//     console.log('for in loop', hand[i]);
// }

for (card of hand) {
    console.log('for of loop', card);
    if (card == '9') {
        console.log('match!!!');
    }
}