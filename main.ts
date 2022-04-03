//  rock = images.create_image("""
//      . # # # .
//      # # # # #
//      # # # # #
//      # # # # #
//      . # # # .
//      """)
//  paper = images.create_image("""
//      # # # # #
//      # . . . #
//      # . . . #
//      # . . . #
//      # # # # #
//      """)
//  scissor = images.create_image("""
//      # # . . #
//      # # . # .
//      . . # . .
//      # # . # .
//      # # . . #
//      """)
//  all = [rock, paper, scissor]
//  def on_gesture_shake():
//      hand = randint(0, len(all) - 1)
//      all[hand].show_image(0)
//  input.on_gesture(Gesture.SHAKE, on_gesture_shake)
//  def on_button_pressed_a():
//      strip.rotate(-1)
//      strip.show()
//  input.on_button_pressed(Button.A, on_button_pressed_a)
//  def on_button_pressed_b():
//      strip.shift(1)
//      strip.show()
//  input.on_button_pressed(Button.B, on_button_pressed_b)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let color1 = 0xff0000
let color2 = 0x0000ff
let index = 0
basic.forever(function on_forever() {
    
    let color = Math.trunc((color1 * index + color2 * (100 - index)) / 100)
    index = (index + 1) % 100
    strip.showColor(color)
    basic.pause(500)
})
function spin_arrow() {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    basic.showArrow(ArrowNames.South)
    basic.pause(1000)
    basic.showArrow(ArrowNames.West)
}

basic.showIcon(IconNames.Happy)
basic.pause(1000)
spin_arrow()
