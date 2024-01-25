console.log("welcome")

const orderBody = document.getElementById("orderBody")

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
