radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    radio.sendString("" + (randint(1, 6)))
})
basic.forever(function () {
	
})
