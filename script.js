let h1 = document.querySelector ('h1')

setInterval(()=>{
        let clock = new Date()

        let hours = clock.getHours()

        let minute = clock.getMinutes()

        let second = clock.getSeconds()
        
        h1.textContent = `${hours}:${minute}:${second}` 



},1000)
