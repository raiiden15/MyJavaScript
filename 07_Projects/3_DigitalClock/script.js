const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// setInterval ye ek particular interval k baad vo particular cheez run krte rehta h
setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString()); 
    // console me thodi chalan h lol
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)