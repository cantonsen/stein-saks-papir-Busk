input.onGesture(Gesture.Shake, function () {
    tall = randint(1, 3)
})
let tall = 0
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Scissors)
basic.showIcon(IconNames.Chessboard)
let stein = 3
let saks = 1
let papir = 2
basic.forever(function () {
    if (tall == stein) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tall == saks) {
        basic.showIcon(IconNames.Scissors)
    } else if (tall == papir) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
