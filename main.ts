let strip: neopixel.Strip = null
let strip2: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P0, 31, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    strip2 = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
    strip2.showRainbow(1, 360)
    pins.analogWritePin(AnalogPin.P12, 511)
    pins.analogWritePin(AnalogPin.P8, 511)
    pins.analogWritePin(AnalogPin.P13, 511)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E G B C C5 D F A ", 500), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P3, 1)
    MxMotor.setPWM(MotorChannel.CH1, 100)
    pins.digitalWritePin(DigitalPin.P4, 1)
    MxMotor.setPWM(MotorChannel.CH2, 100)
    pins.digitalWritePin(DigitalPin.P5, 1)
    MxMotor.setPWM(MotorChannel.CH3, 100)
    pins.digitalWritePin(DigitalPin.P8, 1)
    MxMotor.setPWM(MotorChannel.CH4, 100)
})
