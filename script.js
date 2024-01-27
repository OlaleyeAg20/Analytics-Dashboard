console.log("welcome")
const darkBtn = document.getElementById('dark')
const lightBtn = document.getElementById('light')
const orderBody = document.getElementById("orderBody")

if(document.cookie == "theme=darkmode"){
    darkTheme()
}
else if(document.cookie == "theme=lightmode"){
    lightTheme()
}

darkBtn.addEventListener('click', ()=>{
    document.cookie = "theme=darkmode; expires=Mon, 21 April 2099 12:00:00"
    darkTheme()
})
lightBtn.addEventListener('click', ()=>{
    document.cookie = "theme=lightmode; expires=Mon, 21 April 2099 12:00:00"
    lightTheme()
})

function darkTheme(){
document.querySelector('.headerDiv2').classList.add('darkmode2')
    document.body.classList.add('darkmode')
    document.querySelector('.themeBtnContainer').classList.add('darkmode')
    document.querySelector('header').classList.add('darkmode')
    document.querySelector('.barChart').classList.add('darkmode2')
    document.querySelector('.orders').classList.add('darkmode2')
    document.querySelector('nav').classList.add('darkmode2')
    document.querySelector('.salesReport').classList.add('darkmode2')
    document.querySelector('.orderGraphs').classList.add('darkmode3')
    lightBtn.style.background = "none"
    darkBtn.style.background = "#34CAA5"
}

function lightTheme(){
document.querySelector('.headerDiv2').classList.remove('darkmode2')
    document.querySelector('.themeBtnContainer').classList.remove('darkmode')
    document.body.classList.remove('darkmode')
    document.querySelector('.barChart').classList.remove('darkmode2')
    document.querySelector('.orders').classList.remove('darkmode2')
    document.querySelector('nav').classList.remove('darkmode2')
    document.querySelector('.salesReport').classList.remove('darkmode2')
    document.querySelector('.orderGraphs').classList.remove('darkmode3')
    document.querySelector('header').classList.remove('darkmode')
    lightBtn.style.background = "#34CAA5"
    darkBtn.style.background = "none"
}

document.querySelector('.menuBtn').addEventListener('click',()=>{
    document.querySelector('nav').style.display = 'flex'
    document.querySelector('.closeBtn').style.display = 'block'
    document.querySelector('.headerDiv2').style.display = 'flex'
})

document.querySelector('.closeBtn').addEventListener('click',()=>{
    document.querySelector('nav').style.display = 'none'
    document.querySelector('.closeBtn').style.display = 'none'
    document.querySelector('.headerDiv2').style.display = 'none'
})

const platforms = [
    {
        platform: "Book Bazaar",
        platformAmount: " $2,500,000",
        percentage: "+15%",
        percenageLevel: "54%",
        color: "#6160DC",
    },
    {
        platform: "Artisan Aisle",
        platformAmount: "$1,800,000",
        percentage: "+10%",
        percenageLevel: "45%",
        color: "#54C5EB",
    },
    {
        platform: "Toy Troop",
        platformAmount: "$1,200,000",
        percentage: "+15%",
        percenageLevel: "27%",
        color: "#FFB74A",
    },
    {
        platform: "Xstore",
        platformAmount: "$600,000",
        percentage: "+15%",
        percenageLevel: "27%",
        color: "#FF4A55",
    }
]

const htmlTemplate = platforms.map((e)=>{
    const {platform, platformAmount, percentage, percenageLevel, color} = e
    return `
    <div class="platform">
    <h3 class="salesTrend">${platform}</h3>
    <div class="rangeDivContainer"><div class="range" style="width: ${percenageLevel}; background: ${color}"></div></div>
    <div class="platformAmount">
        <span class="platformFigure">${platformAmount}</span>
        <span>${percentage}</span>
    </div>
</div>
    `
})

orderBody.innerHTML = htmlTemplate.join('')
