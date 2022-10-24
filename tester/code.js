
let canvas = document.querySelector("#canvas")

canvas.requestPointerLock = canvas.requestPointerLock

canvas.style.backgroundColor = "#ff0000"
canvas.style.height = "200px"
canvas.style.width = "200px"

canvas.onclick = () => {
    canvas.requestPointerLock()
}

document.addEventListener('pointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
        console.log('The pointer lock status is now locked');
        document.addEventListener("mousemove", updatePosition, false);
    } else {
        console.log('The pointer lock status is now unlocked');
        document.removeEventListener("mousemove", updatePosition, false);
    }
}

let mouse_x = 0
let mouse_y = 0

function updatePosition(e) {
    mouse_x += e.movementX;
    mouse_y += e.movementY;
}  

obj.save("pointer", document.createElement("div"))
obj.append("pointer")

forever(()=>{
    obj.style.color = "#ff0000"
    obj.style.width = 200
    obj.style.height = 200
    obj.style.x = mouse_x
    obj.style.y = mouse_y
    obj.style.update("pointer")
})

requestAnimationFrame(()=>{
    document.querySelector("html").requestFullscreen()
})

