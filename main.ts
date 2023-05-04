let _321 = 0
let score = 0
let showScore = 0
input.onButtonPressed(Button.A, function () {
    score = 0
    _321 = 4
    for (let index = 0; index < 3; index++) {
        showScore = 10
        _321 += -1
        basic.showNumber(_321)
        music.playTone(247, music.beat(BeatFraction.Whole))
    }
    showScore = 20
    basic.showString("GO!")
    music.playTone(349, music.beat(BeatFraction.Whole))
    motion.drive(9, 1)
})
basic.forever(function () {
    if (sonar.checkSonar() < 2) {
        motion.drive(25, 12)
        basic.pause(1380)
        motion.stop()
        motion.drive(0, 15)
        basic.pause(415)
        motion.stop()
        score += 5
        showScore = 10
        basic.showString("SCORE:")
        basic.showNumber(score)
        basic.showString("BYE")
    }
})
basic.forever(function () {
    if (lineSensors.checkSensor(IRSensor.MIDDLE, IRColour.BLACK) || (lineSensors.checkSensor(IRSensor.RIGHT, IRColour.BLACK) || lineSensors.checkSensor(IRSensor.LEFT, IRColour.BLACK))) {
        score += 1
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    while (showScore == 20) {
        basic.showNumber(score)
    }
})
