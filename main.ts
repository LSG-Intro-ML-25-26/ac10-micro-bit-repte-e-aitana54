//  variables move the drop
let x = 2
let y = 2
//  Meteorological station
basic.forever(function on_forever() {
    
    led.plotBarGraph(input.temperature(), 50)
})
//  Move the drop 
basic.forever(function on_forever2() {
    let x: number;
    let y: number;
    
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    let accX = input.acceleration(Dimension.X)
    let accY = input.acceleration(Dimension.Y)
    if (accX <= 150 && x > 0) {
        
        x = x - 1
    }
    
    if (accX > 150 && x < 4) {
        
        x = x + 1
    }
    
    if (accY <= 150 && y > 0) {
        
        y = y - 1
    }
    
    if (accY > 150 && y < 4) {
        
        y = y + 1
    }
    
})
