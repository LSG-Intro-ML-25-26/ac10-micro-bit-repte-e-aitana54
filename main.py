# variables move the drop
x=2
y=2

# Meteorological station
def on_forever():
    pass 
    led.plot_bar_graph(input.temperature(), 50)
basic.forever(on_forever)


# Move the drop 
def on_forever2():
    pass
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
basic.forever(on_forever2)