let days = document.getElementById("days")
let hours = document.getElementById("hours")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
function countDown() {
    let endDate = new Date("17 June 2024")
    let startDate = new Date()
    let result = endDate - startDate

    // Counting Days
    let days_1 = Math.floor(result / 1000 / 60 / 60 / 24)
    // Counting hours
    let hour = Math.floor(result / 1000 / 60 / 60 ) % 24
    // Counting min
    let minutes = Math.floor(result / 1000 / 60  ) % 60
    // Counting sec
    let second = Math.floor(result / 1000   ) % 60

    days.innerText = days_1 
    hours.innerText = hour
    min.innerText = minutes
    sec.innerText = second
    
    if (days.innerText < 0) {
        days.innerText = 0
    }
    else if (hours.innerText < 0 ){
        hours.innerText = 0
    }
    else if (min.innerText < 0 ){
        min.innerText = 0
    }
    else if (sec.innerText < 0 ){
        min.innerText = 0
    }
}

countDown()
setInterval(countDown,1000)