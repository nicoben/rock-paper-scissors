# rock = images.create_image("""
#     . # # # .
#     # # # # #
#     # # # # #
#     # # # # #
#     . # # # .
#     """)

# paper = images.create_image("""
#     # # # # #
#     # . . . #
#     # . . . #
#     # . . . #
#     # # # # #
#     """)

# scissor = images.create_image("""
#     # # . . #
#     # # . # .
#     . . # . .
#     # # . # .
#     # # . . #
#     """)

# all = [rock, paper, scissor]

# def on_gesture_shake():
#     hand = randint(0, len(all) - 1)
#     all[hand].show_image(0)
# input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# def on_button_pressed_a():
#     strip.rotate(-1)
#     strip.show()
# input.on_button_pressed(Button.A, on_button_pressed_a)

# def on_button_pressed_b():
#     strip.shift(1)
#     strip.show()
# input.on_button_pressed(Button.B, on_button_pressed_b)

strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

color1 = 0xff0000
color2 = 0x0000ff
index = 0

def on_forever():
    global strip, color1, color2, index
    color = int((color1 * index + color2 * (100 - index)) / 100)
    index = (index + 1) % 100
    strip.show_color(color)
    basic.pause(500)
basic.forever(on_forever)

basic.show_icon(IconNames.HAPPY)
basic.pause(1000)
basic.show_arrow(ArrowNames.NORTH)
basic.pause(1000)
basic.show_arrow(ArrowNames.EAST)
basic.pause(1000)
basic.show_arrow(ArrowNames.SOUTH)
basic.pause(1000)
basic.show_arrow(ArrowNames.WEST)
