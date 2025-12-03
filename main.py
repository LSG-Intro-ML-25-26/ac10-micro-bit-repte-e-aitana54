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
    accX=input.acceleration(Dimension.X);
    accY=input.acceleration(Dimension.Y);
    
    if (accX<=150) and (x>0):
        pass
        x=x-1
    if (accX>150) and (x<4):
        pass
        x=x+1
    if (accY<=150) and (y>0):
        pass
        y=y-1
    if (accY>150) and (y<4):
        pass
        y=y+1
basic.forever(on_forever2)

