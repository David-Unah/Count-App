let startCount = document.getElementById("unlockedBtn")
    let count = 0
startCount.addEventListener("click", function mainBtn() {
    let numberCount = document.getElementById("numberCount")
    count++
    numberCount.textContent = count
})


function triggerCounter() {
    const unlockedBtn = document.getElementById("unlockedBtn")
    const lockedBtn = document.getElementById("lockedBtn")
    const unlockCounter = document.getElementById("unlockCount")
    const lockCount = document.getElementById("lockCount")
    const mainCount = document.getElementById("mainCount")
    unlockedBtn.classList.toggle("unshow")
    lockedBtn.classList.toggle("show")
    unlockCounter.classList.toggle("show")
    lockCount.classList.toggle("unshow")
    mainCount.classList.toggle("offshadow")
    mainCount.classList.toggle("offshadow:active")

}

function speedCount() {
    let lighten = document.getElementById("lighten")
    lighten.classList.toggle("unshow")
    let turtle = document.getElementById("turtle")
    turtle.classList.toggle("show")
}