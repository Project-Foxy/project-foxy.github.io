setup({
    show_canvas_border:true
},()=>{

sleep(2)
obj.save("player", createElement("div"))
obj.append("player")

let x = 100
let y = 150
let yvel = -10
let xvel = 50

forever(()=>{


    //y
    yvel += 1
    y += yvel

    if(y >= 900){
        y = 900
        if(checkKeys("ArrowUp")||checkKeys("w")||checkKeys(" ")){
            yvel = -30
        }
        else{
            yvel = 0
        }
    }

    //x
    if(checkKeys("d") || checkKeys("ArrowRight")){
        xvel += 3
    }
    if(checkKeys("a")||checkKeys("ArrowLeft")){
        xvel -= 3
    }
    x += xvel
    xvel *= 0.8
    if(x>= 900){
        x = 900
        xvel = 0
    }
    if(x<=100){
        x = 100
        xvel = 0
    }


    obj.style.reset()
    obj.style.x = x
    obj.style.y = y
    obj.update("player")
})



})


