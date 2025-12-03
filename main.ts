//  variables move the drop
let x = 2
let y = 2
//  Meteorological station
basic.forever(function on_forever() {
    
    led.plotBarGraph(input.temperature(), 50)
})
//  Move the drop 
basic.forever(function on_forever2() {
    
    led.plot(x, y)
    basic.pause(50)
})
